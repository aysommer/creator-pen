import { RichTextEditor as MantineRichTextEditor } from "@mantine/tiptap";
import StarterKit from "@tiptap/starter-kit";
import { useEditor } from "@tiptap/react";

type RichTextEditorProps = {
   value: string;
   onChange: (value: string) => void;
};

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
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
};

export default RichTextEditor;