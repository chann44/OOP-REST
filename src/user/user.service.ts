import { DbService } from "@/db/db-service";

export class UserService {
  public dbService = new DbService();

  public createUser = this.dbService.createUser;
}
