import { Metadata } from "next";
import { AppWrapper } from "@/app/context";
export const metadata: Metadata = {
  title: {
    absolute: "", //absolute will override everything..can be used in a particular page
    default: "Next js tutorial", //root page's default title
    template: "%s | Fruit page", //template will overide it
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>
          <nav style={{ border: "1px solid green" }}>Header</nav>
          {children}
          <footer style={{ border: "1px solid blue" }}>Footer</footer>
        </AppWrapper>
      </body>
    </html>
  );
}
