import type { ChapterType } from "../../types";
import { List } from "@mantine/core";

type ChaptersListProps = {
   items: ChapterType[];
};

const ChaptersList: React.FC<ChaptersListProps> = ({ items }) => {
   return (
      <List>
         {items.map((item) => (
            <List.Item key={item.id}>Chapter #{item.num}</List.Item>
         ))}
      </List>
   );
};

export default ChaptersList;
