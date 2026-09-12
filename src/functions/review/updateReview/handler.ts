import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { updateReview } from "../../../services/review/updateReview";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return updateReview(event);
}
