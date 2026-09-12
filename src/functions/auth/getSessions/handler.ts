import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getSessions } from "../../../services/auth/getSessions";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getSessions(event);
}
