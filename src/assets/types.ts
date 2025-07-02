// Home
export type HomeData = {
  aboutMe: AboutMeData;
  aboutInterested: AboutInterestedData;
  aboutList: AboutListData[];
};

export type AboutMeData = {
  name: string;
  role: string;
  message: string;
};

export type AboutInterestedData = {
  title: string;
  interestedList: string[];
};

export type AboutListData = {
  title: string;
  contentsList: string[][];
};

// Labo
export type LaboData = {
  laboContents: LaboContentData[];
};

export type LaboContentData = {
  title: string;
  description: string;
  link: string;
};

// Works
export type WorksData = {
  worksContents: WorksContentData[];
};

export type WorksContentData = {
  title: string;
  description: string;
  link: string;
  techList: string[];
};

// Experience
export type ExperienceData = {
  pjList: PjListData[];
};

export type PjListData = {
  pjTitle: string;
  pjDescription: string;
  pjPeriod: string[];
  pjTechList: string[];
}