/**
 * API response
 * {
      "id": 14,
      "name": "Full Sleeves Top Cherry - Pink",
      "price": "Rs. 679",
      "brand": "Kookie Kids",
      "category": {
        "usertype": {
          "usertype": "Kids"
        },
        "category": "Tops & Shirts"
      }
    },
 */

type userType = string;

interface category {
  userType: {
    userType: userType;
  };
  category: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  brand: string;
  category: category;
}
