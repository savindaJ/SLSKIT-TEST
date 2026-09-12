import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getCustomerProfile } from "../../../services/customer/getCustomerProfile";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getCustomerProfile(event);
}
