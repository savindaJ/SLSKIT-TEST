import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { searchProducts } from "../../../services/product/searchProducts";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return searchProducts(event);
}
