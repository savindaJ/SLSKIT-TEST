import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { listCustomers } from "../../../services/customer/listCustomers";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return listCustomers(event);
}
