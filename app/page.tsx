"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Package,
  UserCheck,
  Banknote,
  CreditCard,
  Clock,
  Shield,
  Wallet,
  Star,
  Play,
  Phone,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface ScrapType {
  title: string;
  image: string;
  priceRange: string;
}

const scrapTypes: ScrapType[] = [
  {
    title: "Cardboard",
    image: "/cardbord.jpg",
    priceRange: "Rs26-33/kg",
  },
  {
    title: "Iron",
    image: "/ironnn.jpg",
    priceRange: "Rs120-200/kg",
  },
  {
    title: "Plastic",
    image: "/plastic.jpg",
    priceRange: "Rs20-25/kg",
  },
  {
    title: "Paper",
    image: "/paper.jpg",
    priceRange: "Rs11-20/kg",
  },
  {
    title: "Copper",
    image: "/copper.jpg",
    priceRange: "Rs2200-2500/kg",
  },
  {
    title: "Silver",
    image: "/silver.jpg",
    priceRange: "Rs400-500/kg",
  },
];

const steps = [
  { title: "Personal Details", icon: "user" },
  { title: "Scrap Details", icon: "box" },
  { title: "Upload Images", icon: "camera" },
  { title: "Location & Confirmation", icon: "map" },
];

interface FormData {
  fullName: string;
  phoneNumber: string;
  scrapType: string;
  weight: string;
  images: File[];
  address: string;
  pickupDate: string;
  expectedPrice: string;
  acceptMarketPrice: boolean;
}

const processSteps = [
  {
    icon: Package,
    title: "Post Your Scrap",
    description:
      "Share details and photos of your scrap materials through our easy-to-use platform",
  },
  {
    icon: UserCheck,
    title: "Doorstep Pickup",
    description:
      "Our professional team arrives at your location at the scheduled time",
  },
  {
    icon: Banknote,
    title: "Instant Payment",
    description:
      "Receive immediate payment through your preferred payment method",
  },
];

