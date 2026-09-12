import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { setCheckoutPayment } from "../../../services/checkout/setCheckoutPayment";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return setCheckoutPayment(event);
}
