import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { addToCart } from "../../../services/cart/addToCart";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return addToCart(event);
}
