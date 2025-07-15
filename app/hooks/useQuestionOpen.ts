import { create } from "zustand";

interface QuestionOpenState {
  openId: string | null;
  setOpenId: (id: string | null) => void;
}

export const useQuestionOpen = create<QuestionOpenState>((set) => ({
  openId: null,
  setOpenId: (id) => set({ openId: id }),
}));
