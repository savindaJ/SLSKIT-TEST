import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { updateCustomerPreferences } from "../../../services/customer/updateCustomerPreferences";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return updateCustomerPreferences(event);
}
