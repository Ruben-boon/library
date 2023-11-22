import { SanityDocument } from "sanity";
import { Iframe } from "sanity-plugin-iframe-pane";
import { DefaultDocumentNodeResolver } from "sanity/desk";

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  switch (schemaType) {
    case `post`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `${process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"}`
          })
          .title("Preview"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
