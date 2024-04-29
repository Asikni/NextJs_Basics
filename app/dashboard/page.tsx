import Link from "next/link";

export default function Dashboard() {
  return <div>Welcome to our Dashboard
    <br />
    <Link href="/">Home</Link> {/* check what replace does */}
  </div>;
}
