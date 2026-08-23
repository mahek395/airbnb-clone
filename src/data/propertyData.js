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
  guests: 2,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  rating: 4.95,
  reviewCount: 20,
  pricePerNight: 10480,
  currency: "₹",
  nightsLabel: "5 nights in Candolim",
  cleaningFee: 1850,
  serviceFeeRate: 0.14,
  host: {
    name: "Mirashya (Archana)",
    firstName: "Mirashya",
    avatar: uiAssets.host,
    yearsHosting: 7,
    isSuperhost: true,
    responseRate: "100%",
    responseTime: "within an hour",
    coHosts: ["Aprasa"],
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
      id: "checkin",
      title: "Self check-in",
      body: "Check yourself in with the lockbox.",
    },
    {
      id: "pool",
      title: "Dive right in",
      body: "This is one of the few places in the area with a pool.",
    },
    {
      id: "wifi",
      title: "Fast wifi",
      body: "At 147 Mbps, you can take video calls and stream films on both devices at once.",
    },
  ],
  description: {
    preview:
      "A romantic 1BHK in Amor de Goa, Candolim — designed for couples. Wake up to a king bed and filtered light, cook in a fully equipped kitchen, then sink into your private jacuzzi on the lounge deck. The shared courtyard pool and gym sit a lift ride away, and Candolim Beach is about five minutes by scooter.",
    rest: "The apartment is on a quiet upper floor with a private entrance. Yellow dado walls, cane furniture and warm lighting give the living room a Goan-home feel, while the jacuzzi deck is lined in stone and teak for evening soaks. Kitchen basics, air conditioning, fast wifi and dedicated workspace are all in place. Building staff can help with late arrivals. Perfect for a two-night reset or a longer, slow stay in North Goa.",
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
    { id: "garden", label: "Garden view" },
    { id: "kitchen", label: "Kitchen" },
    { id: "wifi", label: "Wifi" },
    { id: "workspace", label: "Dedicated workspace" },
    { id: "pool", label: "Shared pool" },
    { id: "tub", label: "Private hot tub" },
    { id: "ac", label: "Air conditioning" },
    { id: "tv", label: "TV" },
    { id: "washer", label: "Washing machine" },
    { id: "parking", label: "Free parking on premises" },
    { id: "hair", label: "Hair dryer" },
    { id: "fridge", label: "Refrigerator" },
  ],
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
  amenityTotal: 55,
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
      title: "Candolim",
      subtitle: "Private jacuzzi suite",
      image: propertyImages.patio,
      rating: 4.92,
      price: 9890,
      nights: 5,
    },
    {
      id: "n2",
      title: "Candolim",
      subtitle: "Pool-view 1BHK",
      image: propertyImages.pool,
      rating: 4.88,
      price: 8720,
      nights: 5,
    },
    {
      id: "n3",
      title: "Calangute",
      subtitle: "Design loft with tub",
      image: propertyImages.loft,
      rating: 4.97,
      price: 11240,
      nights: 5,
    },
    {
      id: "n4",
      title: "Candolim",
      subtitle: "Garden apartment",
      image: propertyImages.kitchen,
      rating: 4.9,
      price: 7640,
      nights: 5,
    },
    {
      id: "n5",
      title: "Sinquerim",
      subtitle: "Beach-road studio",
      image: propertyImages.exteriorAerial,
      rating: 4.86,
      price: 6990,
      nights: 5,
    },
    {
      id: "n6",
      title: "Candolim",
      subtitle: "Couple’s hideaway",
      image: propertyImages.jacuzzi,
      rating: 4.94,
      price: 10150,
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
    amenities: ["Freezer","Fridge","Blender","Cooker","Cooking basics","Kettle", "Microwave","Toaster","Wine glasses","Coffee","Crockery and cutlery"],
    images: [
      { src: propertyImages.kitchen, alt: "Open living and dining room with mustard-yellow walls and a tan sofa", title: "Living room 1" },
      { src: propertyImages.kitchen2, alt: "Living room with rattan furniture and warm lighting", title: "Living room 2" },
    ],
  },
  {
    id: "bedroom",
    title: "Bedroom",
    amenities: ["Double bed","Air conditioning","Bed linen","Ceiling fan","Clothes storage","Cot","Hangers","Iron","Room-darkening blinds","Cleaning available during stay","Cleaning products" ,"Long-term stays allowed","Private entrance","Wifi"],
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
    amenities: ["Hairdryer","Hot water","Shampoo","Shower gel"],
    images: [
      { src: propertyImages.bathroom, alt: "Marble bathroom with teardrop mirror and walk-in shower", title: "Bathroom" },
    ],
  },
  {
    id: "gym",
    title: "Gym",
    amenities: ["Air conditioning", "Gym","Exercise equipment","Ceiling fan"],
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
