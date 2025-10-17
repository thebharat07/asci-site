import { Target, Users, Lightbulb, Award, Image } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To foster innovation and technical excellence among students through hands-on learning and collaborative projects.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a vibrant community of tech enthusiasts who learn, grow, and innovate together.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Encouraging creative thinking and problem-solving through workshops, hackathons, and competitions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for excellence in every project and event, pushing boundaries and setting new standards.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            About <span className="text-blue-400">Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are a student-driven technical club dedicated to nurturing talent, fostering innovation,
            and creating opportunities for aspiring technologists.
          </p>
        </div>

        <div className="mb-16">
          <div className="relative h-96 rounded-3xl overflow-hidden group bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 shadow-lg shadow-blue-500/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Image className="w-20 h-20 text-blue-400 mx-auto mb-4 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                <p className="text-gray-400 text-lg font-medium">Group Photo Placeholder</p>
                <p className="text-gray-500 text-sm mt-2">Team photo will be displayed here</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-800 hover:border-blue-500/50"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-blue-500/50">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-blue-500/30 hover:shadow-blue-400/40 transition-all duration-500 transform hover:scale-[1.02]">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-blue-100">Active Members</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-blue-100">Events Organized</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">20+</div>
              <div className="text-blue-100">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
