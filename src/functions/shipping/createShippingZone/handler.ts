import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { createShippingZone } from "../../../services/shipping/createShippingZone";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return createShippingZone(event);
}
