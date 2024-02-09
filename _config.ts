import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import postcss from "lume/plugins/postcss.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";

const site = lume({
  location: new URL("https://your-name.website/lume-simple-blog"),
});

site
  .ignore("README.md")
  .copy("img")
  .copy("favicon.ico")
  .copy("CNAME")
  .use(postcss())
  .use(date())
  .use(nunjucks())
  .use(codeHighlight())
  .use(basePath())
  .use(slugifyUrls({ alphanumeric: false }))
  .use(resolveUrls());

export default site;
