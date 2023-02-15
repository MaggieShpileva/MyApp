import { DataState } from "../Redux/reducers/reducer";

export type Post = {
  alt: string;
  avg_color: string;
  height: number;
  id: number;
  liked: boolean;
  photographer: string;
  photographer_id: number;
  photographer_url: string;
  src: {
    portrait: string;
  };
  url: string;
  width: number;
};

export type Posts = Post[];

export type RootState = {
  myData: DataState;
};
