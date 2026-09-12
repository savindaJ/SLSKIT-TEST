import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getShippingMethod } from "../../../services/shipping/getShippingMethod";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getShippingMethod(event);
}
