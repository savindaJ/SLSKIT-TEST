import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { publishProduct } from "../../../services/product/publishProduct";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return publishProduct(event);
}
