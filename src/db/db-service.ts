import { PrismaClient } from "@prisma/client";
import { User } from "@/types";

export class DbService extends PrismaClient {
  async onModuleInit() {
    await this.$connect();
  }

  async createUser(user: User) {
    this.user.create({
      data: {
        email: user.username,
        hash: user.password,
      },
    });
  }

  cleanDb() {
    return this.$transaction([this.user.deleteMany()]);
  }
}
