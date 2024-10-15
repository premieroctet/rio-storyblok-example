import { cookies, draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug") ?? "";

  if (secret !== "MY_SECRET_TOKEN" || !slug) {
    return new Response("Invalid token or missing slug", { status: 401 });
  }

  draftMode().enable();
  cookies().set("IS_DRAFT_MODE", "true");

  return redirect("/");
}
