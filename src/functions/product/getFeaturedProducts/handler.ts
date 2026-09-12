import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getFeaturedProducts } from "../../../services/product/getFeaturedProducts";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getFeaturedProducts(event);
}
