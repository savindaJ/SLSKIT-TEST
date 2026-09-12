import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { setDefaultAddress } from "../../../services/address/setDefaultAddress";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return setDefaultAddress(event);
}
