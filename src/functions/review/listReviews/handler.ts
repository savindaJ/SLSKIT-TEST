import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { listReviews } from "../../../services/review/listReviews";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return listReviews(event);
}
