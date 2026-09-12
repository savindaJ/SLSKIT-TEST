import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { calculateShipping } from "../../../services/shipping/calculateShipping";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return calculateShipping(event);
}
