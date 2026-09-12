import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { createProduct } from "../../../services/product/createProduct";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return createProduct(event);
}
