export default function PrensaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative mx-auto w-[90%] pt-16">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div className="min-h-screen relative z-10">{children}</div>
    </main>
  );
}
