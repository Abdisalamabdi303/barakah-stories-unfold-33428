import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, ExternalLink } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      date: "March 2025",
      title: "New Water Wells Completed in Baidoa Region",
      excerpt: "Five new deep water wells have been successfully drilled, providing clean water access to over 3,000 people in rural communities.",
      category: "Water Projects",
      color: "water",
    },
    {
      date: "February 2025",
      title: "Emergency Food Distribution Reaches 5,000 Families",
      excerpt: "Our emergency response team delivered food parcels to drought-affected families across three districts, providing critical nutrition support.",
      category: "Emergency Response",
      color: "warmth",
    },
    {
      date: "January 2025",
      title: "Healthcare Training Program Graduates 50 Community Workers",
      excerpt: "A comprehensive training program equipped local healthcare workers with essential skills to provide better care to their communities.",
      category: "Capacity Building",
      color: "hope",
    },
    {
      date: "December 2024",
      title: "Education Support Program Launches in 10 Schools",
      excerpt: "New education initiative provides learning materials, teacher training, and infrastructure improvements to benefit over 2,000 students.",
      category: "Education",
      color: "earth",
    },
  ];

  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest News & Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about our recent projects, success stories, and impact 
            in communities across Somalia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {news.map((item, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-card group"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-${item.color}/20 text-${item.color}`}>
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-hope transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {item.excerpt}
                </p>
                <Button 
                  variant="ghost" 
                  className="text-hope hover:text-hope/80 px-0"
                >
                  Read Full Story <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-hope text-hope hover:bg-hope hover:text-white px-8"
          >
            View All News <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
