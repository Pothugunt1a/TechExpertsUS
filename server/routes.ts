import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store contact submission
      const contactSubmission = await storage.createContactSubmission(validatedData);
      
      // In a real application, you would send an email here
      // For now, we'll just log it
      console.log("Contact submission received:", {
        id: contactSubmission.id,
        from: `${contactSubmission.firstName} ${contactSubmission.lastName}`,
        email: contactSubmission.email,
        phone: contactSubmission.mobileNumber,
      });
      
      res.status(201).json({
        success: true,
        message: "Contact submission received successfully",
        id: contactSubmission.id,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid request data",
          errors: error.errors,
        });
      } else {
        console.error("Error processing contact submission:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
    }
  });

  // Optional: Get all contact submissions (for admin purposes)
  app.get("/api/contact/submissions", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
