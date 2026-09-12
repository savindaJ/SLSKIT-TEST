import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { listAddresses } from "../../../services/address/listAddresses";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return listAddresses(event);
}
