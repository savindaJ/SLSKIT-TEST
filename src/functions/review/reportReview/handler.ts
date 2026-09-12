import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { reportReview } from "../../../services/review/reportReview";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return reportReview(event);
}
