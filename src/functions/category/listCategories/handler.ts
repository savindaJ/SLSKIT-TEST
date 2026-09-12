import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { listCategories } from "../../../services/category/listCategories";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return listCategories(event);
}
