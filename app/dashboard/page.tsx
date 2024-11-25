import VideosTable from "@/components/table/videosTable";
import Pagination from "@/components/pagination";
import { getTablePages } from "../dataFunctions";

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  
  const videoData = require("../../public/json/youtubeWatchList.json");
  const totalPages = await getTablePages(videoData, query);

  return (
    <>
      <p>
        The purpose of this app is to be able to view your YouTube Watch Later
        playlist in a tabulated view, allowing you to filter through the
        hundreds of videos you probably have in there and make an effort to get
        through them.
      </p>
      <br />
      <Pagination totalPages={totalPages} />
      <VideosTable data={videoData} query={query} currentPage={currentPage} />
    </>
  );
}
