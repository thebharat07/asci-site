import { Linkedin, Github, Mail, Image } from "lucide-react";

const Team = () => {
  const facultyCoordinators = [
    {
      image: "/photos/hod.png",
      title: "Dr. C.V. Guru Rao",
      subtitle: "Head of CSE Department",
      handle: "@cvgururao",
      borderColor: "#5533eaff",
      gradient: "linear-gradient(145deg, #5533eaff, #000)",
      url: "https://www.linkedin.com/in/gurucvrao/",
    },
    {
      image: "/photos/KBMadhuri.jpg",
      title: "Dr. K.B.Madhuri",
      subtitle: "Professor & Dean, School of CSE, IT & CA",
      handle: "@kbmadhuri",
      borderColor: "#eadb33ff",
      gradient: "linear-gradient(145deg, #eadb33ff, #000)",
      // url: "https://www.linkedin.com/in/example/",
    },
    {
      image: "/photos/Ajay.jpg",
      title: "Ajay Kumar",
      subtitle: "Associate Professor, Dept of CSE",
      handle: "@ajay",
      borderColor: "#ea8533ff",
      gradient: "linear-gradient(145deg, #ea8533ff, #000)",
      // url: "https://example.com/ajay",
    },
    {
      image: "/photos/seetalakshmi.jpg",
      title: "Sathee Lakshmi",
      subtitle: "Assistant Professor, Dept of CSE",
      handle: "@satheelakshmi",
      borderColor: "#ea3367ff",
      gradient: "linear-gradient(145deg, #ea3367ff, #000)",
      // url: "https://example.com/seethalakshmi",
    },
    {
      image: "/photos/leteefa.jpg",
      title: "Lateefa",
      subtitle: "Assistant Professor, Dept of CSE",
      handle: "@lateefa",
      borderColor: "#33eab0ff",
      gradient: "linear-gradient(145deg, #33eab0ff, #000)",
      // url: "https://example.com/lateefa",
    },
  ];

  const coreTeam = [
    {
      name: "Lavanya",
      role: "President",
      image: "/photos/lavanya.jpg",
      linkedin: "#",
      github: "#",
      email: "#",
      borderColor: "#FF6B6B",
      gradient: "linear-gradient(145deg, #FF6B6B, #000)",
      url: "https://www.linkedin.com/in/lavanya-bethina/",
    },
    {
      name: "Aravind",
      role: "Vice President",
      image: "/photos/aravind.jpg",
      linkedin: "#",
      github: "#",
      email: "#",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://linkedin.com/in/aravind-tham",
    },
    {
      name: "Fathima",
      role: "Secretary",
      image: "/photos/fathima.jpg",
      linkedin: "#",
      github: "#",
      email: "#",
      borderColor: "#10B981",
      gradient: "linear-gradient(145deg, #10B981, #000)",
      url: "https://www.linkedin.com/in/tatheer-fathima-5ba16b275/",
    },
    {
      name: "Laxmi",
      role: "Treasurer",
      image: "/photos/laxmi.jpg",
      linkedin: "#",
      github: "#",
      email: "#",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(145deg, #F59E0B, #000)",
      url: "https://www.linkedin.com/in/laxmikandivalasa/",
    },
  ];

  const studentTeam = [
    {
      image: "/photos/moenuddin.jpg",
      name: "Moenuddin",
      role: "Blockchain Lead",
      handle: "",
      url: "https://www.linkedin.com/in/mohammad-moeenuddin-558846226/",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(145deg, #8B5CF6, #000)",
      accentColor: "#A78BFA",
    },
    {
      image: "/photos/asmitha.jpg",
      name: "Ashmitha",
      role: "Cloud Computing Lead ",
      handle: "",
      url: "https://www.linkedin.com/in/ashmitha-yenimireddy-617581290/",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(145deg, #06B6D4, #000)",
      accentColor: "#22D3EE",
    },
    {
      image: "/photos/prasanna.jpg",
      name: "Prasanna",
      role: "Competitive Programming Lead",
      handle: "",
      url: "https://www.linkedin.com/in/sai-prasanna-kotipatruni-307533254/",
      borderColor: "#EC4899",
      gradient: "linear-gradient(145deg, #EC4899, #000)",
      accentColor: "#F472B6",
    },
    {
      image: "/photos/vamsi.jpg",
      name: "Vamsidhar Reddy",
      role: "Cybersecurity Lead",
      handle: "",
      url: "https://www.linkedin.com/in/venkata-vamsidhar-reddy-gajjala-a3409725a/",
      borderColor: "#A855F7",
      gradient: "linear-gradient(145deg, #A855F7, #000)",
      accentColor: "#D8B4FE",
    },
    {
      image: "/photos/navyasri.jpg",
      name: "Navya Sri",
      role: "Data Analytics Lead",
      handle: "",
      url: "https://www.linkedin.com/in/navyasri-rajanala-43049b277/",
      borderColor: "#F97316",
      gradient: "linear-gradient(145deg, #F97316, #000)",
      accentColor: "#FB923C",
    },
    {
      image: "/photos/lakshmiraj.jpg",
      name: "Lakshmi Raj",
      role: "DSA Lead",
      handle: "",
      url: "https://www.linkedin.com/in/lakshmirajvagu",
      borderColor: "#14B8A6",
      gradient: "linear-gradient(145deg, #14B8A6, #000)",
      accentColor: "#2DD4BF",
    },
    {
      image: "/photos/poojitha.jpg",
      name: "Poojitha",
      role: "Networking Lead",
      handle: "",
      url: "https://www.linkedin.com/in/sarvamangala-poojitha-115742262/",
      borderColor: "#2563EB",
      gradient: "linear-gradient(145deg, #2563EB, #000)",
      accentColor: "#60A5FA",
    },
    {
      image: "/photos/varma.jpg",
      name: "Varma",
      role: "Web Development Lead",
      handle: "",
      url: "https://www.linkedin.com/in/varma-sagi-89a024253/",
      borderColor: "#0EA5E9",
      gradient: "linear-gradient(145deg, #0EA5E9, #000)",
      accentColor: "#38BDF8",
    },
    {
      image: "/photos/yamini.jpg",
      name: "Yamini",
      role: "Designing Lead",
      handle: "",
      url: "https://www.linkedin.com/in/yamini-reddipilli/",
      borderColor: "#D946EF",
      gradient: "linear-gradient(145deg, #D946EF, #000)",
      accentColor: "#E879F9",
    },
    {
      image: "/photos/suvarna.jpg",
      name: "Suvarna",
      role: "Documentation Lead",
      handle: "",
      url: "https://www.linkedin.com/in/sarada-suvarna-tekumalla-107400254/",
      borderColor: "#FF6B6B",
      gradient: "linear-gradient(145deg, #FF6B6B, #000)",
      accentColor: "#FF8C8C",
    },
    {
      image: "/photos/harisai.jpg",
      name: "Hari Sai",
      role: "Social Media Handler",
      handle: "",
      url: "https://www.linkedin.com/in/harisai-surishetti/",
      borderColor: "#10B981",
      gradient: "linear-gradient(145deg, #10B981, #000)",
      accentColor: "#6EE7B7",
    },
    {
      image: "/photos/kushal.jpg",
      name: "Kushal Sai",
      role: "Discipline Lead",
      handle: "",
      url: "https://www.linkedin.com/in/kushal-sai2118/",
      borderColor: "#EF4444",
      gradient: "linear-gradient(145deg, #EF4444, #000)",
      accentColor: "#FCA5A5",
    },
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
          <h3 className="text-3xl font-bold text-white mb-10 text-center">
            Faculty Coordinators
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {facultyCoordinators.map((faculty, index) => (
              <div
                key={index}
                className="group rounded-3xl overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-3 border-2"
                style={{
                  borderColor: faculty.borderColor,
                  boxShadow: `0 10px 40px -10px ${faculty.borderColor}40, 0 0 20px -5px ${faculty.borderColor}20`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 50px -5px ${faculty.borderColor}80, 0 0 30px ${faculty.borderColor}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 40px -10px ${faculty.borderColor}40, 0 0 20px -5px ${faculty.borderColor}20`;
                }}
              >
                <div
                  className="relative h-86 overflow-hidden flex items-center justify-center border-b-2"
                  style={{
                    background: faculty.gradient,
                    borderBottomColor: faculty.borderColor,
                  }}
                >
                  <img
                    src={faculty.image}
                    alt={faculty.title}
                    className="h-full w-full object-cover group-hover:opacity-60 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-8 text-center">
                  <h4
                    className="text-2xl font-bold text-white mb-2 transition-colors duration-300"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = faculty.borderColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#FFFFFF";
                    }}
                  >
                    {faculty.title}
                  </h4>
                  <p
                    className="font-semibold text-lg mb-1"
                    style={{ color: faculty.borderColor }}
                  >
                    {faculty.subtitle}
                  </p>
                  {/* <p className="text-gray-400">{faculty.handle}</p> */}

                  {faculty.url && (
                    <a
                      href={faculty.url}
                      className="mt-4 inline-block px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-white"
                      style={{ backgroundColor: faculty.borderColor }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect on LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-10 text-center">
            Core Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.map((member, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-3 border-2"
                style={{
                  borderColor: member.borderColor,
                  boxShadow: `0 10px 40px -10px ${member.borderColor}40, 0 0 20px -5px ${member.borderColor}20`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 50px -5px ${member.borderColor}80, 0 0 30px ${member.borderColor}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 40px -10px ${member.borderColor}40, 0 0 20px -5px ${member.borderColor}20`;
                }}
              >
                <div
                  className="relative h-96 overflow-hidden"
                  style={{
                    background: member.gradient,
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                      <a
                        href={member.url}
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 text-white"
                        style={{
                          borderColor: member.borderColor,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            member.borderColor;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#1f2937";
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="p-6 text-center"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))",
                  }}
                >
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p
                    className="font-semibold"
                    style={{ color: member.borderColor }}
                  >
                    {member.role}
                  </p>
                  {/* <p className="text-gray-400 text-sm mt-1">{member.handle}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white mb-10 text-center">
            Domain Leads
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentTeam.map((member, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-3 border-2"
                style={{
                  borderColor: member.borderColor,
                  boxShadow: `0 10px 40px -10px ${member.borderColor}40, 0 0 20px -5px ${member.borderColor}20`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 50px -5px ${member.borderColor}80, 0 0 30px ${member.borderColor}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 40px -10px ${member.borderColor}40, 0 0 20px -5px ${member.borderColor}20`;
                }}
              >
                <div
                  className="relative h-84 overflow-hidden"
                  style={{
                    background: member.gradient,
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to top, ${member.borderColor}cc, transparent)`,
                    }}
                  >
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                      <a
                        href={member.url}
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 text-white"
                        style={{
                          borderColor: member.borderColor,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            member.borderColor;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#1f2937";
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="p-6 text-center"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))",
                  }}
                >
                  <h4
                    className="text-lg font-bold text-white mb-1 group-hover:transition-colors duration-300"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = member.accentColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#FFFFFF";
                    }}
                  >
                    {member.name}
                  </h4>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: member.borderColor }}
                  >
                    {member.role}
                  </p>
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
