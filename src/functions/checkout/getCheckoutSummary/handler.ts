import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getCheckoutSummary } from "../../../services/checkout/getCheckoutSummary";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getCheckoutSummary(event);
}
