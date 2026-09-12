import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { deleteReview } from "../../../services/review/deleteReview";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return deleteReview(event);
}
