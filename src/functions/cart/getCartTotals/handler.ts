import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getCartTotals } from "../../../services/cart/getCartTotals";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getCartTotals(event);
}
