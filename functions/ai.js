export async function onRequest(context) {
  const input = { prompt: "请讲一个中文的笑话" }

  const answer = await context.env.AI.run('@cf/qwen/qwen1.5-7b-chat-awq', input);

  return Response.json(answer);
}
