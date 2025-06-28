import { useState, useEffect } from "react";


const useRestaurants = (resId) => {

    const [restaurant, setRestaurant] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchRestaurantDetails = async () => {
            const data = await fetch(
              "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
            );
            const json = await data.json();
            const restaurants =
            json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
            const found = restaurants.find((res) => res.info.id === resId);
    
            if (found) {
            setRestaurant(found.info);
            // Dummy menu items for demo
            setMenuItems([
                {
                name: "Chocolate Snicker Cake",
                price: "₹599",
                rating: "4.8 (238)",
                description:
                    "Our signature chocolate cake base layered with rich chocolate cream, ganache & molten Snickers.",
                image: "https://images.unsplash.com/photo-1606788075760-a6168b6d91b2",
                },
                {
                name: "Red Velvet Cake",
                price: "₹549",
                rating: "4.6 (189)",
                description:
                    "Soft sponge cake with velvety texture & cream cheese frosting. A timeless delight!",
                image: "https://images.unsplash.com/photo-1601979031925-3cc8f4f0cadd",
                },
            ]);
            }
        }
    
     fetchRestaurantDetails();
    }, [resId]);
    
    return { restaurant, menuItems, loading };
}

export default useRestaurants;