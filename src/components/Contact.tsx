import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    // Change this email to your contact email
    const contactEmail = 'asci_hub@gvpce.ac.in';

    // Create mailto link with encoded data
    const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(
      `[Contact Form] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open mail client
    window.location.href = mailtoLink;

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "asci_hub@gvpce.ac.in",
      link: "mailto:asci_hub@gvpce.ac.in",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "CSE Department, GVPCE, Visakhapatnam, India",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center  gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.link}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 text-center border border-gray-800 hover:border-blue-500/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-blue-500/50">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {info.title}
                </h3>
                <p className="text-gray-400">{info.detail}</p>
              </a>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl shadow-blue-500/20 overflow-hidden border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 p-12 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                Whether you want to join our club, collaborate on a project, or
                just say hello, we're always excited to hear from fellow tech
                enthusiasts.
              </p>
              <div className="space-y-4">
                <div className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
                  <span className="text-blue-100">
                    Quick response within 24 hours
                  </span>
                </div>
                <div className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
                  <span className="text-blue-100">
                    Join our community of innovators
                  </span>
                </div>
                <div className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
                  <span className="text-blue-100">
                    Access to exclusive events and workshops
                  </span>
                </div>
              </div>
            </div>

            <div className="p-12 bg-gray-900">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300"
                    placeholder="Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300"
                    placeholder="student@gvpce.ac.in"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-4 rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50 hover:shadow-blue-400/60 hover:shadow-xl flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
