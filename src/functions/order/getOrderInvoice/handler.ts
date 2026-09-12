import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getOrderInvoice } from "../../../services/order/getOrderInvoice";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getOrderInvoice(event);
}
