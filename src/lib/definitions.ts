export type Performance = {
  id: Number;
  band: string;
  starttime: Date;
  endtime: Date;
  location: string;
};

export type Band = {
  id: Number;
  name: string;
  bio: string;
  imglink: string;
};
