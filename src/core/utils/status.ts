export enum STATUS {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  CONFLICT = 409,
  TOO_MANY_REQUESTS = 429,
}

export enum Messages {
  SUCCESS = "success",
  BAD_REQUEST = "bad request",
  NOT_FOUND = "not found",
  INTERNAL_SERVER = "internal server error",
  UNAUTHORIZED = "unauthorized",
  FORBIDDEN = "forbidden",
  CONFLICT = "conflict",
  TOO_MANY_REQUESTS = "too many requests",
}
