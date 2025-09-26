import { Card } from "@/components/ui/card";
import { Calendar, X, ExternalLink } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/provider/page";

export default function Certifications() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [selectedCert, setSelectedCert] = useState(null);

  // Place all certificate image files in /public/certificates/
  const certifications = [
    {
      id: 1,
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "Feb 2025",
      description: "Gained foundational knowledge of Azure services, workloads, and governance.",
      credentialId: "E67B6D632DC960FE",
      skills: ["Azure Services", "Cloud Concepts", "Security & Compliance", "Pricing & Support"],
      verificationUrl: "https://learn.microsoft.com/en-us/users/vijaybhargav-3425/credentials/e67b6d632dc960fe",
      certificateImage: "/certificates/Microsoft.svg"
    },
    {
      id: 1,
      title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
      issuer: "Oracle",
      date: " Aug 2025",
      description: "Gained hands-on expertise in applying DevOps practices on Oracle Cloud Infrastructure (OCI).",
      skills: ["infrastructure automation", "CI/CD", "container orchestration", "DevSecOps", "monitoring" , "observability"],
      verificationUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=2A37241977DD526349DE5AA0F7103F298503AB0257017FF106EE0ACA2BEE058F",
      certificateImage: "/certificates/Oracle.png"
    },
    {
      id: 6,
      title: "Zscaler Zero Trust Certified Associate (ZTCA)",
      issuer: "Zscaler",
      date: "May 2025",
      description: "Mastered Zero Trust principles, secure access, and threat prevention.",
      credentialId: "dk665spxg77v",
      skills: ["Zero Trust Architecture", "Secure Access", "Threat Prevention", "Cloud Security"],
      verificationUrl: "https://verify.skilljar.com/c/dk665spxg77v",
      certificateImage: "/certificates/Zscaler.png"
    },
    {
      id: 2,
      title: "IBM Certified: Data Science Foundations - Level 2 (V2)",
      issuer: "IBM",
      date: "Aug 2025",
      description: "Gained foundational knowledge of data science methodologies, tools, and programming languages.",
      credentialId: "7d981699-cdb4-4ffd-8781-c9301ca02147",
      skills: ["Data Science", "Python", "Scala", "Statistics", "Data Scientist Workbench", "Dswb", "PWID-B0279600"],
      verificationUrl: "https://www.credly.com/badges/7d981699-cdb4-4ffd-8781-c9301ca02147/public_url",
      certificateImage: "/certificates/IBM.png"
    },
    {
      id: 2,
      title: "IBM Certified: Data Science Methodologies",
      issuer: "IBM",
      date: "Aug 2025",
      description: "Understood the essential steps used in data science business and research problem solving.",
      credentialId: "eb40d03e-4515-4ec5-b617-b5cf31aff0ee",
      skills: ["Data Science", "Data Science Methodology" , "PWID-B0443200"],
      verificationUrl: "https://www.credly.com/badges/eb40d03e-4515-4ec5-b617-b5cf31aff0ee/public_url",
      certificateImage: "/certificates/IBM_DS.png"
    },
    {
      id: 3,
      title: "AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "Dec 2024",
      description: "Learned cloud concepts, security, pricing, and AWS services.",
      credentialId: "AWS-CPE-2024-003",
      skills: ["Cloud Concepts", "AWS Services", "Security", "Billing & Pricing"],
      verificationUrl: "https://www.credly.com/badges/b7a20d7c-b575-4bce-9a77-9b79081cb68d/public_url",
      certificateImage: "/certificates/aws_cloud_f.png"
    },
    {
      id: 4,
      title: "AWS Academy Cloud Architecting",
      issuer: "Amazon Web Services",
      date: "Dec 2024",
      description: "Built cloud-native architecture using EC2, IAM, S3, and VPCs.",
      credentialId: "AWS-ARCH-2024-004",
      skills: ["EC2", "IAM", "S3", "VPC", "Load Balancing", "Auto Scaling"],
      verificationUrl: "https://www.credly.com/badges/b069864e-e851-4d1a-b46c-10de598526d5/public_url",
      certificateImage: "/certificates/aws_cloud_a.png"
    },
    {
      id: 5,
      title: "Google Cloud Computing Foundations",
      issuer: "Google",
      date: "June 2025",
      description: "Earned Elite badge for GCP fundamentals, compute, and storage.",
      credentialId: "06431a87-513b-45e8-b87c-5f4a44f54a57",
      skills: ["GCP Fundamentals", "Compute Engine", "Cloud Storage", "BigQuery"],
      verificationUrl: "https://www.credly.com/badges/06431a87-513b-45e8-b87c-5f4a44f54a57/public_url",
      certificateImage: "/certificates/google.png"
    },
    {
      id: 7,
      title: "Salesforce AI Associate Certification",
      issuer: "Salesforce",
      date: "Nov 2024",
      description: "Studied AI integration, ethical AI use, and CRM automation.",
      credentialId: "SF-AI-2024-007",
      skills: ["AI Integration", "Ethical AI", "CRM Automation", "Einstein AI"],
      verificationUrl: "https://drive.google.com/file/d/1Ra7sB5kvN5eOTAifiVTOBbJ7kctiCHX7/view?usp=drive_link",
      certificateImage: "/certificates/Salesforce.png"
    },
    {
      id: 8,
      title: "Cisco: CCNA Introduction to Networks",
      issuer: "Cisco Networking Academy",
      date: "May 2025",
      description: "Learned networking basics, IP addressing, and network protocols.",
      credentialId: "fe246179-f121-4a6f-beff-18a227d89da1",
      skills: ["Network Fundamentals", "IP Addressing", "Network Protocols", "OSI Model"],
      verificationUrl: "https://www.credly.com/badges/fe246179-f121-4a6f-beff-18a227d89da1/public_url",
      certificateImage: "/certificates/CCNAITN.png"
    },
    {
      id: 9,
      title: "Cisco: CCNA Switching, Routing, and Wireless Essentials",
      issuer: "Cisco Networking Academy",
      date: "May 2025",
      description: "Configured switches, routers, and wireless networks with security.",
      credentialId: "d1581b32-91f2-4aed-9df0-96aac89460fe",
      skills: ["Switching", "Routing", "Wireless Networks", "Network Security"],
      verificationUrl: "https://www.credly.com/badges/297c2e7f-2b29-4bf9-9cec-1d0f4fe8480b/public_url",
      certificateImage: "/certificates/CCNASRWE.png"
    },
    {
      id: 10,
      title: "Cisco: CCNA Enterprise Networking, Security, and Automation",
      issuer: "Cisco Networking Academy",
      date: "May 2025",
      description: "Explored automation, SD-WAN, and enterprise-level networking.",
      credentialId: "297c2e7f-2b29-4bf9-9cec-1d0f4fe8480b",
      skills: ["Enterprise Networking", "Network Automation", "SD-WAN", "Network Security"],
      verificationUrl: "https://www.credly.com/badges/d1581b32-91f2-4aed-9df0-96aac89460fe/public_url",
      certificateImage: "/certificates/CCNAENSA.png"
    },
    {
      id: 11,
      title: "Cisco: Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "May 2025",
      description: "Studied threat types, protection strategies, and cybersecurity careers.",
      credentialId: "03aaf85e-99d3-4546-9062-ce0abd052174",
      skills: ["Threat Analysis", "Protection Strategies", "Cybersecurity Fundamentals", "Risk Management"],
      verificationUrl: "https://www.credly.com/badges/03aaf85e-99d3-4546-9062-ce0abd052174/public_url",
      certificateImage: "/certificates/I2CS.png"
    },
    
  ];

  return (
    <section
      className={`${
        isDark ? "bg-[#090F1C]" : "bg-gray-50"
      } py-16 md:py-32 min-h-screen relative overflow-hidden`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
              : "bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]"
          } bg-[size:4rem_4rem]`}
        />
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-r from-[#090F1C] via-transparent to-[#090F1C]"
              : "bg-gradient-to-r from-gray-50 via-transparent to-gray-50"
          }`}
        />
      </div>

      <div className="mx-auto max-w-5xl px-6 relative">
        <div className="text-center">
          <h2 className={`text-4xl font-semibold lg:text-5xl ${isDark ? "text-white" : "text-gray-900"}`}>
            Certifications
          </h2>
          <p className={`mt-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            "Lifelong learning through cloud, AI, and cybersecurity"
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {certifications.map((cert) => (
            <CertificationCard
              key={cert.id}
              certification={cert}
              onClick={() => setSelectedCert(cert)}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <CertificationModal
            certification={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

const CertificationCard = ({ certification, onClick }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      className="h-full group cursor-pointer"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.03, boxShadow: "0 6px 24px 0 rgba(59,130,246,0.1)" }}
      onClick={onClick}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      tabIndex={0}
      aria-label={`Open details for ${certification.title}`}
      role="button"
    >
      <Card
        className={`group h-full overflow-hidden flex flex-col pb-6 transition-all duration-300 ${
          isDark
            ? "bg-gray-900/80 border-gray-700 hover:shadow-blue-500/30"
            : "bg-white border-gray-200 hover:shadow-lg"
        }`}
      >
        <motion.img
          src={certification.certificateImage}
          alt={`${certification.title} certification`}
          className="w-full h-52 object-contain rounded-t-md transition-transform duration-300 group-hover:scale-105"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.07 }}
          style={{ background: "transparent" }}
        />

        <div className="px-6 pt-4">
          <h3 className={`text-xl font-semibold truncate ${isDark ? "text-white" : "text-gray-900"}`}>
            {certification.title}
          </h3>
          <p className={`mt-1 text-sm font-medium ${isDark ? "text-blue-400" : "text-blue-600"}`}>
            {certification.issuer}
          </p>
          <div className={`mt-1 flex items-center gap-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            <Calendar className="w-4 h-4" />
            <span>{certification.date}</span>
          </div>
          <p className={`mt-3 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            {certification.description}
          </p>
          <div className={`mt-3`}>
            <a
              href={certification.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors mt-2 ${
                isDark
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
              onClick={e => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
              Verify Certificate
            </a>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {certification.skills &&
              certification.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`px-2 py-1 rounded-full text-xs mt-1 border ${
                    isDark
                      ? "bg-blue-900/50 text-blue-200 border-blue-700"
                      : "bg-blue-100 text-blue-700 border-blue-200"
                  }`}
                >
                  {skill}
                </span>
              ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const CertificationModal = ({ certification, onClose }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className={`absolute inset-0 ${isDark ? "bg-black/70" : "bg-black/50"} backdrop-blur-sm`} />

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-xl border ${
          isDark ? "bg-[#090F1C] border-gray-700" : "bg-white border-gray-200"
        }`}
        onClick={e => e.stopPropagation()}
      >
        <div className={`flex justify-between items-center p-6 border-b ${
          isDark ? "border-gray-700" : "border-gray-200"
        }`}>
          <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
            Certificate Details
          </h3>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${
              isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex justify-center">
            <img
              src={certification.certificateImage}
              alt={certification.title}
              className="w-40 h-40 object-contain rounded-md"
              style={{ background: "transparent" }}
            />
          </div>

          <div className="text-center space-y-2">
            <h4 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
              {certification.title}
            </h4>
            <p className={`text-base font-medium ${isDark ? "text-blue-400" : "text-blue-600"}`}>
              {certification.issuer}
            </p>
            <div className={`flex justify-center gap-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              <Calendar className="w-4 h-4" />
              <span>{certification.date}</span>
            </div>
          </div>

          {certification.credentialId && (
            <div className={`p-4 rounded-lg ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
              <p className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                Credential ID
              </p>
              <p className={`text-lg font-mono ${isDark ? "text-blue-400" : "text-blue-600"}`}>
                {certification.credentialId}
              </p>
            </div>
          )}

          <div>
            <p className={`text-sm font-semibold mb-1 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Description</p>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>{certification.description}</p>
          </div>

          <div>
            <p className={`text-sm font-semibold mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Skills Demonstrated</p>
            <div className="flex flex-wrap gap-2">
              {certification.skills.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm border ${
                    isDark
                      ? "bg-blue-900/30 text-blue-300 border-blue-700"
                      : "bg-blue-100 text-blue-700 border-blue-200"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className={`pt-4 border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}>
            <a
              href={certification.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Verify Certificate
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
