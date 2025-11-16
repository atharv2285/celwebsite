import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  // Add your API routes here if needed
  // Example:
  // app.get("/api/health", (req, res) => {
  //   res.json({ status: "ok" });
  // });

  const httpServer = createServer(app);
  return httpServer;
}
