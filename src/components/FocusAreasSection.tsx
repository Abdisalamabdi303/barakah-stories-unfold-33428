import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Utensils, GraduationCap, Stethoscope, Home, Users } from "lucide-react";

const FocusAreasSection = () => {
  const focusAreas = [
    {
      icon: Droplets,
      title: "Clean Water Access",
      description: "Drilling wells and establishing water distribution systems to ensure communities have access to safe, clean water.",
      color: "water",
    },
    {
      icon: Utensils,
      title: "Food Security & Nutrition",
      description: "Providing food aid, nutrition programs, and supporting sustainable agriculture for long-term food security.",
      color: "earth",
    },
    {
      icon: GraduationCap,
      title: "Education & Youth Development",
      description: "Supporting schools, providing educational materials, and creating opportunities for youth to build better futures.",
      color: "hope",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Services",
      description: "Mobile health clinics, vaccination programs, and maternal care services bringing essential healthcare to communities.",
      color: "warmth",
    },
    {
      icon: Home,
      title: "Emergency Shelter & Relief",
      description: "Providing temporary shelter and essential supplies to families displaced by conflict, drought, or natural disasters.",
      color: "earth",
    },
    {
      icon: Users,
      title: "Community Capacity Building",
      description: "Training local leaders and volunteers to strengthen community resilience and self-sufficiency.",
      color: "hope",
    },
  ];

  return (
    <section id="focus" className="py-20 bg-gradient-to-b from-background to-hope-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Key Focus Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our programs target the most critical humanitarian needs to create lasting, 
            measurable impact in Somali communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <Card 
              key={index} 
              className="border-none shadow-md hover:shadow-lg transition-shadow bg-card"
            >
              <CardContent className="p-6">
                <div className={`inline-flex p-3 rounded-lg bg-${area.color}/20 mb-4`}>
                  <area.icon className={`h-6 w-6 text-${area.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
