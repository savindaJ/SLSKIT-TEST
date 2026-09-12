import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { refundPayment } from "../../../services/payment/refundPayment";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return refundPayment(event);
}
