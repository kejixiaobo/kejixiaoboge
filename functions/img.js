export async function onRequest(context) {
  const input = { prompt: "宇航员在月球行走" }

  const answer = await context.env.AI.run("@cf/bytedance/stable-diffusion-xl-lightning", input);

  return new Response(answer, {
      headers: {
        "content-type": "image/png",
      },
    });
}
