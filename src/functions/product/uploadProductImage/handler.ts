import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { uploadProductImage } from "../../../services/product/uploadProductImage";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return uploadProductImage(event);
}
