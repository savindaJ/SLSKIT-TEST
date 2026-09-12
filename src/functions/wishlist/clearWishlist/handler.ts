import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { clearWishlist } from "../../../services/wishlist/clearWishlist";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return clearWishlist(event);
}
