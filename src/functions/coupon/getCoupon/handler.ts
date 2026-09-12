import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getCoupon } from "../../../services/coupon/getCoupon";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getCoupon(event);
}
