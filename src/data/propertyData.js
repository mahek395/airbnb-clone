const A = "/assests";

export const propertyImages = {
  hero: `${A}/property-03.jpeg`,
  livingRoom: `${A}/property-03.jpeg`,
  livingRoomJacuzzi: `${A}/property-01.jpeg`,
  bedroom: `${A}/property-02.jpeg`,
  bathroom: `${A}/property-08.jpeg`,
  kitchen: `${A}/property-07.jpeg`,
  jacuzzi: `${A}/property-05.jpeg`,
  patio: `${A}/property-04.jpeg`,
  patioAlt: `${A}/property-12.jpeg`,
  exterior: `${A}/property-06.jpeg`,
  exteriorAerial: `${A}/property-10.jpeg`,
  pool: `${A}/property-11.jpeg`,
  gym: `${A}/property-09.jpeg`,
  livingAlt: `${A}/property-14.jpeg`,
  livingWide: `${A}/property-13.jpeg`,
  loft: `${A}/property-15.jpeg`,
  pool2: `${A}/property-17.jpeg`,
  livingRoomWithJacuzzi: `${A}/property-16.jpeg`,
  kitchen2: `${A}/property-18.jpeg`,
  bedroom2: `${A}/property-19.jpeg`,
  bedroom3: `${A}/property20.jpeg`,
};

export const chips = {
  comfort: `${A}/comfort.png`,
  accuracy: `${A}/accuracy.png`,
  hotTub: `${A}/hot-tub.png`,
  condition: `${A}/condition.png`,
  hospitality: `${A}/hospitality.png`,
  cleanliness: `${A}/cleanliness.png`,
  amenities: `${A}/amenities.png`,
  decor: `${A}/decor.png`,
  indoorSpaces: `${A}/indoor-spaces.png`,
  location: `${A}/location.png`,
};

export const uiAssets = {
  laurelLeft: `${A}/laurel-left.png`,
  laurelRight: `${A}/laurel-right.png`,
  host: `${A}/host.jpeg`,
  searchHouse: `${A}/searchbar-house.png`,
  locationPin: `${A}/location.png`,
};

