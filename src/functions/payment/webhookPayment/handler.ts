import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { webhookPayment } from "../../../services/payment/webhookPayment";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return webhookPayment(event);
}
