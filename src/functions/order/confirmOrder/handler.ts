import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { confirmOrder } from "../../../services/order/confirmOrder";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return confirmOrder(event);
}
