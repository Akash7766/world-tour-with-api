import Countries from "./Components/Countries";
import Loading from "./Components/Loading";
import useCountries from "./Hooks/useCountries";

function App() {
  // distructure important property from useCountries hooks
  const { countries, isError, isLoading } = useCountries();

  return (
    <section className="container mx-auto px-3 sm:px-0">
      <header className=" my-10">
        <h1 className="text-center font-bold text-3xl mb-7 focus:border-none">
          World Tour With API
        </h1>
      </header>
      <main>
        {/* loading Components visible when api working  */}
        {isLoading && <Loading />}

        {/* if any error  */}
        {isError && (
          <h2 className="text-center my-28 font-bold text-red-500">
            {isError}
          </h2>
        )}

        {/* display all data in ui  */}
        {countries && <Countries countries={countries} />}
      </main>
    </section>
  );
}

export default App;
