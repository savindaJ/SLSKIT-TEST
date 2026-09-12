import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { applyCoupon } from "../../../services/coupon/applyCoupon";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return applyCoupon(event);
}
