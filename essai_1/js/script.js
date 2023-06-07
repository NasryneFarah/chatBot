const app = Vue.createApp({
    data() {
        return {
            name: "Pizza Royale",
            price: 12,
            image: "assets/image/pizza-royale.jpg",
            sale: true,
            notAvailable:true,
            ingredients : [
                "olives",
                "Poulet roti",
                "Bacon",
                "Poivrons",
                "Champignons",
                "Mozzarrella",
                "Oeuf",
            ],
            sauces : [ {
                id: 1001,
                type: "sauce tomate",
                color: "db4006",
            },
            {
                id: 1002,
                type: "crème fraîche",
                color: "e9cb8f",
            }
            ]
        };
    },
});
