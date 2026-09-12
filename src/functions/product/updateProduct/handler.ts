import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { updateProduct } from "../../../services/product/updateProduct";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return updateProduct(event);
}
