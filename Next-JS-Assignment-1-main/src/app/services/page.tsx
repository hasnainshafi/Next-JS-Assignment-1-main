import Navbar from '../components/navbar';
import Footer from "../components/footer";
export default function Services(){
    return (
        <div>
            <Navbar/>
            <div className="bg-gray-100 min-h-screen flex flex-col">
      <main className="max-w-4xl mx-auto p-6 flex-grow">
        <section className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h2 className="text-2xl text-black font-semibold mb-4">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <h3 className="text-xl text-black font-semibold">Service One</h3>
              <p className="mt-2 text-gray-700">
                Description of Service One. This service offers a comprehensive solution to meet your needs effectively.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <h3 className="text-xl text-black font-semibold">Service Two</h3>
              <p className="mt-2 text-gray-700">
                Description of Service Two. We specialize in providing high-quality support and services tailored to you.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <h3 className="text-xl text-black font-semibold">Service Three</h3>
              <p className="mt-2 text-gray-700">
                Description of Service Three. Our team is dedicated to delivering results that exceed expectations.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <h3 className="text-xl text-black font-semibold">Service Four</h3>
              <p className="mt-2 text-gray-700">
                Description of Service Four. We provide innovative solutions to drive your success forward.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer/>
    </div>
        </div>
    );
}