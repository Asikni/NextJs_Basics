import Card2 from "@/app/components/card2";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card2>
      Archived Notifications
      <Link href="/complex-dashboard"> Notifications </Link>
    </Card2>
  );
}
