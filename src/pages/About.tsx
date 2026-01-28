import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Heart,
  Lightbulb,
  Users,
  BookOpen,
  Award,
  CheckCircle,
  GraduationCap,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for academic excellence in everything we do",
  },
  {
    icon: Heart,
    title: "Dedication",
    description: "Committed to each student's success and growth",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Modern teaching methods for effective learning",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a supportive learning community",
  },
];

const timeline = [
  {
    year: "2019",
    title: "Foundation",
    description: "Inspire Academy was founded with a vision to provide quality education",
  },
  {
    year: "2020",
    title: "Library Launch",
    description: "Opened our peaceful study library for focused learning",
  },
  {
    year: "2022",
    title: "Expansion",
    description: "Added competitive exam preparation courses",
  },
  {
    year: "2024",
    title: "Growing Strong",
    description: "Serving 500+ students with a team of 10+ expert faculty",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-inspire">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <GraduationCap className="w-4 h-4" />
                About Us
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Inspiring Students Since 2019
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Inspire Academy & Library is a premier coaching institute and study center 
                located in Karond, Bhopal. We are dedicated to nurturing young minds and 
                helping students achieve their academic dreams through quality education 
                and a supportive learning environment.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-left">
              <div className="space-y-6">
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To provide accessible, high-quality education that empowers students 
                  to excel academically and develop into confident, responsible individuals 
                  ready to face the challenges of tomorrow.
                </p>
                <div className="space-y-4">
                  {[
                    "Foster a love for learning in every student",
                    "Provide personalized attention and guidance",
                    "Create a disciplined and focused study environment",
                    "Build confidence through consistent academic support",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-right">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6 text-center">
                    <BookOpen className="w-10 h-10 mx-auto mb-3" />
                    <p className="font-display text-3xl font-bold">500+</p>
                    <p className="text-sm opacity-90">Students Taught</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary text-secondary-foreground">
                  <CardContent className="p-6 text-center">
                    <Award className="w-10 h-10 mx-auto mb-3" />
                    <p className="font-display text-3xl font-bold">95%</p>
                    <p className="text-sm opacity-90">Success Rate</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary text-secondary-foreground">
                  <CardContent className="p-6 text-center">
                    <Users className="w-10 h-10 mx-auto mb-3" />
                    <p className="font-display text-3xl font-bold">10+</p>
                    <p className="text-sm opacity-90">Expert Faculty</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6 text-center">
                    <Target className="w-10 h-10 mx-auto mb-3" />
                    <p className="font-display text-3xl font-bold">5+</p>
                    <p className="text-sm opacity-90">Years of Trust</p>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Our Core Values"
              subtitle="The principles that guide us in shaping the future of our students"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <Card className="hover-lift border-0 shadow-inspire h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Our Journey"
              subtitle="Milestones that mark our path to excellence"
            />
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>

              {timeline.map((item, index) => (
                <ScrollReveal key={item.year} delay={index * 150}>
                  <div
                    className={`relative flex items-center gap-8 mb-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10"></div>

                    {/* Content */}
                    <div
                      className={`ml-12 md:ml-0 md:w-1/2 ${
                        index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <Card className="inline-block">
                        <CardContent className="p-6">
                          <span className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full mb-3">
                            {item.year}
                          </span>
                          <h3 className="font-display text-xl font-semibold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-blue text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Our Vision
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
              To become the most trusted educational institution in Bhopal, known for 
              producing confident, knowledgeable, and successful students who contribute 
              positively to society. We envision a future where every student who walks 
              through our doors leaves with the tools and confidence to achieve their dreams.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
