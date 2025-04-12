'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, Award, Star, TrendingUp, Recycle, Scale, Shield, Calendar, Rocket, Trophy, Banknote, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Happy Customers",
    description: "Trusted by thousands across India"
  },
  {
    icon: Target,
    value: "98%",
    label: "Customer Satisfaction",
    description: "Rated excellent by our clients"
  },
  {
    icon: Award,
    value: "15+ Years",
    label: "Industry Experience",
    description: "Leading the scrap industry"
  },
  {
    icon: Star,
    value: "Rs50M+",
    label: "Paid to Customers",
    description: "In the last financial year"
  }
];

const values = [
  {
    icon: TrendingUp,
    title: "Market-Leading Rates",
    description: "We consistently offer the highest rates in the market, ensuring maximum value for your scrap materials."
  },
  {
    icon: Recycle,
    title: "Environmental Impact",
    description: "Our sustainable practices help reduce landfill waste and promote a circular economy."
  },
  {
    icon: Scale,
    title: "Fair & Transparent",
    description: "Digital weighing systems and clear pricing ensure you always get what you deserve."
  },
  {
    icon: Shield,
    title: "Trusted Service",
    description: "Licensed, insured, and committed to providing professional service every time."
  }
];

const journeyMilestones = [
  {
    year: "2008",
    icon: Calendar,
    title: "The Beginning",
    description: "Started with a vision to revolutionize the scrap industry"
  },
  {
    year: "2012",
    icon: Rocket,
    title: "Digital Transformation",
    description: "Introduced digital weighing and instant payment systems"
  },
  {
    year: "2016",
    icon: Trophy,
    title: "Market Leader",
    description: "Became the largest scrap collection network in Pakistan"
  },
  {
    year: "2023",
    icon: Star,
    title: "Today",
    description: "Serving 100+ cities with 10,000+ satisfied customers"
  }
];

const successfulProjects = [
  {
    title: "Factory Clearance Success",
    location: "Quaid-e-Azam Industrial Area",
    amount: "Rs12.5 Lakhs",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    description: "Completed a major factory clearance project, providing instant payment and efficient service"
  },
  {
    title: "Residential Complex Collection",
    location: "Green Valley Apartments",
    amount: "Rs8.2 Lakhs",
    image: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80&w=800",
    description: "Organized monthly collection drives for 500+ households"
  },
  {
    title: "Corporate Office Recycling",
    location: "Tech Park, Bangalore",
    amount: "Rs15.3 Lakhs",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
    description: "Implemented sustainable waste management solutions"
  }
];

export default function AboutPage() {
  const router = useRouter();

  const callData = (route:any)=>{
    router.push(route)
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#14532D] to-[#0F3D24]">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-[#facc15]/10 rounded-full blur-3xl" />
          <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-[#22c55e]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Who We Are &
                <span className="block text-[#facc15]">Why It Matters</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
                Since 2008, we've been revolutionizing the scrap industry with transparency, 
                technology, and trust. Our mission is to make scrap selling as simple as possible 
                while ensuring you get the best value for your materials.
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <Button
                onClick={()=>callData('./')}
                  className="bg-[#facc15] hover:bg-[#eab308] text-black px-8 py-6 text-md sm:text-lg rounded-full transform transition-all duration-300 hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                >
                  <div className="w-12 h-12 rounded-full bg-[#facc15] flex items-center justify-center mb-4 mx-auto">
                    <stat.icon className="h-6 w-6 text-black" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-[#facc15] mb-2">{stat.label}</div>
                  <p className="text-gray-300">{stat.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Values Grid */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#0f4c2f] rounded-2xl p-8 text-left hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#facc15] flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{value.title}</h3>
                  </div>
                  <p className="text-gray-300 text-lg">{value.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Journey Timeline Section */}
            <div className="mt-24 sm:mt-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Our <span className="text-[#facc15]">Journey</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                  From humble beginnings to industry leadership, our journey has been driven by innovation and trust
                </p>
              </motion.div>

              {/* Desktop Timeline */}
              <div className="relative hidden md:block">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#facc15]/30" />
                <div className="space-y-16">
                  {journeyMilestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`flex items-center ${
                        index % 2 === 0 ? 'flex-row-reverse' : ''
                      }`}
                    >
                      <div className="w-1/2 flex justify-center">
                        <div className="bg-[#0f4c2f] rounded-2xl p-6 max-w-sm transform transition-all duration-300 hover:scale-105">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="w-10 h-10 rounded-full bg-[#facc15] flex items-center justify-center">
                              <milestone.icon className="h-5 w-5 text-black" />
                            </div>
                            <span className="text-2xl font-bold text-[#facc15]">{milestone.year}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                          <p className="text-gray-300">{milestone.description}</p>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#facc15] absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-black" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mobile Timeline */}
              <div className="md:hidden space-y-6 px-4">
                {journeyMilestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-[#0f4c2f] rounded-xl p-4"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#facc15] flex items-center justify-center">
                        <milestone.icon className="h-4 w-4 text-black" />
                      </div>
                      <span className="text-lg font-bold text-[#facc15]">{milestone.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{milestone.title}</h3>
                    <p className="text-sm text-gray-300">{milestone.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Successful Projects Section */}
            <div className="mt-28 sm:mt-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Our <span className="text-[#facc15]">Successful Projects</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                  Real success stories from our satisfied customers across Pakistan
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {successfulProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl"
                  >
                    <div className="relative h-96">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                      <div className="absolute bottom-0 p-6 text-white">
                        <div className="flex items-center gap-2 mb-3">
                          <Banknote className="h-5 w-5 text-[#facc15]" />
                          <span className="text-xl font-bold text-[#facc15]">{project.amount}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-2">{project.location}</p>
                        <p className="text-sm text-gray-400">{project.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New CTA Section */}
      <div className="mt-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f4c2f] to-transparent" />
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
                Ready to Turn Your
                <span className="text-[#facc15] block mt-2">Scrap into Profit?</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300">
                Join thousands of satisfied customers who have discovered the easiest way to sell their scrap. 
                Our expert team is ready to assist you with the best rates and professional service.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                onClick={()=>callData('./')}
                  className="bg-[#facc15] hover:bg-[#eab308] text-black font-semibold text-md sm:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 group"
                >
                  Get Started Now
                  <ArrowUpRight className="ml-2 h-5 w-5 group-hover:rotate-45 transition-transform duration-300" />
                </Button>
                
                <Button
                onClick={()=>callData('./contact')}
                  variant="outline"
                  className="border-2 border-[#facc15] text-[#facc15] hover:bg-[#facc15] hover:text-black font-semibold text-md sm:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                >
                  Contact Support
                  <Phone className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { title: "24/7 Support", description: "Our team is always here to help" },
                { title: "Instant Quotes", description: "Get immediate price estimates" },
                { title: "Same Day Pickup", description: "Quick and efficient service" },
                { title: "Best Market Rates", description: "Guaranteed highest prices" }
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20"
                >
                  <h3 className="text-[#facc15] font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}