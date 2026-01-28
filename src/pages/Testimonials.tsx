import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  course: string;
  rating: number;
  text: string;
  achievement?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    course: "Class 12 Science",
    rating: 5,
    text: "Inspire Academy helped me score 95% in my board exams. The teachers are incredibly supportive and the study environment is perfect for focused learning.",
    achievement: "95% in CBSE Boards",
  },
  {
    id: "2",
    name: "Priya Patel",
    course: "CTET Preparation",
    rating: 5,
    text: "I cleared CTET in my first attempt thanks to the excellent guidance from the faculty. The mock tests and study material were extremely helpful.",
    achievement: "Cleared CTET Paper I & II",
  },
  {
    id: "3",
    name: "Amit Kumar",
    course: "Class 10",
    rating: 5,
    text: "The personalized attention I received at Inspire Academy made all the difference. I improved from 70% to 92% in just one year!",
    achievement: "92% in Class 10",
  },
  {
    id: "4",
    name: "Sneha Verma",
    course: "Library Member",
    rating: 5,
    text: "The library is a blessing for serious students. Peaceful environment, comfortable seating, and extended hours helped me prepare for my competitive exams.",
    achievement: "Selected in Banking Exam",
  },
  {
    id: "5",
    name: "Vikash Dubey",
    course: "GATE Coaching",
    rating: 4,
    text: "The GATE preparation course here is excellent. The faculty's approach to problem-solving and the regular tests helped me improve my score significantly.",
    achievement: "AIR 2500 in GATE",
  },
  {
    id: "6",
    name: "Anjali Singh",
    course: "Class 11 Commerce",
    rating: 5,
    text: "Best coaching center in Bhopal! The teachers make even complex topics easy to understand. Highly recommend for commerce students.",
    achievement: "School Topper",
  },
  {
    id: "7",
    name: "Rohit Jain",
    course: "Class 9",
    rating: 5,
    text: "I was struggling with Mathematics, but after joining Inspire Academy, I actually started enjoying the subject. Now it's my favorite!",
    achievement: "Improved from C to A grade",
  },
  {
    id: "8",
    name: "Kavita Mishra",
    course: "CTET Preparation",
    rating: 5,
    text: "The CDP sessions are outstanding. The faculty breaks down complex psychological theories into simple, understandable concepts.",
    achievement: "Cleared CTET with 130/150",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slidesPerView = 3;
  const totalSlides = Math.ceil(testimonials.length / slidesPerView);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-inspire">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Student Reviews
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                What Our Students Say
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hear from our students about their experience at Inspire Academy & Library 
                and how we've helped them achieve their academic goals.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Testimonials Slider */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Success Stories"
              subtitle="Real experiences from our successful students"
            />
          </ScrollReveal>

          <div className="relative max-w-6xl mx-auto">
            {/* Slider */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="w-full flex-shrink-0 grid md:grid-cols-3 gap-6 px-2"
                  >
                    {testimonials
                      .slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView)
                      .map((testimonial) => (
                        <Card
                          key={testimonial.id}
                          className="border-0 shadow-inspire h-full"
                        >
                          <CardContent className="p-6">
                            <Quote className="w-10 h-10 text-primary/20 mb-4" />
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              "{testimonial.text}"
                            </p>
                            <div className="flex items-center gap-1 mb-4">
                              {renderStars(testimonial.rating)}
                            </div>
                            <div className="border-t pt-4">
                              <p className="font-semibold">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {testimonial.course}
                              </p>
                              {testimonial.achievement && (
                                <p className="text-sm text-secondary font-medium mt-1">
                                  ⭐ {testimonial.achievement}
                                </p>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === index
                        ? "bg-primary w-6"
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="More Reviews"
              subtitle="See what more students have to say about us"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 75}>
                <Card className="hover-lift border-0 shadow-inspire h-full">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-1 mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-4">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                        <span className="font-semibold text-sm text-primary">
                          {testimonial.name[0]}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.course}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <ScrollReveal>
              <div>
                <p className="font-display text-4xl font-bold text-primary">4.8</p>
                <div className="flex justify-center gap-1 my-2">
                  {renderStars(5)}
                </div>
                <p className="text-sm opacity-70">Average Rating</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div>
                <p className="font-display text-4xl font-bold">500+</p>
                <p className="text-sm opacity-70 mt-2">Happy Students</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <p className="font-display text-4xl font-bold text-secondary">95%</p>
                <p className="text-sm opacity-70 mt-2">Success Rate</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div>
                <p className="font-display text-4xl font-bold">98%</p>
                <p className="text-sm opacity-70 mt-2">Would Recommend</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-blue text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Join hundreds of successful students who have achieved their academic 
              dreams with Inspire Academy & Library.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-background text-primary hover:bg-background/90 text-lg px-8"
              >
                Start Your Journey Today
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
