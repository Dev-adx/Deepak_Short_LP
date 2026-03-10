import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Excellent workshop! Deepak explained complex blockchain concepts in simple terms. Highly recommended for beginners.",
    date: "2 days ago"
  },
  {
    name: "Priya Patel",
    location: "Delhi",
    rating: 5,
    text: "The best crypto education I've received. The bonus materials are worth it alone. Thank you Deepak!",
    date: "1 week ago"
  },
  {
    name: "Amit Kumar",
    location: "Bangalore",
    rating: 5,
    text: "Finally understood how wallets and NFTs work. The live sessions were interactive and engaging.",
    date: "2 weeks ago"
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "Great learning experience. The risk awareness framework is really helpful for new investors.",
    date: "3 weeks ago"
  },
  {
    name: "Vikram Singh",
    location: "Pune",
    rating: 5,
    text: "Worth every penny! Now I feel confident about navigating the crypto space.",
    date: "1 month ago"
  },
  {
    name: "Anjali Gupta",
    location: "Chennai",
    rating: 5,
    text: "Perfect for beginners. Deepak is patient and explains everything from scratch.",
    date: "1 month ago"
  },
  {
    name: "Rajesh Nair",
    location: "Kolkata",
    rating: 5,
    text: "The workshop gave me clarity on DeFi and Metaverse. Great practical knowledge!",
    date: "2 months ago"
  },
  {
    name: "Meera Shah",
    location: "Ahmedabad",
    rating: 5,
    text: "Very informative session. The scam awareness tips alone were valuable.",
    date: "2 months ago"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-4 mb-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            What Participants Say
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex justify-center"
              >
                <div className="w-full max-w-2xl">
                  {/* Google Review Card */}
                  <div className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 shadow-xl relative">
                    {/* Quote icon */}
                    <Quote className="absolute top-4 right-4 w-10 h-10 text-accent/10" />
                    
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                      >
                        {testimonials[currentIndex].name.charAt(0)}
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground text-lg">{testimonials[currentIndex].name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < testimonials[currentIndex].rating
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{testimonials[currentIndex].date}</p>
                      </div>
                    </div>
                    
                    <motion.p 
                      className="text-foreground leading-relaxed text-base md:text-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      "{testimonials[currentIndex].text}"
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Scroll Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className="relative"
              >
                <motion.div
                  className={`w-2.5 h-2.5 rounded-full ${
                    i === currentIndex ? "bg-accent" : "bg-border"
                  }`}
                  animate={{
                    scale: i === currentIndex ? 1.3 : 1
                  }}
                  transition={{ duration: 0.2 }}
                />
                {i === currentIndex && (
                  <motion.div
                    className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-accent/30"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Join 12,000+ satisfied learners
        </motion.p>
      </div>
    </section>
  );
};

export default TestimonialsSection;

