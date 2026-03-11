# Nepal PR Seat Allocator

Static webpage for allocating Nepal proportional representation seats using the Sainte-Lague method with:

- 110 total seats
- 3% threshold filter
- seat-by-seat collapsible calculations
- Nepal party colors and emojis for the six qualifying parties

## Run locally

Because this is a plain static site, you can open [index.html](/Users/a.paudyal/vibe_codex/index.html) directly in a browser or serve the folder with any static file server.

## Deploy to Vercel

1. Push this project to a Git repository on GitHub, GitLab, or Bitbucket.
2. In Vercel, click `Add New... > Project`.
3. Import the repository.
4. Keep the default framework as `Other`.
5. Leave the build command empty.
6. Leave the output directory empty.
7. Deploy.

Vercel will serve the static files from the repository root. The included [vercel.json](/Users/a.paudyal/vibe_codex/vercel.json) keeps the setup simple for a static deployment.
