export async function onRequest(context) {
  const input = { prompt: "太空旅行者在木星蹦极" }

  const answer = await context.env.AI.run("@cf/bytedance/stable-diffusion-xl-lightning", input);

  return new Response(answer, {
      headers: {
        "content-type": "image/png",
      },
    });
}
