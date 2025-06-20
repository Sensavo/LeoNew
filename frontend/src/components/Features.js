import React from "react";
import { motion } from "framer-motion";
import { Zap, Brain, Eye, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Smart Detection",
      description: "Advanced algorithms identify and block hidden native ads that traditional blockers miss.",
      image: "https://images.unsplash.com/photo-1636955840493-f43a02bfa064"
    },
    {
      icon: Eye,
      title: "Stealth Mode",
      description: "Completely invisible to detection systems. No more nag screens or blocked access.",
      image: "https://images.unsplash.com/photo-1614064643392-8dd713152ae9"
    },
    {
      icon: Zap,
      title: "Paywall Bypass",
      description: "Access premium content without paywalls. Works on major news sites and publications.",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9"
    },
    {
      icon: Globe,
      title: "Universal Compatibility",
      description: "Works on sites where others fail: Forbes, Wired, Bloomberg, Business Insider, and more.",
      image: "https://images.unsplash.com/photo-1636955903101-d6b4b926018c"
    }
  ];

  return (
    <section className="py-12 xl:py-16 relative bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 via-orange-600 to-red-700 bg-clip-text text-transparent">
              Why It's Smarter
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Advanced technology that outperforms traditional ad blockers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/60 hover:border-red-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Content - Flexible grow */}
                <div className="flex-grow mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Performance Bar - Aligned to bottom */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 text-xs">Performance</span>
                    <span className="text-green-600 text-xs font-medium">
                      {index === 0 ? 'Smart Tech' : index === 1 ? 'Invisible' : index === 2 ? 'Unlimited' : 'Universal'}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${85 + index * 3}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-full rounded-full ${
                        index === 0 ? 'bg-red-500' :
                        index === 1 ? 'bg-purple-500' :
                        index === 2 ? 'bg-blue-500' : 'bg-orange-500'
                      }`}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sites Where Others Fail Section */}
      <div className="mt-20 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Works on Premium Sites That Block Others
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Major publications can't detect our advanced stealth technology. Access your favorite content without interruptions.
          </p>
        </motion.div>

        {/* Enhanced Grid Layout with Brand-Accurate Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { name: "Forbes", description: "Business & Finance News", status: "Fully Compatible", color: "from-blue-600 to-blue-700", bgColor: "bg-blue-600", textColor: "text-white", letter: "F", domain: "forbes.com" },
            { name: "Wired", description: "Technology & Innovation", status: "Fully Compatible", color: "from-black to-gray-800", bgColor: "bg-black", textColor: "text-white", letter: "W", domain: "wired.com" },
            { name: "Bloomberg", description: "Financial Markets & News", status: "Fully Compatible", color: "from-blue-500 to-blue-600", bgColor: "bg-blue-500", textColor: "text-white", letter: "B", domain: "bloomberg.com" },
            { name: "Business Insider", description: "Business & Tech News", status: "Fully Compatible", color: "from-red-500 to-red-600", bgColor: "bg-red-500", textColor: "text-white", letter: "BI", domain: "businessinsider.com" },
            { name: "The Atlantic", description: "Politics & Culture", status: "Fully Compatible", color: "from-indigo-500 to-indigo-600", bgColor: "bg-indigo-500", textColor: "text-white", letter: "A", domain: "theatlantic.com" },
            { name: "The Verge", description: "Technology & Science", status: "Fully Compatible", color: "from-orange-500 to-orange-600", bgColor: "bg-orange-500", textColor: "text-white", letter: "V", domain: "theverge.com" }
          ].map((site, index) => (
            <motion.div
              key={site.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 hover:border-gray-300/80 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 group-hover:scale-[1.02]">
                {/* Enhanced Site Icon with Brand Recognition */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${site.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white/20`}>
                    <span className={`font-bold text-lg ${site.textColor} tracking-tight`}>
                      {site.letter}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">{site.name}</h3>
                    <div className="text-xs text-gray-500 font-mono mt-1">{site.domain}</div>
                  </div>
                </div>
                
                {/* Site Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{site.description}</p>
                
                {/* Enhanced Status with Animation */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7] 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                      className="w-2.5 h-2.5 bg-green-500 rounded-full"
                    />
                    <span className="text-green-600 text-sm font-medium">{site.status}</span>
                  </div>
                  
                  {/* Compatibility Badge */}
                  <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold border border-green-200">
                    ✓ Verified
                  </div>
                </div>

                {/* Subtle Hover Effect Background */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${site.color.includes('blue') ? 'rgba(59, 130, 246, 0.05)' : 
                                                          site.color.includes('black') ? 'rgba(0, 0, 0, 0.03)' :
                                                          site.color.includes('red') ? 'rgba(239, 68, 68, 0.05)' :
                                                          site.color.includes('indigo') ? 'rgba(99, 102, 241, 0.05)' :
                                                          'rgba(249, 115, 22, 0.05)'}, transparent)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Additional Sites Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-gray-50/80 to-blue-50/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/60 shadow-xl overflow-hidden"
        >
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23059669" fill-opacity="0.4"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
              backgroundSize: '40px 40px'
            }}
          />
          
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              And Many More Premium Sites
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {[
                { name: "LA Times", color: "bg-gradient-to-r from-blue-600 to-blue-700", letter: "LA" },
                { name: "GQ.com", color: "bg-gradient-to-r from-black to-gray-800", letter: "GQ" },
                { name: "NewsBreak", color: "bg-gradient-to-r from-red-500 to-red-600", letter: "N" },
                { name: "The Independent", color: "bg-gradient-to-r from-purple-600 to-purple-700", letter: "I" },
                { name: "Wall Street Journal", color: "bg-gradient-to-r from-gray-800 to-black", letter: "WSJ" },
                { name: "Financial Times", color: "bg-gradient-to-r from-pink-500 to-pink-600", letter: "FT" }
              ].map((site, index) => (
                <motion.div
                  key={site.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative"
                >
                  <div className="flex items-center gap-3 px-4 py-3 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 hover:border-gray-300/80 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className={`w-8 h-8 rounded-lg ${site.color} flex items-center justify-center text-white text-xs font-bold shadow-md`}>
                      {site.letter}
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{site.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-4">
                Our advanced technology works on hundreds of premium sites that traditionally block ad blockers. 
                No more "please disable your ad blocker" messages.
              </p>
              
              {/* Success Stats */}
              <div className="flex justify-center items-center gap-6 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-xs text-gray-500 font-medium">Sites Compatible</div>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">99.9%</div>
                  <div className="text-xs text-gray-500 font-medium">Success Rate</div>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">0</div>
                  <div className="text-xs text-gray-500 font-medium">Detection Rate</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;