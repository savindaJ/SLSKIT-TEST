import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { disable2fa } from "../../../services/auth/disable2fa";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return disable2fa(event);
}
