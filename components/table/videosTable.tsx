import { IVideo } from "@/app/interfaces";
import VideoEntry from "./videoEntry";

export default function VideosTable({ data }: { data: Array<IVideo> }) {
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
        {data.map((video: IVideo) => (
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
