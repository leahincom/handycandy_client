import { atom } from 'jotai';

export const CandyEditModalAtom = atom<boolean>(false);
export const ImageEditModalAtom = atom<boolean>(false);
export const CompleteModalAtom = atom<boolean>(false);

export const openCandyModal = atom<boolean>(false);
export const openCategoryModal = atom<boolean>(false);
