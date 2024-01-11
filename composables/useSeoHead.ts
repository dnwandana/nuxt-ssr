export default async function useSeoHead(
  _title: string,
  _description?: string,
  _image?: string,
  _url?: string
) {
  const WEBSITE_URL = "https://nuxt-ssr-store.vercel.app";
  const WEBSITE_TITLE = "Nuxt SSR Store";
  const WEBSITE_DESCRIPTION =
    "Elevate your online shopping experience with Nuxt SSR Store";
  const WEBSITE_CARD_IMAGE =
    "https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const title = `${_title} - ${WEBSITE_TITLE}`;
  const description = _description || WEBSITE_DESCRIPTION;
  const image = _image || WEBSITE_CARD_IMAGE;
  const url = `${WEBSITE_URL}/${_url}` || WEBSITE_URL;

  useSeoMeta({
    title: title,
    description: description,
    ogUrl: url,
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    twitterTitle: title,
    twitterDescription: description,
    twitterCard: "summary_large_image",
    twitterImage: image,
  });
}
