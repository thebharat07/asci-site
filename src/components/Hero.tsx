import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import TiltedCard from "./ui/TiltedCard";

const Hero = () => {
  const [displayText, setDisplayText] = useState("Think");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ["Think", "Code", "Achieve"];

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentWord = words[wordIndex];
      
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 70);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, words]);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          
          {/* Left Column */}
          <div className="text-left lg:text-left space-y-8">
            {/* Motto with Typewriter */}
            <div className="space-y-4">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-white">
                <span className="text-blue-400">#</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                  {displayText}
                </span>
                <span className="animate-pulse text-blue-400">_</span>
              </div>
            </div>

            {/* Club Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                <span className="text-blue-400">As</span>sociation of
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                <span className="text-blue-400">C</span>omputer
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                <span className="text-blue-400">I</span>ntellects
              </h1>
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50 hover:shadow-blue-400/60 hover:shadow-2xl"
            >
              Know Us
            </button>
          </div>

          {/* Right Column - TiltedCard */}
          <div className="hidden lg:flex items-center justify-center">
            {typeof window !== 'undefined' && window.innerWidth >= 1024 && (
              <TiltedCard
                imageSrc="/main-bg.png"
                altText="AsCI"
                className="tilted-card"
                captionText="AsCI is always Cool"
                containerHeight="500px"
                containerWidth="600px"
                imageHeight="500px"
                imageWidth="600px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    
                  </p>
                }
              />
            )}
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden w-full flex items-center justify-center">
            {typeof window !== 'undefined' && window.innerWidth <= 768 && (
              <img 
                src="/main-bg.png" 
                alt="AsCI" 
                className="mobile-main-bg w-full max-w-sm rounded-2xl shadow-lg"
              />
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;