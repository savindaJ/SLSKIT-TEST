import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getReviewStats } from "../../../services/review/getReviewStats";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getReviewStats(event);
}
