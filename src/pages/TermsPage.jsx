import React, { useEffect} from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, ShieldAlert, Fingerprint, Mail, 
  Scale, BookOpen, Users, Gavel, RefreshCw, AlertTriangle 
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const TermsPage = () => {

  


  
  return (
    
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased"> 
    
    
      {/* --- SECTION 1: HERO / HEADER --- */}
      <motion.header 
        className="bg-slate-900 py-16 px-6 text-center text-white"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      > 
      
        
        <FileText className="mx-auto mb-4 h-16 w-16 text-orange-500" />
        <h1 className="text-4xl font-extrabold md:text-6xl">Terms & Conditions</h1>
        <p className="mt-4 text-lg text-gray-400">Effective Date: December 2025</p>
      </motion.header>

      <main className="mx-auto max-w-6xl px-4 py-12">
        
        {/* --- SECTION 2: RIGHT WORD / LEFT ICON --- */}
        <motion.section 
          className="mb-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="flex justify-center md:order-1">
            <motion.div variants={fadeInUp} className="rounded-2xl bg-orange-100 p-8 shadow-inner">
              <ShieldAlert className="h-32 w-32 text-orange-600 lg:h-48 lg:w-48" />
            </motion.div>
          </div>
          <motion.div variants={fadeInUp} className="md:order-2">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 underline decoration-orange-500 decoration-4">General Disclaimers</h2>
            <ul className="space-y-4 text-lg leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-orange-500"></span>
                There is no guarantee that submitting your resume to us will result in employment.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-orange-500"></span>
                We are not responsible for losses due to system failure or software leaks.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-orange-500"></span>
                Software testing is the client's responsibility; we are not liable for losses from use.
              </li>
            </ul>
          </motion.div>
        </motion.section>

        {/* --- SECTION 3: LEFT WORD / RIGHT ICON --- */}
        <motion.section 
          className="mb-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="order-2 md:order-1">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 underline decoration-blue-500 decoration-4">Data & Privacy</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Fingerprint className="h-8 w-8 flex-shrink-0 text-blue-600" />
                <p>We collect browser details and IP for security and service enhancement.</p>
              </div>
              <div className="flex gap-4">
                <Mail className="h-8 w-8 flex-shrink-0 text-blue-600" />
                <p>Registering on our site constitutes consent to collect Name, Email, and Phone.</p>
              </div>
              <div className="flex gap-4">
                <Users className="h-8 w-8 flex-shrink-0 text-blue-600" />
                <p>Third-party vendors like Google use cookies (DART) to serve personalized ads.</p>
              </div>
            </div>
          </motion.div>
          <div className="order-1 flex justify-center md:order-2">
            <motion.div variants={fadeInUp} className="rounded-2xl bg-blue-100 p-8 shadow-inner">
              <RefreshCw className="h-32 w-32 animate-spin-slow text-blue-600 lg:h-48 lg:w-48" />
            </motion.div>
          </div>
        </motion.section>

        {/* --- SECTION 4: DETAILED TERMS GRID (3 columns responsive) --- */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <h2 className="mb-12 text-center text-4xl font-bold">Additional Disclosures</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div variants={fadeInUp} className="rounded-xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-xl transition-shadow">
              <Scale className="mb-4 h-10 w-10 text-orange-500" />
              <h3 className="mb-2 text-xl font-bold">Interpretation</h3>
              <p className="text-sm text-gray-600">Definitions for CMS, Downloads, and Entries apply strictly for non-commercial educational use.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="rounded-xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-xl transition-shadow">
              <BookOpen className="mb-4 h-10 w-10 text-orange-500" />
              <h3 className="mb-2 text-xl font-bold">License Grant</h3>
              <p className="text-sm text-gray-600">Object Retrieval grants a personal, non-transferable, non-exclusive license to access and study entries.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="rounded-xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-xl transition-shadow">
              <Gavel className="mb-4 h-10 w-10 text-orange-500" />
              <h3 className="mb-2 text-xl font-bold">Governing Law</h3>
              <p className="text-sm text-gray-600">This agreement is governed by English law and subject to the exclusive jurisdiction of English courts.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* --- SECTION 5: FINAL WARNINGS --- */}
        <motion.section 
          className="rounded-3xl bg-slate-900 p-10 text-white shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <AlertTriangle className="h-20 w-20 text-yellow-400" />
            <div>
              <h2 className="text-3xl font-bold">Indemnity & Suspension</h2>
              <p className="mt-4 text-gray-300">
                You agree to indemnify Object Retrieval against all claims resulting from your breach of these terms. 
                Access may be suspended without notice for violations.
              </p>
              <button className="mt-6 rounded-full bg-orange-500 px-8 py-3 font-bold text-white transition hover:bg-orange-600">
                Contact Legal Support
              </button>
            </div>
          </div>
        </motion.section>
      </main>

      

      {/* Tailwind helper for slow spin */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default TermsPage;