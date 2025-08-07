import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.14, duration: 0.6 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.97, y: 40 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", duration: 0.7 },
  },
  whileHover: { scale: 1.03, y: -2 },
};

const techs = ["Node.js", "PHP", "Angular", "Perl", "HTML5", "Python"];

const AboutUs = () => (
  <motion.div
    className="
      bg-gradient-to-br from-[#f5faff] via-white to-[#f5faff]
      text-gray-800 min-h-screen py-14 px-4 md:px-24
      flex flex-col justify-center
    "
    variants={containerVariants}
    initial="hidden"
    animate="show"
  >
    {/* Header */}
    <motion.div className="mb-6" variants={childVariants}>
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center tracking-tight">
        About <span className="text-blue-600">Us</span>
      </h1>
      <p className="text-sm text-center text-gray-400 mb-8">
        Home <span className="mx-2 opacity-50">/</span>
        <span className="text-blue-600 font-semibold">About Us</span>
      </p>
    </motion.div>

    {/* Tech Logos Row */}
    <motion.div
      className="flex flex-wrap justify-center gap-6 mb-14"
      variants={childVariants}
    >
      {techs.map((tech) => (
        <motion.div
          key={tech}
          whileHover={{ scale: 1.09, y: -4 }}
          className="
            p-4 rounded-xl shadow bg-white flex items-center justify-center
            transition-all border border-gray-100
          "
        >
          <img
            src={`https://via.placeholder.com/90x40?text=${encodeURIComponent(
              tech
            )}`}
            alt={tech}
            className="h-8 md:h-10 object-contain"
          />
        </motion.div>
      ))}
    </motion.div>

    {/* About Section */}
    <motion.div
      className="grid md:grid-cols-2 gap-12 items-center mb-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div variants={childVariants} className="w-full flex justify-center">
        <img
          src="program.png" // Update to your modern illustration or SVG
          alt="Team work"
          className="w-full max-w-md mx-auto rounded-2xl shadow-lg border border-blue-50 object-cover"
          loading="lazy"
        />
      </motion.div>
      <motion.div variants={childVariants}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-5">
          Our <span className="text-blue-700">Story</span>
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
          We are a reputed{" "}
          <span className="font-bold text-blue-600">
            software development company
          </span>{" "}
          delivering robust, innovative, and scalable solutions worldwide.
          Specializing in{" "}
          <span className="font-semibold text-blue-600">
            IoT, AI, AR/VR, Blockchain, and Machine Learning
          </span>
          , our expert team comprises analysts, developers, designers, and consultants dedicated to excellence—from custom software to remote maintenance for global clients.
        </p>
      </motion.div>
    </motion.div>

    {/* Cards Section with MOVING BORDER */}
    <motion.div
      className="grid md:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div
        variants={cardVariants}
        whileHover="whileHover"
        className="moving-border"
      >
        <div className="card-inner bg-white rounded-2xl shadow-xl p-7 flex flex-col h-full">
          <h3 className="text-xl font-bold mb-3 text-blue-700">Our Vision</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            Provide simple &amp; effective IT solutions for complex business needs using latest technologies —
            always cost-effective, always global.
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={cardVariants}
        whileHover="whileHover"
        className="moving-border"
      >
        <div className="card-inner bg-white rounded-2xl shadow-xl p-7 flex flex-col h-full">
          <h3 className="text-xl font-bold mb-3 text-indigo-600">Our Mission</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            Empower entrepreneurs in emerging markets with affordable, efficient, and innovative IT solutions — focused on innovation, quality, and client success.
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={cardVariants}
        whileHover="whileHover"
        className="moving-border"
      >
        <div className="card-inner bg-white rounded-2xl shadow-xl p-7 flex flex-col h-full">
          <h3 className="text-xl font-bold mb-3 text-emerald-700">Why Choose Us?</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            Client-centric methodology, unique solutions, and exceptional service. We transform businesses and consistently exceed expectations.
          </p>
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default AboutUs;
