import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { setDefaultPaymentMethod } from "../../../services/payment/setDefaultPaymentMethod";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return setDefaultPaymentMethod(event);
}
