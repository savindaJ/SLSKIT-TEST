import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { deleteCustomer } from "../../../services/customer/deleteCustomer";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return deleteCustomer(event);
}
