import { IVideo } from "@/app/interfaces";
import VideoEntry from "./videoEntry";
import { filterData } from "@/app/dataFunctions";

export default async function VideosTable({
  data,
  query,
  currentPage,
}: {
  data: Array<IVideo>;
  query: string;
  currentPage: number;
}) {
  const filteredData = await filterData(data, query, currentPage);

  return (
    <table>
      <thead>
        <tr>
          <th>Video Title</th>
          <th>Duration</th>
          <th>URL</th>
          <th>Category Tags</th>
          <th>Watched?</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((video: IVideo) => (
          <VideoEntry
            title={video.title}
            duration={video.duration}
            url={video.url}
            key={video.title}
          />
        ))}
      </tbody>
    </table>
  );
}
