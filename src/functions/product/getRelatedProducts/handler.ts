import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getRelatedProducts } from "../../../services/product/getRelatedProducts";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getRelatedProducts(event);
}
