import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Blog",
};

function Number() {
  return <div>Home Page</div>;
}

export default function Page() {
  return (
    <div>
      <div>
        Hello, Next.js!
        <h1>{Number()}</h1>
        < Link href="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}
