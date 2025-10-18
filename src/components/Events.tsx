import { useState } from "react";
import { Calendar, MapPin, Users, Activity, X, ChevronLeft, ChevronRight } from "lucide-react";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const eventshowcase = [
    {
      event_id: 1,
      event_name: "Inaugration of AsCI",
      date: "5th October 2024",
      venue:
        "Main Auditorium, Gayatri Vidya Parishad College of Engineering (Autonomous)",
      list_of_activities: ["Online Quiz Contest"],
      domain: "AsCI",
      participants: 150,
      description:
        "The inauguration of AsCI marked the beginning of a new era of innovation and collaboration. The event introduced the club's vision, featured inspiring speeches, and concluded with an exciting Tech Quiz that encouraged students to showcase their technical knowledge and enthusiasm for learning.",
      color: "#3B82F6",
      borderColor: "#2563EB",
      images: []
    },
    {
      event_id: 2,
      event_name: "LOLgorithms",
      date: "5th October 2024",
      venue:
        "Main Auditorium, Gayatri Vidya Parishad College of Engineering (Autonomous)",
      list_of_activities: ["Tech Related Meme Making Contest"],
      domain: "AsCI",
      participants: 50,
      description:
        "LOLgorithms was a unique meme-making contest where students used humor to explain technical concepts related to algorithms and computer science.",
      color: "#EC4899",
      borderColor: "#DB2777",
      images: []
    },
    {
      event_id: 3,
      event_name: "Mindware",
      date: "5th October 2024",
      venue:
        "Main Auditorium, Gayatri Vidya Parishad College of Engineering (Autonomous)",
      list_of_activities: ["Online Quiz Contest"],
      domain: "AsCI",
      participants: 50,
      description:
        "Mindware was an engaging online quiz contest that tested participants' knowledge of computer science and technology.",
      color: "#A855F7",
      borderColor: "#9333EA",
      images: []
    },
    {
      event_id: 4,
      event_name: "Cyber Hive",
      date: "30th November 2024",
      venue:
        "Mini Auditorium, Gayatri Vidya Parishad College of Engineering (Autonomous)",
      list_of_activities: ["Interactive Seminar"],
      domain: "Cybersecurity & Networking",
      participants: 50,
      description:
        "Cyber Hive was an interactive seminar focused on cybersecurity awareness and career opportunities in cybersecurity.",
      color: "#0EA5E9",
      borderColor: "#0284C7",
      images: []
    },
    {
      event_id: 5,
      event_name: "Output Unveiled",
      date: "7th December 2024",
      venue:
        "MIC Lab, Gayatri Vidya Parishad College of Engineering (Autonomous)",
      list_of_activities: ["Coding Contest for 2nd and 3rd Year Students"],
      domain: "DSA & CP",
      participants: 50,
      description:
        "Output Unveiled was an intense coding contest where participants solved 16 programming challenges in C and C++.",
      color: "#F97316",
      borderColor: "#EA580C",
      images: []
    },
    {
      event_id: 6,
      event_name: "PyMind",
      date: "7th December 2024",
      venue:
        "MIC Lab, Gayatri Vidya Parishad College of Engineering (Autonomous)",
      list_of_activities: ["Python Quiz for 1st Year Students"],
      domain: "DSA & CP",
      participants: 50,
      description:
        "PyMind was an engaging Python-based quiz competition for first-year students.",
      color: "#8B5CF6",
      borderColor: "#7C3AED",
      images: []
    },
    {
      event_id: 7,
      event_name: "Crypto Countdown: Final Block of 2024",
      date: "27th & 28th December 2024",
      venue:
        "Online, Gayatri Vidya Parishad College of Engineering (Autonomous)",
      list_of_activities: ["Interactive Seminar"],
      domain: "Blockchain",
      participants: 50,
      description:
        "Crypto Countdown was a two-day online seminar covering blockchain fundamentals and smart contracts.",
      color: "#06B6D4",
      borderColor: "#0891B2",
      images: []
    },
    {
      event_id: 8,
      event_name: "GET GIT GO – Master Version Control",
      date: "7th February 2025",
      venue: "LAB, Gayatri Vidya Parishad College of Engineering (Autonomous)",
      list_of_activities: ["Hands-on Git Workshop"],
      domain: "Web Development",
      participants: 50,
      description:
        "A structured, practical workshop on Git and GitHub, including real-world applications and best practices.",
      color: "#2563EB",
      borderColor: "#1D4ED8",
      images: []
    },
    {
      event_id: 9,
      event_name: "Master The Code",
      date: "14th Feb 2025",
      venue:
        "Main Auditorium, Gayatri Vidya Parishad College of Engineering (Autonomous)",
      list_of_activities: [
        "Timed Coding Competition with Algorithmic Challenges",
      ],
      domain: "DSA & CP",
      participants: 50,
      description:
        "A timed coding competition with algorithmic challenges to test participants' problem-solving skills and coding speed.",
      images: [
        "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      color: "#F97316",
      borderColor: "#EA580C",
    },
    {
      event_id: 10,
      event_name: "Skill Over Knowledge – Thriving in the AI Era",
      date: "19th February 2025",
      venue:
        "Main Auditorium, Gayatri Vidya Parishad College of Engineering (Autonomous)",
      list_of_activities: [
        "An interactive session about the upcoming AI world",
      ],
      domain: "General",
      participants: 50,
      description:
        "The event highlighted the growing importance of hands-on skills over theoretical knowledge in today's education system.",
      images: [
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      color: "#6366F1",
      borderColor: "#4F46E5",
    },
    {
      event_id: 11,
      event_name: "Android Dev Sprint",
      date: "24th Feb 2025",
      venue:
        "MIC Lab, Gayatri Vidya Parishad College of Engineering (Autonomous)",
      list_of_activities: [
        "Hands-on Workshop",
        "Interactive Session on Android Development",
      ],
      domain: "Mobile Development",
      participants: 50,
      description:
        "A hands-on workshop aimed at introducing 1st and 2nd-year students to the fundamentals of Android development.",
      images: [
        "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      color: "#10B981",
      borderColor: "#059669",
    },
    {
      event_id: 12,
      event_name: "Catch The Phish",
      date: "28th March 2025",
      venue:
        "MIC Lab, Gayatri Vidya Parishad College of Engineering (Autonomous)",
      list_of_activities: [
        "INTRODUCTORY SESSION ON CYBERSECURITY & PHISHING",
        "CATCH THE PHISH CHALLENGE (MAIN COMPETITION)",
        "INTERACTIVE EXPERT SESSION BY DR. P. KRISHNA SUBBA RAO",
        "Q&A AND DISCUSSION SESSION",
        "ACKNOWLEDGMENT AND CLOSING",
      ],
      domain: "Cybersecurity & Networking",
      participants: 50,
      description:
        "To educate students on the dangers of phishing attacks and strengthen their ability to recognize and mitigate cyber threats through an interactive and engaging competition.",
      images: [
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/5474293/pexels-photo-5474293.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      color: "#0EA5E9",
      borderColor: "#0284C7",
    },
    {
      event_id: 13,
      event_name: "Byte the Byte",
      date: "3rd April 2025 & 4th April 2025",
      venue:
        "MIC Lab, Gayatri Vidya Parishad College of Engineering (Autonomous)",
      list_of_activities: [
        "Fundamentals of Git",
        "Fundamentals of Linux Commands",
        "Online Quiz",
      ],
      domain: "Club Activity",
      participants: 50,
      description:
        "A two days workshop is conducted on Linux Commands, GitHub and Programming Language.",
      images: [
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      color: "#14B8A6",
      borderColor: "#0D9488",
    },
    {
      event_id: 14,
      event_name: "DataSprint - Crack the data, Win the sprint",
      date: "Coming Soon",
      venue: "TBA",
      list_of_activities: ["Data Analytics Competition"],
      domain: "Data Analytics",
      participants: 50,
      description: "An exciting data analytics competition where participants will analyze complex datasets and derive meaningful insights.",
      images: [
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      color: "#A855F7",
      borderColor: "#9333EA",
    },
    {
      event_id: 15,
      event_name: "UI Forge",
      date: "7th August 2025",
      venue:
        "Online, Gayatri Vidya Parishad College of Engineering (Autonomous)",
      list_of_activities: [
        "Instructions how to participate",
        "Selecting Winner who got more number of votes",
      ],
      domain: "Web Development",
      participants: 50,
      description:
        "We'll Give prompt to everyone and implement it and after completing it we'll conduct voting. The one who gets the most votes for the best implementation will be the winner",
      images: [],
      color: "#2563EB",
      borderColor: "#1D4ED8",
    },
    {
      event_id: 16,
      event_name: "Explore the cloud",
      date: "22nd August 2025",
      venue:
        "Main Auditorium, Gayatri Vidya Parishad College of Engineering (Autonomous)",
      list_of_activities: ["Interactive Session on Cloud Computing"],
      domain: "Cloud Computing",
      participants: 50,
      description:
        "To educate students on the cloud computing and strengthen their ability in cloud through an interactive.",
      images: [
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      color: "#06B6D4",
      borderColor: "#0891B2",
    },
    {
      event_id: 17,
      event_name: "Decode the World of Cybersecurity",
      date: "11th October 2025",
      venue:
        "Main Auditorium, Gayatri Vidya Parishad College of Engineering (Autonomous)",
      list_of_activities: [
        "Insighful session on CTFs, Bug Bounties and Growth in cyber security",
      ],
      domain: "Cybersecurity & Networking",
      participants: 50,
      description:
        "To educate students on the Bug Bounties, CTFs and strengthen their ability in Cybersecurity an interactive and engaging competition.",
      images: [
        "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      color: "#0EA5E9",
      borderColor: "#0284C7",
    },
  ];

  const handlePrevImage = () => {
    if (selectedEvent && selectedEvent.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedEvent.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedEvent && selectedEvent.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === selectedEvent.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const openEventDetail = (event: any) => {
    setSelectedEvent(event);
    setCurrentImageIndex(0);
  };

  return (
    <section id="events" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!selectedEvent ? (
          <>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our <span className="text-blue-400">Events</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our exciting tech events and seminars
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventshowcase.map((event) => (
                <div
                  key={event.event_id}
                  onClick={() => openEventDetail(event)}
                  className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-2 border-2 hover:shadow-2xl"
                  style={{
                    borderColor: event.borderColor,
                    boxShadow: `0 10px 40px -10px ${event.color}40, 0 0 20px -5px ${event.color}20`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 20px 50px -5px ${event.color}80, 0 0 30px ${event.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 10px 40px -10px ${event.color}40, 0 0 20px -5px ${event.color}20`;
                  }}
                >
                  <div
                    className="relative h-48 overflow-hidden"
                    style={{
                      background: `linear-gradient(145deg, ${event.color}, #000)`,
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Activity size={64} className="text-white opacity-30" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                      style={{
                        backgroundColor: `${event.color}20`,
                        color: event.color,
                      }}
                    >
                      {event.domain}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {event.event_name}
                    </h3>
                    <div className="flex items-center text-gray-400 text-sm mb-2">
                      <Calendar
                        size={16}
                        className="mr-2"
                        style={{ color: event.color }}
                      />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users
                        size={16}
                        className="mr-2"
                        style={{ color: event.color }}
                      />
                      {event.participants} participants
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="animate-fadeIn">
            <button
              onClick={() => setSelectedEvent(null)}
              className="mb-6 flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white transition-all duration-300 border border-gray-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
            >
              <X size={20} />
              Back to Events
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {selectedEvent.images && selectedEvent.images.length > 0 ? (
                  <div className="relative rounded-2xl overflow-hidden border-2 h-96 group" style={{ borderColor: selectedEvent.borderColor }}>
                    <img
                      src={selectedEvent.images[currentImageIndex]}
                      alt={`${selectedEvent.event_name} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {selectedEvent.images.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border border-white/20"
                          style={{ backdropFilter: 'blur(10px)' }}
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border border-white/20"
                          style={{ backdropFilter: 'blur(10px)' }}
                        >
                          <ChevronRight size={24} />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {selectedEvent.images.map((_: any, idx: number) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className="w-2 h-2 rounded-full transition-all duration-300"
                              style={{
                                backgroundColor: idx === currentImageIndex ? selectedEvent.color : 'rgba(255,255,255,0.5)',
                                width: idx === currentImageIndex ? '24px' : '8px'
                              }}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div
                    className="rounded-2xl overflow-hidden border-2 h-96"
                    style={{
                      borderColor: selectedEvent.borderColor,
                      background: `linear-gradient(145deg, ${selectedEvent.color}, #000)`,
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Activity size={120} className="text-white opacity-20" />
                    </div>
                  </div>
                )}

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-lg shadow-blue-500/10">
                  <h1 className="text-4xl font-bold text-white mb-4">
                    {selectedEvent.event_name}
                  </h1>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Calendar
                        size={24}
                        style={{ color: selectedEvent.color }}
                        className="mt-1 flex-shrink-0"
                      />
                      <div>
                        <p className="text-gray-400 text-sm">Date</p>
                        <p className="text-white font-semibold">
                          {selectedEvent.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin
                        size={24}
                        style={{ color: selectedEvent.color }}
                        className="mt-1 flex-shrink-0"
                      />
                      <div>
                        <p className="text-gray-400 text-sm">Venue</p>
                        <p className="text-white font-semibold">
                          {selectedEvent.venue}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users
                        size={24}
                        style={{ color: selectedEvent.color }}
                        className="mt-1 flex-shrink-0"
                      />
                      <div>
                        <p className="text-gray-400 text-sm">Participants</p>
                        <p className="text-white font-semibold">
                          {selectedEvent.participants}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      About
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {selectedEvent.description}
                    </p>
                  </div>

                  {selectedEvent.list_of_activities.length > 0 && (
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">
                        Activities
                      </h2>
                      <div className="space-y-2">
                        {selectedEvent.list_of_activities.map(
                          (activity: string, idx: number) => (
                            <div
                              key={idx}
                              className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/30 border border-gray-700 hover:border-gray-600 transition-colors duration-300"
                            >
                              <div
                                className="w-2 h-2 rounded-full flex-shrink-0"
                                style={{ backgroundColor: selectedEvent.color }}
                              />
                              <p className="text-white">{activity}</p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div
                  className="sticky top-8 rounded-2xl p-6 border-2 shadow-lg"
                  style={{
                    borderColor: selectedEvent.borderColor,
                    background: `linear-gradient(135deg, ${selectedEvent.color}20, ${selectedEvent.color}05)`,
                    boxShadow: `0 10px 40px -10px ${selectedEvent.color}40`
                  }}
                >
                  <span
                    className="inline-block px-4 py-2 rounded-lg text-sm font-bold mb-4 w-full text-center"
                    style={{
                      backgroundColor: selectedEvent.color,
                      color: "#fff",
                    }}
                  >
                    {selectedEvent.domain}
                  </span>
                  <div className="space-y-3 text-white">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Event ID</p>
                      <p className="text-2xl font-bold">
                        #{selectedEvent.event_id}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
