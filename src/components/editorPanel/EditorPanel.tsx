import { useState } from "react";
import { Box } from "@mantine/core";
import { RichTextEditor } from "../richTextEditor";

const EditorPanel = () => {
   const [story, setStory] = useState<string>("");

   return (
      <Box p={4}>
         <RichTextEditor value={story} onChange={setStory} />
      </Box>
   );
};

export default EditorPanel;
