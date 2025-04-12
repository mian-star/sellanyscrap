'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, ArrowRight, CheckCircle2, Star, Shield, Users, TrendingUp, Headphones, HelpCircle, FileQuestion, Lightbulb } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from 'react';


const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: [
      "+91 1234567890",
      "+91 9876543210"
    ],
    action: "Call now"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [
      "info@sellanyscrap.com",
      "support@sellanyscrap.com"
    ],
    action: "Send email"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "123 Green Street",
      "Mumbai, Maharashtra 400001"
    ],
    action: "Get directions"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Mon - Sat: 9:00 AM - 7:00 PM",
      "Sunday: Closed"
    ],
    action: "Schedule call"
  }
];

const whyChooseUs = [
  {
    icon: Star,
    title: "Premium Service",
    description: "Experience top-tier scrap collection with our professional team"
  },
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description: "15+ years of trusted service in the scrap industry"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals dedicated to quality service"
  },
  {
    icon: TrendingUp,
    title: "Best Rates",
    description: "Guaranteed highest market rates for your scrap"
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Same-day service and instant price quotes"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your queries"
  }
];

const commonQueries = [
  {
    icon: HelpCircle,
    title: "General Inquiries",
    description: "Questions about our services, process, or company"
  },
  {
    icon: FileQuestion,
    title: "Price Queries",
    description: "Get instant quotes and market rate information"
  },
  {
    icon: Lightbulb,
    title: "Custom Solutions",
    description: "Specialized requirements for bulk disposal"
  }
];




export default function ContactPage() {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          message,
        }),
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        console.error("Error submitting form:", errorData.error);
        return;
      }
  
      const result = await res.json();
      console.log("Form submitted successfully:", result);
  
      // Optional: Clear the form after submission
      setName("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#14532D] to-[#0F3D24]">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-[#facc15]/10 rounded-full blur-3xl" />
          <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-[#22c55e]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Get in Touch with
                <span className="block text-[#facc15]">Pakistan's Leading Scrap Experts</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
                Have questions about scrap prices? Need a quick quote? Our team is ready to help you get the best value for your materials.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#facc15] flex items-center justify-center mb-4 mx-auto">
                    <info.icon className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-300 mb-1">{detail}</p>
                  ))}
                  <Button
                    variant="link"
                    className="text-[#facc15] hover:text-[#eab308] mt-4 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    {info.action}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Why Choose Us Section */}
            <div className="mt-24 sm:mt-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Why <span className="text-[#facc15]">Choose Us</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                  Experience excellence in scrap collection with our premium service and expert team
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-[#0f4c2f] rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#facc15] flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-black" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Location & Contact Section */}
            <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-[400px] rounded-2xl overflow-hidden"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0404124042097!2d74.2113546!3d31.4022605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919018a8ea548c1%3A0x4a52db69c2c814f2!2sLahore%20Leads%20University!5e0!3m2!1sen!2s!4v1647940475000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>

              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-bold text-white">
                  Visit Our <span className="text-[#facc15]">Office</span>
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#facc15] flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white text-left font-semibold">Address</h4>
                      <p className="text-gray-300 text-left">Lahore Leads University,</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#facc15] flex items-center justify-center">
                      <Phone className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white text-left font-semibold">WhatsApp</h4>
                      <p className="text-gray-300">+92 300 1234567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#facc15] flex items-center justify-center">
                      <Mail className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white text-left font-semibold">Email</h4>
                      <p className="text-gray-300">info@sellanyscrap.com</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Updated Contact Form Section with Split Layout */}
            <div className="mt-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                {/* Left Side - Query Information */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <div className="text-left">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      How Can We <span className="text-[#facc15]">Help You?</span>
                    </h2>
                    <p className="text-gray-300 text-lg">
                      Whether you have questions about our services or need assistance with scrap collection, our team is here to help you every step of the way.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {commonQueries.map((query, index) => (
                      <div
                        key={index}
                        className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                      >
                        <div className="flex items-center gap-4 mb-2">
                          <div className="w-10 h-10 rounded-full bg-[#facc15] flex items-center justify-center">
                            <query.icon className="h-5 w-5 text-black" />
                          </div>
                          <h3 className="text-white font-semibold">{query.title}</h3>
                        </div>
                        <p className="text-gray-300 pl-14">{query.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#0f4c2f] rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Quick Response Guarantee</h3>
                    <p className="text-gray-300">
                      Our team typically responds within 2 hours during business hours. For urgent queries, you can also reach us via WhatsApp.
                    </p>
                  </div>
                </motion.div>

                {/* Right Side - Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
                >
                  <div className="text-left mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Send Us a Message</h2>
                    <p className="text-gray-300">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}  className="space-y-6 text-left">
                    <div>
                      <Label htmlFor="name" className="text-white">Full Name </Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        onChange={(e)=>setName(e.target.value)}
                        value={name}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-white text-left">Phone Number </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        onChange={(e)=>setPhone(e.target.value)}
                        value={phone}
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-white text-left">Your Message </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your query..."
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[150px]"
                        onChange={(e)=>setMessage(e.target.value)}
                        value={message}
                      />
                    </div>

                    <Button type='submit'
                      className="w-full bg-[#facc15] hover:bg-[#eab308] text-black font-semibold py-6 text-lg group"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}