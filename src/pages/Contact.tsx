import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle,
  Send,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    lines: ["In Front of V-Mart, Karond", "Bhopal, Madhya Pradesh 462038"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    lines: ["+91 98765 43210", "+91 87654 32109"],
    link: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["info@inspireacademy.com", "admissions@inspireacademy.com"],
    link: "mailto:info@inspireacademy.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Monday - Saturday: 7 AM - 9 PM", "Sunday: Closed"],
  },
];

const courses = [
  "Class 9-10 Tuition",
  "Class 11-12 Science",
  "Class 11-12 Commerce",
  "CTET Preparation",
  "GATE Coaching",
  "Library Membership",
  "Other",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", email: "", course: "", message: "" });
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-inspire">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MessageCircle className="w-4 h-4" />
                Get In Touch
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have questions about our courses or want to enroll? We're here to help! 
                Reach out to us and we'll get back to you as soon as possible.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-16">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={info.title} delay={index * 100}>
                <Card className="hover-lift border-0 shadow-inspire h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    {info.lines.map((line, i) => (
                      <p
                        key={i}
                        className="text-sm text-muted-foreground"
                      >
                        {info.link && i === 0 ? (
                          <a
                            href={info.link}
                            className="hover:text-primary transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollReveal animation="fade-left">
              <Card className="border-0 shadow-inspire-lg">
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-bold mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Fill out the form below and we'll get back to you shortly.
                  </p>

                  {isSubmitted ? (
                    <div className="text-center py-12 animate-scale-in">
                      <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-10 h-10 text-secondary" />
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for your enquiry. We'll contact you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="course">Interested In *</Label>
                        <Select
                          value={formData.course}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, course: value }))
                          }
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                          <SelectContent>
                            {courses.map((course) => (
                              <SelectItem key={course} value={course}>
                                {course}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your requirements..."
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full hover-glow bg-gradient-blue"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Enquiry
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Map & Quick Contact */}
            <ScrollReveal animation="fade-right">
              <div className="space-y-6">
                {/* Map */}
                <Card className="border-0 shadow-inspire overflow-hidden">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.0547813983485!2d77.4022!3d23.2597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69b0c8e8e8e9%3A0x4f8f4f8f4f8f4f8f!2sKarond%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Inspire Academy Location"
                    />
                  </div>
                </Card>

                {/* Quick Contact */}
                <Card className="border-0 shadow-inspire bg-gradient-blue text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-4">
                      Quick Contact
                    </h3>
                    <p className="opacity-90 mb-6">
                      Need immediate assistance? Reach out to us directly!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="tel:+919876543210" className="flex-1">
                        <Button
                          variant="secondary"
                          className="w-full bg-background text-primary hover:bg-background/90"
                        >
                          <Phone className="w-5 h-5 mr-2" />
                          Call Now
                        </Button>
                      </a>
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className="w-full bg-secondary hover:bg-secondary/90">
                          <MessageCircle className="w-5 h-5 mr-2" />
                          WhatsApp
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Visit Our Campus
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              We welcome you to visit our academy and library. Experience our 
              facilities firsthand and meet our faculty to discuss your educational goals.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">
                In Front of V-Mart, Karond, Bhopal
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
