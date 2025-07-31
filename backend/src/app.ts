import express from "express";
import cors from "cors";
import assistRoutes from "./routes/assist.routes";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (_req, res) => {
  res.send("Adonai’s Eye backend is running ✅");
});

// API Routes
app.use("/api/assist", assistRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
