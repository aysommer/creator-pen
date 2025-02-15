export type StoryType = {
   id: string;
   name: string;
   chapters: ChapterType[];
};

export type ChapterType = {
   id: string;
   num: number;
   content: string;
};
