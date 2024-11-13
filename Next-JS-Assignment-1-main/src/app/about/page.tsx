import Navbar from '../components/navbar';
import Footer from "../components/footer";

export default function About(){
    return (
        <div>
           <Navbar/> 
           <div className="bg-gray-100 min-h-screen flex flex-col">

      <main className="max-w-4xl mx-auto p-6 flex-grow">
        <section className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h2 className="text-2xl text-black font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700">
            We are a dedicated team of professionals committed to providing high-quality services tailored to meet our clients' needs. Our passion for excellence drives us to innovate and deliver exceptional results.
          </p>
          <p className="mt-4 text-gray-700">
            With years of experience in our respective fields, we leverage our expertise to tackle challenges and help businesses grow. Our approach is centered around collaboration, ensuring that we work closely with our clients to achieve their goals.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h2 className="text-2xl text-black font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to empower businesses with innovative solutions and outstanding service. We aim to build lasting relationships with our clients based on trust, integrity, and mutual success.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h2 className="text-2xl text-black font-semibold mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <h3 className="text-xl text-black font-semibold">Alice Johnson</h3>
              <p className="mt-2 text-gray-700">CEO & Founder</p>
              <p className="mt-1 text-gray-600">
                Alice has over 15 years of experience in the industry, leading projects and teams to success. Her vision and leadership drive the company's strategic direction.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <h3 className="text-xl text-black font-semibold">Bob Smith</h3>
              <p className="mt-2 text-gray-700">CTO</p>
              <p className="mt-1 text-gray-600">
                Bob is a technology expert who ensures that we leverage the latest innovations to provide our clients with cutting-edge solutions. His technical knowledge is invaluable.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <h3 className="text-xl text-black font-semibold">Carol Lee</h3>
              <p className="mt-2 text-gray-700">Marketing Director</p>
              <p className="mt-1 text-gray-600">
                Carol leads our marketing strategies, focusing on building our brand and connecting with clients. Her creativity and insights have greatly contributed to our growth.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <h3 className="text-xl text-black font-semibold">David Brown</h3>
              <p className="mt-2 text-gray-700">Lead Designer</p>
              <p className="mt-1 text-gray-600">
                David is passionate about design and user experience, ensuring that our solutions are not only functional but also visually appealing. His attention to detail sets our work apart.
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