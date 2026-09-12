import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { refreshToken } from "../../../services/auth/refreshToken";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return refreshToken(event);
}
