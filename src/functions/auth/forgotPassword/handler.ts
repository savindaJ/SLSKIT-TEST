import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { forgotPassword } from "../../../services/auth/forgotPassword";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return forgotPassword(event);
}
