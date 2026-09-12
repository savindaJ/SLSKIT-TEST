import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { updateCategory } from "../../../services/category/updateCategory";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return updateCategory(event);
}
