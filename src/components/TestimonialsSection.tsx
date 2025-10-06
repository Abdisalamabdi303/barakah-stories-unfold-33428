import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Amina Hassan",
      location: "Mogadishu, Somalia",
      role: "Mother of three",
      quote: "Before the well was built, my children and I had to walk 5 kilometers every day for water. Now we have clean water right in our village. My children can go to school instead of spending hours collecting water. This has changed our entire life.",
      rating: 5,
    },
    {
      name: "Dr. Ahmed Ali",
      location: "Hargeisa, Somalia", 
      role: "Local Doctor",
      quote: "Working with Somali Barakah Organization has been incredible. Their mobile health clinics have helped us reach so many remote areas. We've been able to provide vaccinations and maternal care to thousands of people who never had access before.",
      rating: 5,
    },
    {
      name: "Fatima Mohamed",
      location: "Kismayo, Somalia",
      role: "Teacher",
      quote: "The new school that was built in our village has 300 students now. We have proper desks, books, and supplies. I've been teaching for 15 years, and I've never seen children so excited to learn. Thank you for believing in education.",
      rating: 5,
    },
    {
      name: "Omar Jama",
      location: "Garowe, Somalia",
      role: "Community Leader",
      quote: "What I appreciate most about this organization is that they work with us, not just for us. They listen to our needs and involve our community in every decision. This partnership approach creates real, lasting change.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-hope-light/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Stories of Hope & Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The real measure of our success comes from the lives we've touched. 
            Here are some voices from the communities we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-hope mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-hope">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="bg-hope text-white rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-8">Our Collective Impact</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-hope-light">People with Clean Water Access</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-hope-light">Families Receiving Food Aid</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">800+</div>
              <div className="text-hope-light">Children in Our Schools</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-hope-light">Medical Treatments Provided</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;