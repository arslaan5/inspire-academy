import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  GraduationCap,
  BookOpen,
  Library,
  Phone,
  MessageCircle,
  ChevronRight,
  Users,
  Award,
  Clock,
  Star,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "School Tuition",
    description: "Expert coaching for Class 9-12 students with personalized attention",
    color: "bg-primary",
  },
  {
    icon: BookOpen,
    title: "Competitive Exams",
    description: "Prepare for CTET, GATE, and other competitive examinations",
    color: "bg-secondary",
  },
  {
    icon: Library,
    title: "Study Library",
    description: "Peaceful study environment with all necessary facilities",
    color: "bg-primary",
  },
];

const stats = [
  { value: "500+", label: "Students Taught", icon: Users },
  { value: "10+", label: "Expert Faculty", icon: Award },
  { value: "5+", label: "Years Experience", icon: Clock },
  { value: "4.8", label: "Student Rating", icon: Star },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-gradient-inspire overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium animate-fade-in">
                  <GraduationCap className="w-4 h-4" />
                  Welcome to Inspire Academy & Library
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in-up">
                  Learn, Focus,{" "}
                  <span className="text-gradient-inspire">Succeed</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg animate-fade-in-up delay-200">
                  Your gateway to academic excellence. Expert coaching for school students 
                  and competitive exam aspirants, combined with a peaceful study library 
                  environment.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
                <Link to="/contact">
                  <Button size="lg" className="hover-glow bg-gradient-blue text-lg px-8">
                    Enquire Now
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </Button>
                </Link>
                <a href="tel:+919876543210">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 hover-glow-green text-lg px-8"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Hero Image/Illustration */}
            <div className="relative hidden lg:block animate-fade-in-right delay-400">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Floating cards */}
                <div className="absolute top-10 left-0 bg-card p-4 rounded-xl shadow-inspire animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Expert Faculty</p>
                      <p className="text-xs text-muted-foreground">Experienced teachers</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-20 right-0 bg-card p-4 rounded-xl shadow-inspire animate-float delay-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">4.8/5 Rating</p>
                      <p className="text-xs text-muted-foreground">Student satisfaction</p>
                    </div>
                  </div>
                </div>

                {/* Main visual */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-blue rounded-full flex items-center justify-center animate-bounce-soft">
                      <GraduationCap className="w-16 h-16 text-primary-foreground" />
                    </div>
                    <p className="font-display text-xl font-semibold text-foreground">
                      Shape Your Future
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <p className="font-display text-3xl md:text-4xl font-bold">{stat.value}</p>
                  <p className="text-sm opacity-70 mt-1">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="What We Offer"
              subtitle="Comprehensive academic support tailored to help students achieve their dreams"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 150}>
                <Card className="hover-lift group cursor-pointer border-0 shadow-inspire">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <item.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-inspire">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-left">
              <div className="aspect-video bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Library className="w-20 h-20 text-primary mx-auto mb-4" />
                  <p className="font-display text-lg font-semibold">Our Learning Space</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-right">
              <div className="space-y-6">
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  About Inspire Academy
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Founded with a vision to provide quality education to students of Bhopal, 
                  Inspire Academy & Library has become a trusted name for academic excellence. 
                  We combine expert coaching with a disciplined study environment to help 
                  students reach their full potential.
                </p>
                <ul className="space-y-3">
                  {["Personalized attention for every student", "Experienced and dedicated faculty", "Modern teaching methodologies", "Focused study environment"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                        <ChevronRight className="w-3 h-3 text-secondary-foreground" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/about">
                  <Button className="hover-glow bg-gradient-blue mt-4">
                    Learn More About Us
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-blue text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Join thousands of successful students who have achieved their academic goals 
              with Inspire Academy & Library.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-background text-primary hover:bg-background/90 text-lg px-8"
                >
                  Enquire Now
                </Button>
              </Link>
              <Link to="/courses">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
                >
                  View Courses
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
