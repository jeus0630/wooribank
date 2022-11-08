import { atom } from "recoil";

export const paginationNumberState = atom<number>({
  key: "paginationNumber",
  default: 0,
});
