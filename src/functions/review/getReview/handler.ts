import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getReview } from "../../../services/review/getReview";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getReview(event);
}
