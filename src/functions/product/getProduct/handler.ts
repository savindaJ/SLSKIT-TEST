import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  void event;
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "Hello World",
    }),
  };
}
