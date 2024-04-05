import { Messages, STATUS } from "../utils";

export class HttpException extends Error {
  public status: STATUS;
  public message: Messages;

  constructor(status: STATUS, message: Messages) {
    super(message);
    this.status = status;
    this.message = message;
  }
}
