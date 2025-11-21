const Menu = () => {
  const menuCategories = [
    {
      name: "Dosa Varieties",
      items: [
        {
          name: "Plain Dosa",
          description: "Classic thin crispy fermented crepe made from rice and urad dal batter",
          image: "/banner1.jpg"
        },
        {
          name: "Masala Dosa",
          description: "Crispy dosa filled with spicy potato masala served with coconut chutney and sambar",
          image: "/masaladosa.png"
        },
        {
          name: "Onion Dosa",
          description: "Delicious dosa with finely chopped onions mixed in the batter",
          image: "/oniondosa.png"
        },
        {
          name: "Rava Dosa",
          description: "Crispy dosa made with semolina and rice flour, topped with onions and curry leaves",
          image: "/ravadosa.png"
        },
        {
          name: "Ghee Dosa",
          description: "Golden brown dosa cooked with generous amounts of ghee for rich flavor",
          image: "/gheedosa.png"
        },
        {
          name: "Egg Dosa", 
          description: "Small soft dosas served in a set of 2-3 with coconut chutney and sambar",
          image: "/eggdosa.png"}
      ]
    },
    {
      name: "Idli Varieties",
      items: [
        {
          name: "Idli (2 pcs)",
          description: "Soft steamed rice cakes served with flavorful sambar and coconut chutney",
          image: "/idli.png"
        },
        {
          name: "Mini Idlis",
          description: "Small bite-sized idlis served with sambar and chutney, perfect for kids",
          image: "/miniidli.png"
        },
        {
          name: "Karam Idli",
          description: "Spicy version of idli served with coconut chutney",
          image: "/karamidli.png"    
        },
        {
          name: "Rava Idli",
          description: "Steamed idlis made with semolina and yogurt, light and fluffy",
          image: "/ravaidli.png"
        }
      ]
    },
    {
      name: "Vada",
      items: [
        {
          name: "Medu Vada",
          description: "Deep fried lentil fritters with crispy exterior and soft interior, served with sambar and chutney",
          image: "/meduvada.png" 
        },
        {
          name: "Masala Vada",
          description: "Spiced lentil fritters with green chilies and ginger, crispy and flavorful",
          image: "/vada.png"
        }
      ]
    },
    {
      name: "Upma/Uggani",
      items: [
        {
          name: "Uggani + Mirchi Bajji",
          description: "Spicy chickpea flour fritters with green chilies, served with mirchi bajji",
          image: "/mirchibajji.png"
        },
        {
          name: "Upma",
          description: "Nutritious semolina porridge cooked with vegetables and spices",
          image: "/upma.png"
        },
        {
          name: "Tomato Bath",
          description: "Flavorful rice dish cooked with tomatoes, onions, and aromatic spices",
          image: "/tomatobath.png"
        },
        {
          name: "Lemon Rice",
          description: "Tangy and spicy rice tempered with lemon juice and curry leaves",
          image: "/lemonrice.png"
        }
        
      ]
    }
    
  ];

  return (
    <div className="min-h-screen py-16 px-4 bg-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-green mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Authentic South Indian dishes prepared with love and traditional recipes
          </p>
        </div>

        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-3xl font-bold text-primary-teal mb-8 text-center border-b-2 border-accent-yellow pb-2">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                  >
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
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/1234567890?text=Hi%20I%20want%20to%20order%20tiffin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent-yellow hover:bg-accent-aqua text-secondary-green font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;