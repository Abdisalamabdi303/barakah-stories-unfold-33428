import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, AlertTriangle, BookOpen, Megaphone, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Activity,
      title: "Community Monitoring & Assessment",
      description: "We monitor community needs and humanitarian challenges - such as food insecurity, water access, health concerns, and education gaps - working with field teams to respond to community welfare and development.",
      color: "water",
    },
    {
      icon: AlertTriangle,
      title: "Humanitarian Emergency Response",
      description: "Rapid response to humanitarian emergencies such as floods, droughts, disease outbreaks, and displacement crises with essential relief supplies and support services.",
      color: "warmth",
    },
    {
      icon: BookOpen,
      title: "Capacity Building & Training",
      description: "We conduct professional training and capacity-building programs for community workers, volunteers, and local leaders to strengthen humanitarian response and sustainable development.",
      color: "earth",
    },
    {
      icon: Megaphone,
      title: "Awareness & Community Education",
      description: "We deliver reliable information to communities on essential topics like hygiene, nutrition, water safety, and disease prevention through media campaigns and direct community engagement.",
      color: "hope",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive humanitarian programs designed to address the most critical needs 
            and build resilient communities across Somalia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-card"
            >
              <CardContent className="p-8">
                <div className={`inline-flex p-4 rounded-lg bg-${service.color}/20 mb-6`}>
                  <service.icon className={`h-8 w-8 text-${service.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="text-hope hover:text-hope/80 px-0"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-hope hover:bg-hope/90 text-white px-8"
          >
            View All Programs <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