export const propertyData = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  propertyType: "Entire serviced apartment",
  locationShort: "Candolim, India",
  locationFull: "Candolim, Goa, India",
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  rating: 4.95,
  reviewCount: 19,
  pricePerNight: 10480,
  stayTotal: 28499,
  currency: "₹",
  nightsLabel: "5 nights in Candolim",
  cleaningFee: 1850,
  serviceFeeRate: 0.14,
  host: {
    name: "Mirashya Homes",
    firstName: "Mirashya Homes",
    avatar: uiAssets.host,
    yearsHosting: 2,
    isSuperhost: true,
    responseRate: "100%",
    responseTime: "within an hour",
    reviewCount: 1463,
    rating: 4.68,
    facts: [
      { icon: "born", text: "Born in the 80s" },
      { icon: "school", text: "Where I went to school: NICMAR GOA" },
    ],
    coHosts: [
      { name: "Sharath", avatar: "/assests/avatars/sharath.svg" },
      { name: "Aman Dev Pahwa", avatar: "/assests/avatars/aman.svg" },
      { name: "Maria Karen Priyanka", avatar: "/assests/avatars/maria.svg" },
      { name: "Simran", avatar: "/assests/avatars/simran.svg" },
      { name: "Pallavi", avatar: "/assests/avatars/pallavi.svg" },
      { name: "Sanyukta", avatar: "/assests/avatars/sanyukta.svg" },
      { name: "Shruti", avatar: null },
      { name: "Amisha", avatar: null },
    ],
    about:
      "We are a small hospitality team creating calm, design-led stays in North Goa. UG10 is our romantic 1BHK with a private jacuzzi, curated for couples who want space, privacy and a short walk to Candolim Beach.",
  },
  images: propertyImages,
  heroGallery: [
    { src: propertyImages.livingRoom, alt: "Open living and dining room with mustard-yellow walls and a tan sofa", id: "living-1" },
    { src: propertyImages.bedroom, alt: "Bedroom with king bed, rattan pendant light and arched mirror", id: "bedroom" },
    { src: propertyImages.bathroom, alt: "Marble bathroom with teardrop mirror and walk-in shower", id: "bathroom" },
    { src: propertyImages.livingRoomJacuzzi, alt: "Private jacuzzi lounge with wicker seating and stone-tiled wall", id: "jacuzzi" },
    { src: propertyImages.pool, alt: "Courtyard swimming pool at Amor de Goa", id: "pool" },
  ],
  highlights: [
    {
      id: "outdoor",
      title: "Outdoor entertainment",
      body: "The pool and alfresco dining are great for summer trips.",
    },
    {
      id: "cool",
      title: "Designed for staying cool",
      body: "Beat the heat with the A/C and ceiling fan.",
    },
    {
      id: "checkin",
      title: "Self check-in",
      body: "You can check in with the building staff.",
    },
  ],
  description: {
    preview:
      "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. ",
    previewFade: "Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🌴, it's",
    rest: " ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. 💗🌴",
  },
  sleeping: [
    {
      title: "Bedroom",
      detail: "1 king bed",
      image: propertyImages.bedroom,
    },
    {
      title: "Living room",
      detail: "1 sofa",
      image: propertyImages.livingRoom,
    },
  ],
  amenities: [
    { id: "kitchen", label: "Kitchen" },
    { id: "wifi", label: "Wifi" },
    { id: "workspace", label: "Dedicated workspace" },
    { id: "parking", label: "Free parking on premises" },
    { id: "pool", label: "Pool" },
    { id: "tub", label: "Hot tub" },
    { id: "pets", label: "Pets allowed" },
    { id: "cameras", label: "Exterior security cameras on property" },
    { id: "co-alarm", label: "Carbon monoxide alarm", unavailable: true },
    { id: "smoke-alarm", label: "Smoke alarm", unavailable: true },
  ],
  amenityTotal: 50,
  extraAmenities: [
    { id: "microwave", label: "Microwave" },
    { id: "kettle", label: "Kettle" },
    { id: "cooker", label: "Induction cooker" },
    { id: "essentials", label: "Essentials" },
    { id: "hangers", label: "Hangers" },
    { id: "iron", label: "Iron" },
    { id: "gym", label: "Gym" },
    { id: "patio", label: "Patio or balcony" },
    { id: "fan", label: "Ceiling fan" },
    { id: "self", label: "Self check-in" },
  ],
  ratingCategories: [
    { id: "cleanliness", label: "Cleanliness", score: 4.9 },
    { id: "accuracy", label: "Accuracy", score: 5.0 },
    { id: "checkin", label: "Check-in", score: 5.0 },
    { id: "communication", label: "Communication", score: 4.9 },
    { id: "location", label: "Location", score: 4.8 },
    { id: "value", label: "Value", score: 4.9 },
  ],
  ratedHighly: [
    { label: "Hot tub", icon: chips.hotTub },
    { label: "Accuracy", icon: chips.accuracy },
    { label: "Amenities", icon: chips.amenities },
    { label: "Cleanliness", icon: chips.cleanliness },
    { label: "Comfort", icon: chips.comfort },
    { label: "Hospitality", icon: chips.hospitality },
    { label: "Indoor spaces", icon: chips.indoorSpaces },
    { label: "Decor", icon: chips.decor },
    { label: "Location", icon: chips.location },
  ],
  reviews: [
    {
      id: 1,
      name: "Ananya",
      location: "Mumbai, India",
      date: "October 2024",
      years: "3 years on Airbnb",
      avatar: "/assests/avatars/ananya.svg",
      text: "The private jacuzzi is the reason we booked and it delivered — warm, quiet, and perfectly private after a day on Candolim Beach. The apartment is spotless and styled with so much care.",
    },
    {
      id: 2,
      name: "Rahul",
      location: "Bengaluru, India",
      date: "September 2024",
      years: "5 years on Airbnb",
      avatar: "/assests/avatars/rahul.svg",
      text: "Archana was incredibly responsive and check-in with the lockbox was effortless. Fast wifi, a real kitchen, and the courtyard pool made this feel like a proper home rather than a hotel room.",
    },
    {
      id: 3,
      name: "Sophie",
      location: "London, United Kingdom",
      date: "August 2024",
      years: "2 years on Airbnb",
      avatar: "/assests/avatars/sophie.svg",
      text: "Beautifully designed 1BHK. We loved the mustard walls, the rattan details and the evening lighting on the jacuzzi deck. A short ride to the beach and very quiet at night.",
    },
    {
      id: 4,
      name: "Vikram",
      location: "Pune, India",
      date: "July 2024",
      years: "8 years on Airbnb",
      avatar: "/assests/avatars/vikram.svg",
      text: "Great for a couple. King bed is comfortable, bathroom is modern, and the building gym is a nice bonus. Superhost communication throughout — would stay again.",
    },
    {
      id: 5,
      name: "Meera",
      location: "Delhi, India",
      date: "June 2024",
      years: "4 years on Airbnb",
      avatar: "/assests/avatars/meera.svg",
      text: "Exactly as photographed. The listing accuracy is excellent. We cooked breakfast every morning and spent evenings in the jacuzzi. Felt safe, clean and thoughtfully stocked.",
    },
    {
      id: 6,
      name: "James",
      location: "Singapore",
      date: "May 2024",
      years: "6 years on Airbnb",
      avatar: "/assests/avatars/james.svg",
      text: "One of the nicest stays we have had in North Goa. Private, romantic and well located without being on a noisy strip. The pool courtyard is lovely in the late afternoon.",
    },
  ],
  locationBlurb:
    "UG10 sits in Amor de Goa, a quiet residential pocket of Candolim. The beach, bakeries and Fort Aguada Road restaurants are a short drive; the apartment itself is tucked away from the main tourist traffic.",
  locationMore:
    "Expect coconut-lined lanes, easy scooter access and a neighbourhood that is lively by day and calm after dinner. Grocery stores and pharmacies are nearby. Dabolim Airport is about an hour away depending on traffic.",
  houseRules: [
    "Check-in after 2:00 pm",
    "Checkout before 11:00 am",
    "2 guests maximum",
    "No parties or events",
  ],
  safety: [
    "Carbon monoxide alarm not reported",
    "Smoke alarm",
    "Exterior security cameras on property",
  ],
  cancellation: [
    "Free cancellation before 48 hours of check-in.",
    "Cancel before check-in and get back 50% of the nightly rate, plus cleaning fees.",
    "Review the full policy after you add your dates.",
  ],
  nearbyListings: [
    {
      id: "n1",
      title: "Beautiful Studio with a view to die for",
      image: propertyImages.patio,
      rating: 4.91,
      price: 23600,
      nights: 5,
    },
    {
      id: "n2",
      title: "NAQAB - 1bhk with private pool",
      image: propertyImages.pool,
      rating: 4.95,
      price: 42218,
      nights: 5,
    },
    {
      id: "n3",
      title: "Greentique Luxury Flat with plunge pool, Calangute",
      image: propertyImages.loft,
      rating: 4.94,
      price: 44506,
      nights: 5,
    },
    {
      id: "n4",
      title: "The Tropical Studio | 5 mins to Beach",
      image: propertyImages.kitchen,
      rating: 4.96,
      price: 22824,
      nights: 5,
    },
    {
      id: "n5",
      title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
      image: propertyImages.exteriorAerial,
      rating: 4.95,
      price: 39942,
      nights: 5,
    },
  ],
};

