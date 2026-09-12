import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { clearCart } from "../../../services/cart/clearCart";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return clearCart(event);
}
