import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Droplets } from "lucide-react";
import heroCommunity from "@/assets/community-distribution.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCommunity}
          alt="Community gathering showing hope and unity"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block bg-hope/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
            <p className="text-hope-light font-semibold text-sm sm:text-base lg:text-lg italic">
              "Prevention is better than cure!"
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
            Transforming Lives Through
            <span className="text-transparent bg-gradient-to-r from-hope-light to-water bg-clip-text">
              {" "}Hope{" "}
            </span>
            and Action
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
            Somali Barakah Organization ensures every Somali has access to essential services - clean water, 
            nutritious food, quality education, and healthcare - building a healthier, stronger future 
            for communities across Somalia.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Button 
              size="lg" 
              className="bg-hope hover:bg-hope/90 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Donate Now <Heart className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-foreground px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold"
            >
              See Our Impact <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
            <div className="text-center py-4 sm:py-0">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 sm:h-8 w-6 sm:w-8 text-hope-light" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">15,000+</div>
              <div className="text-xs sm:text-sm text-gray-200">Lives Impacted</div>
            </div>
            <div className="text-center py-4 sm:py-0 border-y sm:border-y-0 border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Droplets className="h-6 sm:h-8 w-6 sm:w-8 text-water" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
              <div className="text-xs sm:text-sm text-gray-200">Clean Water Wells</div>
            </div>
            <div className="text-center py-4 sm:py-0">
              <div className="flex items-center justify-center mb-2">
                <Heart className="h-6 sm:h-8 w-6 sm:w-8 text-hope-light" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">5</div>
              <div className="text-xs sm:text-sm text-gray-200">Years of Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;