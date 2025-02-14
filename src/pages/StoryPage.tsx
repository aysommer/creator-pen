import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { RichTextEditor as MantineRichTextEditor } from "@mantine/tiptap";

import "@mantine/tiptap/styles.css";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

interface RichTextEditorProps {
   value: string;
   onChange: (value: string) => void;
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
   const editor = useEditor({
      extensions: [StarterKit],
      content: value,
      onUpdate: ({ editor }) => {
         onChange(editor.getHTML());
      },
   });

   return (
      <MantineRichTextEditor editor={editor}>
         <MantineRichTextEditor.Toolbar>
            <MantineRichTextEditor.ControlsGroup>
               <MantineRichTextEditor.Bold />
               <MantineRichTextEditor.Italic />
            </MantineRichTextEditor.ControlsGroup>
         </MantineRichTextEditor.Toolbar>

         <MantineRichTextEditor.Content />
      </MantineRichTextEditor>
   );
}

const StoryPage: React.FC = () => {
   return (
      <div>
         <Button component={Link} to="/">
            To home
         </Button>
         <RichTextEditor />
      </div>
   );
};

export default StoryPage;
