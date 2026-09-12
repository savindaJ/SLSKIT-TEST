import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { deleteAddress } from "../../../services/address/deleteAddress";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return deleteAddress(event);
}
