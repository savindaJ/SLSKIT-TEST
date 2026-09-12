import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { validateCheckout } from "../../../services/checkout/validateCheckout";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return validateCheckout(event);
}
