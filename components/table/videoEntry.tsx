import { IVideo } from "@/app/interfaces";
import Link from "next/link";

export default function VideoEntry(props: IVideo) {
  const title = props.title;
  const duration = props.duration;
  const url = props.url;

  return (
    <tr>
      <td>{title}</td>
      <td>{duration}</td>
      <td>
        <Link href={url} target="_blank">{url}</Link>
      </td>
      <td>
        <p>Technology</p>
      </td>
      <td>
        <input type="checkbox" name="watched" id="watched" />
      </td>
    </tr>
  );
}
