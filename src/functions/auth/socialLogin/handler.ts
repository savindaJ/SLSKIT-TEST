import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { socialLogin } from "../../../services/auth/socialLogin";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return socialLogin(event);
}
