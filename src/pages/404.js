import * as React from "react";

/**
 * 404 page
 *
 * Redirects to homepage
 */
const NotFoundPage = () => {
  if (typeof window !== "undefined") {
    window.location = "/";
  }

  return null;
};

export default NotFoundPage;
