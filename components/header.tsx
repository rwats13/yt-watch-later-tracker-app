import SearchBar from "./searchBar";

export default function Header() {
  return (
    <header className="flex gap-5 mx-9">
      <h1 className="text-2xl py-2">
        YouTube Watch Later Tracker App
      </h1>
      <SearchBar />
    </header>
  );
}
