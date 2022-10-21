export type StateType = {
  items: ItemType[];
  selected: ItemType[];
};

export type ItemType = {
  id: string;
  char: string;
};
