export default function PrensaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative mx-auto w-[90%] pt-16">
      <div className="min-h-screen">{children}</div>
    </main>
  );
}
