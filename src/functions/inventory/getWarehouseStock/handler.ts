import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getWarehouseStock } from "../../../services/inventory/getWarehouseStock";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getWarehouseStock(event);
}
