import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Shield } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Upholding transparency, fairness, and public trust in all our operations.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working with all stakeholders, locally and internationally, to achieve greater impact.",
    },
    {
      icon: Target,
      title: "Sustainable Development",
      description: "Seeking lasting solutions for community improvement and self-sufficiency.",
    },
    {
      icon: Heart,
      title: "Quality and Competence",
      description: "Ensuring high-standard, evidence-based humanitarian services.",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-hope-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            About Somali Barakah Organization
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Somali Barakah Organization is an independent humanitarian institution serving communities on a voluntary basis. 
            Our goal is to ensure every Somali has access to essential services and resources to build a healthier, 
            more prosperous future through evidence-based programs, professional training, and community empowerment - 
            working in collaboration with both Somali and international organizations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Our Mission</h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              To improve the quality of life for Somali communities by establishing reliable systems for delivering 
              essential services, strengthening local capacity through training and education, and ensuring emergency 
              preparedness to respond effectively to humanitarian crises.
            </p>
          </div>
          
          <div className="mt-8 lg:mt-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Our Vision</h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              "To achieve a healthy, prosperous Somali society with access to essential services, 
              high-quality programs, and a system capable of responding swiftly to humanitarian challenges."
            </p>
            <div className="bg-hope-light/30 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-4">Our Objectives</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Monitoring and addressing humanitarian needs within communities</li>
                <li>• Providing essential services through sustainable programs</li>
                <li>• Strengthening data collection and impact research</li>
                <li>• Enhancing local workforce capacity to address challenges</li>
                <li>• Responding to emergencies and crises effectively</li>
                <li>• Collaborating with national and international organizations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8 sm:mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <value.icon className="h-12 w-12 text-hope" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;