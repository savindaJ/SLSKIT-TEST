import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { listCoupons } from "../../../services/coupon/listCoupons";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return listCoupons(event);
}
