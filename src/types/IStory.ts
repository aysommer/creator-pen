export type StoryType = {
   id: string;
   name: string;
   description: string;
   chapters: ChapterType[];
   selectedChapter: ChapterType["id"] | null;
};

export type ChapterType = {
   id: string;
   num: number;
   content: string;
};
