# POC - Next.js with custom routing.

## POC points
- The Knot and WW side by side.
- Shared codebase, different routing

## Positives
- Very close to how nextjs works.
- Allows us for different SITE and SEO structures living inside the same codebase. 
- next/link component still works as expected. Just make sure to pass in route name.

## Negatives/Downsides
- All inside /pages are hidden by default unless declared under seo/routes.
- pages/ may look duplicated with this approach. 
- We surely want to have our seo/routes directory tested, as it's core business now.
