import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { unpublishProduct } from "../../../services/product/unpublishProduct";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return unpublishProduct(event);
}
