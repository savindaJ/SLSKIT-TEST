import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { updateAddress } from "../../../services/address/updateAddress";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return updateAddress(event);
}
