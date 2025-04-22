import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack, Text } from "@mantine/core";
import { useStoriesStore } from "../store";
import { StoriesList } from "../components/storiesList";

const HomePage: React.FC = () => {
   const navigate = useNavigate();
   const stories = useStoriesStore((state) => state.items);
   const addStory = useStoriesStore((state) => state.addStory);

   const onAddStory = () => {
      addStory();
      navigate("/story/new");
   };

   return (
      <Box>
         <Box>
            <Button onClick={onAddStory} radius="xl">
               Create story
            </Button>
         </Box>

         <Stack w={300} gap={4}>
            <Text size="l" fw={700}>
               Stories
            </Text>
            <Box>{stories.length > 0 ? <StoriesList items={stories} /> : <Text>No stories</Text>}</Box>
         </Stack>
      </Box>
   );
};

export default HomePage;
