import Head from "next/head";
import NavbarMenu from "./NavbarMenu";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next</title>
      </Head>
      <header>
        <NavbarMenu />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
