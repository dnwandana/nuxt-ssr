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
    "https://placehold.co/1280x720/EEE/31343C?font=raleway&text=Nuxt%20SSR%20Store";

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
