import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@webstudio.com",
    link: "mailto:hello@webstudio.com"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Tech Street, Silicon Valley, CA 94025",
    link: "https://maps.google.com"
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon-Fri: 9AM-6PM PST",
    link: null
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Let's Start Your Project</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with innovative IT solutions? Get in touch with us today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                We'd love to hear about your project and discuss how we can help bring your vision to life. 
                Send us a message and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{info.title}</div>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <div className="text-muted-foreground text-sm">{info.content}</div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name *</label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">Company</label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Project Details *</label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                    rows={5}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}