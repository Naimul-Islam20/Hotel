// data/navItems.js

const navItems = [
  { name: "Home", href: "/",
    
   },
  {
    name: "Rooms",href: "/rout/rooms/roomsPage",
        dropdown: [
    
    
      {
    name: "SINGLE",href: "/rout/rooms/single"
    

  },
      {
    name: "DELUXE",href: "/rout/rooms/deluxe"
    

  },
    {
    name: "FAMILY",href: "/rout/rooms/family"
    

  },
    {
    name: "PREMIUM",href: "/rout/rooms/premium"
    

  },
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
    name: "About us",href: "/rout/about"
    

  },
    {
    name: "Contact",href: "/rout/contact"
    

  },
   {
    name: "GALLARY",href: "/rout/gallary"
    

  },
 
 {
    name: "FAQ",href: "/rout/faq"
    

  },
   {
    name: "Local",href: "/rout/local"
    

  },

];

export default navItems;
