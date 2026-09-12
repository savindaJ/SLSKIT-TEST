import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { updateProductVariant } from "../../../services/product/updateProductVariant";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return updateProductVariant(event);
}
