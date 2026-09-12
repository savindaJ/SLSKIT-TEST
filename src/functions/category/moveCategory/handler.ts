import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { moveCategory } from "../../../services/category/moveCategory";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return moveCategory(event);
}
