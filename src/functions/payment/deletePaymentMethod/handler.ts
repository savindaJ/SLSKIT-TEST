import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { deletePaymentMethod } from "../../../services/payment/deletePaymentMethod";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return deletePaymentMethod(event);
}
