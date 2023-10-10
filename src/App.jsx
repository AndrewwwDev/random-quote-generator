import { useEffect, useState } from "react";
import { getRandomQuote } from "./utils/quote";

function App() {
  const [quote, setQuote] = useState();

  async function getQuote() {
    try {
      const randomQuote = await getRandomQuote();
      setQuote(randomQuote);
    } catch (error) {
      console.error("Error en la solicitu:", error);
    }
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <>
      <header className="fixed right-3 top-3">
        <button
          className="flex mr-auto items-center gap-2 p-2 cursor-pointer text-gray-2"
          type="button"
          onClick={() => getQuote()}
        >
          <p>random</p>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </header>
      {quote && (
        <main className="container mx-auto px-5 my-40 flex items-center justify-center">
          <div className="md:w-3/4">
            <p className="text-black text-4xl font-medium border-l-8 border-yellow-300 pl-12 md:pl-24">{`"${quote.quoteText}"`}</p>
            <div className="pl-20 mt-20">
              <button
                type="button"
                className="flex justify-between items-center py-12 px-7 w-full group hover:bg-gray-1"
              >
                <h1>Autor</h1>
              </button>
            </div>
          </div>
        </main>
      )}

      <footer className="text-sm text-center py-6">
        created by <span className="font-bold">Andrew</span> - devChallenges.io
      </footer>
    </>
  );
}

export default App;
