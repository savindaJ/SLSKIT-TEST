import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getProductStock } from "../../../services/product/getProductStock";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getProductStock(event);
}
