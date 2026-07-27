"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import outImg from "../assets/images/out.jpg";
import abvvImg from "../assets/images/ABVV.png";
import lanamaiImg from "../assets/images/lanamai.png";
import firstminerImg from "../assets/images/firstminer.png";
import dabbawalaImg from "../assets/images/dabbavala.webp";
// import { publicUrl } from "../../config/publicUrl";

// ============================================================================
// RANK SYSTEM CAROUSEL - Self-contained component (JSX version)
// Dependencies: framer-motion, lucide-react
// Usage: import RankSystemCarousel from "./rank-system-carousel"
//        <RankSystemCarousel />
// ============================================================================

const ranksData = [
  {
    id: "abvv-website",
    name: "ABVV University Website",
    cycle: "Web Platform",

    badgeSrc: abvvImg, // or use abvvImg if you add a separate logo

    cardBackground:
      "linear-gradient(160deg, #07111f 0%, #0d1b2a 50%, #132238 100%)",

    cardBorder: "1px solid rgba(255,255,255,0.08)",

    stripGradient: "from-sky-500 to-blue-700",

    glowColor: "rgba(80,150,255,0.08)",

    participationPriority: {
      title: "Project Overview:",
      description:
        "Worked on the frontend development of Atal Bihari Vajpayee Vishwavidyalaya website, building responsive pages, integrating dynamic content, and improving overall user experience.",
    },

    userBenefits: [
      "responsive website development",
      "dynamic content integration",
      "modern UI implementation",
      "cross-device responsive design",
    ],

    reward: "React.js • Frontend Development",

    bottomNote:
      "Focused on responsive frontend development, UI enhancement, and seamless navigation experience.",
  },
  {
    id: "outreach-app",
    name: "Outreach Crypto Trading App",
    cycle: "Mobile App Development",

    badgeSrc: outImg,

    cardBackground:
      "linear-gradient(160deg, #120d09 0%, #1f1610 50%, #2c1e14 100%)",

    cardBorder: "1px solid rgba(255,255,255,0.08)",

    stripGradient: "from-[#2c1e14] to-[#120d09]",

    glowColor: "rgba(255,200,150,0.08)",

    participationPriority: {
      title: "Project Overview:",
      description:
        "Worked on a mobile crypto trading application with buy and sell interfaces, real-time API integration, and responsive cross-platform performance optimization.",
    },

    userBenefits: [
      "crypto buy & sell trading interface",
      "Redux state management",
      "real-time market API integration",
      "cross-platform mobile app optimization",
    ],

    reward: "React Native • Redux",

    bottomNote:
      "Focused on seamless trading experience and reusable mobile components.",
  },
  {
    id: "dabbawala",
    name: "Dabbawala Tiffin Service App",
    cycle: "Mobile App Development",

    badgeSrc: dabbawalaImg,

    cardBackground:
      "linear-gradient(160deg, #3b1d12 0%, #4a2416 50%, #5c2d1b 100%)",

    cardBorder: "1px solid rgba(255,255,255,0.08)",

    stripGradient: "from-orange-500 to-amber-700",

    glowColor: "rgba(255,165,0,0.08)",

    participationPriority: {
      title: "Project Overview:",
      description:
        "Built a mobile application for tiffin service management where users can browse meals, place orders, manage subscriptions, and track deliveries in real time.",
    },

    userBenefits: [
      "tiffin ordering and subscription management",
      "React Native mobile app development",
      "Node.js backend API integration",
      "real-time order and delivery tracking",
    ],

    reward: "React Native • Node.js",

    bottomNote:
      "Focused on food ordering experience, subscription management, and smooth mobile performance.",
  },

  {
    id: "commission-network",
    name: "Commission Management Platform",
    cycle: "Web Platform",

    badgeSrc: "/assets/images/out.jpg",

    cardBackground:
      "linear-gradient(160deg, #0a0f1a 0%, #111827 45%, #1f2937 100%)",

    cardBorder: "1px solid rgba(120,170,255,0.12)",
    stripGradient: "from-gray-800 to-gray-900",

    glowColor: "rgba(255,255,255,0.08)",

    participationPriority: {
      title: "Project Overview:",
      description:
        "Built an enterprise web platform for managing referral-based distributor networks, investment tracking, multi-level commission earnings, wallet transactions, and reporting dashboards.",
    },

    userBenefits: [
      "multi-level commission management system",
      "hierarchical distributor network tracking",
      "wallet & transaction history management",
      "analytics and reporting dashboard",
    ],

    reward: "Next.js • Node.js • PostgreSQL",

    bottomNote:
      "Focused on scalable distributor management and automated commission distribution.",
  },

  {
    id: "firstminer-company",
    name: "Firstminer Tech Company Website",
    cycle: "Web Platform",

    badgeSrc: firstminerImg,

    cardBackground:
      "linear-gradient(160deg, #07111f 0%, #0d1b2a 50%, #132238 100%)",

    cardBorder: "1px solid rgba(255,255,255,0.08)",

    stripGradient: "from-sky-500 to-blue-700",

    glowColor: "rgba(80,150,255,0.08)",

    participationPriority: {
      title: "Project Overview:",
      description:
        "Developed responsive frontend pages for Firstminer Tech company website including About, Contact, and Employee profile pages with dynamic content integration.",
    },

    userBenefits: [
      "responsive company website development",
      "employee profile management pages",
      "dynamic content integration",
      "improved website navigation and UX",
    ],

    reward: "React.js Frontend Development",

    bottomNote:
      "Focused on responsive design and smooth user navigation across devices.",
  },

  {
    id: "merchant-firstminer",
    name: "Merchant Firstminer Tech Website",
    cycle: "Web Platform",

    badgeSrc: "/assets/images/out.jpg",

    cardBackground:
      "linear-gradient(160deg, #0b1410 0%, #12201a 50%, #1c3328 100%)",

    cardBorder: "1px solid rgba(255,255,255,0.08)",

    stripGradient: "from-emerald-500 to-green-700",

    glowColor: "rgba(0,255,150,0.08)",

    participationPriority: {
      title: "Project Overview:",
      description:
        "Worked on both frontend and backend development of the merchant platform, building responsive UI, backend APIs, and integrating dynamic services for merchant operations.",
    },

    userBenefits: [
      "frontend and backend development",
      "REST API development with Node.js & Express",
      "MySQL database integration",
      "dynamic merchant workflow management",
    ],

    reward: "Full Stack Development",

    bottomNote:
      "Focused on backend API integration and scalable merchant management features.",
  },

  {
    id: "lanamai",
    name: "Lanamai",
    cycle: "Web Platform",

    badgeSrc: lanamaiImg,

    cardBackground:
      "linear-gradient(160deg, #80deea 0%, #80deea 0%, #80deea 0%)",
    cardBorder: "1px solid rgba(255,255,255,0.08)",

    stripGradient: "from-cyan-400 to-teal-400",

    glowColor: "rgba(0,255,255,0.06)",

    participationPriority: {
      title: "Project Overview:",
      description:
        "Contributed to the Lanamai platform by building responsive UI components, integrating APIs, and improving overall performance and user experience.",
    },

    userBenefits: [
      "responsive UI development",
      "API integration",
      "frontend optimization",
      "improved user experience",
    ],

    reward: "Web Application Development",

    bottomNote:
      "Focused on clean UI, performance, and scalable frontend architecture.",
  },
];