const paymentFeatures = [
  {
    icon: CreditCard,
    title: "Multiple Payment Options",
    description: "Choose from UPI, bank transfer, or cash payment methods",
  },
  {
    icon: Clock,
    title: "Instant Transfer",
    description: "Get your payment immediately after scrap verification",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "100% safe and transparent payment process",
  },
  {
    icon: Wallet,
    title: "Best Market Rates",
    description: "Competitive prices updated daily based on market trends",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    title: "Business Owner",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "SellAnyScrap made the process incredibly simple. Their team was professional, and the payment was instant!",
  },
  {
    name: "Priya Sharma",
    title: "Homeowner",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "I was amazed by how quickly they responded and picked up the scrap. Best rates in the market!",
  },
  {
    name: "Amit Patel",
    title: "Factory Manager",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "Regular scrap collection service that's reliable and professional. Highly recommended!",
  },
  {
    name: "Sneha Reddy",
    title: "Restaurant Owner",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "The team is always punctual and offers great rates. Best scrap service I've used!",
  },
  {
    name: "Vikram Singh",
    title: "Warehouse Supervisor",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "Excellent service! They handle everything professionally and pay instantly.",
  },
];

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedScrap, setSelectedScrap] = useState<ScrapType | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    scrapType: "",
    weight: "",
    images: [],
    address: "",
    pickupDate: "",
    expectedPrice: "",
    acceptMarketPrice: false,
  });

  const router = useRouter();

  const callData = () => {
    router.push("/contact");
  };

  const testimonialRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = testimonialRef.current;
    let scrollInterval: NodeJS.Timeout;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer && !isPaused) {
          scrollContainer.scrollLeft += 1;
          if (
            scrollContainer.scrollLeft >=
            scrollContainer.scrollWidth - scrollContainer.clientWidth
          ) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 20);
    };

    startScroll();

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [isPaused]);

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    const uploadedImages: string[] = [];
    const previews: string[] = [];

    // Generate preview URLs
    files.forEach((file) => {
      previews.push(URL.createObjectURL(file));
    });

    setPreviewImages(previews); // Update state with previews

    // Prepare FormData for uploading
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      // Upload to backend
      const response = await fetch("https://sellanyscrap.vercel.app/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      // If successful, store Cloudinary image URLs
      if (response.ok && Array.isArray(data.imageUrls)) {
        const urls = data.imageUrls.map((img: any) => img.secure_url); // Extract only URLs
        uploadedImages.push(...urls);
      } else {
        console.error("Error uploading image:", data.error);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }

    // Update formData state with uploaded image URLs
    setFormData((prev: any) => ({
      ...prev,
      images: [...(prev.images || []), ...uploadedImages],
    }));
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    const errors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) errors.fullName = "Full name is required";
    if (!formData.phoneNumber.trim())
      errors.phoneNumber = "Phone number is required";
    if (!formData.scrapType.trim()) errors.scrapType = "Scrap type is required";
    if (!formData.weight.trim()) errors.weight = "Weight is required";
    if (formData.images.length === 0)
      errors.images = "Please upload at least one image";
    if (!formData.address.trim()) errors.address = "Address is required";
    if (!formData.pickupDate.trim())
      errors.pickupDate = "Pickup date is required";

    // If there are errors, show them and stop the form submission
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({}); // clear errors if everything is fine

    try {
      const response = await fetch("https://sellanyscrap.vercel.app/api/form-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Form submitted successfully:", data);
        setIsDialogOpen(false);
        setCurrentStep(1);
        setFormData({
          fullName: "",
          phoneNumber: "",
          scrapType: "",
          weight: "",
          images: [],
          address: "",
          pickupDate: "",
          expectedPrice: "",
          acceptMarketPrice: false,
        });
      } else {
        console.error("Form submission error:", data.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const renderStepContent = () => {
    //   switch (currentStep) {
    //     case 1:
    //       return (
    //         <div className="space-y-4">
    //           <div>
    //             <Label htmlFor="fullName">Full Name *</Label>
    //             <Input
    //               id="fullName"
    //               value={formData.fullName}
    //               onChange={(e) => handleInputChange('fullName', e.target.value)}
    //               placeholder="Enter your full name"
    //               required
    //             />
    //           </div>
    //           <div>
    //             <Label htmlFor="phoneNumber">Phone Number *</Label>
    //             <Input
    //               id="phoneNumber"
    //               type="tel"
    //               value={formData.phoneNumber}
    //               onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
    //               placeholder="Enter your phone number"
    //               required
    //               pattern="[0-9]{10}"
    //             />
    //           </div>
    //         </div>
    //       );
    //     case 2:
    //       return (
    //         <div className="space-y-4">
    //           <div>
    //             <Label htmlFor="scrapType">Scrap Type *</Label>
    //             <Select
    //               value={formData.scrapType}
    //               onValueChange={(value) => handleInputChange('scrapType', value)}
    //             >
    //               <SelectTrigger>
    //                 <SelectValue placeholder="Select scrap type" />
    //               </SelectTrigger>
    //               <SelectContent>
    //                 {scrapTypes.map((type) => (
    //                   <SelectItem key={type.title} value={type.title.toLowerCase()}>
    //                     {type.title}
    //                   </SelectItem>
    //                 ))}
    //               </SelectContent>
    //             </Select>
    //           </div>
    //           <div>
    //             <Label htmlFor="weight">Weight (in KG) *</Label>
    //             <Input
    //               id="weight"
    //               type="number"
    //               value={formData.weight}
    //               onChange={(e) => handleInputChange('weight', e.target.value)}
    //               placeholder="Enter weight in KG"
    //               min="1"
    //               required
    //             />
    //           </div>
    //           <div>
    //             <Label htmlFor="expectedPrice">Expected Price per KG (Optional)</Label>
    //             <Input
    //               id="expectedPrice"
    //               type="number"
    //               value={formData.expectedPrice}
    //               onChange={(e) => handleInputChange('expectedPrice', e.target.value)}
    //               placeholder="Enter expected price"
    //               min="0"
    //             />
    //           </div>
    //           <div className="flex items-center space-x-2">
    //             <Checkbox
    //               id="acceptMarketPrice"
    //               checked={formData.acceptMarketPrice}
    //               onCheckedChange={(checked) => handleInputChange('acceptMarketPrice', checked)}
    //             />
    //             <Label htmlFor="acceptMarketPrice">Accept Market Price</Label>
    //           </div>
    //         </div>
    //       );
    //     case 3:
    //       return (
    //         <div className="space-y-4">
    //           <Label>Upload Scrap Pictures * (Minimum 3 images required)</Label>
    //           <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
    //             <Input
    //               type="file"
    //               multiple
    //               accept="image/*"
    //               onChange={handleFileChange}
    //               className="hidden"
    //               id="imageUpload"
    //               required
    //               minLength={3}
    //             />
    //             <Label htmlFor="imageUpload" className="cursor-pointer">
    //               <Camera className="mx-auto h-12 w-12 text-gray-400" />
    //               <p className="mt-2 text-sm text-gray-500">Click to upload or drag and drop</p>
    //               <p className="text-xs text-gray-500">PNG, JPG up to 10MB each (Min. 3 images)</p>
    //             </Label>
    //           </div>
    //           {formData.images.length > 0 && (
    //             <p className="text-sm text-gray-500">{formData.images.length} files selected</p>
    //           )}
    //         </div>
    //       );
    //     case 4:
    //       return (
    //         <div className="space-y-4">
    //           <div>
    //             <Label htmlFor="address">Pickup Address *</Label>
    //             <Input
    //               id="address"
    //               value={formData.address}
    //               onChange={(e) => handleInputChange('address', e.target.value)}
    //               placeholder="Enter pickup address"
    //               required
    //             />
    //           </div>
    //           <div>
    //             <Label htmlFor="pickupDate">Preferred Pickup Date *</Label>
    //             <Input
    //               id="pickupDate"
    //               type="date"
    //               value={formData.pickupDate}
    //               onChange={(e) => handleInputChange('pickupDate', e.target.value)}
    //               min={new Date().toISOString().split('T')[0]}
    //               required
    //             />
    //           </div>
    //         </div>
    //       );
    //     default:
    //       return null;
    //   }
    // };
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                placeholder="Enter your full name"
                required
              />
              {formErrors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.fullName}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="phoneNumber">Phone Number *</Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                placeholder="Enter your phone number"
                required
                pattern="[0-9]{10}"
              />
              {formErrors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.phoneNumber}
                </p>
              )}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="scrapType">Scrap Type *</Label>
              <Select
                value={formData.scrapType}
                onValueChange={(value) => handleInputChange("scrapType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select scrap type" />
                </SelectTrigger>
                <SelectContent>
                  {scrapTypes.map((type) => (
                    <SelectItem
                      key={type.title}
                      value={type.title.toLowerCase()}
                    >
                      {type.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="weight">Weight (in KG) *</Label>
              <Input
                id="weight"
                type="number"
                value={formData.weight}
                onChange={(e) => handleInputChange("weight", e.target.value)}
                placeholder="Enter weight in KG"
                min="1"
                required
              />
              {formErrors.weight && (
                <p className="text-red-500 text-sm mt-1">{formErrors.weight}</p>
              )}
            </div>
            <div>
              <Label htmlFor="expectedPrice">
                Expected Price per KG (Optional)
              </Label>
              <Input
                id="expectedPrice"
                type="number"
                value={formData.expectedPrice}
                onChange={(e) =>
                  handleInputChange("expectedPrice", e.target.value)
                }
                placeholder="Enter expected price"
                min="0"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="acceptMarketPrice"
                checked={formData.acceptMarketPrice}
                onCheckedChange={(checked) =>
                  handleInputChange("acceptMarketPrice", checked)
                }
              />
              <Label htmlFor="acceptMarketPrice">Accept Market Price</Label>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <Label>Upload Scrap Pictures *</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="imageUpload"
              />
              <Label htmlFor="imageUpload" className="cursor-pointer">
                <Camera className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG up to 10MB each
                </p>
              </Label>
              {formErrors.images && (
                <p className="text-red-500 text-sm mt-1">{formErrors.images}</p>
              )}
            </div>
            {previewImages.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {previewImages.map((image, index) => (
                  <div key={index} className="relative border rounded-lg p-2">
                    <img
                      src={image}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                ))}
              </div>
            )}
            {formData.images.length > 0 && (
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  {formData.images.length} files selected
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {formData.images.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                      {formData.images.map((image, index) => {
                        // Ensure `image` is either a string (Cloudinary URL) or a File object
                        const imageUrl =
                          typeof image === "string"
                            ? image
                            : image instanceof File
                            ? URL.createObjectURL(image)
                            : "";

                        return (
                          <div
                            key={index}
                            className="relative border rounded-lg p-2"
                          >
                            {imageUrl && (
                              <img
                                src={imageUrl}
                                alt={`Uploaded ${index + 1}`}
                                className="w-full h-auto"
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="address">Pickup Address *</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="Enter pickup address"
                required
              />
              {formErrors.address && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.address}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="pickupDate">Preferred Pickup Date *</Label>
              <Input
                id="pickupDate"
                type="date"
                value={formData.pickupDate}
                onChange={(e) =>
                  handleInputChange("pickupDate", e.target.value)
                }
                min={new Date().toISOString().split("T")[0]}
                required
              />
              {formErrors.pickupDate && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.pickupDate}
                </p>
              )}
            </div>
          </div>
        );
      default:
        return null;
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Turn Your Scrap into Cash
              <span className="block text-[#D4AF37]">
                Quick, Easy & Hassle-Free!
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
              Sell your scrap materials effortlessly and get the best rates
              instantly.
            </p>
          </div>

          {/* Scrap Types Grid */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scrapTypes.map((scrap: any) => (
              <div
                key={scrap.title}
                className="group relative overflow-hidden rounded-lg shadow-xl bg-white cursor-pointer"
                onClick={() => {
                  setSelectedScrap(scrap);
                  setIsDialogOpen(true);
                  setFormData((prev) => ({
                    ...prev,
                    scrapType: scrap.title.toLowerCase(),
                  }));
                }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <img
                    src={scrap.image}
                    alt={scrap.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {scrap.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {scrap.priceRange}
                  </p>
                  <Button className="w-full mt-3 bg-[#D4AF37] hover:bg-[#0D331E] text-white transition-colors duration-300">
                    Sell This
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mt-20 mb-16 md:mt-32 md:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  How We Handle Your{" "}
                  <span className="text-[#D4AF37]">Scrap</span>
                </h2>
                <p className="text-gray-300 text-lg">
                  Experience a seamless and professional scrap collection
                  service with our expert team.
                </p>

                <div className="space-y-8">
                  {processSteps.map((step) => (
                    <div
                      key={step.title}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src="/scrapp.jpg"
                  alt="Scrap Collection Process"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="py-16 sm:py-24 bg-[#0A2518] rounded-3xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Get
                <br />
                <span className="text-[#D4AF37]">Instant Payment</span>
                <br /> for Your Scrap
              </h2>
              <p className="mt-3 max-w-md px-2 mx-auto text-lg text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
                We believe in providing immediate value for your materials. Our
                hassle-free payment process ensures you get paid as soon as we verify your scrap.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
              {paymentFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-[#0F3D24] p-6 rounded-xl hover:bg-[#14532D] transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Client Reviews Section */}
          <div className="py-24 my-10 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-0 w-32 h-full rounded-3xl bg-gradient-to-r from-[#0F3D24] to-transparent z-10" />
              <div className="absolute right-0 w-32 h-full rounded-3xl bg-gradient-to-l from-[#0F3D24] to-transparent z-10" />
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 px-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  What Our <span className="text-[#D4AF37]">Clients</span> Say
                </h2>
                <p className="text-gray-300 text-md sm:text-lg max-w-2xl mx-auto">
                  Join thousands of satisfied customers who trust us with their
                  scrap collection needs.
                </p>
              </div>

              <div
                ref={testimonialRef}
                className="flex gap-6 overflow-x-hidden cursor-grab px-4"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {[...testimonials, ...testimonials].map(
                  (testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: false, margin: "-100px" }}
                      className="flex-none w-[350px] bg-[#0f4c2f] p-6 rounded-2xl shadow-xl backdrop-blur-sm bg-opacity-80"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-[#D4AF37]"
                        />
                        <div>
                          <h3 className="font-semibold text-white">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]"
                          />
                        ))}
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Call to Action Section with Video */}
          <div className="py-16 sm:py-24 bg-[#0A2518]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 z-10">
                  <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
                    Ready to Turn Your
                    <span className="text-[#D4AF37] block">
                      Scrap into Cash?
                    </span>
                  </h2>
                  <p className="text-gl sm:text-xl text-gray-300">
                    Join thousands of satisfied customers who have already
                    discovered the easiest way to sell their scrap. Our team is
                    ready to assist you!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => setIsDialogOpen(true)}
                      className="bg-[#D4AF37] hover:bg-[#B39030] text-white px-8 py-6 text-md sm:text-lg"
                    >
                      Get Started Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      onClick={callData}
                      variant="outline"
                      className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-8 py-6 text-md sm:text-lg"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Contact Us
                    </Button>
                  </div>
                </div>

                <div
                  className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 rounded-full bg-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-10 w-10 text-white ml-1" />
                    </div>
                  </div>
                  <img
                    src="/scrap.jpg"
                    alt="Watch our process"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Multi-step Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px] h-full overflow-y-auto pb-16">
          <DialogHeader>
            <DialogTitle>Sell Your {selectedScrap?.title}</DialogTitle>
            <DialogDescription>
              Please follow the steps to complete your selling process.
            </DialogDescription>
          </DialogHeader>

          {/* Step Indicator */}
          <div className="flex justify-between mb-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={cn(
                  "flex flex-col items-center",
                  currentStep > index + 1 && "text-green-600",
                  currentStep === index + 1 && "text-blue-600"
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center border-2",
                    currentStep > index + 1 && "border-green-600 bg-green-50",
                    currentStep === index + 1 && "border-blue-600 bg-blue-50",
                    currentStep < index + 1 && "border-gray-300 bg-gray-50"
                  )}
                >
                  {index + 1}
                </div>
                <span className="text-xs mt-1">{step.title}</span>
              </div>
            ))}
          </div>

          {renderStepContent()}

          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              Back
            </Button>
            <Button onClick={currentStep === 4 ? handleSubmit : handleNext}>
              {currentStep === 4 ? "Submit" : "Next"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Video Dialog */}
      <Dialog open={isVideoPlaying} onOpenChange={setIsVideoPlaying}>
        <DialogContent className="sm:max-w-[800px] p-0 bg-black">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Gxcmo7rdEJA?si=lyALJu5OR3WdF0II"
              title="Process Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
