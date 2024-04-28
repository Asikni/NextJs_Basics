import {Metadata} from "next";

export const metadata: Metadata = {
  title:{
    absolute:"",                  //absolute will override everything..can be used in a particular page
    default:"Next js tutorial",  //root page's default title
    template:"%s | Fruit page"   //template will overide it
  }
}


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
