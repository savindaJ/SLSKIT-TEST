import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getWishlist } from "../../../services/wishlist/getWishlist";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getWishlist(event);
}
