import { atom } from 'recoil';

export type Note = {
  id: number;
  title: string;
  description: string | null;
  creationDate: Date;
};

export const notesState = atom<Note[]>({
  key: 'notesState',
  default: [],
});

export const selectedNoteState = atom<Note | null>({
  key: 'selectedNoteState',
  default: null,
});

export const titleState = atom<string>({
  key: 'titleState',
  default: '',
});

export const descriptionState = atom<string>({
  key: 'descriptionState',
  default: '',
});
