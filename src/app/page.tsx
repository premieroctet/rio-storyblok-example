import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { cookies, draftMode } from "next/headers";

export default async function Home() {
  const { isEnabled } = draftMode();
  const storyblokApi = getStoryblokApi();
  const cookieStore = cookies();
  const isDraftMode = cookieStore.get("IS_DRAFT_MODE");

  const { data } = await storyblokApi.get(`cdn/stories/home`, {
    version: isEnabled ? "draft" : "published",
  });

  return (
    <>
      {isDraftMode && (
        <div className="w-full bg-green-100 p-2 text-sm">Preview</div>
      )}
      <StoryblokStory story={data.story} />
    </>
  );
}
