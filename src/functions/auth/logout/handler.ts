import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { logout } from "../../../services/auth/logout";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return logout(event);
}
