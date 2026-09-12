import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { listSubcategories } from "../../../services/category/listSubcategories";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return listSubcategories(event);
}
