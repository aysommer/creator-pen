import type { ChapterType, StoryType } from "../types";
import { create } from "zustand";
import { NEW_STORY_KEY } from "../consts";

type StoriesStore = {
   items: StoryType[];
   addStory(): void;
   addChapter(storyId: StoryType["id"]): void;
};

function getNewStory(): StoryType {
   return {
      id: NEW_STORY_KEY,
      name: "New story",
      description: "",
      chapters: [],
      selectedChapter: null,
   };
}

function getNewChapter(num: number = 1): ChapterType {
   return {
      id: crypto.randomUUID(),
      num,
      content: "",
   };
}

const useStore = create<StoriesStore>((set) => ({
   items: [],
   addStory() {
      return set((state) => {
         const hasNewStory = state.items.some((item) => item.id === NEW_STORY_KEY);
         if (hasNewStory) {
            return state;
         }

         const newStory = getNewStory();
         return {
            ...state,
            items: [...state.items, newStory],
         };
      });
   },
   addChapter(storyId) {
      return set((state) => {
         return {
            ...state,
            items: state.items.map((story) => {
               if (story.id === storyId) {
                  const newChapter = getNewChapter(story.chapters.length + 1);
                  return {
                     ...story,
                     chapters: [...story.chapters, newChapter],
                  };
               }
               return story;
            }),
         };
      });
   },
}));

export default useStore;
