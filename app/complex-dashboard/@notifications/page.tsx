import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../core/components/ui/Card";

import Link from "next/link";

function Notifications() {
  return (
    <>
      <Card>Notifications</Card>
      <Link href="/complex-dashboard/archived"> Archived</Link>
    </>
  );
}

export default Notifications;
