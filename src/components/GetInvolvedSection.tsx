import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Megaphone, ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const GetInvolvedSection = () => {
  const { t } = useLanguage();
  const ways = [
    {
      icon: Heart,
      title: t('getInvolved.ways.volunteering.title'),
      description: t('getInvolved.ways.volunteering.description'),
      benefits: [
        t('getInvolved.ways.volunteering.benefits.b1'),
        t('getInvolved.ways.volunteering.benefits.b2'),
        t('getInvolved.ways.volunteering.benefits.b3'),
        t('getInvolved.ways.volunteering.benefits.b4'),
      ],
      action: t('getInvolved.ways.volunteering.action'),
      color: "hope",
    },
    {
      icon: Users,
      title: t('getInvolved.ways.development.title'),
      description: t('getInvolved.ways.development.description'),
      benefits: [
        t('getInvolved.ways.development.benefits.b1'),
        t('getInvolved.ways.development.benefits.b2'),
        t('getInvolved.ways.development.benefits.b3'),
        t('getInvolved.ways.development.benefits.b4'),
      ],
      action: t('getInvolved.ways.development.action'),
      color: "water",
    },
    {
      icon: Megaphone,
      title: t('getInvolved.ways.awareness.title'),
      description: t('getInvolved.ways.awareness.description'),
      benefits: [
        t('getInvolved.ways.awareness.benefits.b1'),
        t('getInvolved.ways.awareness.benefits.b2'),
        t('getInvolved.ways.awareness.benefits.b3'),
        t('getInvolved.ways.awareness.benefits.b4'),
      ],
      action: t('getInvolved.ways.awareness.action'),
      color: "warmth",
    },
  ];

  return (
    <section id="get-involved" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            {t('getInvolved.title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            {t('getInvolved.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {ways.map((way, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-card"
            >
              <CardContent className="p-6 sm:p-8">
                <div className={`inline-flex p-3 sm:p-4 rounded-lg bg-${way.color}/20 mb-4 sm:mb-6`}>
                  <way.icon className={`h-6 sm:h-8 w-6 sm:w-8 text-${way.color}`} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
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
        <div className="bg-gradient-to-r from-hope to-water rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            {t('getInvolved.donate.title')}
          </h3>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
            {t('getInvolved.donate.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-hope hover:bg-white/90 border-none px-8"
            >
              {t('getInvolved.donate.oneTime')} <Heart className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white hover:bg-white/20 border-2 border-white px-8"
            >
              {t('getInvolved.donate.monthly')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
