import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getWishlistCount } from "../../../services/wishlist/getWishlistCount";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getWishlistCount(event);
}
