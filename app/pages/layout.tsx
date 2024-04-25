export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
    
      
      <nav>Some of the fruits are</nav>
      {children}
    </div>
  );
}