export function formatInr(n) {
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

export function nightsBetween(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0;
  const ms = checkOut.getTime() - checkIn.getTime();
  return Math.max(0, Math.round(ms / 86400000));
}

export const photoTourSections = [
  {
    id: "living-room",
    title: "Living room 1",
    amenities: ["Sofa", "Air conditioning", "Ceiling fan", "TV"],
    images: [
      { src: propertyImages.livingRoom, alt: "Open living and dining room with mustard-yellow walls and a tan sofa", title: "Living room 1" },
      { src: propertyImages.livingWide, alt: "Wide view of living space with dining area", title: "Living room 3" },
      { src: propertyImages.livingAlt, alt: "Living room with rattan furniture and warm lighting", title: "Living room 2" }
    ],
  },
  {
    id: "living-room-2",
    title: "Living room 2",
    amenities: ["Ceiling fan", "Hot Tub"],
    images: [
      { src: propertyImages.patio, alt: "Open living and dining room with mustard-yellow walls and a tan sofa", title: "Living room 1" },
      { src: propertyImages.jacuzzi, alt: "Wide view of living space with dining area", title: "Living room 3" },
      { src: propertyImages.loft, alt: "Full Living room", title: "Living room 2" },
      { src: propertyImages.livingRoomJacuzzi, alt: "Living room with rattan furniture and warm lighting", title: "Living room 2" },


      { src: propertyImages.livingRoomWithJacuzzi, alt: "Wide view of living space with dining area", title: "Living room 3" },
    ],
  },
  {
    id: "kitchen",
    title: "Full Kitchen",
    amenities: ["Freezer", "Fridge", "Blender", "Cooker", "Cooking basics", "Kettle", "Microwave", "Toaster", "Wine glasses", "Coffee", "Crockery and cutlery"],
    images: [
      { src: propertyImages.kitchen, alt: "Open living and dining room with mustard-yellow walls and a tan sofa", title: "Living room 1" },
      { src: propertyImages.kitchen2, alt: "Living room with rattan furniture and warm lighting", title: "Living room 2" },
    ],
  },
  {
    id: "bedroom",
    title: "Bedroom",
    amenities: ["Double bed", "Air conditioning", "Bed linen", "Ceiling fan", "Clothes storage", "Cot", "Hangers", "Iron", "Room-darkening blinds", "Cleaning available during stay", "Cleaning products", "Long-term stays allowed", "Private entrance", "Wifi"],
    images: [
      { src: propertyImages.bedroom, alt: "Bedroom with king bed, rattan pendant light and arched mirror", title: "Bedroom 1" },
      { src: propertyImages.bedroom2, alt: "Bedroom detail with warm lighting", title: "Bedroom 2" },
      { src: propertyImages.bedroom3, alt: "Bedroom detail with warm lighting", title: "Bedroom 2" },
      { src: propertyImages.bedroom, alt: "Bedroom with king bed, rattan pendant light and arched mirror", title: "Bedroom 1" },
      { src: propertyImages.bedroom2, alt: "Bedroom detail with warm lighting", title: "Bedroom 2" },
      { src: propertyImages.bedroom3, alt: "Bedroom detail with warm lighting", title: "Bedroom 2" },
    ],
  },
  {
    id: "bathroom",
    title: "Full Bathroom",
    amenities: ["Hairdryer", "Hot water", "Shampoo", "Shower gel"],
    images: [
      { src: propertyImages.bathroom, alt: "Marble bathroom with teardrop mirror and walk-in shower", title: "Bathroom" },
    ],
  },
  {
    id: "gym",
    title: "Gym",
    amenities: ["Air conditioning", "Gym", "Exercise equipment", "Ceiling fan"],
    images: [
      { src: propertyImages.gym, alt: "Building gym with fitness equipment", title: "Gym" },
    ],
  },
  {
    id: "pool",
    title: "Pool",
    amenities: ["Courtyard swimming pool", "Shared pool", "Sun loungers", "Pool access"],
    images: [
      { src: propertyImages.pool, alt: "Courtyard swimming pool at Amor de Goa", title: "Pool area" },
      { src: propertyImages.pool2, alt: "Courtyard swimming pool at Amor de Goa", title: "Pool area" },
      { src: propertyImages.pool, alt: "Courtyard swimming pool at Amor de Goa", title: "Pool area" },
    ],
  },
  {
    id: "exterior",
    title: "Exterior",
    images: [
      { src: propertyImages.exterior, alt: "Property exterior view", title: "Exterior view" },
      { src: propertyImages.exteriorAerial, alt: "Aerial view of property and surroundings", title: "Aerial view" },
    ],
  },
  {
    id: "additional",
    title: "Additional Photos",
    images: [
      { src: propertyImages.exterior, alt: "Property exterior view", title: "Exterior view" },
      { src: propertyImages.exteriorAerial, alt: "Aerial view of property and surroundings", title: "Aerial view" },
    ],
  },

];

/** Isolated hook for a later Photo Tour prompt. Do not implement the tour here. */
export function requestPhotoTour(_photoId) {
  return undefined;
}
