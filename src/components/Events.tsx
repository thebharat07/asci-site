import { Calendar, Users, Trophy, Zap } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'HackTech 2025',
      date: 'March 15-17, 2025',
      type: 'Hackathon',
      description: '48-hour coding marathon where teams build innovative solutions to real-world problems.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      participants: '200+',
      icon: Trophy
    },
    {
      title: 'AI Workshop Series',
      date: 'Every Saturday',
      type: 'Workshop',
      description: 'Hands-on sessions covering machine learning fundamentals and practical applications.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      participants: '50+',
      icon: Zap
    },
    {
      title: 'Tech Talk',
      date: 'Monthly',
      type: 'Guest Lecture',
      description: 'Industry experts share insights on emerging technologies and career guidance.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
      participants: '100+',
      icon: Users
    }
  ];

  const upcomingEvents = [
    { name: 'Web Development Bootcamp', date: 'Jan 20, 2025' },
    { name: 'Code Debug Challenge', date: 'Feb 5, 2025' },
    { name: 'Tech Quiz Competition', date: 'Feb 18, 2025' },
    { name: 'IoT Workshop', date: 'Mar 2, 2025' }
  ];

  return (
    <section id="events" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Events</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join our exciting events and enhance your technical skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-800 hover:border-blue-500/50"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {event.type}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-blue-400 text-sm font-semibold mb-3">
                    <Calendar size={16} className="mr-2" />
                    {event.date}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{event.title}</h3>
                  <p className="text-gray-400 mb-4">{event.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div className="flex items-center text-gray-300">
                      <Icon size={20} className="mr-2 text-blue-400" />
                      <span className="font-semibold">{event.participants}</span>
                      <span className="ml-1 text-sm">participants</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-800 shadow-lg shadow-blue-500/10">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-between group cursor-pointer border border-gray-800 hover:border-blue-500/50 transform hover:-translate-y-1"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/50">
                    <Calendar className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">{event.name}</h4>
                    <p className="text-sm text-gray-400">{event.date}</p>
                  </div>
                </div>
                <div className="text-blue-400 group-hover:translate-x-2 transition-transform">→</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
