import React from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle, Users } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Finally something that actually works on Bloomberg and Forbes. No nags, no interruptions.",
      author: "Alex T.",
      rating: 5,
      verified: true
    },
    {
      quote: "I left Adblock for this. Never looking back.",
      author: "Jenny K.",
      rating: 5,
      verified: true
    }
  ];

  return (
    <section className="py-20 relative bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              User Feedback
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Real testimonials from users who switched to AdsHide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/60 hover:border-yellow-400/40 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
                {testimonial.verified && (
                  <div className="ml-2 flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-green-600 text-xs font-medium">Verified</span>
                  </div>
                )}
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-600 font-medium">– {testimonial.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;