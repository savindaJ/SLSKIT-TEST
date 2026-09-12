import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getCustomer } from "../../../services/customer/getCustomer";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getCustomer(event);
}
