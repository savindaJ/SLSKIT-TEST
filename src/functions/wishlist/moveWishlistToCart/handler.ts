import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { moveWishlistToCart } from "../../../services/wishlist/moveWishlistToCart";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return moveWishlistToCart(event);
}
