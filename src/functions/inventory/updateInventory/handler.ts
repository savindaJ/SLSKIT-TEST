import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { updateInventory } from "../../../services/inventory/updateInventory";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return updateInventory(event);
}
