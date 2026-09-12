import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { updateCheckout } from "../../../services/checkout/updateCheckout";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return updateCheckout(event);
}
