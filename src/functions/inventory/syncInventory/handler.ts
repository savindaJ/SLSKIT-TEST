import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { syncInventory } from "../../../services/inventory/syncInventory";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return syncInventory(event);
}
