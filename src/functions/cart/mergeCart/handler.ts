import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { mergeCart } from "../../../services/cart/mergeCart";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return mergeCart(event);
}
