import { atom } from 'jotai';

export const CandyEditModalAtom = atom<boolean>(false);
export const ImageEditModalAtom = atom<boolean>(false);
export const RewardModalAtom = atom<boolean>(false);
export const DeleteModalAtom = atom<boolean>(false);
export const CheckedEmoticon = atom<string>('');

export const openCandyModal = atom<boolean>(false);
export const openCategoryModal = atom<boolean>(false);
export const DetailCandyEditModalAtom = atom<boolean>(false);
