export type Project = {
  title: string;
  slug: string;
  type: "website" | "design";
  category:
    | "Business Landing Pages"
    | "Business Websites"
    | "Web System & Dashboard"
    | "Mobile Application";
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
    businessType: "Healthcare Business",
    image: "/projects/prime-dental.png",
    description:
      "Prime Dental adalah sebuah landing page profesional yang dirancang khusus untuk klinik gigi di Pemalang dengan tujuan meningkatkan kredibilitas, kepercayaan pasien, dan kemudahan akses informasi layanan. Website ini menyajikan informasi utama seperti profil klinik, layanan perawatan gigi, keunggulan klinik, serta call-to-action yang jelas untuk mendorong calon pasien melakukan konsultasi atau reservasi, dengan tampilan modern, responsif, dan berfokus pada kenyamanan pengalaman pengguna.",
    demoLink: "https://prime-dental.vercel.app/",
  },
  {
    title: "IDCollabSpace - Web-Based Project Collaboration Platform",
    slug: "idcollabspace",
    type: "website",
    category: "Web System & Dashboard",
    businessType: "SaaS Business",
    image: "/projects/idcollabspace.png",
    description:
      "IDCollabSpace adalah platform kolaborasi digital berbasis web yang dirancang untuk mempertemukan developer, designer, dan talenta digital lainnya dengan project owner dalam membangun proyek secara kolaboratif. Platform ini memungkinkan pengguna untuk membuat dan mengelola proyek & task, menentukan role dan kebutuhan skill yang dibutuhkan, melamar ke proyek sesuai keahlian, serta mengelola anggota tim dalam satu sistem terintegrasi. IDCollabSpace dibangun dengan fokus pada struktur data yang rapi, alur kolaborasi yang efisien, dan pengalaman pengguna yang intuitif sehingga dapat menjadi ruang kolaborasi produktif bagi individu yang ingin belajar, berjejaring, dan menghasilkan karya nyata bersama.",
    demoLink: "",
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
  {
    title: "Book Appointment App",
    slug: "book-appointment-app",
    type: "design",
    category: "Mobile Application",
    businessType: "Healthcare Business",
    image: "/projects/doctor-app.png",
    description:
      "Aplikasi Pemesanan Janji Temu Dokter dirancang untuk menyederhanakan proses penjadwalan janji temu medis, memungkinkan pengguna untuk memesan konsultasi dengan dokter secara mudah melalui antarmuka yang bersih dan intuitif. Aplikasi ini berfokus pada navigasi yang ramah pengguna, konfirmasi pemesanan secara real-time, dan informasi dokter yang jelas untuk meningkatkan aksesibilitas layanan kesehatan.",
    demoLink:
      "https://alwisteins.notion.site/Book-Appointment-App-2447ffc2ac3881a7962dc6128d3bd5b2",
  },
  {
    title: "DigiGrowth - Learning Management System",
    slug: "digigrowth-learning-management-system",
    type: "design",
    category: "Mobile Application",
    businessType: "Education Business",
    image: "/projects/digigrowth.png",
    description:
      "DigiGrowth merupakan sebuah platform pembelajaran mobile yang didesain dengan fokus ke gamification untuk meningkatkan kenyamanan pengguna",
    demoLink:
      "https://alwisteins.notion.site/DigiGrowth-Learning-Management-System-2447ffc2ac3881f2b5e7c8ff9cad4153",
  },
  {
    title: "Aivy - AI-Based Mental Health Self-Check Tools",
    slug: "aivy-ai-mental-health-self-check-tools",
    type: "design",
    category: "Mobile Application",
    businessType: "Healthcare Business",
    image: "/projects/aivy.png",
    description:
      "Aivy adalah alat pengecekan kesehatan mental mandiri berbasis AI yang dirancang untuk membantu individu lebih memahami dan memantau kesejahteraan emosional mereka. Melalui penilaian harian singkat, Aivy memberikan wawasan yang dipersonalisasi, refleksi lembut, dan kiat-kiat yang mendukung—semuanya dalam ruang yang aman, pribadi, dan bebas dari penilaian. Baik Anda merasa sedih, cemas, atau hanya ingin tetap selaras dengan pikiran Anda, Aivy memberdayakan Anda untuk memeriksa diri sendiri dan mengambil langkah-langkah kecil menuju keseimbangan emosional.",
    demoLink:
      "https://alwisteins.notion.site/AI-Based-Mental-Health-Self-Check-Tools-2447ffc2ac388111bbc8f55e1ca4dcaf",
  },
];
