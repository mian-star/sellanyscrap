'use client';

import { useRef } from 'react';
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Scale, Clock, Shield, Package, Recycle, Droplet, Cpu, TrendingDown, DollarSign, Lock, Calculator, BarChart, Truck, FileCheck, Scale3d, Banknote, Phone, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: TrendingUp,
    title: "Real-Time Market Rates",
    description: "Our prices are updated daily based on current market trends"
  },
  {
    icon: Scale,
    title: "Accurate Weighing",
    description: "Digital scales ensure precise weight measurement"
  },
  {
    icon: Clock,
    title: "Instant Payment",
    description: "Get paid immediately after verification"
  },
  {
    icon: Shield,
    title: "Transparent Process",
    description: "No hidden charges or unexpected deductions"
  }
];

const materials = [
  {
    icon: Package,
    name: "Cardboard",
    benefit: "Clean & bundled cardboard earns you the best rate!",
    price: "Rs26-33",
    trend: "up"
  },
  {
    icon: Recycle,
    name: "Iron",
    benefit: "Higher rates for industrial-grade iron scrap!",
    price: "Rs120-200",
    trend: "up"
  },
  {
    icon: Droplet,
    name: "Plastic",
    benefit: "Segregated plastic fetches premium prices!",
    price: "Rs20-25",
    trend: "down"
  },
  {
    icon: Droplet,
    name: "Paper",
    benefit: "Segregated paper fetches premium prices!",
    price: "Rs11-20",
    trend: "down"
  },
  {
    icon: Cpu,
    name: "Copper",
    benefit: "Best rates for pure copper materials!",
    price: "Rs2200-2500",
    trend: "up"
  },
  {
    icon: Cpu,
    name: "Silver",
    benefit: "Best rates for pure silver materials!",
    price: "Rs400-500",
    trend: "up"
  }
];

const chartData = [
  { month: 'Jan', ourSuccess: 85, marketAverage: 65, otherBuyers: 45 },
  { month: 'Feb', ourSuccess: 88, marketAverage: 68, otherBuyers: 48 },
  { month: 'Mar', ourSuccess: 92, marketAverage: 70, otherBuyers: 50 },
  { month: 'Apr', ourSuccess: 90, marketAverage: 72, otherBuyers: 52 },
  { month: 'May', ourSuccess: 95, marketAverage: 75, otherBuyers: 55 },
  { month: 'Jun', ourSuccess: 98, marketAverage: 78, otherBuyers: 58 },
  { month: 'Jul', ourSuccess: 100, marketAverage: 80, otherBuyers: 60 },
  { month: 'Aug', ourSuccess: 102, marketAverage: 82, otherBuyers: 62 },
  { month: 'Sep', ourSuccess: 105, marketAverage: 85, otherBuyers: 65 },
  { month: 'Oct', ourSuccess: 108, marketAverage: 88, otherBuyers: 68 },
  { month: 'Nov', ourSuccess: 112, marketAverage: 90, otherBuyers: 70 },
  { month: 'Dec', ourSuccess: 115, marketAverage: 92, otherBuyers: 72 },
];

const faqItems = [
  {
    icon: DollarSign,
    question: "Why do scrap prices change daily?",
    answer: "Scrap prices are influenced by global market conditions, supply-demand dynamics, and international metal exchange rates. We update our prices daily to ensure you get the most competitive rates based on current market trends."
  },
  {
    icon: Lock,
    question: "How can I lock today's rate?",
    answer: "You can lock in today's rate by scheduling a pickup through our app or website. Once confirmed, we guarantee the quoted price for up to 24 hours, protecting you from any market fluctuations."
  },
  {
    icon: Calculator,
    question: "Do you pay the exact amount as shown on the website?",
    answer: "Yes, we honor the rates shown on our website. The final amount may vary only based on the actual weight and quality of the scrap material. We use certified digital scales and transparent grading systems to ensure accuracy."
  },
  {
    icon: BarChart,
    question: "What factors affect the price of my scrap?",
    answer: "Several factors influence scrap prices: material type and quality, quantity, market demand, processing costs, and global commodity prices. We consider all these factors to offer you the best possible rates."
  },
  {
    icon: Truck,
    question: "Is there a minimum quantity requirement for pickup?",
    answer: "Yes, we have a minimum quantity requirement of 50kg for free pickup. For smaller quantities, you can either visit our nearest collection center or opt for our pickup service with a nominal fee."
  },
  {
    icon: FileCheck,
    question: "What documentation do I need for selling scrap?",
    answer: "For basic transactions, you'll need a valid ID proof. For business or bulk sales, additional documentation like GST details and company authorization letter may be required."
  },
  {
    icon: Scale3d,
    question: "How do you ensure accurate weighing?",
    answer: "We use government-certified digital scales that are regularly calibrated. Our weighing process is transparent - you can witness the weighing and receive a detailed weight slip."
  },
  {
    icon: Banknote,
    question: "What payment methods do you offer?",
    answer: "We offer multiple payment options including instant bank transfers, UPI payments, and cash (up to a certain limit). All transactions are documented and you'll receive proper payment receipts."
  }
];

