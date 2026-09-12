import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getProductReviews } from "../../../services/review/getProductReviews";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getProductReviews(event);
}
