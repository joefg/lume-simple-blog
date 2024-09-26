# lume-simple-blog

A `lume` template for building a blog.

## How To Use It

0. You need a copy of `deno`, available at [deno.land](https://deno.land).
1. Clone this repository locally. `rm -rf .git` to remove the version control
   history if you want to.
2. Edit your `_data/site.yml` and `_config.ts` to add your name, description,
   any links.
3. **OPTIONAL** If you want to host with GitHub Pages with your own domain name,
   follow [these
instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
and add a `CNAME` file to this repository.
4. `git init && git add . && git commit -m "init: blog"` to reinitialise version
   control for this repository.
5. Run `deno task serve` to preview your blog. Add posts to `posts/`. When
   happy, commit.

## Workflow

### New posts

0. Checkout to a new `post` branch, eg `post/your-new-post`.
1. Add post to `posts`.
3. Commit when you're happy.
4. Rebase onto `main`.

### New pages

0. Checkout to a new `page` branch, eg `post/your-new-page`.
1. Add page the root of this directory, eg `page.md`.
2. Add the following YAML header to your new page:

```yaml
---
layout: layout/post.njk
title: Your Page
templateClass: tmpl-post
menu:
    visible: true
    order: 2
---
```

5. Rebase onto `main`.

### GitHub Pages

This includes a working GitHub Pages workflow by default. Just look inside
`.github/workflows/publish.yaml`, which runs on push to main. It checks out to
main, compiles the site, and publishes it to GitHub pages.

## Technology Used

* [deno](https://deno.land)
* [lume](https://lume.land)
* [Simple.css](https://simplecss.org/)
* [highlight.js](https://lume.land/plugins/code_highlight/)
* [GitHub Actions deploy-pages](https://github.com/actions/deploy-pages)
