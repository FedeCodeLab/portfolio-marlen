export default function ProyectosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="mx-auto w-[90%] pt-16">{children}</main>;
}
