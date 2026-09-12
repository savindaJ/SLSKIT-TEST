import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { listShippingMethods } from "../../../services/shipping/listShippingMethods";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return listShippingMethods(event);
}
