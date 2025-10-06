import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Shield } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Every action we take is driven by genuine care and empathy for those we serve.",
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "We maintain complete openness about our operations, finances, and impact.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in empowering local communities to create lasting change.",
    },
    {
      icon: Target,
      title: "Impact",
      description: "Every donation and effort is directed toward measurable, sustainable outcomes.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-hope-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Somali Barakah Organization
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded in 2019, Somali Barakah Organization is dedicated to transforming lives 
            through sustainable humanitarian programs that address the most pressing needs in Somalia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              To provide essential services and resources that enable Somali communities to thrive. 
              We focus on sustainable solutions that create lasting impact in the areas of clean water access, 
              food security, quality education, and healthcare.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through partnerships with local communities, international donors, and dedicated volunteers, 
              we work tirelessly to break the cycle of poverty and build hope for future generations.
            </p>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Vision</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A Somalia where every person has access to clean water, nutritious food, quality education, 
              and healthcare - where communities are empowered to build their own sustainable futures.
            </p>
            <div className="bg-hope-light/30 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-2">Our Promise</h4>
              <p className="text-muted-foreground">
                Every dollar donated goes directly to programs that make a real difference. 
                We maintain the highest standards of accountability and transparency in all our operations.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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