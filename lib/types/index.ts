export interface MediaInterface {
  externalMediaFile: string | number | boolean | readonly string[] | readonly number[] | readonly boolean[] | null | undefined;
  _id: string;
  title: string;
  description: string;
  duration: string;
  genre: string;
  tags: string[];
  performers: string;
  thumbnail_url: string;
  media_type: string;
}