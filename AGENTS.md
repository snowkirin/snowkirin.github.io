## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Architecture diagram (`.archify/`)

`.archify/snowkirin-architecture.json` is the source of truth and is tracked in git.
The rendered HTML, the visual-check harness, and the PNG screenshots are generated
output and are gitignored — do not commit them.

They were produced by `archify` 2.16.0-dev.0, a prerelease build that is not
installed in this repo and not on PATH. The exact invocation is therefore
unverified; confirm it against your local archify install before regenerating.

Keep the JSON in sync with reality when infrastructure changes. Deployment is
GitHub Pages via GitHub Actions (`actions/deploy-pages`), not Cloudflare Workers —
the `wrangler` scripts left in `package.json` come from the upstream theme and are
not the deploy path.
