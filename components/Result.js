import Thumnail from "./Thumnail";

function Result({ result }) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {result.map((result) => (
        <Thumnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Result;
