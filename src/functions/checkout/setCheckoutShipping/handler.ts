import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { setCheckoutShipping } from "../../../services/checkout/setCheckoutShipping";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return setCheckoutShipping(event);
}
