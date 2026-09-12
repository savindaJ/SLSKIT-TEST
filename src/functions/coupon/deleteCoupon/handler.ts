import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { deleteCoupon } from "../../../services/coupon/deleteCoupon";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return deleteCoupon(event);
}
