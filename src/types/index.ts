// src/types.ts
export interface Video {
  url: string;
}

export interface Link {
  name: string;
  url: string;
}

export interface ContentDataType {
  namesite: string;
  bio: string;
  description: string;
  videos: Video[];
  links: Link[];
}

