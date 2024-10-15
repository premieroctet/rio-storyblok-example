import { NextResponse } from "next/server";
import { createRedirectionIoMiddleware } from "./rio";

const myExistingMiddleware = () => {
  return NextResponse.next();
};

const middleware = createRedirectionIoMiddleware({
  nextMiddleware: myExistingMiddleware,
});

export default middleware;

export const config = {
  unstable_allowDynamic: ["/node_modules/@redirection.io/**"],
};
