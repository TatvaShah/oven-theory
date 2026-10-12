import type { SiteConfig } from "@/lib/types";

// The ONLY file a builder edits (plus images in /public).
// Empty or missing optional fields hide their section automatically.
// Use real facts only: the leads JSON, the IG profile, and posts. Never invent hours, prices, or reviews.
// No double hyphens anywhere in copy; the build fails if one slips in.

export const site: SiteConfig = {
  name: "Oven Theory",
  tagline: "Eggless custom cakes and sweet treats, freshly baked in Brampton.",
  category: "Eggless home bakery",
  schemaType: "Bakery",
  area: "Brampton, ON",
  siteUrl: "https://oven-theory-ca.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#e88880" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Home bakery in Brampton",
    headline: "Eggless cakes made for your celebration",
    subhead:
      "Custom cakes, cupcakes, cakesicles, cake pops, and chocolate covered strawberries, freshly baked to order. Send a DM with your date and idea to get started.",
    images: [
      {
        src: "/images/post-2.jpg",
        alt: "White cake with blush pink bows and pearl details",
        width: 1080,
        height: 1920,
      },
      {
        src: "/images/post-4.jpg",
        alt: "Two tier white birthday cake",
        width: 1080,
        height: 1920,
      },
      {
        src: "/images/post-3.jpg",
        alt: "Fresh strawberry cream cake with white piping",
        width: 1080,
        height: 1920,
      },
    ],
    secondaryCta: { label: "See the treats", href: "#gallery" },
  },

  highlights: [
    "100% eggless",
    "Made to order",
    "Brampton, ON",
    "Orders by Instagram DM",
  ],

  about: {
    title: "Freshly baked at home",
    body: [
      "Oven Theory is a home bakery in Brampton, Ontario, baking custom eggless cakes and sweet treats for birthdays, engagements, and everyday celebrations.",
      "Every order is made fresh for you. Share your date, flavour, and design idea on Instagram, and we will take it from there.",
    ],
    image: {
      src: "/images/post-5.jpg",
      alt: "Celebration cakes from Oven Theory",
      width: 1080,
      height: 1440,
    },
  },

  menu: {
    title: "What we bake",
    intro:
      "A few favourites from the kitchen. Every order is quoted in your DM based on size, design, and date.",
    variant: "cards",
    groups: [
      {
        title: "Cakes and treats",
        note: "Quoted by DM",
        items: [
          {
            name: "Eggless custom cakes",
            description: "Celebration and themed cakes, designed around your idea.",
            image: {
              src: "/images/post-2.jpg",
              alt: "Pretty in pink and pearls custom cake",
            },
            href: "https://www.instagram.com/p/Ddw7_hwMUwK/",
          },
          {
            name: "Cupcakes",
            description: "Freshly baked cupcakes for parties and gifts.",
            image: {
              src: "/images/post-6.jpg",
              alt: "Themed cupcakes and treats",
            },
            href: "https://www.instagram.com/p/DdOwJYpt68i/",
          },
          {
            name: "Cakesicles and cake pops",
            description: "Bite sized treats for dessert tables and favours.",
            image: {
              src: "/images/post-1.jpg",
              alt: "Home baked cake treats",
            },
            href: "https://www.instagram.com/p/DeVBCvVtPUC/",
          },
          {
            name: "Chocolate covered strawberries",
            description: "A sweet finish for celebrations and gifting.",
            image: {
              src: "/images/post-3.jpg",
              alt: "Strawberry cream cake",
            },
            href: "https://www.instagram.com/p/DduWf9Jt_Qz/",
          },
        ],
      },
    ],
  },

  gallery: {
    title: "A look at recent orders",
    items: [
      {
        src: "/images/post-2.jpg",
        width: 1080,
        height: 1920,
        alt: "White cake with blush pink bows and pearls",
        caption: "Pretty in pink and pearls",
        href: "https://www.instagram.com/p/Ddw7_hwMUwK/",
      },
      {
        src: "/images/post-3.jpg",
        width: 1080,
        height: 1920,
        alt: "Fresh strawberry cream cake",
        caption: "Fresh strawberry cream cake",
        href: "https://www.instagram.com/p/DduWf9Jt_Qz/",
      },
      {
        src: "/images/post-4.jpg",
        width: 1080,
        height: 1920,
        alt: "Two tier first birthday cake",
        caption: "First birthday two tier cake",
        href: "https://www.instagram.com/p/DdknIsdsfuS/",
      },
      {
        src: "/images/post-5.jpg",
        width: 1080,
        height: 1440,
        alt: "Celebration cakes from Oven Theory",
        caption: "Making every celebration sweeter",
        href: "https://www.instagram.com/p/DdR0mtNnxsf/",
      },
      {
        src: "/images/post-7.jpg",
        width: 1080,
        height: 1920,
        alt: "Engagement cake",
        caption: "Engagement cake",
        href: "https://www.instagram.com/p/DdMx4BVNfsy/",
      },
      {
        src: "/images/post-6.jpg",
        width: 1080,
        height: 1920,
        alt: "Themed treats",
        caption: "Themed treats",
        href: "https://www.instagram.com/p/DdOwJYpt68i/",
      },
      {
        src: "/images/post-1.jpg",
        width: 1080,
        height: 1920,
        alt: "Home baked eggless cake",
        caption: "Fresh from the oven",
        href: "https://www.instagram.com/p/DeVBCvVtPUC/",
      },
      {
        src: "/images/post-8.jpg",
        width: 1080,
        height: 1440,
        alt: "Oven Theory cake detail",
        caption: "Custom details",
        href: "https://www.instagram.com/p/DdKLJNmN_5L/",
      },
    ],
  },


  instagram: {
    handle: "oventheorybyjasssohi",
    embeds: [
      "https://www.instagram.com/p/Ddw7_hwMUwK/",
      "https://www.instagram.com/p/DdknIsdsfuS/",
      "https://www.instagram.com/p/DdR0mtNnxsf/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order in a quick DM",
    intro:
      "Orders are taken through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage:
      "Hi Oven Theory! I would like to place a custom order.\nDate needed:\nServings or size:\nFlavour:\nDesign idea (I can send an inspo photo):",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    {
      q: "How do I order?",
      a: "Send a DM on Instagram with your date, servings or size, flavour, and design idea. You will get a quote back in the chat.",
    },
    {
      q: "Are your cakes eggless?",
      a: "Yes. Oven Theory bakes 100% eggless cakes and treats.",
    },
    {
      q: "Where are you based?",
      a: "Oven Theory is a home bakery in Brampton, Ontario.",
    },
    {
      q: "What can I order?",
      a: "Custom cakes, cupcakes, cakesicles, cake pops, and chocolate covered strawberries.",
    },
  ],

  contact: {
    area: "Brampton, Ontario",
  },

  seo: {
    title: "Oven Theory | Eggless home bakery in Brampton",
    description:
      "Eggless custom cakes, cupcakes, cakesicles, cake pops, and chocolate covered strawberries in Brampton, Ontario. Order by Instagram DM.",
    keywords: [
      "eggless cakes Brampton",
      "home bakery Brampton",
      "custom cakes Brampton",
      "cupcakes Brampton",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
