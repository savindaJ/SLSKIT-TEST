import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getProductVariants } from "../../../services/product/getProductVariants";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getProductVariants(event);
}
