import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { createSubcategory } from "../../../services/category/createSubcategory";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return createSubcategory(event);
}
