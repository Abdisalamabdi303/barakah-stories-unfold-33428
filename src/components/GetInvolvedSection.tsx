import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Megaphone, ArrowRight, CheckCircle } from "lucide-react";

const GetInvolvedSection = () => {
  const ways = [
    {
      icon: Heart,
      title: "Volunteering & Consultancy",
      description: "Join us as a volunteer or expert consultant to help advance our humanitarian projects and make a direct impact in communities.",
      benefits: [
        "Make a tangible difference in people's lives",
        "Gain valuable field experience",
        "Work with dedicated professionals",
        "Flexible engagement options",
      ],
      action: "Apply to Volunteer",
      color: "hope",
    },
    {
      icon: Users,
      title: "Professional Development",
      description: "Register for training programs in humanitarian response, community development, and emergency preparedness to build your skills.",
      benefits: [
        "Professional certification programs",
        "Hands-on practical training",
        "Networking opportunities",
        "Career advancement support",
      ],
      action: "View Training Programs",
      color: "water",
    },
    {
      icon: Megaphone,
      title: "Community Awareness",
      description: "Participate in community campaigns and help spread awareness about essential services, health, hygiene, and humanitarian support.",
      benefits: [
        "Support community education",
        "Promote health and wellbeing",
        "Engage with local communities",
        "Amplify our message",
      ],
      action: "Join Campaigns",
      color: "warmth",
    },
  ];

  return (
    <section id="get-involved" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            There are many ways you can contribute to our mission and help us create 
            lasting positive change in Somali communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {ways.map((way, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-card"
            >
              <CardContent className="p-8">
                <div className={`inline-flex p-4 rounded-lg bg-${way.color}/20 mb-6`}>
                  <way.icon className={`h-8 w-8 text-${way.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {way.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {way.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {way.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-hope flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full bg-hope hover:bg-hope/90 text-white"
                >
                  {way.action} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Donation CTA */}
        <div className="bg-gradient-to-r from-hope to-water rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Make a Donation Today
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Your generous donation helps us provide essential services to those who need them most. 
            Every contribution creates lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-hope hover:bg-white/90 border-none px-8"
            >
              One-Time Donation <Heart className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white hover:bg-white/20 border-2 border-white px-8"
            >
              Monthly Giving <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
