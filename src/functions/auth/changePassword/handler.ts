import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { changePassword } from "../../../services/auth/changePassword";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return changePassword(event);
}
