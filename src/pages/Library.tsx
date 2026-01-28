import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Library,
  BookOpen,
  Wifi,
  Clock,
  Armchair,
  Volume2,
  Coffee,
  Shield,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: Volume2,
    title: "Peaceful Environment",
    description: "A quiet, distraction-free space designed for focused studying",
  },
  {
    icon: Armchair,
    title: "Comfortable Seating",
    description: "Ergonomic chairs and proper desks for long study sessions",
  },
  {
    icon: BookOpen,
    title: "Reference Books",
    description: "Wide collection of reference books for various subjects",
  },
  {
    icon: Clock,
    title: "Extended Hours",
    description: "Open from 7:00 AM to 9:00 PM, 6 days a week",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Connectivity",
    description: "High-speed internet for online resources and research",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Well-supervised and secure premises for all students",
  },
];

const rules = [
  "Maintain silence at all times",
  "Mobile phones on silent mode",
  "No food or drinks inside the library",
  "Keep your belongings organized",
  "Respect other students' space",
  "Return borrowed books on time",
];

const libraryImages = [
  { title: "Study Area", description: "Spacious reading zones with individual desks" },
  { title: "Reference Section", description: "Comprehensive collection of academic books" },
  { title: "Group Study", description: "Dedicated spaces for collaborative learning" },
  { title: "Quiet Zone", description: "Ultra-quiet area for deep concentration" },
];

const LibraryPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-inspire">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Library className="w-4 h-4" />
                Study Library
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Your Perfect Study Space
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A peaceful, well-equipped library designed to help you focus, learn, and 
                achieve your academic goals in a supportive environment.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Library Features"
              subtitle="Everything you need for productive study sessions"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <Card className="hover-lift border-0 shadow-inspire h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Our Library Spaces"
              subtitle="Take a virtual tour of our modern study facilities"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {libraryImages.map((image, index) => (
              <ScrollReveal key={image.title} delay={index * 150}>
                <div className="hover-zoom rounded-xl overflow-hidden group">
                  <div className="aspect-video bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center relative">
                    <Library className="w-20 h-20 text-primary/50" />
                    <div className="absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-center text-background p-4">
                        <h4 className="font-display text-xl font-semibold mb-2">
                          {image.title}
                        </h4>
                        <p className="text-sm opacity-90">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timing & Rules */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Timing */}
            <ScrollReveal animation="fade-left">
              <Card className="h-full border-0 shadow-inspire-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                      <Clock className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-2xl font-bold">Library Timings</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium">Monday - Saturday</span>
                      <span className="text-primary font-semibold">7:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium">Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-medium">Public Holidays</span>
                      <span className="text-muted-foreground">Check Schedule</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                    <div className="flex items-center gap-2 text-secondary">
                      <Coffee className="w-5 h-5" />
                      <span className="font-medium text-sm">
                        Short break: 1:00 PM - 2:00 PM
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Rules */}
            <ScrollReveal animation="fade-right">
              <Card className="h-full border-0 shadow-inspire-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center">
                      <Shield className="w-7 h-7 text-secondary-foreground" />
                    </div>
                    <h3 className="font-display text-2xl font-bold">Library Rules</h3>
                  </div>

                  <ul className="space-y-3">
                    {rules.map((rule) => (
                      <li key={rule} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-muted-foreground text-sm mt-6">
                    Following these rules helps maintain a conducive learning environment 
                    for everyone.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-20 bg-gradient-blue text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Library?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Get access to our peaceful study space with flexible membership plans. 
              Contact us to learn about our monthly and yearly packages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-background text-primary hover:bg-background/90 text-lg px-8"
                >
                  Get Membership Details
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
                >
                  Call for Inquiry
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default LibraryPage;
