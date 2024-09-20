'use client';
import { useEffect, useRef, useState } from 'react';
import CardRecipe from '../cardRecipe/CardRecipe';
import axios from 'axios';
import { useUserContext } from '../UserProvider';
import { useRouter } from 'next/navigation';

const foodArray = [
  {
    name: 'Pizza',
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
    user: 'user1',
    id: 1,
    title: 'Pizza Margherita Clásica',
    description:
      'Una deliciosa pizza hecha con una base de masa fina, salsa de tomate, albahaca fresca y mozzarella.',
    category: 'Comida Italiana',
    subcategory: 'Pizzas',
  },
  {
    name: 'Hamburguesa',
    image: 'https://images.pexels.com/photos/1639566/pexels-photo-1639566.jpeg',
    user: 'user2',
    id: 2,
    title: 'Hamburguesa Clásica con Queso',
    description:
      'Una jugosa hamburguesa con queso cheddar, lechuga, tomate y cebolla, servida con papas fritas.',
    category: 'Comida Americana',
    subcategory: 'Hamburguesas',
  },
  {
    name: 'Sushi',
    image: 'https://images.pexels.com/photos/3577561/pexels-photo-3577561.jpeg',
    user: 'user3',
    id: 3,
    title: 'Sushi Variado',
    description:
      'Plato de sushi con una variedad de makis, nigiris y sashimis acompañados de salsa de soja.',
    category: 'Comida Japonesa',
    subcategory: 'Sushi',
  },
  {
    name: 'Ensalada',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    user: 'user4',
    id: 4,
    title: 'Ensalada Fresca de Verano',
    description:
      'Ensalada ligera de lechuga, tomate, pepino, cebolla morada y aderezo de aceite de oliva.',
    category: 'Comida Saludable',
    subcategory: 'Ensaladas',
  },
  {
    name: 'Tacos',
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',
    user: 'user5',
    id: 5,
    title: 'Tacos de Carne Asada',
    description:
      'Tacos rellenos de carne asada, guacamole, cebolla y cilantro con una salsa picante.',
    category: 'Comida Mexicana',
    subcategory: 'Tacos',
  },
  {
    name: 'Pasta',
    image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg',
    user: 'user6',
    id: 6,
    title: 'Pasta a la Carbonara',
    description:
      'Pasta al dente acompañada de una cremosa salsa carbonara con queso pecorino y panceta.',
    category: 'Comida Italiana',
    subcategory: 'Pastas',
  },
  {
    name: 'Helado',
    image: 'https://images.pexels.com/photos/1005413/pexels-photo-1005413.jpeg',
    user: 'user7',
    id: 7,
    title: 'Helado de Vainilla con Chocolate',
    description:
      'Un refrescante helado de vainilla cubierto con salsa de chocolate y trozos de nueces.',
    category: 'Postres',
    subcategory: 'Helados',
  },
  {
    name: 'Sándwich',
    image: 'https://images.pexels.com/photos/1600714/pexels-photo-1600714.jpeg',
    user: 'user8',
    id: 8,
    title: 'Sándwich de Pollo y Aguacate',
    description:
      'Sándwich de pechuga de pollo a la parrilla con rodajas de aguacate, tomate y mayonesa.',
    category: 'Comida Rápida',
    subcategory: 'Sándwiches',
  },
  {
    name: 'Ramen',
    image: 'https://images.pexels.com/photos/772518/pexels-photo-772518.jpeg',
    user: 'user9',
    id: 9,
    title: 'Ramen Tradicional Japonés',
    description:
      'Un reconfortante plato de ramen con caldo de cerdo, fideos, huevo cocido y cebolleta.',
    category: 'Comida Japonesa',
    subcategory: 'Ramen',
  },
  {
    name: 'Curry',
    image: 'https://images.pexels.com/photos/6287769/pexels-photo-6287769.jpeg',
    user: 'user10',
    id: 10,
    title: 'Curry de Pollo al Estilo Indio',
    description:
      'Pollo cocido en una salsa especiada de curry con leche de coco, servido con arroz basmati.',
    category: 'Comida India',
    subcategory: 'Currys',
  },
  {
    name: 'Paella',
    image: 'https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg',
    user: 'user11',
    id: 11,
    title: 'Paella Valenciana',
    description:
      'Auténtica paella hecha con arroz, pollo, conejo, judías verdes y garrofón.',
    category: 'Comida Española',
    subcategory: 'Paellas',
  },
  {
    name: 'Burrito',
    image: 'https://images.pexels.com/photos/461208/pexels-photo-461208.jpeg',
    user: 'user12',
    id: 12,
    title: 'Burrito de Pollo y Frijoles',
    description:
      'Un burrito relleno de pollo sazonado, frijoles negros, arroz y queso cheddar.',
    category: 'Comida Mexicana',
    subcategory: 'Burritos',
  },
  {
    name: 'Sopa',
    image: 'https://images.pexels.com/photos/3298639/pexels-photo-3298639.jpeg',
    user: 'user13',
    id: 13,
    title: 'Sopa de Verduras Casera',
    description:
      'Una saludable sopa de verduras variadas, perfecta para los días fríos.',
    category: 'Comida Saludable',
    subcategory: 'Sopas',
  },
  {
    name: 'Panqueques',
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
    user: 'user14',
    id: 14,
    title: 'Panqueques con Miel y Frutas',
    description:
      'Esponjosos panqueques servidos con miel de maple y una variedad de frutas frescas.',
    category: 'Desayunos',
    subcategory: 'Panqueques',
  },
  {
    name: 'Hot Dog',
    image: 'https://images.pexels.com/photos/2291772/pexels-photo-2291772.jpeg',
    user: 'user15',
    id: 15,
    title: 'Hot Dog Clásico Americano',
    description:
      'Un hot dog sencillo con salchicha, mostaza, ketchup y cebolla picada.',
    category: 'Comida Rápida',
    subcategory: 'Hot Dogs',
  },

  {
    name: 'Quesadilla',
    image: 'https://images.pexels.com/photos/5949829/pexels-photo-5949829.jpeg',
    user: 'user16',
    id: 16,
    title: 'Quesadilla de Pollo',
    description:
      'Tortilla rellena de queso derretido y pollo desmenuzado, acompañada de guacamole.',
    category: 'Comida Mexicana',
    subcategory: 'Quesadillas',
  },
  {
    name: 'Donuts',
    image: 'https://images.pexels.com/photos/3026802/pexels-photo-3026802.jpeg',
    user: 'user17',
    id: 17,
    title: 'Donuts Glaseados',
    description:
      'Esponjosas donuts con un suave glaseado de azúcar, perfectas para acompañar con café.',
    category: 'Postres',
    subcategory: 'Donuts',
  },
  {
    name: 'Croissant',
    image: 'https://images.pexels.com/photos/4721040/pexels-photo-4721040.jpeg',
    user: 'user18',
    id: 18,
    title: 'Croissant de Mantequilla',
    description:
      'Crujiente y suave croissant con un delicado sabor a mantequilla, ideal para el desayuno.',
    category: 'Desayunos',
    subcategory: 'Croissants',
  },
  {
    name: 'Churrasco',
    image: 'https://images.pexels.com/photos/4061522/pexels-photo-4061522.jpeg',
    user: 'user19',
    id: 19,
    title: 'Churrasco a la Parrilla',
    description:
      'Un jugoso corte de carne asada a la parrilla con hierbas y ajo, servido con papas fritas.',
    category: 'Comida Argentina',
    subcategory: 'Carnes',
  },
  {
    name: 'Tarta de frutas',
    image: 'https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg',
    user: 'user20',
    id: 20,
    title: 'Tarta de Frutas Frescas',
    description:
      'Tarta con base de masa quebrada, rellena de crema pastelera y decorada con frutas frescas.',
    category: 'Postres',
    subcategory: 'Tartas',
  },
  {
    name: 'Pizza Pepperoni',
    image: 'https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg',
    user: 'user21',
    id: 21,
    title: 'Pizza de Pepperoni',
    description:
      'Pizza con base de tomate y mozzarella, cubierta con rodajas de pepperoni crujiente.',
    category: 'Comida Italiana',
    subcategory: 'Pizzas',
  },
  {
    name: 'Falafel',
    image: 'https://images.pexels.com/photos/2233720/pexels-photo-2233720.jpeg',
    user: 'user22',
    id: 22,
    title: 'Falafel con Salsa de Yogur',
    description:
      'Bolitas de garbanzo fritas, acompañadas de una refrescante salsa de yogur.',
    category: 'Comida Vegana',
    subcategory: 'Entrantes',
  },
  {
    name: 'Ceviche',
    image: 'https://images.pexels.com/photos/2938717/pexels-photo-2938717.jpeg',
    user: 'user23',
    id: 23,
    title: 'Ceviche de Pescado',
    description:
      'Pescado fresco marinado en jugo de limón, cebolla y cilantro, servido con camote y choclo.',
    category: 'Comida Peruana',
    subcategory: 'Entrantes',
  },
  {
    name: 'Churros',
    image: 'https://images.pexels.com/photos/461246/pexels-photo-461246.jpeg',
    user: 'user24',
    id: 24,
    title: 'Churros con Chocolate',
    description:
      'Churros crujientes cubiertos de azúcar, servidos con una taza de chocolate caliente.',
    category: 'Postres',
    subcategory: 'Churros',
  },
  {
    name: 'Pollo Frito',
    image: 'https://images.pexels.com/photos/1460871/pexels-photo-1460871.jpeg',
    user: 'user25',
    id: 25,
    title: 'Pollo Frito Crujiente',
    description:
      'Pollo frito con una capa crujiente, servido con papas fritas y salsa barbacoa.',
    category: 'Comida Americana',
    subcategory: 'Carnes',
  },
  {
    name: 'Empanadas',
    image: 'https://images.pexels.com/photos/3818485/pexels-photo-3818485.jpeg',
    user: 'user26',
    id: 26,
    title: 'Empanadas de Carne',
    description:
      'Empanadas rellenas de carne picada, aceitunas y huevo, típicas de la cocina argentina.',
    category: 'Comida Argentina',
    subcategory: 'Entrantes',
  },
  {
    name: 'Tarta de Limón',
    image: 'https://images.pexels.com/photos/890509/pexels-photo-890509.jpeg',
    user: 'user27',
    id: 27,
    title: 'Tarta de Limón con Merengue',
    description:
      'Una tarta cítrica y dulce, con base de galleta, relleno de limón y merengue tostado.',
    category: 'Postres',
    subcategory: 'Tartas',
  },
  {
    name: 'Sándwich Cubano',
    image: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg',
    user: 'user28',
    id: 28,
    title: 'Sándwich Cubano Tradicional',
    description:
      'Sándwich de jamón, cerdo asado, queso suizo, pepinillos y mostaza en pan crujiente.',
    category: 'Comida Caribeña',
    subcategory: 'Sándwiches',
  },
  {
    name: 'Tiramisú',
    image: 'https://images.pexels.com/photos/2227963/pexels-photo-2227963.jpeg',
    user: 'user29',
    id: 29,
    title: 'Tiramisú Clásico',
    description:
      'Postre italiano con capas de bizcocho de café, crema de mascarpone y cacao.',
    category: 'Postres',
    subcategory: 'Postres Italianos',
  },
  {
    name: 'Fajitas',
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg',
    user: 'user30',
    id: 30,
    title: 'Fajitas de Pollo',
    description:
      'Tiras de pollo marinadas con pimientos y cebolla, servidas con tortillas de maíz.',
    category: 'Comida Mexicana',
    subcategory: 'Fajitas',
  },
  {
    name: 'Gelato',
    image: 'https://images.pexels.com/photos/1141671/pexels-photo-1141671.jpeg',
    user: 'user31',
    id: 31,
    title: 'Gelato de Pistacho',
    description: 'Helado italiano suave y cremoso de pistacho, servido en un cono.',
    category: 'Postres',
    subcategory: 'Helados',
  },
  {
    name: 'Spaghetti Bolognese',
    image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
    user: 'user32',
    id: 32,
    title: 'Spaghetti a la Bolognese',
    description:
      'Clásico plato italiano con salsa de carne y tomate, servido sobre pasta al dente.',
    category: 'Comida Italiana',
    subcategory: 'Pastas',
  },
  {
    name: 'Chili con Carne',
    image: 'https://images.pexels.com/photos/3026802/pexels-photo-3026802.jpeg',
    user: 'user33',
    id: 33,
    title: 'Chili con Carne Picante',
    description:
      'Un plato tex-mex con carne molida, frijoles y chiles, servido con tortillas de maíz.',
    category: 'Comida Tex-Mex',
    subcategory: 'Guisos',
  },
  {
    name: 'Gazpacho',
    image: 'https://images.pexels.com/photos/5630596/pexels-photo-5630596.jpeg',
    user: 'user34',
    id: 34,
    title: 'Gazpacho Andaluz',
    description:
      'Sopa fría de tomate, pepino y pimiento, típica del verano español.',
    category: 'Comida Española',
    subcategory: 'Sopas Frías',
  },
  {
    name: 'Tostadas Francesas',
    image: 'https://images.pexels.com/photos/5665661/pexels-photo-5665661.jpeg',
    user: 'user35',
    id: 35,
    title: 'Tostadas Francesas con Miel',
    description:
      'Pan dorado bañado en huevo y leche, servido con miel y fruta fresca.',
    category: 'Desayunos',
    subcategory: 'Tostadas',
  },
  {
    name: 'Bagel con Salmón',
    image: 'https://images.pexels.com/photos/4613267/pexels-photo-4613267.jpeg',
    user: 'user36',
    id: 36,
    title: 'Bagel con Salmón Ahumado',
    description: 'Bagel suave relleno de salmón ahumado, queso crema y alcaparras.',
    category: 'Desayunos',
    subcategory: 'Bagels',
  },
  {
    name: 'Sopa Pho',
    image: 'https://images.pexels.com/photos/593030/pexels-photo-593030.jpeg',
    user: 'user37',
    id: 37,
    title: 'Pho Vietnamita',
    description:
      'Sopa de fideos de arroz con caldo de ternera, hierbas frescas y chile.',
    category: 'Comida Asiática',
    subcategory: 'Sopas',
  },
  {
    name: 'Pad Thai',
    image: 'https://images.pexels.com/photos/6164040/pexels-photo-6164040.jpeg',
    user: 'user38',
    id: 38,
    title: 'Pad Thai Clásico',
    description:
      'Salteado de fideos de arroz con camarones, huevo, brotes de soja y cacahuetes.',
    category: 'Comida Tailandesa',
    subcategory: 'Platos Principales',
  },
  {
    name: 'Pastel de Zanahoria',
    image: 'https://images.pexels.com/photos/2303259/pexels-photo-2303259.jpeg',
    user: 'user39',
    id: 39,
    title: 'Pastel de Zanahoria',
    description: 'Tarta húmeda de zanahoria con frosting de queso crema y nueces.',
    category: 'Postres',
    subcategory: 'Pasteles',
  },
  {
    name: 'Pollo al Curry',
    image: 'https://images.pexels.com/photos/848980/pexels-photo-848980.jpeg',
    user: 'user40',
    id: 40,
    title: 'Pollo al Curry con Arroz',
    description:
      'Un plato cremoso de pollo con salsa de curry, acompañado de arroz basmati.',
    category: 'Comida India',
    subcategory: 'Platos Principales',
  },
  {
    name: 'Tacos al Pastor',
    image: 'https://images.pexels.com/photos/2746027/pexels-photo-2746027.jpeg',
    user: 'user41',
    id: 41,
    title: 'Tacos al Pastor',
    description:
      'Tacos rellenos de carne de cerdo marinada, piña y cebolla, servidos con salsa verde.',
    category: 'Comida Mexicana',
    subcategory: 'Tacos',
  },
  {
    name: 'Brownies',
    image: 'https://images.pexels.com/photos/213194/pexels-photo-213194.jpeg',
    user: 'user42',
    id: 42,
    title: 'Brownies de Chocolate',
    description:
      'Deliciosos brownies de chocolate oscuro, servidos con helado de vainilla.',
    category: 'Postres',
    subcategory: 'Brownies',
  },
  {
    name: 'Pollo Teriyaki',
    image: 'https://images.pexels.com/photos/574111/pexels-photo-574111.jpeg',
    user: 'user43',
    id: 43,
    title: 'Pollo Teriyaki con Verduras',
    description:
      'Tiras de pollo en salsa teriyaki, acompañadas de verduras salteadas y arroz blanco.',
    category: 'Comida Japonesa',
    subcategory: 'Platos Principales',
  },
  {
    name: 'Arroz con Leche',
    image: 'https://images.pexels.com/photos/704769/pexels-photo-704769.jpeg',
    user: 'user44',
    id: 44,
    title: 'Arroz con Leche Tradicional',
    description: 'Postre clásico de arroz con leche, canela y un toque de vainilla.',
    category: 'Postres',
    subcategory: 'Arroz',
  },
  {
    name: 'Tempura de Verduras',
    image: 'https://images.pexels.com/photos/57043/pexels-photo-57043.jpeg',
    user: 'user45',
    id: 45,
    title: 'Tempura de Verduras',
    description:
      'Verduras frescas fritas en una ligera masa tempura, servidas con salsa de soja.',
    category: 'Comida Japonesa',
    subcategory: 'Entrantes',
  },
  {
    name: 'Bacalao a la Vizcaína',
    image: 'https://images.pexels.com/photos/875491/pexels-photo-875491.jpeg',
    user: 'user46',
    id: 46,
    title: 'Bacalao a la Vizcaína',
    description:
      'Bacalao cocido en una rica salsa de tomate y pimientos, típico de la cocina vasca.',
    category: 'Comida Española',
    subcategory: 'Platos Principales',
  },
  {
    name: 'Bruschetta',
    image: 'https://images.pexels.com/photos/3642532/pexels-photo-3642532.jpeg',
    user: 'user47',
    id: 47,
    title: 'Bruschetta Italiana',
    description:
      'Tostadas con tomate fresco, ajo y albahaca, aliñadas con aceite de oliva.',
    category: 'Entrantes',
    subcategory: 'Bruschetta',
  },
  {
    name: 'Canelones',
    image: 'https://images.pexels.com/photos/2555011/pexels-photo-2555011.jpeg',
    user: 'user48',
    id: 48,
    title: 'Canelones de Carne',
    description:
      'Pasta rellena de carne picada y salsa bechamel, gratinados con queso.',
    category: 'Comida Italiana',
    subcategory: 'Pastas',
  },
  {
    name: 'Pizza Hawaiana',
    image: 'https://images.pexels.com/photos/896412/pexels-photo-896412.jpeg',
    user: 'user49',
    id: 49,
    title: 'Pizza Hawaiana',
    description: 'Pizza con base de tomate, queso, jamón y piña.',
    category: 'Comida Italiana',
    subcategory: 'Pizzas',
  },
  {
    name: 'Milanesa',
    image: 'https://images.pexels.com/photos/3032376/pexels-photo-3032376.jpeg',
    user: 'user50',
    id: 50,
    title: 'Milanesa de Res',
    description:
      'Filete de res empanizado, frito hasta dorarse, acompañado de puré de papas.',
    category: 'Comida Argentina',
    subcategory: 'Carnes',
  },
];
const BACK_API_URL = process.env.NEXT_PUBLIC_API_URL;
const ScrollInfiniteSWEET = ({ dataExternal, type }) => {
  const [asType, setAsType] = useState(type);
  const [dataRecipes, setDataRecipes] = useState([]);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [offSet, setOffSet] = useState(0);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const elementRef = useRef(null);
  const { setToken } = useUserContext();
  const { setUser } = useUserContext();
  // const { dataRecipes, setDataRecipes } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      if (localStorage.user) {
        const currentUser = await JSON.parse(localStorage.user);
        setUser(currentUser);
      } else {
        router.push('/ingreso');
      }
    };

    checkToken();
  }, [setUser]);

  useEffect(() => {
    console.log(type, 'type');
    setAsType(type);
    console.log(asType, 'asType');
    // this.forceUpdate();
    const fetchRecipe = async () => {
      const stoken = await localStorage.getItem('token');
      setToken(stoken);
      // console.log(stoken);
      // if (type === 'SWEET') {
      // }
      const path =
        type === 'SWEET' ? 'list/SWEET' : type === 'SAVORY' ? 'list/SAVORY' : 'list';
      console.log(path, 'path');
      const response = await axios.get(`${BACK_API_URL}/recipes/list/SWEET`, {
        headers: {
          Authorization: `Bearer ${stoken}`,
        },
      });

      // if (dataRecipes?.length == 0) {
      //   setDataRecipes(response.data);
      // }
      setDataRecipes(response.data);

      console.log(response.data, 'que onda');
      console.log(dataRecipes, 'dataRecipes');
      // console.log(data, 'data');
      // console.log(dataExternal, 'dataExternal');

      // setDataRecipes(response.data);
      // console.log(response.data);
      // console.log(showGlobal);
      // console.log(typeData, 'typeData');
      // try {
      //   const response = await fetch(`${BACK_API_URL}/recipes/list`, {
      //     method: 'get',
      //     headers: {
      //       Authorization: `Bearer ${stoken}`,
      //       'Content-Type': 'application/json',
      //     },
      //     mode: 'cors',
      //     cache: 'default',
      //   })
      //     .then((response) => response.json())
      //     .then((data) => console.log(JSON.stringify(data)))
      //     .catch((error) => console.log(error));
      //   const data = await response.json();
      //   console.log(data);
      // } catch (error) {
      //   console.log(error);
      // }
      // console.log(dataRecipes);
    };
    fetchRecipe();
  }, [setToken, type, setDataRecipes, setAsType, asType]);

  useEffect(() => {
    console.log(dataRecipes);

    const observer = new IntersectionObserver(OnIntersection);
    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, [data, dataRecipes, setDataRecipes]);

  const OnIntersection = (entries) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      getData();
    }
  };
  const getPaginatedData = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };
  const getData = () => {
    // axios.get(``);
    // console.log('asdas');
    const view = getPaginatedData(dataRecipes);
    // console.log(view, 'adasda');
    // console.log(view);
    if (view.length === 0) {
      setHasMore(false);
    } else {
      setData([...data, ...view]);
      // console.log(data);
      // setDataRecipes([...dataRecipes, ...view]);
      // console.log(dataRecipes);
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };
  return (
    <>
      {dataRecipes?.length > 0 ? (
        <>
          <div>
            {data.map((food) => (
              <CardRecipe
                key={food.id}
                title={food.title}
                image={food.imageUrls[0]}
                user={food.userId}
                description={food.description}
                category={food.category}
                subcategory={food.subcategory}
                nameUser={food.nombreDelUsuario}
                dateCreation={food.dateCreation}
                time={food.time}
                commensal={food.commensal}
                difficulty={food.difficulty}
                ingredients={food.ingredients}
                stepByStep={food.instructions}
                userId={food.userId}
              />
            ))}
          </div>

          {hasMore && (
            <div className="" ref={elementRef}>
              {' '}
              Cargando Recetas
            </div>
          )}
          {/*  */}
        </>
      ) : (
        <p> No hay recetas</p>
      )}
    </>
  );
};
export default ScrollInfiniteSWEET;
