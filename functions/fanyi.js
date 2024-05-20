export async function onRequest(context) {

  const response = await context.env.AI.run(
      "@cf/meta/m2m100-1.2b",
      {
        text: "翻译翻译，什么叫惊喜",
        source_lang: "chinese", // defaults to english
        target_lang: "english",
      }
    );

  return new Response(JSON.stringify(response));
  
}
