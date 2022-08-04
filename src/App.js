import Countries from "./Components/Countries";
import Loading from "./Components/Loading";
import useCountries from "./Hooks/useCountries";

function App() {
  const { countries, isError, isLoading } = useCountries();
  console.log(countries);

  return (
    <section className="container mx-auto px-3 sm:px-0">
      <header>
        <h1 className="text-center font-bold text-3xl my-10">
          World Tour With API
        </h1>
      </header>
      <main>
        {isLoading && <Loading />}
        {isError && (
          <h2 className="text-center my-28 font-bold text-red-500">
            {isError}
          </h2>
        )}
        {countries && <Countries countries={countries} />}
      </main>
    </section>
  );
}

export default App;
