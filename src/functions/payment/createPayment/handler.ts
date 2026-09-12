import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { createPayment } from "../../../services/payment/createPayment";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return createPayment(event);
}
