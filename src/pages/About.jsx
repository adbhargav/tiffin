const About = () => {
  return (
    <div className="min-h-screen py-16 px-4 bg-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-green mb-4">
            About TastyTiffins
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bringing authentic South Indian flavors to your table since 2015
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-primary-teal mb-6">
              Our Story
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              Founded in 2015 by passionate home cooks, TastyTiffins began with a simple mission: 
              to deliver authentic, home-cooked South Indian meals to busy families and individuals. 
              What started as a small kitchen operation has now grown into a beloved community staple.
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              Our journey began when our founders noticed that many people in our community were 
              struggling to find time to cook traditional, nutritious meals. We saw an opportunity 
              to preserve culinary traditions while serving the needs of modern families.
            </p>
            <p className="text-gray-700 text-lg">
              Today, we continue to honor our roots by preparing each meal with the same care 
              and attention that goes into cooking for family. Every tiffin is made from scratch 
              using time-tested recipes and the freshest ingredients.
            </p>
          </div>
          <div>
            <img 
              src="/van.jpg" 
              alt="TastyTiffins Delivery Van" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-primary-teal mb-6">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg">
              To become the most trusted provider of authentic South Indian tiffin services, 
              spreading the joy of traditional home-cooked meals to communities near and far.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-primary-teal mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg">
              To deliver fresh, nutritious, and delicious South Indian meals that remind our 
              customers of home, while preserving and sharing our rich culinary heritage with 
              the wider community.
            </p>
          </div>
        </div>

        <div className="bg-secondary-green rounded-xl p-8 md:p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Hygiene & Quality Assurance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent-yellow w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-secondary-green">🧼</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Clean Kitchens</h3>
              <p>
                Our kitchens follow strict hygiene protocols with regular sanitization and 
                food safety training for all staff members.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent-yellow w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-secondary-green">🥬</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Ingredients</h3>
              <p>
                We source fresh, locally-grown vegetables and premium quality grains and spices 
                from trusted suppliers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent-yellow w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-secondary-green">🌡️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Temperature Control</h3>
              <p>
                All food items are prepared, stored, and transported under optimal temperature 
                conditions to maintain freshness.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary-green mb-6">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-teal">
              <h3 className="text-xl font-bold text-secondary-green mb-2">Fresh Preparation</h3>
              <p className="text-gray-600">Meals prepared fresh daily with no preservatives</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-teal">
              <h3 className="text-xl font-bold text-secondary-green mb-2">Traditional Recipes</h3>
              <p className="text-gray-600">Authentic recipes passed down through generations</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-teal">
              <h3 className="text-xl font-bold text-secondary-green mb-2">Nutritious Meals</h3>
              <p className="text-gray-600">Balanced meals with wholesome ingredients</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-teal">
              <h3 className="text-xl font-bold text-secondary-green mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">Reliable delivery service at your convenience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;