export async function onRequest(context) {
  const input = { prompt: "请讲一个中文的笑话" }

  const answer = await context.env.AI.run('@cf/meta/llama-2-7b-chat-int8', input);

  return Response.json(answer);
}
