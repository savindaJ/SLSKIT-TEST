import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { reserveStock } from "../../../services/inventory/reserveStock";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return reserveStock(event);
}
