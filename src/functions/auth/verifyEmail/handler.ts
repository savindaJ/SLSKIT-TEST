import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { verifyEmail } from "../../../services/auth/verifyEmail";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return verifyEmail(event);
}
