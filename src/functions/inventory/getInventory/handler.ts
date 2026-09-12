import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getInventory } from "../../../services/inventory/getInventory";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getInventory(event);
}
