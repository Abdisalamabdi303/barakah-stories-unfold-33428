import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Shield } from "lucide-react";
import teamWork from "@/assets/ramadan-distribution-event.jpg";
import { useLanguage } from "@/lib/language-context";

const AboutSection = () => {
  const { t } = useLanguage();
  const values = [
    {
      icon: Shield,
      title: t('about.values.honesty'),
      description: t('about.values.honestyDesc'),
    },
    {
      icon: Users,
      title: t('about.values.cooperation'),
      description: t('about.values.cooperationDesc'),
    },
    {
      icon: Target,
      title: t('about.values.sustainability'),
      description: t('about.values.sustainabilityDesc'),
    },
    {
      icon: Heart,
      title: t('about.values.quality'),
      description: t('about.values.qualityDesc'),
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-hope-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            {t('about.title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            {t('about.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">{t('about.mission.title')}</h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              {t('about.mission.text')}
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={teamWork}
                alt="Barakah Organization team distributing aid to communities"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
          
          <div className="mt-8 lg:mt-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">{t('about.vision.title')}</h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              {t('about.vision.text')}
            </p>
            <div className="bg-hope-light/30 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-4">{t('about.objectives.title')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('about.objectives.item1')}</li>
                <li>• {t('about.objectives.item2')}</li>
                <li>• {t('about.objectives.item3')}</li>
                <li>• {t('about.objectives.item4')}</li>
                <li>• {t('about.objectives.item5')}</li>
                <li>• {t('about.objectives.item6')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8 sm:mb-12">{t('about.values.title')}</h3>
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