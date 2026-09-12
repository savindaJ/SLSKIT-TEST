import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getCategoryProducts } from "../../../services/category/getCategoryProducts";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getCategoryProducts(event);
}
