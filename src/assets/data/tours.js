import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: " Maldives ",
    city: " Maldives ",
    distance: 2800,
    adress:'Maldives',
    price: 60000,
    maxGroupSize: 10,
    desc: "A wonderful place to spend a relaxing vacation with friends or loved ones during the heated  summer months. Best to visit between November and April",
    reviews: [
      {
        name: "Shaik Waseem",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali",
    city: "Indonesia",
    distance: 2800,
    adress:'Bali, Indonesia',
    price: 35000,
    maxGroupSize: 8,
    desc: "An exotic tropical destination that flaunts scenic beaches and mountains, Bali is deep-rooted in culture and tradition, which adds to the charm of this scenic island. ",
    reviews: [
      {
        name: "Kuli Kutub Shah",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Havelock Island",
    city: "Andaman",
    distance: 1500,
    adress:'Andaman',
    price: 30000,
    maxGroupSize: 8,
    desc: "Havelock Island or Swaraj Dweep is the shining jewel in the Andaman’s crown, for it is the primary reason people make this long journey to the archipelago. Havelock has been a tourist magnet for decades now. Its claim to fame being its silky stretch of white sands, glimmering turquoise shallows backed by dense jungles and some of Asia’s best diving sites, the predominant reason for several backpackers and diving enthusiasts to set foot in the Bay of Bengal.",
    reviews: [
      {
        name: "Aurangzeb",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Goa",
    city: "Goa",
    distance: 600,
    adress:'Goa, India',
    price: 15000,
    maxGroupSize: 8,
    desc: "A wonderful place for hangout party vacations with friends or loved ones during the heated  summer months. Best to visit between November and April",
    reviews: [
      {
        name: "Alauddin Khilji",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Ooty",
    city: "Ooty",
    distance: 800,
    adress:'Tamil Nadu, India',
    price: 17000,
    maxGroupSize: 8,
    desc: "If you are planning to go on a trip to a hill station, then Ooty is the best place to visit in India. Ooty has the average of 20°C-25°C a typicall monsoon climate with lavishing greenary everywhere.",
    reviews: [
      {
        name: "Tippu Sultan",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: true,
  },
  {
    id: "06",
    title: "Hyderabad",
    city: "Hyderabad",
    distance: 700,
    adress:'Telengana, India',
    price: 15000,
    maxGroupSize: 8,
    desc: "If you love visiting historical monuments and looking for a place to visit during your vaction Hyderabad will be the best place in  this case. Hyderabad is one of the oldest cities in India due the a large number of historical locations built by Nizam Nawabs. If you Love to eat Biriyani you should visit Hyderabad as it is famous for it.",
    reviews: [
      {
        name: "K. Chandra Shekar Rao",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: true,
  },
  {
    id: "07",
    title: "Manali",
    city: "Manali",
    distance: 1000,
    adress:"Near Manali Lake, Himachal Pradesh, India",
    price: 20000,
    maxGroupSize: 8,
    desc: "A trip to Manali is a refreshing experience for one’s tired mind and body. On your trip to Manali, your senses will be mesmerised by the sight of lush green valleys and a whiff of pines lingering in the cold breeze. To experience this heavenly bliss, you can plan a Manali trip and choose from a wide range of Manali tour packages available. These tour packages for Manali are designed to suit your convenience. If you have more time on your itinerary, then you can visit Shimla, Kullu and Manali with a Shimla Manali package.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: true,
  },
  {
    id: "08",
    title: "Leh",
    city: "Leh",
    distance: 2500,
    adress:'Ladak, Himachal Pradesh, India',
    price: 25000,
    maxGroupSize: 8,
    desc: "If you love trekking and hicking  then this is the perfect place for you. Leh is famous for its etherial sceneries.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg08,
    featured: true,
  },
];

export default tours;
