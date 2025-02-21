import React, { PropsWithChildren } from "react";
import { Box } from "@mantine/core";

const Body: React.FC<PropsWithChildren> = ({ children }) => {
   return (
      <Box px={8} py={4} flex="1 1 auto">
         {children}
      </Box>
   );
};

export default Body;
