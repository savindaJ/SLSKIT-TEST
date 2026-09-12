import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getPaymentMethods } from "../../../services/payment/getPaymentMethods";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getPaymentMethods(event);
}
