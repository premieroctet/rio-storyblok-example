"use client";

import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import Teaser from "@/components/Teaser";
import Page from "@/components/Page";

const components = {
  page: Page,
  teaser: Teaser,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
