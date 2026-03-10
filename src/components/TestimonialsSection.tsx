const TestimonialsSection = () => (
  <section className="px-4 py-12">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">What Participants Say</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-[3/4] rounded-xl bg-secondary border border-border flex items-center justify-center">
            <div className="text-center p-4">
              <span className="text-3xl mb-2 block">💬</span>
              <p className="text-xs text-muted-foreground">Student Testimonial {i}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground mt-4">
        Add your WhatsApp testimonials, workshop screenshots & student photos here
      </p>
    </div>
  </section>
);

export default TestimonialsSection;
