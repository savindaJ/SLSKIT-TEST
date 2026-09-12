import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { startCheckout } from "../../../services/checkout/startCheckout";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return startCheckout(event);
}
