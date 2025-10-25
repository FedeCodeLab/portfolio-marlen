export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="mx-auto w-[90%]">{children}</main>;
}
