import { Linkedin, Github, Mail, Image } from 'lucide-react';

const Team = () => {
  const facultyCoordinators = [
    {
      name: 'Dr. Robert Anderson',
      role: 'Faculty Coordinator',
      department: 'Computer Science',
      image: 'https://images.pexels.com/photos/2182981/pexels-photo-2182981.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Jennifer Smith',
      role: 'Faculty Co-Coordinator',
      department: 'Information Technology',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const coreTeam = [
    {
      name: 'Alex Johnson',
      role: 'President',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      github: '#',
      email: '#'
    },
    {
      name: 'Sarah Williams',
      role: 'Vice President',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      github: '#',
      email: '#'
    },
    {
      name: 'Michael Chen',
      role: 'Secretary',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      github: '#',
      email: '#'
    },
    {
      name: 'Emily Davis',
      role: 'Treasurer',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      github: '#',
      email: '#'
    }
  ];

  const studentTeam = [
    {
      name: 'David Martinez',
      role: 'Web Development Lead',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Jessica Lee',
      role: 'Data Analytics Lead',
      image: 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ryan Patel',
      role: 'Networking Lead',
      image: 'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Olivia Brown',
      role: 'Blockchain Lead',
      image: 'https://images.pexels.com/photos/3756522/pexels-photo-3756522.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'James Wilson',
      role: 'DSA Lead',
      image: 'https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sophia Taylor',
      role: 'Competitive Programming Lead',
      image: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Daniel Kim',
      role: 'Cloud Computing Lead',
      image: 'https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Emma Garcia',
      role: 'Cybersecurity Lead',
      image: 'https://images.pexels.com/photos/3756657/pexels-photo-3756657.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Lucas Anderson',
      role: 'PR & Logistics Lead',
      image: 'https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the passionate individuals driving innovation and excellence
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-10 text-center">Faculty Coordinators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {facultyCoordinators.map((faculty, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-800 hover:border-blue-500/50"
              >
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center border-b-2 border-blue-500/30">
                  <Image className="w-24 h-24 text-blue-400 opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-8 text-center">
                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{faculty.name}</h4>
                  <p className="text-blue-400 font-semibold text-lg mb-1">{faculty.role}</p>
                  <p className="text-gray-400">{faculty.department}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-10 text-center">Core Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-800 hover:border-blue-500/50"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-blue-500"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={member.github}
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-blue-500"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={member.email}
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-blue-500"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">{member.name}</h4>
                  <p className="text-blue-400 font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white mb-10 text-center">Domain Leads</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentTeam.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-800 hover:border-blue-500/50"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">{member.name}</h4>
                  <p className="text-blue-400 font-semibold text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
