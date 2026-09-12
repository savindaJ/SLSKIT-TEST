import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { reorder } from "../../../services/order/reorder";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return reorder(event);
}
