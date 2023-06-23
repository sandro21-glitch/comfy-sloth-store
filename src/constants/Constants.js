import { GiCompass,GiDiamondHard,GiScrollQuill } from "react-icons/gi";
export const navList = [
  {
    id: 1,
    page: "Home",
    path: "/",
  },
  {
    id: 2,
    page: "About",
    path: "about",
  },
  {
    id: 3,
    page: "Products",
    path: "products",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;

export const services = [
  {
    id: 1,
    name: "Mission",
    icon: <GiCompass />,
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    name: "Vision",
    icon: <GiDiamondHard />,
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    name: "History",
    icon: <GiScrollQuill />,
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];
