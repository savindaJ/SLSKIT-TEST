import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { updateCoupon } from "../../../services/coupon/updateCoupon";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return updateCoupon(event);
}
