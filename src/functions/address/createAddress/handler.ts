import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { createAddress } from "../../../services/address/createAddress";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return createAddress(event);
}
