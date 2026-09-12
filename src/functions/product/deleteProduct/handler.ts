import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { deleteProduct } from "../../../services/product/deleteProduct";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return deleteProduct(event);
}
