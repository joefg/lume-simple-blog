---
title: This is a lume blog template
description: Releasing my template for free
date: 2023-04-02
location: Isle of Wight
---

## How to use this theme.

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
   you're happy with it, commit and push and the GitHub Action takes care of the
rest.
