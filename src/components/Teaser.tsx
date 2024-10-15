"use client";

import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }: { blok: { headline: string } }) => {
  return (
    <div
      className="max-w-xl mx-auto w-fill p-4 bg-green-50 rounded-lg shadow-md mt-10"
      {...storyblokEditable(blok)}
    >
      {blok.headline}
    </div>
  );
};

export default Teaser;
