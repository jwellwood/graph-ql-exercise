export type Comment = {
  id: number;
  char_id: string;
  comment: string;
};

export const createEmptyComment = (): Comment => ({
  id: 0,
  char_id: '',
  comment: '',
});
