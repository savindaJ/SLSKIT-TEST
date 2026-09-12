import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { addToWishlist } from "../../../services/wishlist/addToWishlist";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return addToWishlist(event);
}
