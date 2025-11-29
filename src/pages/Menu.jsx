import React from "react";
import { motion } from "framer-motion";

/**
 * Updated Menu component
 * - Uses framer-motion for entrance + hover animations
 * - Glassmorphism cards, gradient background, improved contrast & focus styles
 * - Lazy-loading images, better alt text & accessible CTA
 *
 * Dependency:
 *   npm install framer-motion
 *
 * Tailwind: this uses Tailwind utility classes. If you want to tune colors,
 * add custom colors in tailwind.config.js (secondary-green, primary-teal, accent-yellow, accent-aqua).
 */

const menuCategories = [
  {
    name: "Dosa Varieties",
    items: [
      {
        name: "Plain Dosa",
        description:
          "Classic thin crispy fermented crepe made from rice and urad dal batter",
        image: "/plaindosa.png",
      },
      {
        name: "Masala Dosa",
        description:
          "Crispy dosa filled with spicy potato masala served with coconut chutney and sambar",
        image: "/masaladosa.png",
      },
      {
        name: "Onion Dosa",
        description: "Delicious dosa with finely chopped onions mixed in the batter",
        image: "/oniondosa.png",
      },
      {
        name: "Rava Dosa",
        description:
          "Crispy dosa made with semolina and rice flour, topped with onions and curry leaves",
        image: "/ravadosa.png",
      },
      {
        name: "Ghee Dosa",
        description:
          "Golden brown dosa cooked with generous amounts of ghee for rich flavor",
        image: "/gheedosa.png",
      },
      {
        name: "Egg Dosa",
        description:
          "Small soft dosas served in a set of 2-3 with coconut chutney and sambar",
        image: "/eggdosa.png",
      },
    ],
  },
  {
    name: "Idli Varieties",
    items: [
      {
        name: "Idli (2 pcs)",
        description:
          "Soft steamed rice cakes served with flavorful sambar and coconut chutney",
        image: "/idli.png",
      },
      {
        name: "Mini Idlis",
        description:
          "Small bite-sized idlis served with sambar and chutney, perfect for kids",
        image: "/miniidli.png",
      },
      {
        name: "Karam Idli",
        description: "Spicy version of idli served with coconut chutney",
        image: "/karamidli.png",
      },
      {
        name: "Rava Idli",
        description:
          "Steamed idlis made with semolina and yogurt, light and fluffy",
        image: "/ravaidli.png",
      },
    ],
  },
  {
    name: "Vada",
    items: [
      {
        name: "Medu Vada",
        description:
          "Deep fried lentil fritters with crispy exterior and soft interior, served with sambar and chutney",
        image: "/meduvada.png",
      },
      {
        name: "Masala Vada",
        description:
          "Spiced lentil fritters with green chilies and ginger, crispy and flavorful",
        image: "/vada.png",
      },
    ],
  },
  {
    name: "Upma/Uggani",
    items: [
      {
        name: "Uggani + Mirchi Bajji",
        description:
          "Spicy chickpea flour fritters with green chilies, served with mirchi bajji",
        image: "/mirchibajji.png",
      },
      {
        name: "Upma",
        description:
          "Nutritious semolina porridge cooked with vegetables and spices",
        image: "/upma.png",
      },
      {
        name: "Tomato Bath",
        description:
          "Flavorful rice dish cooked with tomatoes, onions, and aromatic spices",
        image: "/tomatobath.png",
      },
      {
        name: "Lemon Rice",
        description:
          "Tangy and spicy rice tempered with lemon juice and curry leaves",
        image: "/lemonrice.png",
      },
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const Menu = () => {
  return (
    <section className="min-h-screen py-16 px-4 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold text-secondary-green mb-4 tracking-tight"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Authentic South Indian dishes prepared with love and traditional
            recipes
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="space-y-16"
        >
          {menuCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              className="relative"
            >
              <div className="flex items-center justify-center mb-6">
                <motion.h2
                  initial={{ scale: 0.98, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="text-3xl font-bold text-primary-teal mb-2 text-center"
                >
                  {category.name}
                </motion.h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.article
                    key={itemIndex}
                    variants={cardVariants}
                    whileHover={{ y: -6, boxShadow: "0 24px 44px rgba(2,6,23,0.12)" }}
                    whileTap={{ scale: 0.99 }}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden border border-white/30 focus-within:ring-2 focus-within:ring-accent-aqua focus-within:ring-offset-2 transition-transform"
                    tabIndex={-1}
                    aria-labelledby={`${categoryIndex}-${itemIndex}-title`}
                  >
                    <motion.div
                      className="relative h-52 w-full overflow-hidden"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 180, damping: 18 }}
                    >
                      <img
                        src={item.image}
                        alt={`${item.name} - ${item.description}`}
                        className="w-full h-full object-cover transform transition-transform"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                      />
                      {/* subtle overlay to improve text visibility if needed */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </motion.div>

                    <div className="p-5">
                      <h3
                        id={`${categoryIndex}-${itemIndex}-title`}
                        className="text-lg font-semibold text-secondary-green mb-1"
                      >
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">{item.description}</p>

                      <div className="flex items-center justify-between">
                        <button
                          className="inline-flex items-center gap-2 bg-accent-yellow text-sm font-semibold text-secondary-green py-2 px-3 rounded-full shadow hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-teal focus-visible:ring-offset-2 transition"
                          aria-label={`Add ${item.name} to order via WhatsApp`}
                          onClick={() => {
                            const text = encodeURIComponent(`Hi, I'd like to order: ${item.name}`);
                            window.open(`https://wa.me/1234567890?text=${text}`, "_blank", "noopener");
                          }}
                        >
                          Order
                        </button>

                        <a
                          href="#"
                          className="text-sm text-primary-teal hover:text-primary-teal/80 underline-offset-2"
                          onClick={(e) => {
                            e.preventDefault();
                            // simple highlight action for demo: scroll item into view
                            const el = document.getElementById(`${categoryIndex}-${itemIndex}-title`);
                            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                          }}
                        >
                          More
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.a
            href="https://wa.me/1234567890?text=Hi%20I%20want%20to%20order%20tiffin"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block bg-gradient-to-br from-accent-yellow to-accent-aqua text-secondary-green font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-teal transition-transform"
            aria-label="Order on WhatsApp"
          >
            Order on WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Menu;