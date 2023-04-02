# lume-simple-blog

A `lume` template for building a blog. It powers [jfg.name](https://jfg.name)!

## How To Use It

0. You need a copy of `deno`, available at [deno.land](https://deno.land).
1. Clone this repository locally. `rm -rf .git` to remove the version control history if you want to.
2. Edit your `_data/site.yml` and `_config.ts` to add your name, description, any links.
3. **OPTIONAL** If you want to host with GitHub Pages with your own domain name, follow
[these instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
and add a `CNAME` file to this repository.
4. `git init && git add . && git commit -m "init: blog"` to reinitialise version control for this repository.
5. Run `deno task serve` to preview your blog. Add posts to `posts/`. When you're happy with it, run 
`deno task build` to generate your site, add your posts and your generated output in `docs/` to your repo,
and push.

## Workflow

### New posts

0. Checkout to a new `post` branch, eg `post/your-new-post`.
1. Add post to `posts`.
2. Run `deno task build`.
3. Add changes including generated HTML in `docs/`, and commit. The generated HTML
and the source Markdown must be in the same commit.
4. Rebase onto `master` or `main`, whichever your mainline branch is.

## Technology Used

* [deno](https://deno.land)
* [lume](https://lume.land)
* [Simple.css](https://simplecss.org/)
* [highlight.js](https://lume.land/plugins/code_highlight/)
