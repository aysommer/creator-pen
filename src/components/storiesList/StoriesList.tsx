import type { StoryType } from "../../types";
import { List } from "@mantine/core";

type StoriesListProps = {
   items: StoryType[];
};

const StoriesList: React.FC<StoriesListProps> = ({ items }) => {
   return (
      <List>
         {items.map((item) => (
            <List.Item key={item.id}>{item.name}</List.Item>
         ))}
      </List>
   );
};

export default StoriesList;
