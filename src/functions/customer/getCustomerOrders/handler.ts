import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getCustomerOrders } from "../../../services/customer/getCustomerOrders";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getCustomerOrders(event);
}
