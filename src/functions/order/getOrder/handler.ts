import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getOrder } from "../../../services/order/getOrder";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getOrder(event);
}
