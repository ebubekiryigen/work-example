import Movies from "@/component/movies";

export default async function Home({searchParams}) {

  const request = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=<api_key>&language=en-US&page=1`, {next: {revalidate: 10000}})
  const mov = await request.json()

  return (
    <div className="flex items-center flex-wrap gap-3 justify-center">
    {
      mov.results.map((dt,i) => (
        <Movies dt={dt} key={i} />
      ))
    }
    </div>
  );
}
