import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { removeCartItem } from "../../../services/cart/removeCartItem";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return removeCartItem(event);
}
