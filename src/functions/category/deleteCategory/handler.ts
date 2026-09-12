import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { deleteCategory } from "../../../services/category/deleteCategory";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return deleteCategory(event);
}
