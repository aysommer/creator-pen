import { Link } from "react-router-dom";
import { Box, Button, Flex } from "@mantine/core";
import { EditorPanel } from "../components/editorPanel";
import { ChaptersList } from "../components/chaptersList";

import "@mantine/tiptap/styles.css";

const FAKE_CHAPTERS = [{ id: crypto.randomUUID(), num: 1, content: "" }];

const StoryPage: React.FC = () => {
   return (
      <Box p={4}>
         <Button component={Link} to="/">
            To home
         </Button>

         <Flex>
            <Box w="300px">
               <ChaptersList items={FAKE_CHAPTERS} />
            </Box>
            <Box flex="1 1 auto">
               <EditorPanel />
            </Box>
         </Flex>
      </Box>
   );
};

export default StoryPage;
