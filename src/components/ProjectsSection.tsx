import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Utensils, GraduationCap, Stethoscope, ArrowRight } from "lucide-react";
import waterProject from "@/assets/drilling-rig-somalia.jpg";
import foodDistribution from "@/assets/aid-distribution.jpg";
import educationProgram from "@/assets/community-education.jpg";
import healthcareClinic from "@/assets/community-engagement.jpg";
import { useLanguage } from "@/lib/language-context";

const ProjectsSection = () => {
  const { t } = useLanguage();
  const projects = [
    {
      icon: Droplets,
      title: t('projects.water.title'),
      description: t('projects.water.description'),
      image: waterProject,
      impact: t('projects.water.impact'),
      color: "water",
    },
    {
      icon: Utensils,
      title: t('projects.food.title'),
      description: t('projects.food.description'),
      image: foodDistribution,
      impact: t('projects.food.impact'),
      color: "earth",
    },
    {
      icon: GraduationCap,
      title: t('projects.education.title'),
      description: t('projects.education.description'),
      image: educationProgram,
      impact: t('projects.education.impact'),
      color: "hope",
    },
    {
      icon: Stethoscope,
      title: t('projects.healthcare.title'),
      description: t('projects.healthcare.description'),
      image: healthcareClinic,
      impact: t('projects.healthcare.impact'),
      color: "warmth",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('projects.description')}
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
                  {t('common.learnMore')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-hope hover:bg-hope/90 text-white px-8">
            {t('projects.seeAll')} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;