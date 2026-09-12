import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { createCategory } from "../../../services/category/createCategory";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return createCategory(event);
}
