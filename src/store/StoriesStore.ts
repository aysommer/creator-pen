import type { ChapterType, StoryType } from "../types";
import { create } from "zustand";

type StoriesStore = {
   items: StoryType[];
   addStory(): void;
   addChapter(storyId: StoryType["id"]): void;
};

function getNewStory(): StoryType {
   return {
      id: crypto.randomUUID(),
      name: "",
      chapters: [],
   };
}

function getNewChapter(num: number): ChapterType {
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
                  const newChapter = getNewChapter(story.chapters.length);
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
