// data/navItems.js

const navItems = [
  { name: "Home", href: "/",
    
   },
  {
    name: "Rooms",href: "/rout/rooms/roomsPage",
        dropdown: [
    { name: "Main Home", href: "rout/home/main-home" },
    { name: "Deluxe", href: "rout/rooms/deluxe" },
    { name: "Gallary", href: "rout/gallary" },

  ]

   
  },
  {
    name: "Facilities",
       dropdown: [
    { name: "Fitness", href: "rout/facilities/fitness" },
    { name: "Pool", href: "rout/facilities/pool" },
    { name: "Others", href: "rout/facilities" },

  ]
    

  },
    {
    name: "About",href: "/rout/about"
    

  },
    {
    name: "Contact",href: "/rout/contact"
    

  },
    {
    name: "Attrection",href: "/rout/attrect"
    

  },
 {
    name: "FAQ",href: "/rout/faq"
    

  },
   {
    name: "Local",href: "/rout/local"
    

  },
{
    name: "Narby",href: "/rout/narby"
    

  },
];

export default navItems;
