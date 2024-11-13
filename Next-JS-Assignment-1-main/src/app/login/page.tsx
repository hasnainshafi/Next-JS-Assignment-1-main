import Navbar from '../components/navbar';
import Footer from "../components/footer";

export default function Login() {
    return (
        <div>
        <Navbar/>
        <div className="bg-gray-100 min-h-screen flex flex-col">
  <main className="w-2/8 mx-auto p-6 flex-grow">
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl text-black text-center font-semibold mb-4">Welcome Back!</h2>
      <form className="space-y-4">
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
            <label className="block text-gray-700" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-md hover:bg-white hover:text-black hover:border-2 transition"
          >
            Login
          </button>
      </form>
      <p className="mt-4 text-center text-gray-600">
          Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register here</a>
        </p>
    </div>
  </main>

  <Footer/> 
</div>
    </div>
    );
  }
  