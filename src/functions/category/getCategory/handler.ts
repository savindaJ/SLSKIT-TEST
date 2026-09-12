import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getCategory } from "../../../services/category/getCategory";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return getCategory(event);
}
