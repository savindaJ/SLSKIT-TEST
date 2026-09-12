import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { addPaymentMethod } from "../../../services/payment/addPaymentMethod";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return addPaymentMethod(event);
}
