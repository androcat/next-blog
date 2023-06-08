import Link from "next/link";
import { useRouter } from "next/router";
import blogContent from "../../blogContent";

export default function Blog() {
  const router = useRouter();
  const blogId = router.query.postId;
  const data = blogContent[blogId - 1];

  return (
    <>
      <Link href={"/blog/"}>
        <h1>{data?.title}</h1>
        <p>{data?.body}</p>
      </Link>
    </>
  );
}
