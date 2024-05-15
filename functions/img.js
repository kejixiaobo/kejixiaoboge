export async function onRequest(context) {
  const input = { prompt: "wandering on mars" }

  const answer = await context.env.AI.run("@cf/bytedance/stable-diffusion-xl-lightning", input);

  return new Response(answer, {
      headers: {
        "content-type": "image/png",
      },
    });
}
