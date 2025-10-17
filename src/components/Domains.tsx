import { Code, Brain, Smartphone, Cloud, Shield, Database } from 'lucide-react';

const Domains = () => {
  const domains = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Master modern web technologies including React, Node.js, and full-stack development.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Explore artificial intelligence, neural networks, and data-driven solutions.',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Create innovative mobile applications for Android and iOS platforms.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Learn cloud architecture, deployment, and scalable infrastructure solutions.',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Understand security protocols, ethical hacking, and data protection techniques.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Analyze complex datasets and extract meaningful insights using advanced tools.',
      color: 'from-blue-600 to-blue-700'
    }
  ];

  return (
    <section id="domains" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Domains</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore diverse technical domains and find your passion in technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-800 hover:border-blue-500/50"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className={`w-16 h-16 bg-gradient-to-br ${domain.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-blue-500/50 relative z-10`}>
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 relative z-10">{domain.title}</h3>
                <p className="text-gray-400 leading-relaxed relative z-10">{domain.description}</p>

                <div className={`mt-6 inline-block text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300 relative z-10`}>
                  Learn More →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Domains;
