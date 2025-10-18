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

const Domains = () => {
  const domains = [
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
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthvnext.bing.com%2Fth%2Fid%2FOIP.XbhIGO49XCjhHxsWmFBtrAHaEK%3Fcb%3D12%26pid%3DApi&f=1&ipt=c06f746d78f1747beabd0f75fecc83980aff00dc09f68ce57ae4904d4dcb062f&ipo=images",
      color: "from-blue-600 to-blue-700",
    },
  ];

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
          {domains.map((domain, index) => {
            return (
              <div
                key={index}
                className="p-16 group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg shadow-blue-500/10 cursor-pointer hover:shadow-blue-500/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-800 hover:border-blue-500/50"
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
                {/* <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-blue-500/50 relative z-10 overflow-hidden`}
                >
                  <img
                    src={domain.image}
                    alt={domain.title}
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 relative z-10">
                  {domain.title}
                </h3>

                {/* <div
                  className={`mt-6 inline-block text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300 relative z-10`}
                >
                  Learn More →
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Domains;
