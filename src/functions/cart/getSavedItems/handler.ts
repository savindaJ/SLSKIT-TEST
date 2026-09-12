import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getSavedItems } from "../../../services/cart/getSavedItems";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getSavedItems(event);
}
