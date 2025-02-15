import type { ChapterType } from "../../types";
import { List } from "@mantine/core";

type ChaptersList = {
   items: ChapterType[];
};

const ChaptersList: React.FC<ChaptersList> = ({ items }) => {
   return (
      <div>
         <List>
            {items.map((item) => <List.Item>Chapter #{item.num}</List.Item>)}
         </List>
      </div>
   );
};

export default ChaptersList;
