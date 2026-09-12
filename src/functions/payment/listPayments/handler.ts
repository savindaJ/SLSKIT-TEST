import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { listPayments } from "../../../services/payment/listPayments";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return listPayments(event);
}
