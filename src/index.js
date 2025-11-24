import express from "express";
import cors from "cors";
import { isConnectedToPNJ, getConnectedWifiSSID } from "./wifiChecker.js";

const app = express();
app.use(cors());

app.get("/check-wifi", (req, res) => {
  const ssid = getConnectedWifiSSID();
  const usingPNJWifi = isConnectedToPNJ();

  res.json({
    ssid,
    usingPNJWifi
  });
});

app.listen(3000, () => console.log("Server berjalan di port 3000"));
