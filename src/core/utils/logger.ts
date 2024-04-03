import { type Logger, createLogger, transports, format } from "winston";

export const logger: Logger = createLogger({
  transports: [
    new transports.File({
      filename: "logs/error.log",
      level: "error",
    }),
    new transports.File({
      filename: "logs/combined.log",
    }),
  ],
  format: format.combine(format.colorize({ all: true }), format.simple()),
});

if (process.env.NODE_ENV == "dev") {
  logger.add(
    new transports.Console({
      format: format.simple(),
    })
  );
}
