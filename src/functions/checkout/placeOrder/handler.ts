import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { placeOrder } from "../../../services/checkout/placeOrder";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return placeOrder(event);
}
