import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { updateCustomer } from "../../../services/customer/updateCustomer";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return updateCustomer(event);
}
