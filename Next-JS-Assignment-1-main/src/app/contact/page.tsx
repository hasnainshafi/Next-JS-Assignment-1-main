import Navbar from '../components/navbar';
import Footer from "../components/footer";
export default function Contact(){
    return (
        <div>
            <Navbar/>
            <div className="bg-gray-100 min-h-screen flex flex-col">
      <main className="w-9/12 mx-auto p-6 flex-grow">
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h2 className="text-2xl text-black font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-md hover:bg-white hover:text-black hover:border-2 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      <Footer/> 
    </div>
        </div>
    );
}