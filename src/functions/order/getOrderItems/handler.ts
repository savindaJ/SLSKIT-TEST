import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getOrderItems } from "../../../services/order/getOrderItems";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getOrderItems(event);
}
