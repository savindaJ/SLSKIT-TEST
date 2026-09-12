import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { login } from "../../../services/auth/login";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return login(event);
}
