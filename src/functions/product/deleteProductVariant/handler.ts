import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { deleteProductVariant } from "../../../services/product/deleteProductVariant";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return deleteProductVariant(event);
}
