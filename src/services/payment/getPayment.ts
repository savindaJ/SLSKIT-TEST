import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { logger } from "/opt/nodejs/logger";
import { prisma } from "../../shared/db";

export async function getPayment(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  void prisma;
  logger.info("getPayment invoked");
  const payload = event.body ? JSON.parse(event.body) : {};

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "getPayment",
      input: payload,
    }),
  };
}
