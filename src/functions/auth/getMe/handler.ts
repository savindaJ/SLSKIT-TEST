import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getMe } from "../../../services/auth/getMe";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getMe(event);
}
