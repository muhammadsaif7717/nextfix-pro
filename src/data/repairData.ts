import { DeviceCategory, DeviceModel, RepairIssue } from "@/types";

export const DEVICE_CATEGORIES: DeviceCategory[] = [
  { id: "iphone", name: "Apple iPhone", iconName: "Smartphone", popular: true },
  { id: "samsung", name: "Samsung Galaxy", iconName: "Smartphone", popular: true },
  { id: "pixel", name: "Google Pixel", iconName: "Smartphone" },
  { id: "macbook", name: "MacBook & Laptop", iconName: "Laptop", popular: true },
  { id: "ipad", name: "iPad & Tablets", iconName: "Tablet" },
  { id: "console", name: "Gaming Consoles", iconName: "Gamepad2" },
];

export const DEVICE_MODELS: Record<string, DeviceModel[]> = {
  iphone: [
    { id: "ip-16-pro-max", categoryId: "iphone", name: "iPhone 16 Pro Max", brand: "Apple", releaseYear: 2024 },
    { id: "ip-16-pro", categoryId: "iphone", name: "iPhone 16 Pro", brand: "Apple", releaseYear: 2024 },
    { id: "ip-15-pro-max", categoryId: "iphone", name: "iPhone 15 Pro Max", brand: "Apple", releaseYear: 2023 },
    { id: "ip-15-pro", categoryId: "iphone", name: "iPhone 15 Pro", brand: "Apple", releaseYear: 2023 },
    { id: "ip-15", categoryId: "iphone", name: "iPhone 15 / 15 Plus", brand: "Apple", releaseYear: 2023 },
    { id: "ip-14-pro-max", categoryId: "iphone", name: "iPhone 14 Pro Max", brand: "Apple", releaseYear: 2022 },
    { id: "ip-14-pro", categoryId: "iphone", name: "iPhone 14 Pro", brand: "Apple", releaseYear: 2022 },
    { id: "ip-14", categoryId: "iphone", name: "iPhone 14 / 14 Plus", brand: "Apple", releaseYear: 2022 },
    { id: "ip-13-pro", categoryId: "iphone", name: "iPhone 13 Pro / Max", brand: "Apple", releaseYear: 2021 },
    { id: "ip-13", categoryId: "iphone", name: "iPhone 13 / 13 Mini", brand: "Apple", releaseYear: 2021 },
    { id: "ip-12", categoryId: "iphone", name: "iPhone 12 / 12 Pro", brand: "Apple", releaseYear: 2020 },
  ],
  samsung: [
    { id: "sam-s24-ultra", categoryId: "samsung", name: "Galaxy S24 Ultra", brand: "Samsung", releaseYear: 2024 },
    { id: "sam-s24", categoryId: "samsung", name: "Galaxy S24 / S24+", brand: "Samsung", releaseYear: 2024 },
    { id: "sam-s23-ultra", categoryId: "samsung", name: "Galaxy S23 Ultra", brand: "Samsung", releaseYear: 2023 },
    { id: "sam-s23", categoryId: "samsung", name: "Galaxy S23 / S23+", brand: "Samsung", releaseYear: 2023 },
    { id: "sam-z-fold-5", categoryId: "samsung", name: "Galaxy Z Fold 5", brand: "Samsung", releaseYear: 2023 },
    { id: "sam-z-flip-5", categoryId: "samsung", name: "Galaxy Z Flip 5", brand: "Samsung", releaseYear: 2023 },
    { id: "sam-s22-ultra", categoryId: "samsung", name: "Galaxy S22 Ultra", brand: "Samsung", releaseYear: 2022 },
  ],
  pixel: [
    { id: "px-9-pro", categoryId: "pixel", name: "Google Pixel 9 Pro / XL", brand: "Google", releaseYear: 2024 },
    { id: "px-9", categoryId: "pixel", name: "Google Pixel 9", brand: "Google", releaseYear: 2024 },
    { id: "px-8-pro", categoryId: "pixel", name: "Google Pixel 8 Pro", brand: "Google", releaseYear: 2023 },
    { id: "px-8", categoryId: "pixel", name: "Google Pixel 8", brand: "Google", releaseYear: 2023 },
    { id: "px-7-pro", categoryId: "pixel", name: "Google Pixel 7 Pro", brand: "Google", releaseYear: 2022 },
    { id: "px-7", categoryId: "pixel", name: "Google Pixel 7 / 7a", brand: "Google", releaseYear: 2022 },
  ],
  macbook: [
    { id: "mac-pro-16-m3", categoryId: "macbook", name: "MacBook Pro 16\" (M3 / M3 Max)", brand: "Apple", releaseYear: 2023 },
    { id: "mac-pro-14-m3", categoryId: "macbook", name: "MacBook Pro 14\" (M3 / M2)", brand: "Apple", releaseYear: 2023 },
    { id: "mac-air-15-m2", categoryId: "macbook", name: "MacBook Air 15\" (M2 / M3)", brand: "Apple", releaseYear: 2023 },
    { id: "mac-air-13-m2", categoryId: "macbook", name: "MacBook Air 13\" (M2 / M1)", brand: "Apple", releaseYear: 2022 },
    { id: "dell-xps-15", categoryId: "macbook", name: "Dell XPS 15 / 13 Premium", brand: "Dell", releaseYear: 2023 },
    { id: "thinkpad-x1", categoryId: "macbook", name: "Lenovo ThinkPad X1 Carbon", brand: "Lenovo", releaseYear: 2023 },
  ],
  ipad: [
    { id: "ipad-pro-129-m2", categoryId: "ipad", name: "iPad Pro 12.9\" (M2 / 6th Gen)", brand: "Apple", releaseYear: 2022 },
    { id: "ipad-pro-11-m2", categoryId: "ipad", name: "iPad Pro 11\" (M2 / 4th Gen)", brand: "Apple", releaseYear: 2022 },
    { id: "ipad-air-5", categoryId: "ipad", name: "iPad Air (5th Gen / M1)", brand: "Apple", releaseYear: 2022 },
    { id: "ipad-10", categoryId: "ipad", name: "iPad 10.9\" (10th Generation)", brand: "Apple", releaseYear: 2022 },
    { id: "sam-tab-s9", categoryId: "ipad", name: "Samsung Galaxy Tab S9 Ultra", brand: "Samsung", releaseYear: 2023 },
  ],
  console: [
    { id: "ps5-slim", categoryId: "console", name: "Sony PlayStation 5 Slim / Disc", brand: "Sony", releaseYear: 2023 },
    { id: "xbox-series-x", categoryId: "console", name: "Microsoft Xbox Series X", brand: "Microsoft", releaseYear: 2020 },
    { id: "xbox-series-s", categoryId: "console", name: "Microsoft Xbox Series S", brand: "Microsoft", releaseYear: 2020 },
    { id: "switch-oled", categoryId: "console", name: "Nintendo Switch OLED Model", brand: "Nintendo", releaseYear: 2021 },
    { id: "ps4-pro", categoryId: "console", name: "Sony PlayStation 4 Pro", brand: "Sony", releaseYear: 2016 },
  ],
};

