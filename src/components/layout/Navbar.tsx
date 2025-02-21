import React from "react";
import { Link } from "react-router-dom";
import { Flex, Button, MantineStyleProp } from "@mantine/core";

const navBarStyles: MantineStyleProp = {
   borderBottom: "1px solid #999",
   boxSizing: "border-box",
};

const Navbar: React.FC = () => {
   return (
      <Flex p={8} style={navBarStyles}>
         <Button component={Link} to="/" variant="transparent" radius="xl">
            creator-pen
         </Button>
      </Flex>
   );
};

export default Navbar;
