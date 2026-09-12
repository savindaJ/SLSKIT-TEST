import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getAddress } from "../../../services/address/getAddress";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getAddress(event);
}
