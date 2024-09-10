import Main from "@/components/Main";
import "./globals.scss";
import Provider from "./Provider";
import Footer from "../components/Footer";

export const metadata = {
  title: "C-Sar",
  description: "An ML application that colorizises raw SAR images",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Main>{children}</Main>
        </Provider>
        <Footer/>
      </body>
    </html>
  );
}
