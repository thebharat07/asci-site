import React, { useState, useEffect } from "react";
import {
  Code,
  Brain,
  Smartphone,
  Cloud,
  Shield,
  Database,
  BarChart,
  Package,
} from "lucide-react";
import domains from "../domains.json";

interface CarouselImage {
  id: number;
  img: string;
}

interface DomainItem {
  name: string;
  description: string;
  lead: string;
  lead_image: string;
  co_leads: string[];
  co_leads_images: string[];
  events: Event[];
  image: string;
  color: string;
}

interface Event {
  name: string;
  date: string;
  description: string;
  participants: number;
  images?: Record<string, string>;
}

const Domains: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<DomainItem | null>(null);
  const [openEventIndex, setOpenEventIndex] = useState<number | null>(null);
  const [carouselIndices, setCarouselIndices] = useState<Record<number, number>>({});

  const domainsPreview = [
    {
      icon: Package,
      title: "Blockchain",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.r4AEheBlu7_oP0iwnBeCtAHaHa%3Fcb%3D12%26pid%3DApi&f=1&ipt=9be9d8fe1e7fb113ddd68c8cb356ac3ac40f3eb4f9cfaab57cc2799d432bae92&ipo=images",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Code,
      title: "Cloud Computing",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthvnext.bing.com%2Fth%2Fid%2FOIP.eiTzjlrs7LkevN9zhfqgmgHaEK%3Fcb%3D12%26pid%3DApi%26ucfimg%3D1&f=1&ipt=b0337fa95548a19f094a7ad3a5a3e5dd6e16fb428a47273ecbff49c99d5f9df7&ipo=images",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: BarChart,
      title: "Competitive Programming",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthvnext.bing.com%2Fth%2Fid%2FOIP.yWLRwcoDWS9skBZzLaChIQHaD3%3Fcb%3D12%26pid%3DApi&f=1&ipt=9ef003afecd70615ed649fc90155f1f73c568a14c7fed2c3a54aaab262d1bfa3&ipo=images",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Smartphone,
      title: "Cybersecurity",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.8Lnm18L4zYhimXWKlY_vsQHaE8%3Fcb%3D12%26pid%3DApi&f=1&ipt=47862971dcf3cf19f53a4d12d1d1f55daa376dd9304d5dd5d717736b579e86c5&ipo=images",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Cloud,
      title: "Data Analytics",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.sPuaJLOPBB26BCTIpvC8BAHaEK%3Fcb%3D12%26pid%3DApi&f=1&ipt=b2b01ab27f6cce44ec5f4d1fb629427118851c9a77d151d43e1a686604e93639&ipo=images",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Shield,
      title: "DSA",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.sjnEdOSKNVB8LvUNmzyEQwHaEK%3Fcb%3D12%26pid%3DApi&f=1&ipt=cf25e22e5dc85ae56bf61841417a4b5b957541b88dce2c13454a8697b5764962&ipo=images",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Database,
      title: "Networking",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.UyC-ahWJWuIAfR7vyd2sgAHaEO%3Fcb%3D12%26pid%3DApi&f=1&ipt=9b29b9e67f8ca5491fe5ebb7118d837c92d811e20f75393a2653503ed69e0e90&ipo=images",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Database,
      title: "Web Development",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.XbhIGO49XCjhHxsWmFBtrAHaEK%3Fcb%3D12%26pid%3DApi&f=1&ipt=25da6dfcbc08af980baa46a2f5865d610ebada1a102092859351d846387439a4&ipo=images",
      color: "from-blue-600 to-blue-700",
    },
  ];

  const handleDomainClick = (domainTitle: string): void => {
    const domain = domains.domains.find(
      (d: DomainItem) => d.name === domainTitle
    );
    if (domain) {
      setSelectedDomain(domain);
      setOpenEventIndex(null);
    }
  };

  const toggleEvent = (index: number): void => {
    setOpenEventIndex(openEventIndex === index ? null : index);
  };

  const getEventImages = (event: Event): CarouselImage[] => {
    if (!event.images) return [];
    return Object.keys(event.images)
      .filter((key) => event.images![key])
      .map((key, idx) => ({
        id: idx + 1,
        img: event.images![key],
      }));
  };

  const goToNextSlide = (eventIdx: number, images: CarouselImage[]): void => {
    setCarouselIndices((prev) => ({
      ...prev,
      [eventIdx]: ((prev[eventIdx] || 0) + 1) % images.length,
    }));
  };

  const goToPrevSlide = (eventIdx: number, images: CarouselImage[]): void => {
    setCarouselIndices((prev) => ({
      ...prev,
      [eventIdx]:
        (prev[eventIdx] || 0) - 1 < 0 ? images.length - 1 : prev[eventIdx] - 1,
    }));
  };

  if (selectedDomain) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => setSelectedDomain(null)}
            className="mb-8 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
          >
            ← Back to Domains
          </button>

          {/* Domain Title */}
          <h1 className="text-5xl font-bold text-white mb-4">
            {selectedDomain.name}
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            {selectedDomain.description}
          </p>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Team</h2>
            <div className="space-y-3">
              {selectedDomain.lead && (
                <p className="text-2xl font-bold">
                  <span className="text-blue-400">{selectedDomain.lead}</span>
                  <span className="text-gray-400 ml-2">- Lead</span>
                </p>
              )}
              {selectedDomain.co_leads &&
                selectedDomain.co_leads.map((coLead, idx) => (
                  <p key={idx} className="text-2xl font-bold">
                    <span className="text-cyan-400">{coLead}</span>
                    <span className="text-gray-400 ml-2">- Co-Lead</span>
                  </p>
                ))}
            </div>
          </div>

          {/* Events Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Events</h2>
            <div className="space-y-4">
              {selectedDomain.events.map((event, idx) => (
                <div
                  key={idx}
                  className={`border-2 rounded-lg overflow-hidden transition-all duration-300 ${
                    openEventIndex === idx
                      ? "border-blue-500 bg-gray-800"
                      : "border-gray-700 bg-gray-900"
                  }`}
                >
                  <button
                    onClick={() => toggleEvent(idx)}
                    className="w-full p-6 flex justify-between items-center hover:bg-gray-800 transition-colors duration-300"
                  >
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {event.name}
                      </h3>
                      <p className="text-blue-400">{event.date}</p>
                    </div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`text-blue-400 transition-transform duration-300 ${
                        openEventIndex === idx ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {openEventIndex === idx && (
                    <div className="px-6 pb-6 border-t border-gray-700">
                      <p className="text-gray-300 mb-4">{event.description}</p>
                      <p className="text-blue-400 font-semibold mb-6">
                        Participants: {event.participants}
                      </p>

                      {/* Carousel */}
                      {(() => {
                        const images = getEventImages(event);
                        if (images.length === 0) return null;

                        const currentImageIdx = carouselIndices[idx] || 0;
                        const currentImage = images[currentImageIdx];

                        return (
                          <div className="relative bg-gray-800 rounded-lg overflow-hidden">
                            <div className="flex items-center justify-center h-64 bg-gray-700">
                              <img
                                src={currentImage.img}
                                alt={`Event image ${currentImageIdx + 1}`}
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>

                            {images.length > 1 && (
                              <>
                                <button
                                  onClick={() => goToPrevSlide(idx, images)}
                                  className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full transition-all duration-300"
                                  aria-label="Previous image"
                                >
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M15 18L9 12L15 6"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </button>

                                <button
                                  onClick={() => goToNextSlide(idx, images)}
                                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full transition-all duration-300"
                                  aria-label="Next image"
                                >
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M9 18L15 12L9 6"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </button>

                                <div className="flex justify-center gap-2 p-3 bg-gray-800">
                                  {images.map((_, imgIdx) => (
                                    <button
                                      key={imgIdx}
                                      onClick={() =>
                                        setCarouselIndices((prev) => ({
                                          ...prev,
                                          [idx]: imgIdx,
                                        }))
                                      }
                                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        imgIdx === currentImageIdx
                                          ? "bg-blue-500 w-6"
                                          : "bg-gray-600"
                                      }`}
                                      aria-label={`Go to image ${imgIdx + 1}`}
                                    />
                                  ))}
                                </div>

                                <div className="text-center text-sm text-gray-400 py-2">
                                  {currentImageIdx + 1} / {images.length}
                                </div>
                              </>
                            )}
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="domains"
      className="py-20 bg-gradient-to-b from-gray-950 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Domains</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore diverse technical domains and find your passion in
            technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domainsPreview.map((domain, index) => {
            return (
              <div
                key={index}
                onClick={() => handleDomainClick(domain.title)}
                className="h-36 group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg shadow-blue-500/10 cursor-pointer hover:shadow-blue-500/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-800 hover:border-blue-500/50"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <div className="absolute inset-0 opacity-40 group-hover:opacity-30 transition-opacity duration-500">
                  <img
                    src={domain.image}
                    alt={domain.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 relative z-10">
                  {domain.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Domains;