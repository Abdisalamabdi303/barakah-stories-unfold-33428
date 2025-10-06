import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Utensils, GraduationCap, Stethoscope, ArrowRight } from "lucide-react";
import waterProject from "@/assets/water-project.jpg";
import foodDistribution from "@/assets/food-distribution.jpg";
import educationProgram from "@/assets/education-program.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      icon: Droplets,
      title: "Clean Water Access",
      description: "Drilling wells and installing water systems to provide sustainable access to clean, safe drinking water for rural communities.",
      image: waterProject,
      impact: "50+ wells built, serving 15,000+ people",
      color: "water",
    },
    {
      icon: Utensils,
      title: "Food Security",
      description: "Distributing nutritious meals and emergency food supplies while supporting local agriculture and farming initiatives.",
      image: foodDistribution,
      impact: "Monthly food aid to 500+ families",
      color: "earth",
    },
    {
      icon: GraduationCap,
      title: "Education Programs",
      description: "Building schools, providing educational materials, and training teachers to ensure quality education for all children.",
      image: educationProgram,
      impact: "3 schools built, 800+ children enrolled",
      color: "hope",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Services",
      description: "Mobile health clinics, vaccination programs, and maternal care services bringing essential healthcare to remote areas.",
      image: "/placeholder.svg?height=400&width=600",
      impact: "2,000+ patients treated monthly",
      color: "warmth",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Impact Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Through focused programs in essential areas, we're creating sustainable change 
            that transforms lives and strengthens communities across Somalia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center mb-2">
                    <project.icon className="h-6 w-6 mr-2" />
                    <span className="font-semibold">{project.impact}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <project.icon className={`h-8 w-8 text-${project.color} mr-3`} />
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <Button variant="outline" className="w-full group">
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-hope hover:bg-hope/90 text-white px-8">
            See All Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;