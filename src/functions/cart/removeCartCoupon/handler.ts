import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { removeCartCoupon } from "../../../services/cart/removeCartCoupon";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return removeCartCoupon(event);
}
