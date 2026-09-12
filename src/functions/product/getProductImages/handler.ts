import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getProductImages } from "../../../services/product/getProductImages";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getProductImages(event);
}
