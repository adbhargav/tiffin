import { Link } from 'react-router-dom';

const Home = () => {
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
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-teal to-secondary-green py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fresh & Healthy Tiffins
          </h1>
          <p className="text-xl text-accent-yellow mb-8 max-w-3xl mx-auto">
            Authentic South Indian meals delivered fresh to your doorstep every day
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/1234567890?text=Hi%20I%20want%20to%20order%20tiffin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-yellow hover:bg-accent-aqua text-secondary-green font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
            >
              Order on WhatsApp
            </a>
            <Link 
              to="/menu" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary-green font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              View Menu
            </Link>
          </div>
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
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover"
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

      {/* Why Choose Us */}
      <div className="py-16 px-4 bg-secondary-green">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Why Choose TastyTiffins?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="bg-primary-teal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-secondary-green mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">We use only the freshest locally sourced ingredients for our tiffins</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="bg-primary-teal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-secondary-green mb-2">Homely Taste</h3>
              <p className="text-gray-600">Authentic recipes that bring the comfort of home to your plate</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="bg-primary-teal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⏱️</span>
              </div>
              <h3 className="text-xl font-bold text-secondary-green mb-2">On Time Delivery</h3>
              <p className="text-gray-600">Hot and fresh tiffins delivered to your doorstep on time, every day</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="bg-primary-teal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💰</span>
              </div>
              <h3 className="text-xl font-bold text-secondary-green mb-2">Affordable</h3>
              <p className="text-gray-600">Delicious home-style meals at budget-friendly prices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;