import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { applyCheckoutGiftCard } from "../../../services/checkout/applyCheckoutGiftCard";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return applyCheckoutGiftCard(event);
}
