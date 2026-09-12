import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { downloadOrderInvoice } from "../../../services/order/downloadOrderInvoice";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return downloadOrderInvoice(event);
}
