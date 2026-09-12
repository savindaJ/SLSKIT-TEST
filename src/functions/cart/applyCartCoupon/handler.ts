import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { applyCartCoupon } from "../../../services/cart/applyCartCoupon";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return applyCartCoupon(event);
}
