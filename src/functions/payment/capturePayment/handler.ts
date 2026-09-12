import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { capturePayment } from "../../../services/payment/capturePayment";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return capturePayment(event);
}
