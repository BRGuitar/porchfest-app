export type Performance = {
  id: number;
  band: string;
  starttime: Date;
  endtime: Date;
  location: string;
  pagelink: string;
};

export type Band = {
  id: number;
  name: string;
  imglink: string;
  pagelink: string;
  bio1: string;
  bio2: string;
};
