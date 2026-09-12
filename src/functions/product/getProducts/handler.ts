import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getProducts } from "../../../services/product/getProducts";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getProducts(event);
}
