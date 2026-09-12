import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { createShipment } from "../../../services/shipping/createShipment";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return createShipment(event);
}
