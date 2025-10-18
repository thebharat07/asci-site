import { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Activity,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const EventDetails = ({ event, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!event) return null;

  const imageArray = [
    event.images.image1,
    event.images.image2,
    event.images.image3,
  ].filter((img) => img);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageArray.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + imageArray.length) % imageArray.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300 hover:scale-105"
          >
            <X size={20} />
            Close
          </button>
          <div
            className="px-6 py-2 rounded-lg font-bold text-white"
            style={{ backgroundColor: event.color }}
          >
            {event.domain || "Event"}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            {imageArray.length > 0 ? (
              <div
                className="rounded-2xl overflow-hidden border-2 relative group"
                style={{
                  borderColor: event.borderColor,
                  boxShadow: `0 0 30px ${event.color}40`,
                }}
              >
                <div className="relative h-96 bg-gray-800">
                  <img
                    src={imageArray[currentImageIndex]}
                    alt={`${event.event_name} - ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Image Navigation */}
                  {imageArray.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 hover:scale-110"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 hover:scale-110"
                      >
                        <ChevronRight size={24} />
                      </button>

                      {/* Image Counter */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 text-white text-sm font-semibold">
                        {currentImageIndex + 1} / {imageArray.length}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div
                className="rounded-2xl overflow-hidden border-2 h-96 flex items-center justify-center"
                style={{
                  borderColor: event.borderColor,
                  background: `linear-gradient(145deg, ${event.color}20, ${event.color}05)`,
                  boxShadow: `0 0 30px ${event.color}40`,
                }}
              >
                <Activity size={80} className="text-gray-600" />
              </div>
            )}

            {/* Event Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {event.date && (
                <div
                  className="rounded-xl p-4 border border-gray-700"
                  style={{
                    background: `linear-gradient(135deg, ${event.color}15, ${event.color}05)`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={20} style={{ color: event.color }} />
                    <p className="text-gray-400 text-sm">Date</p>
                  </div>
                  <p className="text-white font-semibold">{event.date}</p>
                </div>
              )}

              {event.venue && (
                <div
                  className="rounded-xl p-4 border border-gray-700"
                  style={{
                    background: `linear-gradient(135deg, ${event.color}15, ${event.color}05)`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={20} style={{ color: event.color }} />
                    <p className="text-gray-400 text-sm">Venue</p>
                  </div>
                  <p className="text-white font-semibold text-sm">
                    {event.venue}
                  </p>
                </div>
              )}

              <div
                className="rounded-xl p-4 border border-gray-700"
                style={{
                  background: `linear-gradient(135deg, ${event.color}15, ${event.color}05)`,
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Users size={20} style={{ color: event.color }} />
                  <p className="text-gray-400 text-sm">Participants</p>
                </div>
                <p className="text-white font-semibold">{event.participants}</p>
              </div>
            </div>

            {/* Description */}
            {event.description && (
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-4">
                  About Event
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {event.description}
                </p>
              </div>
            )}

            {/* Activities */}
            {event.list_of_activities &&
              event.list_of_activities.length > 0 && (
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Activity size={24} style={{ color: event.color }} />
                    Activities
                  </h2>
                  <div className="space-y-3">
                    {event.list_of_activities.map((activity, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-lg border border-gray-700"
                        style={{
                          background: `linear-gradient(135deg, ${event.color}15, ${event.color}05)`,
                        }}
                      >
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: event.color }}
                        />
                        <p className="text-white text-base">{activity}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Event Title Card */}
            <div
              className="rounded-2xl p-6 border-2 sticky top-6"
              style={{
                borderColor: event.borderColor,
                background: `linear-gradient(135deg, ${event.color}20, ${event.color}05)`,
                boxShadow: `0 10px 40px -10px ${event.color}40`,
              }}
            >
              <h1 className="text-3xl font-bold text-white mb-4">
                {event.event_name}
              </h1>

              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Event ID</p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: event.color }}
                  >
                    {event.event_id}
                  </p>
                </div>

                {event.domain && (
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Domain</p>
                    <div
                      className="inline-block px-4 py-2 rounded-lg font-semibold text-white w-full text-center"
                      style={{ backgroundColor: event.color }}
                    >
                      {event.domain}
                    </div>
                  </div>
                )}

                {event.participants && (
                  <div>
                    <p className="text-gray-400 text-sm mb-1">
                      Expected Participants
                    </p>
                    <div className="flex items-center gap-2 text-white text-lg font-semibold">
                      <Users size={20} style={{ color: event.color }} />
                      {event.participants}
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative Line */}
              <div
                className="mt-6 h-1 rounded-full"
                style={{ backgroundColor: event.color }}
              />
            </div>

            {/* Quick Links Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-4">Quick Info</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>
                  ✓ Event Status:{" "}
                  <span className="text-green-400 font-semibold">Active</span>
                </p>
                <p>
                  ✓ Location:{" "}
                  <span className="text-white">Physical/Online</span>
                </p>
                <p>
                  ✓ Type: <span className="text-white">Workshop/Seminar</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
