import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
       <Navbar/> 
        <div className="bg-gray-100 min-h-screen flex flex-col">

      <main className="max-w-4xl mx-auto p-6 flex-grow">
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h2 className="text-2xl text-black font-semibold">Welcome to My Website!</h2>
          
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quasi architecto debitis sed temporibus. Quod, nisi tempore possimus itaque provident nulla nobis maiores quaerat cum eos unde praesentium cupiditate dignissimos.
          </p>
        </div>
      </main>
      
      <Footer/> 
    </div>
    </div>
  );
}
