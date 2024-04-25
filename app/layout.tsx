export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>Some of the fruits</nav>
        {children}
        <div>Fruitssssss</div>
      </body>
    </html>
  );
}