export const REPAIR_ISSUES: Record<string, RepairIssue[]> = {
  // Mobile phones & iPads
  phones: [
    {
      id: "screen",
      name: "Cracked OLED / Front Glass",
      shortDesc: "Complete display assembly, TrueTone retention & oleophobic coating",
      iconName: "Maximize2",
      basePrice: 129,
      estMinutes: 28,
      warranty: "Lifetime Warranty on Parts & Labor",
      turnaroundText: "25–35 Minutes",
      oemAvailable: true,
      oemPriceMultiplier: 1.35,
    },
    {
      id: "battery",
      name: "Battery Replacement & Health Calibration",
      shortDesc: "Brand new 0-cycle cells restored to 100% capacity with safety fuses",
      iconName: "BatteryCharging",
      basePrice: 69,
      estMinutes: 20,
      warranty: "1-Year Full Coverage Guarantee",
      turnaroundText: "15–25 Minutes",
      oemAvailable: true,
      oemPriceMultiplier: 1.25,
    },
    {
      id: "backglass",
      name: "Rear Back Glass Laser Removal",
      shortDesc: "Precision fiber laser separation with zero frame distortion",
      iconName: "ShieldAlert",
      basePrice: 89,
      estMinutes: 45,
      warranty: "Lifetime Workmanship Warranty",
      turnaroundText: "40–50 Minutes",
      oemAvailable: true,
      oemPriceMultiplier: 1.2,
    },
    {
      id: "charging",
      name: "Charging Port / USB-C / Lightning Flex",
      shortDesc: "Fixes slow charging, loose cables, and microphone issues",
      iconName: "Zap",
      basePrice: 79,
      estMinutes: 30,
      warranty: "Lifetime Warranty",
      turnaroundText: "25–35 Minutes",
      oemAvailable: true,
      oemPriceMultiplier: 1.15,
    },
    {
      id: "camera",
      name: "Camera Module & Sapphire Lens Glass",
      shortDesc: "Restores autofocus, OIS stabilization & eliminates blur or dark spots",
      iconName: "Camera",
      basePrice: 99,
      estMinutes: 35,
      warranty: "Lifetime Warranty",
      turnaroundText: "30–45 Minutes",
      oemAvailable: true,
      oemPriceMultiplier: 1.3,
    },
    {
      id: "water",
      name: "Liquid & Water Damage Ultrasonic Decon",
      shortDesc: "Ultrasonic chemical bath, corrosion removal & chip-level diagnostics",
      iconName: "Droplets",
      basePrice: 99,
      estMinutes: 120,
      warranty: "90-Day Functional Guarantee",
      turnaroundText: "2–4 Hours",
      oemAvailable: false,
    },
    {
      id: "logicboard",
      name: "Logic Board Micro-Soldering (No Power)",
      shortDesc: "BGA chip replacement, PMIC power trace repair, short circuit fixes",
      iconName: "Cpu",
      basePrice: 149,
      estMinutes: 240,
      warranty: "6-Month Hardware Warranty",
      turnaroundText: "Same-Day / 24h",
      oemAvailable: false,
    },
  ],
  // Laptops / MacBooks
  laptops: [
    {
      id: "laptop-screen",
      name: "Retina / OLED Display Assembly",
      shortDesc: "OEM matched panel, lid assembly, ALS ambient sensor calibration",
      iconName: "Laptop",
      basePrice: 249,
      estMinutes: 60,
      warranty: "Lifetime Warranty on Screen Assembly",
      turnaroundText: "45–90 Minutes",
      oemAvailable: true,
      oemPriceMultiplier: 1.3,
    },
    {
      id: "laptop-battery",
      name: "Internal Battery Pack Replacement",
      shortDesc: "Clean solvent removal, fresh OEM spec cells with cycle count reset",
      iconName: "BatteryCharging",
      basePrice: 119,
      estMinutes: 45,
      warranty: "1-Year Full Coverage",
      turnaroundText: "35–50 Minutes",
      oemAvailable: true,
      oemPriceMultiplier: 1.25,
    },
    {
      id: "laptop-logicboard",
      name: "Logic Board & Micro-Soldering (Spill/No Power)",
      shortDesc: "Capacitor short detection, trace repair, PMIC power rail diagnostics",
      iconName: "Cpu",
      basePrice: 189,
      estMinutes: 180,
      warranty: "6-Month Hardware Warranty",
      turnaroundText: "Same-Day / 24 Hours",
      oemAvailable: false,
    },
    {
      id: "laptop-keyboard",
      name: "Keyboard & Trackpad Mechanism",
      shortDesc: "Fix sticky, unresponsive keys, liquid residue, or erratic trackpads",
      iconName: "Keyboard",
      basePrice: 139,
      estMinutes: 90,
      warranty: "Lifetime Workmanship Warranty",
      turnaroundText: "1–2 Hours",
      oemAvailable: true,
      oemPriceMultiplier: 1.2,
    },
    {
      id: "laptop-water",
      name: "Liquid Spill Ultrasonic Rescue",
      shortDesc: "Full board tear down, isopropyl sonic clean, solder reflow & test",
      iconName: "Droplets",
      basePrice: 129,
      estMinutes: 180,
      warranty: "90-Day Guarantee",
      turnaroundText: "2–4 Hours",
      oemAvailable: false,
    },
    {
      id: "laptop-data",
      name: "Emergency Data Recovery & OS Restore",
      shortDesc: "Direct NAND chip access, bit-by-bit cloning & safe file transfer",
      iconName: "Database",
      basePrice: 99,
      estMinutes: 180,
      warranty: "100% Data Integrity Guaranteed",
      turnaroundText: "Same-Day",
      oemAvailable: false,
    },
  ],
  // Gaming Consoles
  consoles: [
    {
      id: "console-hdmi",
      name: "HDMI 2.1 Port Replacement (No Display/Signal)",
      shortDesc: "Micro-soldered 4K 120Hz original spec HDMI jack with reinforced anchor pins",
      iconName: "Tv",
      basePrice: 89,
      estMinutes: 45,
      warranty: "Lifetime Port Warranty",
      turnaroundText: "40–60 Minutes",
      oemAvailable: true,
      oemPriceMultiplier: 1.15,
    },
    {
      id: "console-cooling",
      name: "Thermal Overhaul & Liquid Metal Reseat",
      shortDesc: "Fixes loud jet engine fans, sudden shut-offs, and APU overheating",
      iconName: "Wind",
      basePrice: 79,
      estMinutes: 40,
      warranty: "1-Year Thermal Stability Warranty",
      turnaroundText: "30–45 Minutes",
      oemAvailable: false,
    },
    {
      id: "console-psu",
      name: "Internal Power Supply (PSU) Repair",
      shortDesc: "Fixes console not turning on, clicking sounds, or tripping breaker",
      iconName: "Zap",
      basePrice: 99,
      estMinutes: 60,
      warranty: "1-Year Hardware Warranty",
      turnaroundText: "1–2 Hours",
      oemAvailable: true,
      oemPriceMultiplier: 1.2,
    },
    {
      id: "console-board",
      name: "Optical Drive & Logic Board Repair",
      shortDesc: "Laser lens diode replacement, southbridge IC re-soldering, error codes",
      iconName: "Cpu",
      basePrice: 119,
      estMinutes: 120,
      warranty: "6-Month Warranty",
      turnaroundText: "Same-Day",
      oemAvailable: false,
    },
  ],
};

