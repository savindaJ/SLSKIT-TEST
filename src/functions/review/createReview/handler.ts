import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { createReview } from "../../../services/review/createReview";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return createReview(event);
}
