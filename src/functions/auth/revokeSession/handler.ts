import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { revokeSession } from "../../../services/auth/revokeSession";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return revokeSession(event);
}
