import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { removeFromWishlist } from "../../../services/wishlist/removeFromWishlist";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return removeFromWishlist(event);
}
