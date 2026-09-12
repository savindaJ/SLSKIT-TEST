import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getShipment } from "../../../services/shipping/getShipment";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getShipment(event);
}
