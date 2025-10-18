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
import worldMapImage from "@assets/world-map.png";

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
              Get In{" "}
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Touch
              </span>
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
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
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
                    <p
                      className="text-muted-foreground"
                      data-testid="text-phone"
                    >
                      +1 469-666-0019
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p
                      className="text-muted-foreground"
                      data-testid="text-email"
                    >
                      info@techexpertsus.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      USA Corporate Headquarters
                    </h3>
                    <p
                      className="text-muted-foreground"
                      data-testid="text-address"
                    >
                      Argyle, TX 76226, United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p data-testid="text-hours-weekday">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p data-testid="text-hours-saturday">
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Global Presence
            </h2>
            <p className="text-xl text-muted-foreground">
              Serving clients worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Animated World Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video bg-gradient-to-br from-background to-background/80 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden"
            >
              <img
                src={worldMapImage}
                alt="World Map"
                className="w-full h-full object-contain"
              />
              <svg
                viewBox="0 0 1000 500"
                className="absolute inset-0 w-full h-full"
              >
                {/* USA Location - Texas is around 22% from left, 44% from top */}
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <motion.circle
                    cx="220"
                    cy="220"
                    r="12"
                    className="fill-primary"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.circle
                    cx="220"
                    cy="220"
                    r="20"
                    className="fill-primary/30"
                    animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                  <motion.circle
                    cx="220"
                    cy="220"
                    r="30"
                    className="fill-primary/20"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  />
                  <text
                    x="220"
                    y="260"
                    className="text-xs md:text-sm font-semibold fill-current text-primary"
                    textAnchor="middle"
                  >
                    USA
                  </text>
                </motion.g>

                {/* Canada Location - Toronto is around 24% from left, 34% from top */}
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <motion.circle
                    cx="240"
                    cy="170"
                    r="12"
                    className="fill-chart-2"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.circle
                    cx="240"
                    cy="170"
                    r="20"
                    className="fill-chart-2/30"
                    animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.circle
                    cx="240"
                    cy="170"
                    r="30"
                    className="fill-chart-2/20"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
                  />
                  <text
                    x="240"
                    y="210"
                    className="text-xs md:text-sm font-semibold fill-current text-chart-2"
                    textAnchor="middle"
                  >
                    Canada
                  </text>
                </motion.g>

                {/* UK Location - London is around 49% from left, 30% from top */}
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                >
                  <motion.circle
                    cx="490"
                    cy="150"
                    r="12"
                    className="fill-chart-3"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                  <motion.circle
                    cx="490"
                    cy="150"
                    r="20"
                    className="fill-chart-3/30"
                    animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
                  />
                  <motion.circle
                    cx="490"
                    cy="150"
                    r="30"
                    className="fill-chart-3/20"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.1 }}
                  />
                  <text
                    x="490"
                    y="190"
                    className="text-xs md:text-sm font-semibold fill-current text-chart-3"
                    textAnchor="middle"
                  >
                    UK
                  </text>
                </motion.g>

                {/* India Location - Central India is around 71% from left, 46% from top */}
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  <motion.circle
                    cx="710"
                    cy="230"
                    r="12"
                    className="fill-chart-4"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
                  />
                  <motion.circle
                    cx="710"
                    cy="230"
                    r="20"
                    className="fill-chart-4/30"
                    animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.9 }}
                  />
                  <motion.circle
                    cx="710"
                    cy="230"
                    r="30"
                    className="fill-chart-4/20"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.4 }}
                  />
                  <text
                    x="710"
                    y="270"
                    className="text-xs md:text-sm font-semibold fill-current text-chart-4"
                    textAnchor="middle"
                  >
                    India
                  </text>
                </motion.g>

                {/* Animated connection lines with glowing effect */}
                {/* USA to Canada */}
                <motion.path
                  d="M 220 220 Q 230 195 240 170"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ delay: 1.7, duration: 1, ease: "easeInOut" }}
                />

                {/* Canada to UK */}
                <motion.path
                  d="M 240 170 Q 365 120 490 150"
                  fill="none"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ delay: 2.4, duration: 1.2, ease: "easeInOut" }}
                />

                {/* UK to India */}
                <motion.path
                  d="M 490 150 Q 600 190 710 230"
                  fill="none"
                  stroke="url(#gradient3)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ delay: 3.6, duration: 1.2, ease: "easeInOut" }}
                />

                {/* Gradients */}
                <defs>
                  <linearGradient
                    id="gradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="hsl(var(--primary))"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="100%"
                      stopColor="hsl(var(--chart-2))"
                      stopOpacity="0.8"
                    />
                  </linearGradient>
                  <linearGradient
                    id="gradient2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="hsl(var(--chart-2))"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="100%"
                      stopColor="hsl(var(--chart-3))"
                      stopOpacity="0.8"
                    />
                  </linearGradient>
                  <linearGradient
                    id="gradient3"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="hsl(var(--chart-3))"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="100%"
                      stopColor="hsl(var(--chart-4))"
                      stopOpacity="0.8"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Location Details Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-semibold">North America</h3>
                </div>
                <p className="text-muted-foreground">
                  Argyle, TX 76226, United States
                </p>
                <p className="text-sm text-primary">+1 469-666-0019</p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-4 h-4 rounded-full bg-chart-2"></div>
                  <h3 className="text-xl font-semibold">Canada</h3>
                </div>
                <p className="text-muted-foreground">Toronto, Canada</p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-4 h-4 rounded-full bg-chart-3"></div>
                  <h3 className="text-xl font-semibold">United Kingdom</h3>
                </div>
                <p className="text-muted-foreground">London, England</p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-4 h-4 rounded-full bg-chart-4"></div>
                  <h3 className="text-xl font-semibold">India</h3>
                </div>
                <p className="text-muted-foreground">
                  Hyderabad & Andhra Pradesh
                </p>
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
                    <span
                      data-testid={`text-address-${location.region.toLowerCase()}`}
                    >
                      {location.address}
                    </span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <span
                      data-testid={`text-email-${location.region.toLowerCase()}`}
                    >
                      {location.email}
                    </span>
                  </p>
                  {location.phone && (
                    <p className="flex items-center space-x-2">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <span
                        data-testid={`text-phone-${location.region.toLowerCase()}`}
                      >
                        {location.phone}
                      </span>
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
