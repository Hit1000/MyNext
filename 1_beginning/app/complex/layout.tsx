export default function layout({
  children,
  notification,
  revenue,
  users,
}: Readonly<{
  children: React.ReactNode;
  notification: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
}>) {
  return (
    <div className="text-4xl">
      <div>{children}</div>
      <div className="flex bg-blue-900 h-[400px] p-20 items-center text-center">
        <div className="flex flex-col w-[50%] gap-11 h-32">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex w-[50%] gap-11 h-32">{notification}</div>
      </div>
    </div>
  );
}
