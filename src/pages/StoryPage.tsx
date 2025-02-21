import { useParams } from "react-router-dom";
import { Box, Flex, Stack, Text, Button } from "@mantine/core";
import { EditorPanel } from "../components/editorPanel";
import { ChaptersList } from "../components/chaptersList";
import { useStoriesStore } from "../store";
import { NEW_STORY_KEY } from "../consts";

import "@mantine/tiptap/styles.css";

const StoryPage: React.FC = () => {
   const params = useParams();
   const isNew = params.id === NEW_STORY_KEY;
   const story = useStoriesStore(
      (state) =>
         state.items.filter((item) => {
            const comparisonKey = isNew ? NEW_STORY_KEY : params.id;
            return item.id === comparisonKey;
         })[0]
   );
   const addChapter = useStoriesStore((state) => state.addChapter);

   const onAddChapter = () => {
      addChapter(story.id);
   };

   return (
      <Flex>
         <Stack w={300}>
            <Box p={8}>
               <Button radius="xl" onClick={onAddChapter}>
                  Create chapter
               </Button>
            </Box>
            <Text size="l" fw={700}>
               Chapters
            </Text>
            <Box>{story?.chapters.length > 0 ? <ChaptersList items={story.chapters} /> : <Text>No chapters</Text>}</Box>
         </Stack>
         <Box flex="1 1 auto" p={4}>
            {story?.selectedChapter ? <EditorPanel /> : null}
         </Box>
      </Flex>
   );
};

export default StoryPage;
