import { useState } from "react";
import { RichTextEditor } from "../richTextEditor";

const EditorPanel = () => {
   const [story, setStory] = useState<string>("");

   return <RichTextEditor value={story} onChange={setStory} />;
};

export default EditorPanel;