// Helper to determine issue list based on category
export function getIssuesForCategory(categoryId: string): RepairIssue[] {
  if (categoryId === "macbook") return REPAIR_ISSUES.laptops;
  if (categoryId === "console") return REPAIR_ISSUES.consoles;
  return REPAIR_ISSUES.phones;
}

// Calculate realistic price for device model and issue
export function calculateRepairPrice(
  categoryId: string,
  modelId: string,
  issue: RepairIssue,
  isOem: boolean = true
) {
  let modelFactor = 1.0;
  // Modern flagship phones and laptops have higher component values
  if (modelId.includes("16-pro") || modelId.includes("s24-ultra") || modelId.includes("fold")) {
    modelFactor = 1.45;
  } else if (modelId.includes("15-pro") || modelId.includes("s23-ultra") || modelId.includes("px-9")) {
    modelFactor = 1.3;
  } else if (modelId.includes("14-pro") || modelId.includes("s22-ultra") || modelId.includes("px-8")) {
    modelFactor = 1.15;
  } else if (modelId.includes("16-m3")) {
    modelFactor = 1.5;
  } else if (modelId.includes("14-m3")) {
    modelFactor = 1.35;
  } else if (modelId.includes("ps5")) {
    modelFactor = 1.1;
  }

  const base = issue.basePrice * modelFactor;
  const standardPrice = Math.round(base);
  const oemPrice = issue.oemAvailable
    ? Math.round(base * (issue.oemPriceMultiplier || 1.3))
    : standardPrice;

  return {
    standardPrice,
    oemPrice,
    selectedPrice: isOem && issue.oemAvailable ? oemPrice : standardPrice,
    turnaround: issue.turnaroundText,
    warranty: issue.warranty,
    estMinutes: issue.estMinutes,
  };
}
