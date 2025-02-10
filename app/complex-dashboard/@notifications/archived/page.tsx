import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../core/components/ui/Card";

import Link from "next/link";

function ArchivedNotifications() {
  return (
    <>
      <Card>Archived Notifications</Card>
      <Link href="/complex-dashboard"> Default</Link>
    </>
  );
}

export default ArchivedNotifications;
