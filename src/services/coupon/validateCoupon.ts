import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { logger } from "/opt/nodejs/logger";
import { prisma } from "../../shared/db";

export async function validateCoupon(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  void prisma;
  logger.info("validateCoupon invoked");
  const payload = event.body ? JSON.parse(event.body) : {};

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "validateCoupon",
      input: payload,
    }),
  };
}
