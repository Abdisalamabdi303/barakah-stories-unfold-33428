import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Share2, Calendar, DollarSign, HandHeart } from "lucide-react";

const HelpSection = () => {
  const ways = [
    {
      icon: Heart,
      title: "Make a Donation",
      description: "Your financial contribution directly funds our life-changing programs. Every dollar makes a difference.",
      action: "Donate Securely",
      amount: "Starting from $25",
      color: "bg-hope",
    },
    {
      icon: Users,
      title: "Volunteer with Us",
      description: "Join our team of dedicated volunteers. Share your skills, time, and passion for humanitarian work.",
      action: "Sign Up to Volunteer",
      amount: "Flexible schedules",
      color: "bg-water",
    },
    {
      icon: Share2,
      title: "Spread Awareness",
      description: "Help us reach more people by sharing our mission on social media and with your community.",
      action: "Share Our Story",
      amount: "Free to support",
      color: "bg-earth",
    },
  ];

  const donationOptions = [
    { amount: 25, impact: "Provides clean water for a family for 1 month" },
    { amount: 50, impact: "Feeds a child nutritious meals for 2 weeks" },
    { amount: 100, impact: "Supports a child's education for 1 term" },
    { amount: 250, impact: "Helps build a well serving 20 families" },
  ];

  return (
    <section id="help" className="py-20 bg-gradient-to-b from-hope-light/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How You Can Help
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            There are many meaningful ways to support our mission. Whether through donations, 
            volunteering, or spreading awareness, your involvement creates real change.
          </p>
        </div>

        {/* Ways to Help */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ways.map((way, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className={`${way.color} rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center`}>
                  <way.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{way.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{way.description}</p>
                <p className="text-sm text-hope font-semibold mb-4">{way.amount}</p>
                <Button className="w-full bg-hope hover:bg-hope/90 text-white">
                  {way.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Donation Options */}
        <div className="bg-card rounded-lg shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">Quick Donation Options</h3>
            <p className="text-muted-foreground">See the immediate impact your donation will have</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {donationOptions.map((option, index) => (
              <Card key={index} className="border-2 border-border hover:border-hope transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <DollarSign className="h-6 w-6 text-hope" />
                    <span className="text-2xl font-bold text-foreground">{option.amount}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-tight">{option.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-hope hover:bg-hope/90 text-white px-8 mb-4">
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Button>
            <p className="text-sm text-muted-foreground">
              100% of donations go directly to programs. Administrative costs covered separately.
            </p>
          </div>
        </div>

        {/* Volunteer Opportunities */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <HandHeart className="h-8 w-8 text-water mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Volunteer Opportunities</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start">
                  <span className="text-hope mr-2">•</span>
                  Field work in Somalia (healthcare, education, water projects)
                </li>
                <li className="flex items-start">
                  <span className="text-hope mr-2">•</span>
                  Remote support (social media, fundraising, admin)
                </li>
                <li className="flex items-start">
                  <span className="text-hope mr-2">•</span>
                  Skills-based volunteering (medical, engineering, teaching)
                </li>
                <li className="flex items-start">
                  <span className="text-hope mr-2">•</span>
                  Event organization and community outreach
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Apply to Volunteer
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 text-earth mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Upcoming Events</h3>
              </div>
              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-hope pl-4">
                  <h4 className="font-semibold text-foreground">Community Fundraiser</h4>
                  <p className="text-sm text-muted-foreground">December 15, 2024</p>
                </div>
                <div className="border-l-4 border-water pl-4">
                  <h4 className="font-semibold text-foreground">Volunteer Training</h4>
                  <p className="text-sm text-muted-foreground">January 8, 2025</p>
                </div>
                <div className="border-l-4 border-earth pl-4">
                  <h4 className="font-semibold text-foreground">Annual Report Launch</h4>
                  <p className="text-sm text-muted-foreground">February 1, 2025</p>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                View All Events
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;