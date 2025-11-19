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
      {/* Hero Section with Contact Banner Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/Contact.jpg"
            alt="Contact Banner"
            className="w-full h-full object-contain object-center"
          />
        </div>

        {/* Particle Background Overlay */}
        <ParticleBackground />

        {/* Left-aligned Text Content */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-3 lg:px-4 w-full flex items-center"
          style={{ height: "85vh" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-left flex flex-col items-start justify-center w-full lg:w-1/2"
            style={{ marginTop: "-6px" }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 !text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Let's Connect
            </motion.h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-2">
              Have a question or ready to start your next project?
            </p>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-muted-foreground">
              Our team is here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="relative py-10 md:py-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-0 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-80 h-80 bg-chart-3/15 rounded-full blur-3xl"
            animate={{
              x: [0, 60, 0],
              y: [0, -60, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Animated dots pattern */}
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "40px 40px"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-3 lg:px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-primary to-chart-2 bg-clip-text text-transparent">
                  Send Us a Message
                </span>
              </h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-primary to-chart-2 bg-clip-text text-transparent">
                  Contact Information
                </span>
              </h2>
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

              <div
                className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 overflow-hidden"
                style={{
                  backgroundImage: "url(/assets/Contactmap.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-background/10 dark:bg-background/10" />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-white">
                    <p data-testid="text-hours-weekday">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p data-testid="text-hours-saturday">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                    <p data-testid="text-hours-sunday">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-primary to-chart-2 bg-clip-text text-transparent">
                Our Global Presence
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Serving clients worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Animated World Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video bg-gradient-to-br from-background to-background/80 backdrop-blur-sm rounded-2xl overflow-hidden flex items-center justify-center"
            >
              <img
                src={worldMapImage}
                alt="World Map"
                className="w-full h-full object-contain"
              />

              {/* Location Pointers using GIF */}
              <div className="absolute inset-0 w-full h-full">
                {/* USA Location - Texas */}
                <motion.img
                  src="/assets/map-pointer.gif"
                  alt="USA Location"
                  className="absolute w-16 h-20 drop-shadow-lg"
                  style={{ left: "12%", top: "21%" }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />

                {/* Canada Location - Toronto */}
                <motion.img
                  src="/assets/map-pointer.gif"
                  alt="Canada Location"
                  className="absolute w-16 h-20 drop-shadow-lg"
                  style={{ left: "14%", top: "12%" }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />

                {/* UK Location - London */}
                <motion.img
                  src="/assets/map-pointer.gif"
                  alt="UK Location"
                  className="absolute w-16 h-20 drop-shadow-lg"
                  style={{ left: "37%", top: "12%" }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                />

                {/* India Location - Central India */}
                <motion.img
                  src="/assets/map-pointer.gif"
                  alt="India Location"
                  className="absolute w-16 h-20 drop-shadow-lg"
                  style={{ left: "58%", top: "27%" }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                />
              </div>
            </motion.div>

            {/* Location Cards in 2x2 Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {locations.map((location, index) => (
                <motion.div
                  key={location.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-5 hover:border-primary/30 transition-all duration-300"
                  data-testid={`location-${location.region.toLowerCase()}`}
                >
                  <div className="inline-block px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                    {location.region}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    {location.title}
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span
                        data-testid={`text-address-${location.region.toLowerCase()}`}
                      >
                        {location.address}
                      </span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                      <span
                        data-testid={`text-email-${location.region.toLowerCase()}`}
                      >
                        {location.email}
                      </span>
                    </p>
                    {location.phone && (
                      <p className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-primary flex-shrink-0" />
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
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}