import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { trackShipment } from "../../../services/shipping/trackShipment";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return trackShipment(event);
}
