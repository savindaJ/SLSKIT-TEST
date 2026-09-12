import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getPayment } from "../../../services/payment/getPayment";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getPayment(event);
}
