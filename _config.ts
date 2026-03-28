import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import decap_cms from "lume/plugins/decap_cms.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import robots from "lume/plugins/robots.ts";
import esbuild from "lume/plugins/esbuild.ts";
import terser from "lume/plugins/terser.ts";
import google_fonts from "lume/plugins/google_fonts.ts";
import sass from "lume/plugins/sass.ts";
import unocss from "lume/plugins/unocss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import source_maps from "lume/plugins/source_maps.ts";
import check_urls from "lume/plugins/check_urls.ts";
import svgo from "lume/plugins/svgo.ts";
import sri from "lume/plugins/sri.ts";
import validate_html from "lume/plugins/validate_html.ts";
import sitemap from "lume/plugins/sitemap.ts";
import minify_html from "lume/plugins/minify_html.ts";
import brotli from "lume/plugins/brotli.ts";

const site = lume({
  location: new URL("https://mkg20001.net"),
});

site.copy("CNAME");

site.use(date());
site.use(code_highlight());
site.use(decap_cms());
site.use(multilanguage());
site.use(robots());
site.use(esbuild());
site.use(terser());
site.use(google_fonts({
  fonts: {
    sans: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap",
    mono: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap",
  },
}));
site.use(sass());
site.use(unocss());
site.use(tailwindcss());
site.use(source_maps());
site.use(check_urls());
site.use(svgo());
site.use(sri());
site.use(validate_html());
site.use(sitemap());
site.use(minify_html());
site.use(brotli());

export default site;
