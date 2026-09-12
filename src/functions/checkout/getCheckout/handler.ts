import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getCheckout } from "../../../services/checkout/getCheckout";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getCheckout(event);
}
