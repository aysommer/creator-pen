import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

const HomePage: React.FC = () => {
   return (
      <Button component={Link} to="/story">
         Create story
      </Button>
   );
};

export default HomePage;
