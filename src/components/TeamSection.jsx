import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Award, Zap, Phone, Mail } from 'lucide-react';

// --- Updated Team Member Data (More members added) ---
// We use 6 members so the animation loop is noticeable.
const teamMembers = [
    
    {
        name: 'sachin singh',
        role: 'PHP & mobile developer ',
        experience: '10+ Years Experience',
        avatar: 'https://placehold.co/128x128/DBEAFE/1D4ED8?text=SS',
        primaryColor: 'text-blue-600',
    },
    {
        name: 'neeraj kushwaha',
        role: 'Project Manager',
        experience: '1.5+ Years Experience',
        avatar: 'https://placehold.co/128x128/D1FAE5/059669?text=NK',
        primaryColor: 'text-green-600',
    },
    {
        name: 'Binod Yadav',
        role: 'CEO & founder',
        experience: '12+ Years Experience',
        avatar: 'https://placehold.co/128x128/FEE2E2/EF4444?text=BY',
        primaryColor: 'text-red-600',
    },
    {
        name: 'Priyanka ',
        role: 'mobile devloper',
        experience: '2+ Years Experience',
        avatar: 'https://placehold.co/128x128/F3E8FF/A855F7?text=PG',
        primaryColor: 'text-purple-600',
    }, {
        name: 'Harsh Dubey ',
        role: 'Fullstack devloper',
        experience: '1 Years Experience',
        avatar: 'https://placehold.co/128x128/F3E8FF/A855F7?text=HD',
        primaryColor: 'text-purple-600',
    },
];

// To create a seamless, looping marquee effect, we duplicate the list.
const duplicatedMembers = [...teamMembers, ...teamMembers]; 

// --- Framer Motion Animation Logic ---

// We define the total width of one set of cards, plus the gap,
// and use that distance to calculate the translateX needed for one full cycle.

// Total number of cards to scroll in one direction (6 in this case)
const CARD_COUNT = teamMembers.length; 
// Assuming card width is 300px and gap is 24px (gap-6) => 324px total per card
const CARD_WIDTH_PLUS_GAP = 324; 
// Total distance to move for one full cycle: 6 members * 324px
const TOTAL_SCROLL_DISTANCE = CARD_COUNT * CARD_WIDTH_PLUS_GAP; 

const marqueeVariants = {
    // Phase 1: Scroll Right to Left
    scrollRightToLeft: {
        x: [0, `-${TOTAL_SCROLL_DISTANCE}px`], // Scroll one full set of cards to the left
        transition: {
            x: {
                duration: 20, // Duration of the scroll
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
            },
        },
    },
    // Phase 2 (If you wanted left to right scroll, you'd use a different variant and sequence)
    // For simplicity and a smoother loop, we'll stick to one direction.
    // NOTE: For bidirectional scrolling (left to right, then reverse), the 'loop' logic becomes much more complex and usually requires sequence control, which is outside a simple 'repeat: infinity'. The standard marquee below is the most robust implementation.
};


// Main Team Section Component
const TeamSection = () => {

    return (
        <section className="bg-gray-50 font-sans py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"> 
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Meet Our <span className="text-blue-600">Specialist Team</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
                        Dedicated experts driving innovation and quality in every project.
                    </p>
                </motion.div>

                {/* --- Auto-Scrolling Marquee Container --- */}
                <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_white_200px,_white_calc(100%-200px),transparent_100%)]">
                    
                    <motion.div
                        className="flex gap-6 w-max" // w-max ensures the container is wide enough for all duplicated cards
                        variants={marqueeVariants}
                        animate="scrollRightToLeft"
                    >
                        {/* We use duplicatedMembers for the seamless loop */}
                        {duplicatedMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                // Adjusted width to 300px for consistency in the scroll calculation
                                className="flex-shrink-0 w-[300px] bg-white rounded-2xl shadow-xl overflow-hidden text-center p-8 transition-shadow duration-300 hover:shadow-2xl cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {/* Avatar */}
                                <div className="relative inline-block mb-6">
                                    <img
                                        src={member.avatar}
                                        alt={`${member.name}'s avatar`}
                                        className="w-32 h-32 rounded-full object-cover border-4 border-gray-100 shadow-md mx-auto"
                                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/128x128/cccccc/ffffff?text=User'; }}
                                    />
                                    <span className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-3 border-white shadow-md transform translate-x-1"></span>
                                </div>

                                {/* Member Info */}
                                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                
                                {/* Role */}
                                <div className="flex items-center justify-center mt-2 font-semibold">
                                    <Briefcase size={16} className={`mr-2 ${member.primaryColor}`} />
                                    <p className={`${member.primaryColor}`}>{member.role}</p>
                                </div>
                                
                                {/* Experience */}
                                <div className="flex items-center justify-center mt-2 text-gray-500 text-sm">
                                    <Award size={16} className="mr-2 text-yellow-500" />
                                    <p>{member.experience}</p>
                                </div>

                                {/* Contact Icons */}
                                <div className="mt-4 flex justify-center space-x-4">
                                    <a href={`tel:${member.name}`} className={`p-2 rounded-full bg-gray-100 hover:bg-blue-100 ${member.primaryColor}`}>
                                        <Phone size={18} />
                                    </a>
                                    <a href={`mailto:${member.name}@example.com`} className={`p-2 rounded-full bg-gray-100 hover:bg-blue-100 ${member.primaryColor}`}>
                                        <Mail size={18} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                {/* --- End Marquee Container --- */}

            </div>
        </section>
    );
};

export default TeamSection;