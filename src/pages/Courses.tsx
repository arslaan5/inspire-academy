import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  GraduationCap,
  BookOpen,
  Library,
  Clock,
  Users,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

interface Course {
  id: string;
  title: string;
  category: string;
  icon: React.ElementType;
  color: string;
  description: string;
  features: string[];
  subjects?: string[];
  timing?: string;
  batchSize?: string;
}

const courses: Course[] = [
  {
    id: "class-9-10",
    title: "Class 9-10 Tuition",
    category: "School Tuition",
    icon: GraduationCap,
    color: "bg-primary",
    description:
      "Comprehensive coaching for Class 9 and 10 students covering all subjects with focus on board exam preparation.",
    features: [
      "CBSE & ICSE curriculum covered",
      "Regular tests and assessments",
      "Doubt clearing sessions",
      "Study material provided",
      "Parent-teacher meetings",
    ],
    subjects: ["Mathematics", "Science", "English", "Social Science", "Hindi"],
    timing: "Morning & Evening batches available",
    batchSize: "15-20 students per batch",
  },
  {
    id: "class-11-12",
    title: "Class 11-12 Tuition",
    category: "School Tuition",
    icon: GraduationCap,
    color: "bg-primary",
    description:
      "Expert coaching for Class 11 and 12 students with specialized subject-wise teaching for board exam excellence.",
    features: [
      "Science & Commerce streams",
      "Board exam focused preparation",
      "Previous year paper practice",
      "Concept-based learning",
      "Regular progress reports",
    ],
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Accountancy"],
    timing: "Flexible timing options",
    batchSize: "10-15 students per batch",
  },
  {
    id: "ctet",
    title: "CTET Preparation",
    category: "Competitive Exams",
    icon: BookOpen,
    color: "bg-secondary",
    description:
      "Complete CTET preparation course for both Paper I and Paper II with comprehensive study material and mock tests.",
    features: [
      "Complete syllabus coverage",
      "CDP & Pedagogy focus",
      "Weekly mock tests",
      "Previous year solutions",
      "Exam strategy guidance",
    ],
    subjects: ["Child Development", "Mathematics", "EVS", "Language I & II"],
    timing: "Weekend & Regular batches",
    batchSize: "20-25 students per batch",
  },
  {
    id: "gate",
    title: "GATE Coaching",
    category: "Competitive Exams",
    icon: BookOpen,
    color: "bg-secondary",
    description:
      "Intensive GATE preparation program for engineering students with focus on conceptual clarity and problem solving.",
    features: [
      "Subject-wise detailed coverage",
      "Numerical problem practice",
      "Test series included",
      "Personalized mentoring",
      "Interview preparation",
    ],
    subjects: ["Engineering Mathematics", "Core Subjects", "Aptitude"],
    timing: "Regular & Crash courses",
    batchSize: "10-15 students per batch",
  },
  {
    id: "other-competitive",
    title: "Other Competitive Exams",
    category: "Competitive Exams",
    icon: BookOpen,
    color: "bg-secondary",
    description:
      "Preparation courses for various state and national level competitive examinations with expert guidance.",
    features: [
      "Customized study plans",
      "Current affairs updates",
      "Reasoning & Aptitude training",
      "General knowledge sessions",
      "One-on-one doubt sessions",
    ],
    timing: "Flexible scheduling",
    batchSize: "As per requirement",
  },
  {
    id: "library",
    title: "Library Facility",
    category: "Study Space",
    icon: Library,
    color: "bg-primary",
    description:
      "A peaceful, well-maintained study library with all amenities for focused self-study and exam preparation.",
    features: [
      "Air-conditioned environment",
      "Comfortable seating",
      "Reference books available",
      "Wi-Fi connectivity",
      "Fixed study timings",
    ],
    timing: "7:00 AM - 9:00 PM",
    batchSize: "50 seats available",
  },
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-inspire">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                Our Programs
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Courses & Services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore our comprehensive range of coaching programs designed to help 
                students excel in their academic journey and competitive examinations.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="What We Offer"
              subtitle="Choose from our wide range of academic programs and facilities"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <ScrollReveal key={course.id} delay={index * 100}>
                <Card
                  className="hover-lift cursor-pointer border-0 shadow-inspire h-full group"
                  onClick={() => setSelectedCourse(course)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-14 h-14 ${course.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <course.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {course.category}
                      </Badge>
                    </div>
                    <CardTitle className="font-display text-xl mt-4">
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {course.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      {course.timing && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span className="truncate">{course.timing.split(" ")[0]}</span>
                        </div>
                      )}
                      {course.batchSize && (
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span className="truncate">{course.batchSize.split(" ")[0]}</span>
                        </div>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      View Details
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details Dialog */}
      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="max-w-2xl">
          {selectedCourse && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div
                    className={`w-12 h-12 ${selectedCourse.color} rounded-xl flex items-center justify-center`}
                  >
                    <selectedCourse.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-1">
                      {selectedCourse.category}
                    </Badge>
                    <DialogTitle className="font-display text-2xl">
                      {selectedCourse.title}
                    </DialogTitle>
                  </div>
                </div>
                <DialogDescription className="text-base">
                  {selectedCourse.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3">What's Included</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedCourse.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subjects */}
                {selectedCourse.subjects && (
                  <div>
                    <h4 className="font-semibold mb-3">Subjects Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCourse.subjects.map((subject) => (
                        <Badge key={subject} variant="outline">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Info */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
                  {selectedCourse.timing && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Timing</p>
                        <p className="text-sm font-medium">{selectedCourse.timing}</p>
                      </div>
                    </div>
                  )}
                  {selectedCourse.batchSize && (
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Batch Size</p>
                        <p className="text-sm font-medium">{selectedCourse.batchSize}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="flex gap-4">
                  <Link to="/contact" className="flex-1">
                    <Button className="w-full hover-glow bg-gradient-blue">
                      Enquire Now
                    </Button>
                  </Link>
                  <a href="tel:+919876543210" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Call Us
                    </Button>
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-blue text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Not Sure Which Course to Choose?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Our counselors are here to help you find the perfect program based on your 
              academic goals and aspirations.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-background text-primary hover:bg-background/90 text-lg px-8"
              >
                Get Free Counseling
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
