import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { listLowStock } from "../../../services/inventory/listLowStock";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return listLowStock(event);
}
