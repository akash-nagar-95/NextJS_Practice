import Link from "next/link";

export default function NotFound() {
  return(
    <div className="flex items-center justify-center min-h-screen" >
      <div className="bg-blue-300 text-black flex flex-col items-center justify-center p-6 rounded-lg shadow-lg " >
        <h1 className="text-xl font-bold" >Not Found - (404 Error)</h1>
        <p className="text-center" >The requested resource is not defined by the developer</p>
        <Link href='/' className="mt-4 hover:underline text-blue-500 hover:text-blue-900 " >Return to Home</Link>
      </div>
    </div>
  )
}