export default function PricingPage() {
  const pricingSectionRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const scrollToPricing = () => {
    pricingSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const callData = ()=>{
    router.push('/contact')
    
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#14532D] to-[#0F3D24]">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-[#facc15]/10 rounded-full blur-3xl" />
          <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-[#22c55e]/10 rounded-full blur-3xl" />
        </div>
      <div className="min-h-[80vh] flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              We Know the Real Worth of
              <span className="text-[#facc15] block mt-2">Your Scrap</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Get the most accurate, transparent, and up-to-date pricing for Iron, Cardboard, 
              Plastic, and Copper. No hidden charges — just honest rates!
            </p>
            <Button
              onClick={scrollToPricing}
              className="bg-[#facc15] hover:bg-[#eab308] text-black font-semibold text-md sm:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              View Real-Time Rates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Features Grid */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#facc15] flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div ref={pricingSectionRef} className="py-16 sm:py-24  from-[#14532D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Today's <span className="text-[#facc15]">Scrap Rates</span>
            </h2>
            <p className="text:lg sm:text-xl text-gray-300">
              Get the best market rates for your valuable materials
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {materials.map((material, index) => (
              <motion.div
                key={material.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#064e3b] rounded-2xl p-6 shadow-xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#facc15] flex items-center justify-center">
                    <material.icon className="h-6 w-6 text-black" />
                  </div>
                  {material.trend === 'up' ? (
                    <TrendingUp className="h-6 w-6 text-green-400" />
                  ) : (
                    <TrendingDown className="h-6 w-6 text-red-400" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{material.name}</h3>
                <p className="text-gray-300 mb-6 h-12">{material.benefit}</p>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[#facc15]">
                    {material.price}
                    <span className="text-lg">/kg</span>
                  </div>
                  <p className="text-sm text-gray-400">Based on today's market</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      </div>


      {/* Performance Comparison Section */}
      <div className="py-24 bg-[#0b0f10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Leading the Market with
                <span className="text-[#22c55e] block mt-2">Premium Scrap Rates</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Our commitment to offering the best rates in the market sets us apart. With years of industry expertise and a robust network of recycling partners, we consistently outperform market averages and competitor rates.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#22c55e] rounded-full" />
                  <span>15-20% higher rates than market average</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#22c55e] rounded-full" />
                  <span>Daily price updates based on global trends</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#22c55e] rounded-full" />
                  <span>Transparent pricing with no hidden deductions</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#1a1f2e] rounded-2xl p-6 shadow-xl"
            >
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis
                      dataKey="month"
                      stroke="#9CA3AF"
                      tick={{ fill: '#9CA3AF' }}
                    />
                    <YAxis
                      stroke="#9CA3AF"
                      tick={{ fill: '#9CA3AF' }}
                      label={{
                        value: 'Rate Index',
                        angle: -90,
                        position: 'insideLeft',
                        fill: '#9CA3AF'
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#fff'
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="ourSuccess"
                      name="Our Rates"
                      stroke="#22c55e"
                      strokeWidth={3}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="marketAverage"
                      name="Market Average"
                      stroke="#eab308"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="otherBuyers"
                      name="Other Buyers"
                      stroke="#ef4444"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    


      {/* FAQ Section */}
      <div className="py-16 sm:py-24 bg-[#0e4925]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="text-[#facc15]">Questions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Know more about our pricing methods and how to get the best value
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-[#125333] rounded-xl border border-[#22c55e]/20"
                >
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-[#facc15] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#facc15] flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-black" />
                      </div>
                      <span className="text-left">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-300">
                    <div className="pl-11">{item.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
      


      {/* Contact CTA Section */}
      <div className="relative py-24 bg-gradient-to-b from-[#14532d] to-[#166534] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-[#facc15]/10 rounded-full blur-3xl" />
          <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-[#22c55e]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Still Wondering About
              <span className="block text-[#facc15] mt-2">Scrap Prices?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
              Our expert team is here to help you get the best value for your scrap. 
              We provide free consultation and instant price quotes!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
              onClick={callData}
                className="bg-[#facc15] hover:bg-[#eab308] text-black font-semibold text-md sm:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 group"
              >
                 Send Your Message 
                <MessageSquare className="ml-2 h-5 w-5 group-hover:animate-bounce" />

              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-[#facc15] font-semibold text-lg mb-2">24/7 Support</h3>
                <p className="text-gray-300">Our team is available round the clock to assist you</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-[#facc15] font-semibold text-lg mb-2">Instant Quotes</h3>
                <p className="text-gray-300">Get immediate price estimates for your scrap materials</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-[#facc15] font-semibold text-lg mb-2">Expert Advice</h3>
                <p className="text-gray-300">Professional guidance to maximize your returns</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}