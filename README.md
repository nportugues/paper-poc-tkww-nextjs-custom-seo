# POC - Next.js with custom routing.

## POC points
- The Knot and WW side by side.
- Shared codebase, different routing

## Positives
- Sticking to how nextjs works. Nothing not documented in the official docs.
- Allows us for different SITE and SEO structures living inside the same codebase. 
- next/link component still works as expected.

## Negatives/Downsides
- All inside /pages must be hidden with the rewrites directive.
- We surely want to have our seo/routes directory tested, as it's core business now.
