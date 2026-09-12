import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { releaseStock } from "../../../services/inventory/releaseStock";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return releaseStock(event);
}
