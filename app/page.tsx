import VideosTable from "@/components/table/videosTable";

export default function Home() {
  const videoData = require("");  // Add JSON here until YouTube API is used.

  return (
    <>
      <p>
        The purpose of this app is to be able to view your YouTube Watch Later
        playlist in a tabulated view, allowing you to filter through the
        hundreds of videos you probably have in there and make an effort to get
        through them.
      </p>
      <br />
      <VideosTable data={videoData} />
    </>
  );
}
