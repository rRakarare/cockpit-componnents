import CardGrid from "./_components/card-grid";

function Page() {
  return (
    <div className={"container mt-28 flex flex-col space-y-20"}>
      <div className="space-y-5">
      <h2 className="text-6xl font-bold">Hallo Morty</h2>
      <h2 className="text-6xl font-bold">Wo soll die Reise heute hingehen?</h2>
      </div>
      <CardGrid />
    </div>
  );
}

export default Page;
