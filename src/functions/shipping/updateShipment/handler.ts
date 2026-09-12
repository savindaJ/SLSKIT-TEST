import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { updateShipment } from "../../../services/shipping/updateShipment";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return updateShipment(event);
}
