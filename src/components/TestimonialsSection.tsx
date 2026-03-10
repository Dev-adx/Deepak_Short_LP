import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const testimonialPages = [
  [
    {
      name: "Priya M.",
      role: "Working Professional",
      rating: 5,
      text: "I finally understood diversification. The frameworks helped me feel in control of my finances for the first time.",
      date: "Mar 2026",
    },
    {
      name: "Rohan K.",
      role: "Entrepreneur",
      rating: 5,
      text: "Balanced, realistic, and clear — no hype, just solid guidance that actually works in the real world.",
      date: "Mar 2026",
    },
    {
      name: "Sneha T.",
      role: "Business Owner",
      rating: 5,
      text: "Deepak's tax hacks saved me lakhs while scaling my wealth. Incredible value for money!",
      date: "Mar 2026",
    },
  ],
  [
    {
      name: "Amit R.",
      role: "Software Engineer",
      rating: 5,
      text: "Best blockchain workshop I've attended. Everything was explained from first principles — no jargon.",
      date: "Feb 2026",
    },
    {
      name: "Divya S.",
      role: "Freelancer",
      rating: 5,
      text: "The hands-on sessions were incredible. I walked away with a real action plan for my crypto portfolio.",
      date: "Feb 2026",
    },
    {
      name: "Karan M.",
      role: "Finance Student",
      rating: 5,
      text: "Worth every rupee. The scam-awareness module alone saved me from a bad investment.",
      date: "Feb 2026",
    },
  ],
  [
    {
      name: "Neha P.",
      role: "HR Manager",
      rating: 5,
      text: "I was completely new to crypto. After this workshop I feel confident navigating Web3.",
      date: "Jan 2026",
    },
    {
      name: "Saurabh V.",
      role: "Teacher",
      rating: 5,
      text: "Deepak has a gift for simplifying complex topics. My students will benefit from what I learned here.",
      date: "Jan 2026",
    },
    {
      name: "Pooja L.",
      role: "Doctor",
      rating: 5,
      text: "Finally a financial education program that respects my time. Dense value, zero fluff.",
      date: "Jan 2026",
    },
  ],
  [
    {
      name: "Vikram J.",
      role: "Business Analyst",
      rating: 5,
      text: "The DeFi section was a game changer. I now understand yield farming and staking properly.",
      date: "Dec 2025",
    },
    {
      name: "Anjali B.",
      role: "Content Creator",
      rating: 5,
      text: "Live Q&A sessions were superb. Deepak answered every question patiently and clearly.",
      date: "Dec 2025",
    },
    {
      name: "Ravi N.",
      role: "Startup Founder",
      rating: 5,
      text: "The bonus NFT and Metaverse module alone is worth ₹5000. Got all that for just ₹99!",
      date: "Dec 2025",
    },
  ],
  [
    {
      name: "Meera K.",
      role: "Marketing Manager",
      rating: 5,
      text: "Clear, structured, and actionable. I referred three colleagues the same day.",
      date: "Nov 2025",
    },
    {
      name: "Arjun S.",
      role: "CA Student",
      rating: 5,
      text: "The risk management framework completely changed how I think about investing.",
      date: "Nov 2025",
    },
    {
      name: "Tanya G.",
      role: "Working Professional",
      rating: 5,
      text: "Highly practical. I implemented Deepak's portfolio strategy within a week and it's already working.",
      date: "Nov 2025",
    },
  ],
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-amber-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ name, role, rating, text, date }: {
  name: string; role: string; rating: number; text: string; date: string;
}) => (
  <div className="bg-white rounded-2xl border border-border shadow-sm p-5 flex flex-col gap-3 h-full">
    {/* Top row */}
    <div className="flex items-center justify-between">
      <StarRating rating={rating} />
      <span className="text-xs text-muted-foreground flex items-center gap-1">
        Google
        <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </span>
    </div>

    {/* Quote + text */}
    <div className="flex-1">
      <svg className="w-7 h-7 text-accent/20 mb-1" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-sm text-foreground leading-relaxed">{text}</p>
    </div>

    {/* Avatar + name */}
    <div className="flex items-center gap-3 mt-1">
      <div className="w-9 h-9 rounded-full bg-warm-brown flex items-center justify-center text-white font-bold text-sm shrink-0">
        {name.charAt(0)}
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground leading-tight">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>

    {/* Date */}
    <p className="text-xs text-muted-foreground">{date}</p>
  </div>
);

const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = testimonialPages.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setPage((p) => (p + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [total]);

  const prev = () => {
    setDirection(-1);
    setPage((p) => (p - 1 + total) % total);
  };
  const next = () => {
    setDirection(1);
    setPage((p) => (p + 1) % total);
  };
  const goTo = (i: number) => {
    setDirection(i > page ? 1 : -1);
    setPage(i);
  };

  return (
    <section className="px-4 py-14 bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">
            Hear it from the{" "}
            <span className="text-accent">Winners</span>
          </h2>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            Join thousands of professionals who transformed their financial future
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center gap-2 md:gap-4">
          {/* Prev arrow */}
          <button
            onClick={prev}
            className="shrink-0 w-9 h-9 rounded-full border border-border bg-white shadow-sm flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Cards */}
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {/* Desktop: 3 cards */}
                <div className="hidden md:grid grid-cols-3 gap-4">
                  {testimonialPages[page].map((t, i) => (
                    <TestimonialCard key={i} {...t} />
                  ))}
                </div>
                {/* Mobile: 1 card */}
                <div className="md:hidden">
                  <TestimonialCard {...testimonialPages[page][0]} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            className="shrink-0 w-9 h-9 rounded-full border border-border bg-white shadow-sm flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonialPages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === page
                  ? "bg-accent w-6"
                  : "bg-border w-2"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
