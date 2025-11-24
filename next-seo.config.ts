import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  titleTemplate: "%s | Skaira",
  defaultTitle: "Skaira",
  description: "The autonomous Night Shift for modern teams. Skaira eliminates the coordination tax through agents that work while you sleep, fixing bugs, updating docs, keeping your tools in perfect sync. Wake up to a done list, not a to do list.",
  canonical: "https://skaira.dev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://skaira.dev",
    siteName: "Skaira",
    title: "Skaira",
    description: "Autonomous agents that eliminate coordination tax. They organize themselves into teams, execute complex operations, and work while your team sleeps. Making small teams feel like armies.",
    images: [
      {
        url: "https://skaira.dev/background.png",
        width: 1200,
        height: 630,
        alt: "Skaira: Autonomous agents working the Night Shift for modern enterprises",
        type: "image/png",
      },
    ],
  },
  twitter: {
    handle: "@skaira_ai",
    site: "@skaira_ai",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: "coordination tax, autonomous agents, night shift, AI automation, developer productivity, self healing organization, enterprise automation, workflow automation, distributed systems, multi agent systems, Skaira",
    },
    {
      name: "author",
      content: "Skaira Inc.",
    },
    {
      property: "og:image:alt",
      content: "Skaira: The autonomous nervous system that eliminates coordination tax",
    },
  ],
};

export default config;

