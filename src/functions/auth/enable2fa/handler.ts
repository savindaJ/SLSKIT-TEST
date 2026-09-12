import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { enable2fa } from "../../../services/auth/enable2fa";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return enable2fa(event);
}
