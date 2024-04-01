export type Performance = {
  id: Number;
  band: string;
  starttime: Date;
  endtime: Date;
  location: string;
  pagelink: string;
};

export type Band = {
  id: Number;
  name: string;
  imglink: string;
  pagelink: string;
  bio1: string;
  bio2: string;
};
