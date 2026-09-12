import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { resetPassword } from "../../../services/auth/resetPassword";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return resetPassword(event);
}
