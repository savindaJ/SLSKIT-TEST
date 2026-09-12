import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { updateOrderStatus } from "../../../services/order/updateOrderStatus";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return updateOrderStatus(event);
}
