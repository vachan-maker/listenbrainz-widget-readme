
## ListenBrainz Widget Readme
1. Generates an SVG image that displays the song you are listening to now from ListenBrainz.

**This is a rough project and the svg generated now looks terrible. I am working on fixing it.**

## Example
### SVG Generated from API
![](https://listenbrainz-widget-readme.vercel.app/api)

### Screenshot
![image](https://github.com/user-attachments/assets/0369c82b-eddb-4093-93d6-9019d230748b)


## How to Use?
1. Clone the repo
2. Create an `.env` file and set your username to the `LB_USERNAME` variable.
3. Deploy it to Vercel

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
