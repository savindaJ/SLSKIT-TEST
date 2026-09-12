import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { approveReview } from "../../../services/review/approveReview";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return approveReview(event);
}
