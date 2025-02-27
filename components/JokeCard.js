

export default function JokeCard({ joke }) {
    return (
      <div className="bg-white p-6 shadow-2xl rounded-lg max-w-md text-center">
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
    );
  }