
export default function JokeCard({ joke }) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen" >
        <div className="bg-white text-black flex flex-col items-center justify-center p-6 shadow-lg rounded-lg ">
          <h2 className="text-2xl text-black font-semibold mb-4">Here's your joke:</h2>
          <br />
          {joke?.type === 'single' ? (
            <p className="text-lg text-blue-800">{joke.joke}</p>
          ) : (
            <p className="text-lg">
              {joke.setup} <br /> <strong>{joke.delivery}</strong>
            </p>
          )}
        </div>
      </div>
    );
  }