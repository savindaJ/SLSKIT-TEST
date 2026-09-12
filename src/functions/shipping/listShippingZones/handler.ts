import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { listShippingZones } from "../../../services/shipping/listShippingZones";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return listShippingZones(event);
}
