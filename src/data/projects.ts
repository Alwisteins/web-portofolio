export type Project = {
  title: string;
  slug: string;
  type: "website" | "design";
  category: "Business Landing Pages" | "Business Websites" | "Web System & Dashboard";
  businessType: string;
  image: string;
  description: string;
  demoLink: string;
};

export const projects: Project[] = [
  {
    title: "KratonStay - Hotel Booking Website",
    slug: "kratonstay-hotel-booking",
    type: "website",
    category: "Business Landing Pages",
    businessType: "Hotel Business",
    image: "/projects/kratonstay.png",
    description:
      "Website booking hotel modern dengan sistem reservasi online, tampilan profesional, dan SEO-friendly untuk meningkatkan pemesanan.",
    demoLink: "https://kratonstay.vercel.app",
  },
  {
    title: "Growth2Up - Digital Marketing Landing Page",
    slug: "growth2up-digital-marketing",
    type: "website",
    category: "Business Landing Pages",
    businessType: "Service Business",
    image: "/projects/growth2up.png",
    description:
      "Landing page conversion-focused untuk agency digital marketing dengan struktur yang jelas dan optimasi performa.",
    demoLink: "https://growth2up.vercel.app",
  },
  {
    title: "DevGrow Labs - Software House Company Website",
    slug: "devgrow-labs-company-website",
    type: "website",
    category: "Business Websites",
    businessType: "Service Business",
    image: "/projects/devgrow-labs.png",
    description:
      "Website company profile untuk software house yang menampilkan layanan, portofolio, dan value perusahaan dengan desain modern dan profesional.",
    demoLink: "https://devgrow-labs.vercel.app",
  },
  {
    title: "Prime Dental - Dental Clinic Landing Page",
    slug: "prime-dental-clinic",
    type: "website",
    category: "Business Landing Pages",
    businessType: "Clinic Business",
    image: "/projects/prime-dental.png",
    description: "",
    demoLink: "https://prime-dental.vercel.app/",
  },
  {
    title: "UmrahEase - Umrah Travel Agency Website",
    slug: "umrahease-travel-agency",
    type: "design",
    category: "Business Landing Pages",
    businessType: "Travel Agency Business",
    image: "/projects/umrahease.png",
    description:
      "Desain website travel umrah yang fokus pada kemudahan informasi paket, kepercayaan brand, dan tampilan yang bersih serta informatif.",
    demoLink: "",
  },
];
