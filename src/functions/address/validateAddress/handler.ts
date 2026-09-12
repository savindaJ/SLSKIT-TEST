import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { validateAddress } from "../../../services/address/validateAddress";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return validateAddress(event);
}
