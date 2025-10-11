import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Shield, Building } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-hope-light/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Have questions about our work or want to get involved? We'd love to hear from you. 
            Reach out and join us in making a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..." 
                      rows={6}
                      className="mt-1" 
                    />
                  </div>
                  <Button className="w-full bg-hope hover:bg-hope/90 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-hope mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Main Office</p>
                      <p className="text-muted-foreground">123 Humanitarian Way<br />Mogadishu, Somalia</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-hope mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground">+252 123 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-hope mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">info@somalibarakah.org</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-hope mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Office Hours</p>
                      <p className="text-muted-foreground">Mon - Fri: 8:00 AM - 5:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transparency Information */}
            <Card className="shadow-lg bg-hope-light/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-hope mr-2" />
                  <h3 className="text-xl font-bold text-foreground">Transparency & Accountability</h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  We believe in complete transparency with our donors and beneficiaries. 
                  All financial records and impact reports are available upon request.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Building className="h-4 w-4 text-hope mr-2" />
                    <span className="font-semibold text-foreground">Registration:</span>
                    <span className="text-muted-foreground ml-1">NPO/123/2019</span>
                  </div>
                  <div className="flex items-start">
                    <Building className="h-4 w-4 text-hope mr-2 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">Bank Details:</span>
                      <p className="text-muted-foreground">
                        Somali Commercial Bank<br />
                        Account: 1234567890<br />
                        SWIFT: SCBLSOM1
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="text-center bg-card rounded-lg p-6 sm:p-8 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Emergency Assistance</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
            If you need immediate humanitarian assistance or want to report an emergency situation, 
            please contact our 24/7 emergency line.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button className="bg-destructive hover:bg-destructive/90 text-white text-sm sm:text-base">
              <Phone className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Emergency Hotline: </span>+252 999 888 777
            </Button>
            <Button variant="outline" className="text-sm sm:text-base">
              Report Emergency Online
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;