import { Queue, Worker, QueueEvents, type Job } from "bullmq";

export class EmailService {
  private emailQueue: Queue;
  private emailworker: Worker;
  private queueEvents: QueueEvents;
  private connection: {
    host: string;
    port: number;
  };
  constructor(public email: string) {
    this.connection = {
      host: "127.0.0.1", // Use the IP address directly
      port: 6379, // D
    };
    this.emailQueue = new Queue("email", {
      connection: this.connection,
    });
    this.emailworker = new Worker(
      "email",
      async (job: Job<{ email: string }>) => {
        await new Promise((resolve) => {
          setTimeout(() => resolve(job.data.email), 5000);
          console.log(job.data);
        });
      },
      {
        connection: this.connection,
      }
    );

    this.queueEvents = new QueueEvents("email");

    this.emailQueue.on("waiting", (job: Job) => {
      // Job is waiting to be processed.
      console.log(job?.data, "is waiting to be processed");
    });

    this.emailworker.on("completed", (job) => {
      console.log(`${job.id} has completed!`);
    });

    this.emailworker.on("failed", (job, err) => {
      console.log(`${job?.id} has failed with ${err.message}`);
    });

    this.queueEvents.on("progress", ({ jobId, data }, timestamp) => {
      console.log(`${jobId} reported progress ${data} at ${timestamp}`);
    });
    this.addEmailJob();
  }

  async addEmailJob() {
    this.emailQueue.add("sendEmail", { email: this.email });
  }
}
