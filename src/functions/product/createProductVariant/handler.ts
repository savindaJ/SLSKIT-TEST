import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { createProductVariant } from "../../../services/product/createProductVariant";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return createProductVariant(event);
}
