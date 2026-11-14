export interface DeviceCategory {
  id: string;
  name: string;
  iconName: string;
  popular?: boolean;
}

export interface DeviceModel {
  id: string;
  categoryId: string;
  name: string;
  brand: string;
  releaseYear?: number;
}

export interface RepairIssue {
  id: string;
  name: string;
  shortDesc: string;
  iconName: string;
  basePrice: number;
  estMinutes: number;
  warranty: string;
  turnaroundText: string;
  oemAvailable: boolean;
  oemPriceMultiplier?: number;
}

export interface DeviceRepairPrice {
  deviceId: string;
  modelId: string;
  issueId: string;
  price: number;
  oemPrice: number;
  turnaround: string;
  warranty: string;
  inStock: boolean;
  notes?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  startingPrice: number;
  turnaroundTime: string;
  image: string;
  category: "all" | "phones" | "laptops" | "tablets" | "consoles" | "microsoldering";
  features: string[];
  warranty: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  device: string;
  issue: string;
  turnaround: string;
  beforeImage: string;
  afterImage: string;
  beforeDesc: string;
  afterDesc: string;
  specs: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  device: string;
  repairType: string;
  turnaround: string;
  review: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  category: "privacy" | "turnaround" | "warranty" | "mailin";
  question: string;
  answer: string;
}

export interface TrackingTicket {
  ticketNumber: string;
  customerName: string;
  device: string;
  issue: string;
  technician: string;
  status: "received" | "diagnosed" | "repairing" | "testing" | "ready";
  currentStepIndex: number;
  steps: {
    title: string;
    description: string;
    timestamp: string;
    completed: boolean;
    active: boolean;
  }[];
  healthScore: number;
  partsReplaced: string[];
  notes: string;
  readyForPickup: boolean;
  lockerCode?: string;
}
