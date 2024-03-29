import Header from "@/component/header";
import "./globals.css";
import Provider from "./Provider";
import Tabs from "@/component/Tabs";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header />
          <Tabs />
          {children}
        </Provider>
      </body>
    </html>
  );
}