// Decorative mesh SVG for the white card
function MeshDecorationLight() {
  return <div className="absolute right-0 top-0 w-40 h-40 opacity-20"></div>;
}

// Decorative network mesh SVG for the dark card
function MeshDecorationDark() {
  return <div className="absolute right-0 bottom-0 w-5 h-5 opacity-40"></div>;
}

export function RankSystemCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const fanWrapperRef = useRef(null);
  const [fanScale, setFanScale] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % ranksData.length);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + ranksData.length) % ranksData.length);
  }, []);

  const activeRank = ranksData[activeIndex];

  // Keep this close to the collapsed strip width so vertical labels stay readable
  const COLLAPSED_STEP_PX = isSmallScreen ? 36 : 44;
  const ACTIVE_CARD_WIDTH_PX = 176; // tailwind w-44
  const RIGHT_STACK_OVERLAP_PX = isSmallScreen ? 52 : 14; // stronger overlap on mobile to eliminate any remaining right gap
  const FAN_BASE_WIDTH_PX =
    (ranksData.length - 1) * COLLAPSED_STEP_PX +
    ACTIVE_CARD_WIDTH_PX -
    RIGHT_STACK_OVERLAP_PX +
    16; // +left offset
  // Extra vertical room prevents the scaled active card from clipping at the top
  const FAN_BASE_HEIGHT_PX = 380;

  // Resize-aware scale to ensure the fan always fits its container (mobile safe)
  useEffect(() => {
    const handleResize = () => {
      const wrapperWidth = fanWrapperRef.current?.clientWidth || 0;
      if (!wrapperWidth) return;
      const nextScale = Math.min(1, wrapperWidth / FAN_BASE_WIDTH_PX);
      setFanScale(nextScale);
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCardTransform = (index) => {
    const isActive = index === activeIndex;
    const cardsToLeft = activeIndex;

    if (isActive) {
      const leftCardsWidth = cardsToLeft * COLLAPSED_STEP_PX;
      return {
        x: leftCardsWidth,
        rotation: 0,
        scale: 1,
        zIndex: 20,
        isActive: true,
      };
    }

    if (index < activeIndex) {
      const distanceFromActive = activeIndex - index;
      const positionFromLeft = index;
      return {
        x: positionFromLeft * COLLAPSED_STEP_PX,
        rotation: -distanceFromActive * 1,
        scale: 1,
        zIndex: 10 - distanceFromActive,
        isActive: false,
      };
    }

    const distanceFromActive = index - activeIndex;
    const leftCardsWidth = activeIndex * COLLAPSED_STEP_PX;
    const activeCardWidth = ACTIVE_CARD_WIDTH_PX;
    return {
      x:
        leftCardsWidth +
        activeCardWidth -
        RIGHT_STACK_OVERLAP_PX +
        distanceFromActive * COLLAPSED_STEP_PX,
      rotation: distanceFromActive * 1,
      scale: 1,
      zIndex: 10 - distanceFromActive,
      isActive: false,
    };
  };

  return (
    <section className="relative min-h-screen bg-[#06080b] md:py-16 px-4 md:px-8 overflow-hidden">
      <div>
        {/* Gradient Heading */}
        <h2 className="font-extrabold text-4xl leading-[147%]  text-center bg-[linear-gradient(#8282823D)] bg-clip-text text-[#41b9c7] md:text-[#fff]">
          PROJECTS
        </h2>
        <p className=" font-bricolage font-medium text-2xl sm:text-2xl md:text-2xl leading-[147%] tracking-normal text-center bg-white bg-clip-text text-transparent">
          Real-World Projects Built With Modern Technologies
        </p>

        {/* Subtitle */}
        {/* <p className="mt-6 text-center text-gray-300 text-lg leading-relaxed font-bricolage max-w-2xl mx-auto ">
          VaultEx includes eight leadership ranks designed to recognize
          structured participation growth:
        </p> */}
      </div>

      {/* Navigation arrows */}
      <div className="relative z-20 flex items-center gap-2 mb-8 ml-4 md:ml-8">
        <button
          onClick={goToPrev}
          className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-400 transition-all duration-300"
          aria-label="Previous rank"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goToNext}
          className="w-10 h-10 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-400 transition-all duration-300"
          aria-label="Next rank"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-6">
        {/* Left: Arc Card Fan */}
        <div className="relative h-[420px] md:h-[520px] rounded-3xl bg-[#17171d]/85 border border-white/10 p-4 md:p-6 overflow-hidden">
          {/* Fan of cards */}
          <div className="relative w-full h-full flex items-center">
            <div
              ref={fanWrapperRef}
              className="relative w-full h-full"
              style={{ overflow: "hidden" }}
            >
              <div
                className="relative"
                style={{
                  width: `${FAN_BASE_WIDTH_PX}px`,
                  height: `${FAN_BASE_HEIGHT_PX}px`,
                  transform: `scale(${fanScale})`,
                  transformOrigin: "bottom left",
                }}
              >
                {ranksData.map((rank, index) => {
                  const transform = getCardTransform(index);

                  return (
                    <motion.div
                      key={rank.id}
                      className="absolute cursor-pointer"
                      style={{
                        left: "16px",
                        top: isSmallScreen ? "24%" : "50%",
                        transformOrigin: "bottom center",
                      }}
                      animate={{
                        x: transform.x,
                        y: "-50%",
                        rotate: transform.rotation,
                        scale: transform.scale,
                        zIndex: transform.zIndex,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                        duration: 0.5,
                      }}
                      onClick={() => setActiveIndex(index)}
                      onHoverStart={() => setActiveIndex(index)}
                    >
                      {transform.isActive ? (
                        // Active card - full size with content
                        <motion.div
                          className={`relative w-44 h-72 md:w-52 md:h-80 rounded-2xl overflow-hidden shadow-2xl ${activeRank.glowColor}`}
                          layoutId="activeCard"
                          style={{
                            background: rank.cardBackground,
                            border: rank.cardBorder,
                          }}
                          animate={{ scale: 1.08 }}
                          whileHover={{ scale: 1.12 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 18,
                          }}
                        >
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="relative z-10 h-full flex flex-col items-center justify-center p-6"
                          >
                            {/* Badge */}
                            {rank.badgeSrc && (
                              <motion.div
                                className="mb-4 mt-2"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                  delay: 0.2,
                                  type: "spring",
                                  stiffness: 300,
                                }}
                              >
                                <img
                                  src={rank.badgeSrc}
                                  alt={rank.name}
                                  loading="lazy"
                                  className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-xl"
                                  draggable={false}
                                />
                              </motion.div>
                            )}
                            {/* Rank name */}
                            <motion.h3
                              className="text-2xl md:text-2xl font-bold text-white mb-1"
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.25 }}
                            >
                              {rank.name}
                            </motion.h3>
                            <motion.p
                              className="text-sm md:text-base text-white/70"
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              ({rank.cycle})
                            </motion.p>
                          </motion.div>
                        </motion.div>
                      ) : (
                        // Inactive card - thin vertical strip
                        <div className="relative w-[52px] h-64 md:w-[52px] md:h-80 rounded-xl overflow-hidden shadow-lg">
                          {rank.stripBackground ? (
                            <div
                              className="absolute inset-0"
                              style={{ background: rank.stripBackground }}
                            />
                          ) : (
                            <div
                              className={`absolute inset-0 bg-gradient-to-b ${rank.stripGradient}`}
                            />
                          )}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span
                              className="text-white/90 text-xs md:text-sm font-semibold tracking-widest whitespace-nowrap"
                              style={{
                                writingMode: "vertical-rl",
                                transform: "rotate(180deg)",
                              }}
                            >
                              {rank.name}
                            </span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`note-${activeIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 text-gray-500 text-sm max-w-xs"
            >
              {activeRank.bottomNote}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Right: Info Cards */}
        <div className="flex min-w-0 flex-col gap-6">
          {/* Participation Priority Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`priority-${activeIndex}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="relative w-full min-h-[170px] overflow-hidden rounded-[20px] bg-[radial-gradient(55.63%_107.54%_at_19.98%_0%,_#505255_0%,_#323232_100%)] p-6 pb-8 shadow-xl"
            >
              <MeshDecorationLight />
              <h4 className="text-lg font-semibold text-white mb-3">
                {activeRank.participationPriority.title}
              </h4>
              <p className="text-gray-200 text-sm leading-relaxed pr-8">
                {activeRank.participationPriority.description}
              </p>
              <p className="text-white text-sm leading-relaxed pr-8 mt-3">
                {activeRank.bottomNote}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* User Benefits Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`benefits-${activeIndex}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative h-[270px] w-full overflow-hidden rounded-[20px] bg-[#111010] p-6 shadow-xl"
            >
              <MeshDecorationDark />

              <h4 className="text-lg font-semibold text-white mb-4">
                User Benefits:
              </h4>

              <ul className="space-y-2 mb-6">
                {activeRank.userBenefits.map((benefit, i) => (
                  <motion.li
                    key={`${activeIndex}-${i}`}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    className="flex items-start gap-2 text-sm text-gray-300"
                  >
                    <span className="text-gray-400 mt-0.5">&#9658;</span>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2"
              >
                <span className="text-gray-400 text-sm">Reward:</span>
                <span className="text-gray-500 font-bold">
                  {activeRank.reward}
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="relative z-20 flex justify-center gap-2 mt-8">
        {ranksData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-gray-400 w-6"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Go to rank ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default RankSystemCarousel;
