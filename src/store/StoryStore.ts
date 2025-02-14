import { create } from "zustand";

type StoryStore = {
   id: string | null;
   text: object | null;
};

const useStore = create<StoryStore>(() => ({
   id: null,
   text: null,
}));

export default useStore;
