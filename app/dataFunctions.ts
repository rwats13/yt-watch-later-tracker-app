import { IVideo } from "./interfaces";

export async function filterData(data: Array<IVideo>, query: string, currentPage: number) {
  // TODO: This function will need to be updated once the YouTube API is used. Currently it only caters to JSON data.
  const offset = (currentPage - 1) * 10;    // To show 10 videos per page.
  
  const result = data.filter(function (video: IVideo) {
    if (video.title.toLowerCase().includes(query)) {
      return video;
    }
  });

  // TODO: Fix this so that the number of pages matches the search query, not total amount of videos.
  return result.splice(offset, 10);
}

export async function getTablePages(data: Array<IVideo>, query: string) {
  const totalPages = Math.ceil(data.length) / 10;
  return totalPages;
}
