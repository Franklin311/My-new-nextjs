export default function DashboardLaout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      <div> {children}</div> {/* content from page.tsx*/}
      <div> {users}</div>
      <div> {revenue}</div>
      <div> {notifications}</div>
    </>
  );
}
