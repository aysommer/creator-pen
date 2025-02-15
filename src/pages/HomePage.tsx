import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mantine/core";

const HomePage: React.FC = () => {
   return (
      <Box p={4}>
         <Button component={Link} to="/story">
            Create story
         </Button>
      </Box>
   );
};

export default HomePage;
