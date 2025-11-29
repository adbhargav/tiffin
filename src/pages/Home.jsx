import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Banner images data (added two more slides)
  const bannerImages = [
    {
      id: 1,
      url: '/banner1.png',
      alt: 'Tasty Tiffins Banner'
    },
    {
      id: 2,
      url: '/banner2.jpg',
      alt: 'Healthy South Indian Meals'
    },
    {
      id: 3,
      url: '/banner3.png',
      alt: 'Authentic Home Style Cooking'
    },
    
  ];

  // Auto slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === bannerImages.length - 1 ? 0 : prevSlide + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? bannerImages.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === bannerImages.length - 1 ? 0 : prevSlide + 1));
  };

  // Expanded tiffin items (added more dishes)
  const tiffinItems = [
    {
      name: "Masala Dosa",
      description: "Crispy dosa filled with spicy potato masala served with coconut chutney and sambar",
      image: "masaladosa.png"
    },
    {
      name: "Idli Sambar",
      description: "Soft steamed rice cakes served with flavorful sambar and coconut chutney",
      image: "idli.png"
    },
    {
      name: "Pongal",
      description: "Delicious savory rice and lentil dish cooked with ghee and garnished with cashews",
      image: "pongal.png"
    },
    {
      name: "Upma",
      description: "Nutritious semolina porridge cooked with vegetables and spices, perfect breakfast",
      image: "upma.png"
    },
    
    
    
    
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Priya R.",
      location: "Bengaluru",
      text: "TastyTiffins brings the exact flavors of home — consistent, fresh, and always on time!",
      rating: 5
    },
    {
      id: 2,
      name: "Manoj K.",
      location: "Chennai",
      text: "Loved the Pongal and sambar combo. Great portion sizes and friendly delivery.",
      rating: 5
    },
    {
      id: 3,
      name: "Anita S.",
      location: "Hyderabad",
      text: "The variety keeps me coming back. Their chutneys are excellent — very authentic.",
      rating: 4
    }
  ];

  // Featured chefs data
  const chefs = [
    { name: "Chef Radha", specialty: "Traditional South Indian", image: "/chef-radha.jpg" },
    { name: "Chef Suresh", specialty: "Home-style Curries", image: "/chef-suresh.jpg" }
  ];

  // Delivery areas
  const deliveryAreas = [
    "Koramangala",
    "Jayanagar",
    "Indiranagar",
    "HSR Layout",
    "Whitefield",
    "Electronic City"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <div className="relative h-[650px] overflow-hidden">
        {/* Banner Images */}
        {bannerImages.map((image, index) =>
          index === currentSlide ? (
            <div
              key={image.id}
              className="absolute inset-0"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {/* Overlay for text content */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className={`text-center text-white px-4 ${index === 0 ? 'pt-20' : ''}`}>
                  {index !== 0 && (
                    <>
                      <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        {index === 1 && 'Authentic South Indian Cuisine'}
                        {index === 2 && 'Home-Style Cooking Delivered'}
                        {index === 3 && 'Freshly Prepared Daily'}
                        {index === 4 && 'Satisfying Tiffins Delivered'}
                      </h1>
                      <p className="text-xl mb-8 max-w-3xl mx-auto">
                        {index === 1 && 'Traditional recipes prepared with love and the finest ingredients'}
                        {index === 2 && 'Experience the taste of home with our delicious tiffin service'}
                        {index === 3 && 'Prepared fresh every morning using seasonal produce'}
                        {index === 4 && 'Healthy, tasty and delivered warm at your doorstep'}
                      </p>
                    </>
                  )}

                  <div className={`flex flex-col sm:flex-row justify-center gap-4 ${index === 0 ? 'mt-40' : ''}`}>
                    <a
                      href="https://wa.me/1234567890?text=Hi%20I%20want%20to%20order%20tiffin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent-yellow hover:bg-accent-aqua text-secondary-green font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
                      aria-label="Order on WhatsApp"
                    >
                      Order on WhatsApp
                    </a>

                    <Link
                      to="/menu"
                      className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary-green font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
                    >
                      View Menu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : null
        )}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 transition-all duration-300 z-10"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 transition-all duration-300 z-10"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8 h-4 rounded-full' : 'bg-white bg-opacity-50 w-4 h-4'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Daily Specials */}
      <div className="py-16 px-4 bg-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary-green mb-4">
            Today's Specials
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our chefs prepare fresh tiffins daily with the finest ingredients and traditional recipes
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tiffinItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-green mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-green">What Our Customers Say</h2>
          <p className="text-gray-600 mt-2">Real feedback from families who love our tiffins</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-teal w-12 h-12 rounded-full flex items-center justify-center text-white text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-secondary-green">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.location}</div>
                </div>
              </div>
              <p className="text-gray-700 mb-3">"{t.text}"</p>
              <div className="text-sm text-yellow-400">
                {'★'.repeat(t.rating)}{' '}
                <span className="text-gray-400">{'☆'.repeat(5 - t.rating)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter / Subscribe CTA */}
      <div className="py-16 px-4 bg-secondary-green">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="mb-6 text-white/90">
            Subscribe for special offers, menu updates and new tiffin drops.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = new FormData(e.currentTarget);
              const email = form.get('email');
              // NOTE: no backend — replace with real endpoint or show a success state
              alert(`Thanks! We'll send updates to: ${email}`);
              e.currentTarget.reset();
            }}
            className="flex flex-col sm:flex-row gap-3 items-center justify-center"
          >
            <input
              name="email"
              type="email"
              placeholder="Your email address"
              required
              className="px-4 py-3 rounded-full w-full sm:w-auto min-w-[260px] text-gray-800"
            />
            <button
              type="submit"
              className="bg-accent-yellow text-secondary-green font-bold px-6 py-3 rounded-full shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 px-4 bg-secondary-green">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Why Choose TastyTiffins?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🌱', title: 'Fresh Ingredients', desc: 'We use only the freshest locally sourced ingredients for our tiffins' },
              { icon: '❤️', title: 'Homely Taste', desc: 'Authentic recipes that bring the comfort of home to your plate' },
              { icon: '⏱️', title: 'On Time Delivery', desc: 'Hot and fresh tiffins delivered to your doorstep on time, every day' },
              { icon: '💰', title: 'Affordable', desc: 'Delicious home-style meals at budget-friendly prices' }
            ].map((card, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-white rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="bg-primary-teal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">{card.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-secondary-green mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
