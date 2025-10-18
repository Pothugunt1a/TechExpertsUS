import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const locations = [
  {
    title: "Tech Expertsus USA",
    region: "North America",
    address: "Argyle, TX 76226, United States",
    email: "info@techexpertsus.com",
    phone: "+1 469-666-0019",
  },
  {
    title: "Tech Expertsus CANADA",
    region: "CANADA",
    address: "Toronto, Canada",
    email: "info@techexpertsus.com",
  },
  {
    title: "Tech Expertsus UK",
    region: "UK",
    address: "London, Capital of England United Kingdom",
    email: "info@techexpertsus.com",
  },
  {
    title: "Tech Expertsus INDIA (Andhra Pradesh)",
    region: "ASIA",
    address: "Prakasam District, Andhra Pradesh, India",
    email: "info@techexpertsus.com",
  },
  {
    title: "Tech Expertsus INDIA (Telangana)",
    region: "ASIA",
    address: "Hyderabad, Telangana, India",
    email: "info@techexpertsus.com",
  },
];

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      comment: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Contact Us
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your first name"
                              className="bg-card/50 backdrop-blur-sm border-primary/20 focus:border-primary transition-all duration-300"
                              data-testid="input-first-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your last name"
                              className="bg-card/50 backdrop-blur-sm border-primary/20 focus:border-primary transition-all duration-300"
                              data-testid="input-last-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-card/50 backdrop-blur-sm border-primary/20 focus:border-primary transition-all duration-300"
                            data-testid="input-email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mobileNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number *</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Enter your mobile number"
                            className="bg-card/50 backdrop-blur-sm border-primary/20 focus:border-primary transition-all duration-300"
                            data-testid="input-mobile"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Comment *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Add your comment"
                            rows={6}
                            className="bg-card/50 backdrop-blur-sm border-primary/20 focus:border-primary transition-all duration-300 resize-none"
                            data-testid="input-comment"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg"
                    disabled={contactMutation.isPending}
                    data-testid="button-submit-contact"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground" data-testid="text-phone">+1 469-666-0019</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground" data-testid="text-email">info@techexpertsus.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">USA Corporate Headquarters</h3>
                    <p className="text-muted-foreground" data-testid="text-address">Argyle, TX 76226, United States</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p data-testid="text-hours-weekday">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p data-testid="text-hours-saturday">Saturday: 10:00 AM - 4:00 PM</p>
                  <p data-testid="text-hours-sunday">Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Global Presence</h2>
            <p className="text-xl text-muted-foreground">Serving clients worldwide</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Realistic World Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-gradient-to-br from-sky-100 to-sky-200 dark:from-sky-900/20 dark:to-sky-800/20 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 overflow-hidden"
            >
              <svg viewBox="0 0 2000 1001" className="w-full h-full">
                {/* Realistic world map paths */}
                <g className="fill-gray-200 dark:fill-gray-700 stroke-gray-300 dark:stroke-gray-600" strokeWidth="1">
                  {/* North America */}
                  <path d="M 150 200 L 180 180 L 220 170 L 260 180 L 290 200 L 310 240 L 320 280 L 310 320 L 280 340 L 250 350 L 220 340 L 200 320 L 180 290 L 170 260 L 160 230 Z M 330 150 L 360 140 L 380 150 L 390 170 L 380 190 L 360 200 L 340 190 L 330 170 Z" />
                  {/* South America */}
                  <path d="M 280 420 L 300 400 L 320 410 L 330 440 L 340 480 L 330 520 L 310 550 L 290 560 L 270 550 L 260 520 L 260 480 L 270 450 Z" />
                  {/* Europe */}
                  <path d="M 480 180 L 520 170 L 560 175 L 580 190 L 590 210 L 580 230 L 560 240 L 530 235 L 500 225 L 480 210 Z M 540 150 L 560 145 L 575 155 L 570 170 L 555 175 L 540 165 Z" />
                  {/* Africa */}
                  <path d="M 500 280 L 540 270 L 580 280 L 600 310 L 610 360 L 600 410 L 580 450 L 550 470 L 520 460 L 500 430 L 490 390 L 490 340 L 495 310 Z" />
                  {/* Asia */}
                  <path d="M 620 160 L 680 150 L 740 160 L 800 180 L 840 210 L 860 250 L 850 290 L 820 310 L 780 320 L 740 315 L 700 300 L 670 280 L 650 250 L 640 220 L 630 190 Z M 900 240 L 940 230 L 970 245 L 980 270 L 970 295 L 940 305 L 910 295 L 900 270 Z M 750 340 L 790 335 L 820 350 L 830 380 L 820 410 L 790 420 L 760 410 L 750 380 Z" />
                  {/* Australia */}
                  <path d="M 860 450 L 900 445 L 940 455 L 960 480 L 955 510 L 930 525 L 900 520 L 870 505 L 860 480 Z" />
                </g>
                
                {/* Animated location markers */}
                {/* USA Marker */}
                <motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}>
                  <motion.circle
                    cx="250"
                    cy="250"
                    r="10"
                    className="fill-primary"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.circle
                    cx="250"
                    cy="250"
                    r="18"
                    className="fill-primary/30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                </motion.g>
                
                {/* Canada Marker */}
                <motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}>
                  <motion.circle
                    cx="280"
                    cy="190"
                    r="10"
                    className="fill-chart-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.circle
                    cx="280"
                    cy="190"
                    r="18"
                    className="fill-chart-2/30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                  />
                </motion.g>
                
                {/* UK Marker */}
                <motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.4, duration: 0.6 }}>
                  <motion.circle
                    cx="540"
                    cy="200"
                    r="10"
                    className="fill-chart-3"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                  <motion.circle
                    cx="540"
                    cy="200"
                    r="18"
                    className="fill-chart-3/30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
                  />
                </motion.g>
                
                {/* India Marker */}
                <motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.6, duration: 0.6 }}>
                  <motion.circle
                    cx="770"
                    cy="310"
                    r="10"
                    className="fill-chart-4"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
                  />
                  <motion.circle
                    cx="770"
                    cy="310"
                    r="18"
                    className="fill-chart-4/30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.9 }}
                  />
                </motion.g>
                
                {/* Connection lines */}
                <motion.path
                  d="M 250 250 Q 265 220 280 190"
                  fill="none"
                  stroke="url(#grad1)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 2, duration: 1.2 }}
                />
                <motion.path
                  d="M 280 190 Q 410 180 540 200"
                  fill="none"
                  stroke="url(#grad2)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 3.2, duration: 1.5 }}
                />
                <motion.path
                  d="M 540 200 Q 655 255 770 310"
                  fill="none"
                  stroke="url(#grad3)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 4.7, duration: 1.5 }}
                />
                
                <defs>
                  <linearGradient id="grad1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="hsl(var(--chart-2))" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="grad2">
                    <stop offset="0%" stopColor="hsl(var(--chart-2))" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="hsl(var(--chart-3))" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="grad3">
                    <stop offset="0%" stopColor="hsl(var(--chart-3))" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="hsl(var(--chart-4))" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Location Cards in 2x2 Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-4">
                <div className="inline-block px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-2">
                  North America
                </div>
                <h4 className="text-sm font-semibold mb-2">Tech Expertsus USA</h4>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p className="flex items-start space-x-1">
                    <MapPin className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                    <span>Argyle, TX 76226, United States</span>
                  </p>
                  <p className="flex items-center space-x-1">
                    <Mail className="w-3 h-3 text-primary flex-shrink-0" />
                    <span>info@techexpertsus.com</span>
                  </p>
                  <p className="flex items-center space-x-1">
                    <Phone className="w-3 h-3 text-primary flex-shrink-0" />
                    <span>+1 469-666-0019</span>
                  </p>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-4">
                <div className="inline-block px-2 py-1 bg-chart-2/10 text-chart-2 rounded-full text-xs font-medium mb-2">
                  CANADA
                </div>
                <h4 className="text-sm font-semibold mb-2">Tech Expertsus CANADA</h4>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p className="flex items-start space-x-1">
                    <MapPin className="w-3 h-3 text-chart-2 flex-shrink-0 mt-0.5" />
                    <span>Toronto, Canada</span>
                  </p>
                  <p className="flex items-center space-x-1">
                    <Mail className="w-3 h-3 text-chart-2 flex-shrink-0" />
                    <span>info@techexpertsus.com</span>
                  </p>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-4">
                <div className="inline-block px-2 py-1 bg-chart-3/10 text-chart-3 rounded-full text-xs font-medium mb-2">
                  UK
                </div>
                <h4 className="text-sm font-semibold mb-2">Tech Expertsus UK</h4>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p className="flex items-start space-x-1">
                    <MapPin className="w-3 h-3 text-chart-3 flex-shrink-0 mt-0.5" />
                    <span>London, Capital of England United Kingdom</span>
                  </p>
                  <p className="flex items-center space-x-1">
                    <Mail className="w-3 h-3 text-chart-3 flex-shrink-0" />
                    <span>info@techexpertsus.com</span>
                  </p>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-4">
                <div className="inline-block px-2 py-1 bg-chart-4/10 text-chart-4 rounded-full text-xs font-medium mb-2">
                  ASIA
                </div>
                <h4 className="text-sm font-semibold mb-2">Tech Expertsus INDIA</h4>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p className="flex items-start space-x-1">
                    <MapPin className="w-3 h-3 text-chart-4 flex-shrink-0 mt-0.5" />
                    <span>Prakasam District, AP & Hyderabad, Telangana</span>
                  </p>
                  <p className="flex items-center space-x-1">
                    <Mail className="w-3 h-3 text-chart-4 flex-shrink-0" />
                    <span>info@techexpertsus.com</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
                data-testid={`location-${location.region.toLowerCase()}`}
              >
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  {location.region}
                </div>
                <h3 className="text-xl font-semibold mb-4">{location.title}</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span data-testid={`text-address-${location.region.toLowerCase()}`}>{location.address}</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <span data-testid={`text-email-${location.region.toLowerCase()}`}>{location.email}</span>
                  </p>
                  {location.phone && (
                    <p className="flex items-center space-x-2">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <span data-testid={`text-phone-${location.region.toLowerCase()}`}>{location.phone}</span>
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
