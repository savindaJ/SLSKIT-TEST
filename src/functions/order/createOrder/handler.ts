import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { createOrder } from "../../../services/order/createOrder";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return createOrder(event);
}
