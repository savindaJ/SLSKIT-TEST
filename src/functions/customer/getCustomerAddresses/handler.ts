import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getCustomerAddresses } from "../../../services/customer/getCustomerAddresses";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getCustomerAddresses(event);
}
