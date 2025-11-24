// src/wifiChecker.js
import { execSync } from "child_process";

export function getConnectedWifiSSID() {
  try {
    const output = execSync("netsh wlan show interfaces").toString();

    const ssidMatch = output.match(/SSID\s*:\s*(.*)/);
    if (!ssidMatch) return null;

    return ssidMatch[1].trim();
  } catch (err) {
    console.error("Gagal membaca SSID:", err);
    return null;
  }
}

export function isConnectedToPNJ() {
  const ssid = getConnectedWifiSSID();
  if (!ssid) return false;

  return ssid.toLowerCase().includes("pnj");
}
