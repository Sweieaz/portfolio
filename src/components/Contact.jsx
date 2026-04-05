import emailjs from "emailjs-com";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_bmk4kw4",
        "template_9imsd8k",
        formData,
        "Xip0fIpMMlfTtJojf",
      )
      .then(() => {
        alert("Message sent!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to send message");
      });
  };

  return (
    <section id="contact" class="py-10 md:py-25 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-gray-50 lg:w-100 p-8 rounded-lg md:rounded-bl-4xl md:rounded-tr-4xl shadow-lg">
          <h2 className="text-3xl font-secondary text-black/60 mb-6">
            Get In Touch
          </h2>
          <p className="font-primary text-black/60 text-lg italic">
            Open to collaborations, projects and new opportunities. Feel free to
            reach out....
          </p>
          <address className="mt-10 space-y-6 not-italic text-black/60 font-primary">
            <div className="flex items-start border-b border-purple-600 pb-4">
              <i className="fa-solid fa-location-dot mt-1 mr-3 text-purple-600 text-lg"></i>
              <p className="mt-0 text-black/60"> Nairobi, Kenya</p>
            </div>
            <div className="flex items-start border-b border-purple-600 pb-4">
              <i className="fa-solid fa-phone mt-1 mr-3 text-purple-600 text-lg"></i>
              <p className="mt-0 ">(+254)708755369</p>
            </div>
            <div className="flex items-start border-b border-purple-600 pb-4">
              <i className="fa-solid fa-envelope mt-1 mr-3 text-purple-600 text-lg"></i>
              <p className="mt-0 ">tijjansamoka@gmail.com</p>
            </div>
            <div className="flex items-start ">
              <i className="fa-brands fa-linkedin mt-1 mr-3 text-purple-600 text-lg"></i>
              <p className="mt-0 ">linkedin.com/in/tijjan-samoka-a09906213</p>
            </div>
          </address>
        </div>

        <div className="w-full">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                for="name"
                className="block text-black/60 font-primary mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600 bg-gray-50"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                for="email"
                className="block text-black/60 font-primary mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600 bg-gray-50"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                for="message"
                className="block text-black/60 font-primary mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600 bg-gray-50"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white font-secondary2 px-8 py-3 rounded-2xl hover:bg-purple-700 transition-all duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
