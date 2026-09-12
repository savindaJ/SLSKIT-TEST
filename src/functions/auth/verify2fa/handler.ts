import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { verify2fa } from "../../../services/auth/verify2fa";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return verify2fa(event);
}
