import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { deactivateCustomer } from "../../../services/customer/deactivateCustomer";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return deactivateCustomer(event);
}
