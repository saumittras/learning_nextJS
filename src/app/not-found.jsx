import Link from "next/link";

export default function NotFoundPage404() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <h2>Not Found Page404</h2>
      <Link href={'/'}>Back to home</Link>
    </div>
  );
}
