import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { updateCartItem } from "../../../services/cart/updateCartItem";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return updateCartItem(event);
}
