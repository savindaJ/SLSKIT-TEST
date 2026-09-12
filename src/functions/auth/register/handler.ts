import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { register } from "../../../services/auth/register";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return register(event);
}
