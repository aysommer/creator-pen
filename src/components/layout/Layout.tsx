import React, { PropsWithChildren } from "react";
import { Stack } from "@mantine/core";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
   return (
      <Stack h="100%">
         <Navbar />
         <Body>{children}</Body>
         <Footer />
      </Stack>
   );
};

export default Layout;
