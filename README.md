  BAM Dashboard- npm package version

Social Media Dashboard
Becomes aware when new links are created on all my websites and tools
- psuedo-code
```
route(`/something-changed/${type}/`, {
  method: 'Post',
  Content-type: 'application/json',
  Auth: process.env.PRIVATE_KEY
},
  body: JSON.stringify({
			type: 'new-image',
			location: cloudinary,
			new-thing: {
    id: new-thing.id,
			media_url: '...new-image.png',
    ...new-thing}
})
)
return new NextResponse(success)
...
```
-blog posts
- web pages
-- aryel.io
-- etc
- media
-- video
-- audio
-- images

Shows a list of links that haven't been promoted on social media yet
- Things That can be done with list of links
- - edit
- - create new
- - - add media to adilo
- - - add media to cloudinary
- - - add media to blog post
- - make live
- - create short link (describe)
- - - use Switchy.io api

Social Media Dashboard
Becomes aware when new links are created on all my websites and tools

- affiliate
- - appsumo & tools
- shopify products
- dukaan products
- media
- - audio
- - - use Adilo api
- - video
- - - use Adilo api
- - images
- - - switchboard.ai api https://developers.switchboard.ai/
- - - use Cloudinary api
- - podcasts
- - - use RSS Feed
- - blog posts
- - - use RSS Feed
- - #ReadWitUS
- - - use * api
- - deepword
- - vidpopup
- webhooks
- db
- api

Shows a list of links that haven't been promoted on social media yet
- Things That can be done with list of links
- - create short link (describe)
- - - use Switchy.io api
- - see analytics for page
- - - use Google Analytics api
- - - use TruConversion Api
- - edit page
- - share page on social media (describe)
- - - use Ocoya api
- - schedule meetings
- - - use Sessions api
- - - use Consolto api
- - - use Hey Edgar api
- - - use HeartBeat api
- - - use Acadle api
- - - Use Pabbly webhooks
- - - Use Stripe api
- - - Use mobile-text-alerts
- - - Use flotiq.com
crowdparty
ideta
interacty
snackeet
story widget
sturppy
median




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
