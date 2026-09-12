import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getInventoryHistory } from "../../../services/inventory/getInventoryHistory";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getInventoryHistory(event);
}
