import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { listOrders } from "../../../services/order/listOrders";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return listOrders(event);
}
