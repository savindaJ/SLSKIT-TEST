import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getOrderTimeline } from "../../../services/order/getOrderTimeline";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getOrderTimeline(event);
}
