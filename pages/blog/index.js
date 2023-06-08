// index.js should return a page component that lists all the blogs in the blogContent.json file.
//  Each reference to a blog post should include the blog's title and use a <Link /> helper to navigate to it by id

import blogContent from "../../blogContent.json";

export default function Page() {
  console.log(blogContent);
}
