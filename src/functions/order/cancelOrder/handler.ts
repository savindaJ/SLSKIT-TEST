import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { cancelOrder } from "../../../services/order/cancelOrder";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return cancelOrder(event);
}
