import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { cancelShipment } from "../../../services/shipping/cancelShipment";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return cancelShipment(event);
}
