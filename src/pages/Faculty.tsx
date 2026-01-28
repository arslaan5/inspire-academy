import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, GraduationCap, BookOpen } from "lucide-react";

interface FacultyMember {
  id: string;
  name: string;
  subject: string;
  experience: string;
  qualification: string;
  specialization: string;
}

const facultyMembers: FacultyMember[] = [
  {
    id: "1",
    name: "Dr. Rajesh Sharma",
    subject: "Mathematics",
    experience: "15+ Years",
    qualification: "Ph.D. Mathematics",
    specialization: "Class 11-12, GATE",
  },
  {
    id: "2",
    name: "Prof. Priya Singh",
    subject: "Physics",
    experience: "12+ Years",
    qualification: "M.Sc. Physics",
    specialization: "Class 11-12, Competitive Exams",
  },
  {
    id: "3",
    name: "Mr. Amit Verma",
    subject: "Chemistry",
    experience: "10+ Years",
    qualification: "M.Sc. Chemistry",
    specialization: "Class 9-12, CBSE/ICSE",
  },
  {
    id: "4",
    name: "Mrs. Sunita Patel",
    subject: "Biology",
    experience: "8+ Years",
    qualification: "M.Sc. Biology",
    specialization: "Class 11-12, Medical Entrance",
  },
  {
    id: "5",
    name: "Mr. Vikram Joshi",
    subject: "English",
    experience: "10+ Years",
    qualification: "M.A. English",
    specialization: "Class 9-12, Communication Skills",
  },
  {
    id: "6",
    name: "Dr. Meena Gupta",
    subject: "Child Development",
    experience: "12+ Years",
    qualification: "Ph.D. Education",
    specialization: "CTET Preparation",
  },
  {
    id: "7",
    name: "Mr. Rahul Dubey",
    subject: "Social Science",
    experience: "7+ Years",
    qualification: "M.A. History",
    specialization: "Class 9-10, Competitive Exams",
  },
  {
    id: "8",
    name: "Mrs. Kavita Tiwari",
    subject: "Hindi",
    experience: "9+ Years",
    qualification: "M.A. Hindi",
    specialization: "Class 9-12, Literature",
  },
];

const Faculty = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-inspire">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                Our Team
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Meet Our Expert Faculty
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Learn from experienced educators who are passionate about helping students 
                achieve their academic goals and reach their full potential.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ScrollReveal>
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p className="font-display text-3xl font-bold">10+</p>
                <p className="text-sm opacity-70">Expert Teachers</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p className="font-display text-3xl font-bold">100+</p>
                <p className="text-sm opacity-70">Years Combined Experience</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="text-center">
                <GraduationCap className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p className="font-display text-3xl font-bold">500+</p>
                <p className="text-sm opacity-70">Students Mentored</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="text-center">
                <BookOpen className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p className="font-display text-3xl font-bold">15+</p>
                <p className="text-sm opacity-70">Subjects Covered</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Our Teaching Staff"
              subtitle="Dedicated professionals committed to your success"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyMembers.map((faculty, index) => (
              <ScrollReveal key={faculty.id} delay={index * 75}>
                <Card className="hover-lift border-0 shadow-inspire h-full group">
                  <CardContent className="p-6 text-center">
                    {/* Avatar placeholder */}
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="font-display text-2xl font-bold text-primary">
                        {faculty.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-semibold mb-1">
                      {faculty.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">
                      {faculty.subject}
                    </p>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="flex items-center justify-center gap-2">
                        <Award className="w-4 h-4 text-secondary" />
                        {faculty.experience}
                      </p>
                      <p className="text-xs">{faculty.qualification}</p>
                      <p className="text-xs text-primary/80">{faculty.specialization}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Faculty */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Why Learn From Us?"
              subtitle="What sets our faculty apart from the rest"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  Highly Qualified
                </h3>
                <p className="text-muted-foreground text-sm">
                  All our teachers hold advanced degrees and have proven track records 
                  in their respective fields.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  Student-Centric
                </h3>
                <p className="text-muted-foreground text-sm">
                  Our faculty prioritizes individual attention and adapts teaching 
                  methods to suit each student's learning style.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  Result-Oriented
                </h3>
                <p className="text-muted-foreground text-sm">
                  With a strong focus on outcomes, our teachers have helped countless 
                  students achieve their academic goals.
                </p>
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
              Want to Learn From the Best?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Join Inspire Academy today and experience the difference that expert 
              teaching can make in your academic journey.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-background text-primary hover:bg-background/90 text-lg px-8"
              >
                Enroll Now
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Faculty;
