import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Building2, Globe, Heart } from "lucide-react";

const PartnersSection = () => {
  const partnerCategories = [
    {
      icon: Building2,
      title: "Government Agencies",
      description: "Collaborating with local and national government bodies to align our programs with national development priorities.",
      partners: ["Ministry of Humanitarian Affairs", "Regional Development Authorities", "Local Government Offices"],
    },
    {
      icon: Globe,
      title: "International Organizations",
      description: "Partnering with global humanitarian organizations to leverage resources and expertise for greater impact.",
      partners: ["UN Agencies", "International NGOs", "Global Development Partners"],
    },
    {
      icon: Heart,
      title: "Local Community Groups",
      description: "Working closely with grassroots organizations and community leaders who understand local needs best.",
      partners: ["Community Leaders", "Local Cooperatives", "Youth Organizations"],
    },
    {
      icon: Handshake,
      title: "Private Sector Partners",
      description: "Engaging businesses and corporate partners to support sustainable development initiatives.",
      partners: ["Local Businesses", "Corporate Donors", "Social Enterprises"],
    },
  ];

  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-background to-hope-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Partners & Affiliations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We collaborate with diverse partners to maximize our impact and ensure sustainable, 
            community-driven solutions to humanitarian challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {partnerCategories.map((category, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg bg-card"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex p-3 rounded-lg bg-hope/20">
                    <category.icon className="h-6 w-6 text-hope" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.partners.map((partner, idx) => (
                    <span 
                      key={idx}
                      className="inline-block px-3 py-1 rounded-full bg-hope-light/20 text-foreground text-sm"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-hope-light/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Interested in Partnership?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We welcome collaboration with organizations that share our commitment to 
            improving lives and building sustainable communities in Somalia.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-hope hover:bg-hope/90 text-white rounded-lg font-semibold transition-colors"
          >
            Contact Us About Partnership
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
