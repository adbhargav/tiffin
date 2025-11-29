import React from "react";
import { motion } from "framer-motion";

/**
 * About.jsx
 * - Adds Framer Motion entrance animations and subtle micro-interactions
 * - Lazy-loads images, improves accessibility (aria, alt text)
 * - Tailwind CSS utilities assumed
 *
 * Ensure framer-motion is installed:
 *   npm install framer-motion
 */

const section = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay },
  }),
};

const card = {
  hidden: { opacity: 0, y: 12, scale: 0.985 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut", delay },
  }),
};

const About = () => {
  return (
    <div className="min-h-screen py-16 px-4 bg-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{ hidden: section.hidden, show: section.show(0) }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-green mb-4">
            About TastyTiffins
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bringing authentic South Indian flavors to your table since 2015
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          <motion.div variants={{ hidden: card.hidden, show: card.show(0.03) }}>
            <h2 className="text-3xl font-bold text-primary-teal mb-6">Our Story</h2>
            <motion.p className="text-gray-700 mb-4 text-lg" variants={card}>
              Founded in 2015 by passionate home cooks, TastyTiffins began with a simple mission:
              to deliver authentic, home-cooked South Indian meals to busy families and individuals.
              What started as a small kitchen operation has now grown into a beloved community staple.
            </motion.p>
            <motion.p className="text-gray-700 mb-4 text-lg" variants={card}>
              Our journey began when our founders noticed that many people in our community were
              struggling to find time to cook traditional, nutritious meals. We saw an opportunity
              to preserve culinary traditions while serving the needs of modern families.
            </motion.p>
            <motion.p className="text-gray-700 text-lg" variants={card}>
              Today, we continue to honor our roots by preparing each meal with the same care
              and attention that goes into cooking for family. Every tiffin is made from scratch
              using time-tested recipes and the freshest ingredients.
            </motion.p>
          </motion.div>

          <motion.div
            className="relative rounded-xl overflow-hidden"
            variants={{ hidden: card.hidden, show: card.show(0.09) }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 160 }}
            aria-hidden={false}
          >
            <img
              src="/about1.jpg"
              alt="TastyTiffins delivery van and team"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg"
            variants={{ hidden: card.hidden, show: card.show(0.06) }}
          >
            <h2 className="text-3xl font-bold text-primary-teal mb-6">Our Vision</h2>
            <p className="text-gray-700 text-lg">
              To become the most trusted provider of authentic South Indian tiffin services,
              spreading the joy of traditional home-cooked meals to communities near and far.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg"
            variants={{ hidden: card.hidden, show: card.show(0.09) }}
          >
            <h2 className="text-3xl font-bold text-primary-teal mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              To deliver fresh, nutritious, and delicious South Indian meals that remind our
              customers of home, while preserving and sharing our rich culinary heritage with
              the wider community.
            </p>
          </motion.div>
        </motion.div>

        <motion.section
          className="bg-secondary-green rounded-xl p-8 md:p-12 text-white mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={{ hidden: section.hidden, show: section.show(0.04) }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Hygiene & Quality Assurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              variants={{ hidden: card.hidden, show: card.show(0.06) }}
            >
              <div className="bg-accent-yellow w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-secondary-green">🧼</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Clean Kitchens</h3>
              <p className="text-white/90">
                Our kitchens follow strict hygiene protocols with regular sanitization and
                food safety training for all staff members.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={{ hidden: card.hidden, show: card.show(0.09) }}
            >
              <div className="bg-accent-yellow w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-secondary-green">🥬</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Ingredients</h3>
              <p className="text-white/90">
                We source fresh, locally-grown vegetables and premium quality grains and spices
                from trusted suppliers.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={{ hidden: card.hidden, show: card.show(0.12) }}
            >
              <div className="bg-accent-yellow w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-secondary-green">🌡️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Temperature Control</h3>
              <p className="text-white/90">
                All food items are prepared, stored, and transported under optimal temperature
                conditions to maintain freshness.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={{ hidden: section.hidden, show: section.show(0.06) }}
        >
          <h2 className="text-3xl font-bold text-secondary-green mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Fresh Preparation", desc: "Meals prepared fresh daily with no preservatives" },
              { title: "Traditional Recipes", desc: "Authentic recipes passed down through generations" },
              { title: "Nutritious Meals", desc: "Balanced meals with wholesome ingredients" },
              { title: "On-Time Delivery", desc: "Reliable delivery service at your convenience" },
            ].map((cardInfo, idx) => (
              <motion.div
                key={cardInfo.title}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-teal"
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(2,6,23,0.08)" }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                variants={{ hidden: card.hidden, show: card.show(0.06 + idx * 0.03) }}
              >
                <h3 className="text-xl font-bold text-secondary-green mb-2">{cardInfo.title}</h3>
                <p className="text-gray-600">{cardInfo.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;