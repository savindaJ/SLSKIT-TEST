import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { saveForLater } from "../../../services/cart/saveForLater";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return saveForLater(event);
}
