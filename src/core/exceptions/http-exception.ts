import { STATUS } from "../utils";

export class HttpException extends Error {
  public status: STATUS;

  constructor(status: STATUS, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}
