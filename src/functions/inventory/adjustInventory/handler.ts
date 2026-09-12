import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { adjustInventory } from "../../../services/inventory/adjustInventory";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return adjustInventory(event);
}
