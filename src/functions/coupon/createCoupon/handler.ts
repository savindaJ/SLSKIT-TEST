import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { createCoupon } from "../../../services/coupon/createCoupon";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return createCoupon(event);
}
