import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getCouponUsage } from "../../../services/coupon/getCouponUsage";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getCouponUsage(event);
}
