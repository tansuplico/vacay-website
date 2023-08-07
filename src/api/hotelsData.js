const hotels = [
  {
    id: 1,
    name: "Caribbean Resort & Villas",
    location: "South Carolina, USA",
    city: "South Carolina",
    country: "USA",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/uploadimages/51/92/51926916.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/28/1628089226.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/uploadimages/51/92/51928816.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/uploadimages/51/92/51926908.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/28/1628089222.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/uploadimages/51/92/51928808.jpeg",
    },
    guests: 2,
    beds: 2,
    bathrooms: 2,
    price: 79,
    reviews: 544,
    ratings: 7.8,
    gym: false,
    wifi: true,
    pool: true,
    kitchen: false,
    aircon: true,
    balcony: true,
    description:
      "Caribbean Resort & Villas Resort Myrtle Beach is a large property featuring family condos with balconies. The resort is located just 2.9 km from Broadway at the Beach. The hotel boasts multiple pools, a 200-foot lazy river, and an on-site water park. The resort features 454 family condos that are equipped with cable TVs, free Wi-Fi, refrigerators, microwaves, and private bathrooms. Guests can choose to stay in rooms with patios or balconies where they can catch panoramic views of the ocean. Caribbean Resort & Villas Resort Myrtle Beach features 2 indoor pools, 3 outdoor pools and arcade/game room, and a free water park. Guests can work out at the fitness center while with kids can make use of the hotel’s childcare facility. The resort features three great on-site dining options: The Island Grill that serves classic American cuisine, Sea Captain’s House that serves a wide variety of seafood, and the Pool Bar where guests can enjoy sumptuous sandwiches and refreshing tropical cocktails. Ripley's Aquarium is 1.9 km from the resort while Chapin Memorial Park is 2 km away.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.0501204126545!2d-78.86379672441174!3d33.70765197328868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x890068eccfc7f395%3A0x31624e80b86eac78!2s3000%20N%20Ocean%20Blvd%2C%20Myrtle%20Beach%2C%20SC%2029577!5e0!3m2!1sen!2sus!4v1690879086274!5m2!1sen!2sus",
  },
  {
    id: 2,
    name: "The Iroquois New York",
    location: "New York State, USA",
    city: "New York State",
    country: "USA",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/51/1751074190.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/00/1600108114.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/00/1600108138.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/51/1751074194.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/00/1600108146.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/51/1751074196.jpeg",
    },
    guests: 3,
    beds: 2,
    bathrooms: 1,
    price: 195,
    reviews: 742,
    ratings: 8.9,
    gym: true,
    wifi: true,
    pool: true,
    kitchen: true,
    aircon: true,
    balcony: true,
    description:
      "Boasting a central, Midtown Manhattan location, The Iroquois New York stands out as a luxury boutique hotel with its sophisticated decor and modern amenities. Balancing classic and contemporary aspects, the rooms feature a spacious work desk, large flat-screen TV, and music docking station. Designer linens, marble bathrooms and optional turndown service add to the opulent ambience. In addition to a 24-hour fitness centre and Finnish sauna, guests can partake in personal training, yoga and pilates sessions. The cosy library offers a space to unwind, with complimentary beverages and comfortable seating. Meeting rooms and a well-equipped business centre are a bonus for corporate travellers. The hotel's Triomphe Restaurant is an icon of fine French dining in the city, and is open from breakfast until dinner. Lantern's Keep, a classy cocktail bar, provides an intimate atmosphere for socialising. Times Square can be reached within a five-minute stroll from the property. Rockefeller Center and Grand Central Terminal are both less than ten minutes away on foot.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d854.2462123706907!2d-73.98285936344334!3d40.7557220485939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258ffefa91571%3A0x1766ff6a5a7d3fc7!2sThe%20Iroquois%20New%20York!5e0!3m2!1sen!2sus!4v1690880321197!5m2!1sen!2sus",
  },
  {
    id: 3,
    name: "Treasure Island - TI Hotel Casino, a Radisson Hotel",
    location: "Nevada, USA",
    city: "Nevada",
    country: "USA",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/98/1598030906.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/98/1598030906.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/93/99/939903368.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/98/1598030944.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/93/99/939903384.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/93/99/939903366.jpeg",
    },
    guests: 2,
    beds: 2,
    bathrooms: 1,
    price: 149,
    reviews: 272,
    ratings: 8.5,
    gym: true,
    wifi: true,
    pool: true,
    kitchen: false,
    aircon: true,
    balcony: false,
    description:
      "Boasting a prime location on the famous Las Vegas Strip, Treasure Island - TI Hotel Casino, a Radisson Hotel is directly opposite the Fashion Show Mall, and easily distinguished by it's unique curved outer facade and lavish interiors. Rooms and suites are warmly decorated with elegant finishes. Large floor-to-ceiling windows, mini fridges, plush pillow-top beds, and sizeable marble bathrooms are standard, while suites add luxurious hot tubs. In addition to a lively casino, the hotel also provides ample opportunity for guests to enjoy luxurious treatments at the spa. An outdoor pool, hot tub, well-equipped fitness centre, and live shows every day makes staying at Treasure Island - TI Hotel Casino, a Radisson Hotel quite an experience. Dining on site is a culinary adventure. A variety of bars and lounges offer live entertainment. Speciality seafood, steak, and buffet restaurants serve scrumptious local and international fare, along with pizza outlets and cosy coffee shops. The Las Vegas Convention Centre is a ten-minute drive from the hotel Outdoor Gondola rides are available on Venetian-inspired canals a five-minute walk away.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1306.9432911360225!2d-115.17340788131916!3d36.12462545413793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c43aaa9a0bb3%3A0x98b9469bc134713!2sTreasure%20Island%20-%20TI%20Las%20Vegas%20Hotel%20%26%20Casino%2C%20a%20Radisson%20Hotel!5e0!3m2!1sen!2sus!4v1690881163498!5m2!1sen!2sus",
  },
  {
    id: 4,
    name: "Dunes Manor Hotel & Suites",
    location: "Maryland, USA",
    city: "Maryland",
    country: "USA",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/99/1699443892.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/99/1699443892.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/60/1760032968.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/60/1760032964.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/99/1699443878.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/92/1592183854.jpeg",
    },
    guests: 4,
    beds: 2,
    bathrooms: 1,
    price: 89,
    reviews: 552,
    ratings: 7.7,
    gym: false,
    wifi: true,
    pool: true,
    kitchen: false,
    aircon: true,
    balcony: false,
    description:
      "A seaside hotel, Dunes Manor Hotel & Suites stands in Midtown Ocean City. This hotel prides itself on its colorful rooms with classic furnishings. An indoor pool, fitness center, and ATM banking services are available on site. Boasting daily housekeeping, all of the 170 smoke-free guestrooms also come equipped with premium TV channels, air conditioning, in-room safe, refrigerator, microwave, coffee/tea making facilities, free Wi-Fi, and ironing facilities. Private bathrooms are included. Built in 1987, Dunes Manor Hotel & Suites is also complete with a spa tub, elevator, terrace, disabled parking, tours/ticket assistance, and five meeting rooms. Accessibility equipment for the hearing impaired is available. The on-site eatery, The Victorian Room, serves breakfast, lunch, and dinner. Refreshments can be found in the in-house bar/lounge. Ember's Island Miniature Golf and Planet Maze are within a half mile. Jolly Roger Amusement Park and Roland E. Powell Convention Center are approximately a mile away. Ocean Bowl Skate Park is within two miles.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1059.266733195694!2d-75.07407023824928!3d38.35579817381658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b929f52f4ba36f%3A0x1a2aa59f85700f3e!2sDunes%20Court!5e0!3m2!1sen!2sus!4v1690883299283!5m2!1sen!2sus",
  },
  {
    id: 5,
    name: "Tropicana Casino & Resort",
    location: "New Jersey, USA",
    city: "New Jersey",
    country: "USA",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/00/1600256396.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/00/1600256396.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/00/1600256400.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/00/1600256402.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/11/07/1107166410.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/00/1600256440.jpeg",
    },
    guests: 2,
    beds: 2,
    bathrooms: 2,
    price: 119,
    reviews: 1033,
    ratings: 8.9,
    gym: false,
    wifi: true,
    pool: false,
    kitchen: false,
    aircon: true,
    balcony: false,
    description:
      "Situated on the Atlantic City Boardwalk, Tropicana Casino & Resort has specialty gaming rooms and The Quarter, an entertainment complex with shops, bars, restaurants and a full-service spa. Air-conditioned guestrooms feature cable TVs, telephones, complimentary Wi-Fi and video-game consoles. Free toiletries can be found in the bathrooms. Guests can enjoy views of either the city, the boardwalk or the sea. As well as a 24-hour mega-casino, this hotel has an outdoor pool, an IMAX movie theater, live entertainment on weekends and an on-site nightclub. There is a seasonal beach service and a gym. There are a total of 18 restaurants here, serving seafood, Italian, Cuban, Chinese fusion, burgers, ribs and more. Drinks can be enjoyed at the pool-side bar. There is an Irish pub and a karaoke bar too. Tropicana Casino & Resort is under a mile from Ocean One Pier and four blocks from the Atlantic City Convention Center.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1498.6755918086671!2d-74.44580709534452!3d39.3521558621501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0ee64503d341f%3A0x5ae59bb688f27ccb!2sTropicana%20Atlantic%20City!5e0!3m2!1sen!2sus!4v1690883759943!5m2!1sen!2sus",
  },
  // France
  {
    id: 6,
    name: "Hotel Best Western Opera Faubourg",
    location: "Île-de-France, France",
    city: "Île-de-France",
    country: "France",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/uploadimages/39/24/39242290.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/uploadimages/39/24/39242290.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/97/1597178696.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/97/1597178702.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/uploadimages/39/24/39242300.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/uploadimages/39/24/39242278.jpeg",
    },
    guests: 2,
    beds: 1,
    bathrooms: 2,
    price: 99,
    reviews: 2403,
    ratings: 7.8,
    gym: false,
    wifi: true,
    pool: false,
    kitchen: false,
    aircon: true,
    balcony: false,
    description:
      "Centrally located in Paris’ 9th arrondissement, Hotel Best Western Opera Faubourg is a contemporary boutique-style hotel featuring concierge services, a business corner, and lift access. The individually decorated rooms feature a minibar, media docking station, flat-screen TV, free Wi-Fi, a workspace, safe, air conditioning, and premium bedding. En-suite bathrooms have a bathtub/shower, a hairdryer, and complimentary bath products. Selected units add a lounge and a salon corner. Hotel Best Western Opera Faubourg boasts of an inviting lobby with a fireplace, 24-hour reception, multilingual personnel, childcare services, and laundry facilities. Additionally, the hotel offers paid self-parking, ticket/tour assistance, and an airport shuttle. A daily continental breakfast buffet is available for a surcharge. Characterised by its retro-style setting, the on-site bar provides the ideal spot for a refreshing beverage. High-profile restaurants within a five-minute walk include Restaurant Caillebotte, Restaurant Simone Lemon, and Les Trois Royaumes. This non-smoking hotel is about one kilometre from Palais Garnier, a 19th century building known for ballet performances. Louvre Museum is a ten-minute drive away.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d300.789153529624!2d2.3414078633382145!3d48.87531364039141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3f4111767b%3A0x263aa19561ca7b5e!2sBest%20Western%20Op%C3%A9ra%20Faubourg!5e0!3m2!1sen!2sus!4v1690884893743!5m2!1sen!2sus",
  },
  {
    id: 7,
    name: "Hôtel du Louvre in The Unbound Collection by Hyatt",
    location: "Île-de-France, France",
    city: "Île-de-France",
    country: "France",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/96/1596966600.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/96/1596966600.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/96/1596966502.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/96/1596966590.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/96/1596966480.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/96/1596966484.jpeg",
    },
    guests: 3,
    beds: 2,
    bathrooms: 1,
    price: 549,
    reviews: 428,
    ratings: 8.9,
    gym: true,
    wifi: true,
    pool: true,
    kitchen: true,
    aircon: true,
    balcony: true,
    description:
      "Hotel du Louvre is a luxury 5 Star hotel located in the heart of Paris, next to the Louvre Museum and close to the Opéra Garnier and the Palais Royal. Place Vendôme, Place de la Concorde, the Marais neighborhood, the Tuileries Garden, the major department stores and Notre-Dame Cathedral are a few steps away from the hotel, making it an ideal location for leisure and business travellers. Built in 1855, our 5 star-hotel is one of the oldest in the City of Lights. Our hotel features 177 guest rooms, including 43 Suites, each one with its own distinguished style. Most of the rooms overlook the Louvre Museum, the Comédie Française Theatre or the Avenue de l’Opéra, others are facing the quietness of the inside courtyard. Our meeting rooms have a warm, luxurious feel and are equipped with the latest in technology making the luxury hotel a great venue to host business meetings in the Paris city center as well. Attentive and caring service, coupled with essential amenities such as free WIFI makes this boutique Hotel one of the finest addresses in Paris. You can also enjoy a typical Parisian cuisine at our restaurant Brasserie du Louvre with its terrace overlooking the Louvre Museum.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1312.374655267596!2d2.334641365730698!3d48.86299059528531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e25b975d85f%3A0xb14a11529660a7fb!2sH%C3%B4tel%20Du%20Louvre%20-%20The%20Unbound%20Collection%20by%20Hyatt!5e0!3m2!1sen!2sus!4v1690885438650!5m2!1sen!2sus",
  },
  {
    id: 8,
    name: "Hôtel Beaucour",
    location: "Strasbourg, France",
    city: "Strasbourg",
    country: "France",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/16/1616800058.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/16/1616800058.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/16/1616800082.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/16/1616800076.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/16/1616800070.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/53/1753352460.jpeg",
    },
    guests: 2,
    beds: 1,
    bathrooms: 1,
    price: 89,
    reviews: 1983,
    ratings: 9.0,
    gym: true,
    wifi: false,
    pool: true,
    kitchen: false,
    aircon: true,
    balcony: false,
    description:
      "Set around a flowered courtyard and featuring a cosy lounge with a chimney, this hotel provides a charming Alsatian setting in central Strasbourg, a short walk from the cathedral. At the Hotel Beaucour a buffet breakfast is served daily in the dining area. Hotel Beaucour features spacious rooms, each with unique decor and equipped with a whirlpool bath, Wi-Fi internet access and flat-screen TV. The hotel is near the river, the Petite France district and the historic Palais Rohan. Just 60 m from the hotel, guests will find the tram stop which enables easy access to the train station and the European Parliament.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.627149252686!2d7.748943276358035!3d48.578689571295584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c9acaf57223f%3A0xd2305cba4f78a2c2!2sH%C3%B4tel%20Beaucour!5e0!3m2!1sen!2sus!4v1690885927096!5m2!1sen!2sus",
  },
  {
    id: 9,
    name: "Château de Villiers-le-Mahieu",
    location: "Villiers-le-Mahieu, France",
    city: "Villiers-le-Mahieu",
    country: "France",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/27/1627802430.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/27/1627802430.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/27/1627802436.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/14/96/1496714870.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/uploadimages/49/30/49302334.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/27/1627802448.jpeg",
    },
    guests: 2,
    beds: 2,
    bathrooms: 1,
    price: 149,
    reviews: 337,
    ratings: 8.8,
    gym: true,
    wifi: true,
    pool: true,
    kitchen: false,
    aircon: true,
    balcony: false,
    description:
      "Guests can indulge in the lifestyle of the French aristocracy at the authentic Château de Villiers-le-Mahieu. Set within 21 hectares of luscious green parkland to the west of Paris, the hotel incorporates an ultra-modern spa and 1000 square metres of events space. There are 93 en-suite bedrooms within the chateau and its annexe, all offering views over the grounds. Each is indivudually decorated, with some including seating areas. Château de Villiers-le-Mahieu offers a range of activities, centred around the bright 700 square-metre spa. Guests can indulge in massages or a hamman, take a dip in the pool, and relax on a hydro-massage bench. There is also a gym, pitch’n’put course, and two tennis courts. A top quality buffet breakfast is available each morning, whilst the fine-dining restaurant offers sophisticated dishes from local produce. Snacks are available in the lounge bar. Well-known attractions such as the Palace of Versailles and Claude Monet’s house in Giverny are around 35 minutes’ drive from the hotel.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9435789060435!2d1.7654411763746636!3d48.859286271332365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6982477857513%3A0xc29d1ceb5703ae1a!2sCh%C3%A2teau%20de%20Villiers-le-Mahieu!5e0!3m2!1sen!2sus!4v1690886343661!5m2!1sen!2sus",
  },
  {
    id: 10,
    name: "Hotel Park Hyatt Paris-Vendome",
    location: "Paris, France",
    city: "Paris",
    country: "France",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/13/32/1332468868.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/13/32/1332468868.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/13/32/1332468916.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/59/00/590099710.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/59/00/590099760.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/59/00/590099702.jpeg",
    },
    guests: 2,
    beds: 1,
    bathrooms: 1,
    price: 139,
    reviews: 2078,
    ratings: 8.8,
    gym: true,
    wifi: true,
    pool: false,
    kitchen: false,
    aircon: true,
    balcony: false,
    description:
      "Experience the City of Lights from its central heart at Park Hyatt Paris-Vendôme, one of the most luxurious 5 star hotels in Paris. Our coveted location brings the city to your doorstep, overlooking the fashionable Rue de la Paix and within walking distance of Place Vendôme. Accepted into the prestigious Palace Hotels Group, the 5 star Park Hyatt hotel in Paris is one of the most visually stunning luxury. Its striking blend of contemporary architecture and classic design was conceived by renowned designer Ed Tuttle, lending the hotel a sensual and understated elegance. With its 155 elegant guest rooms including 44 luxury suites, discover wonderful dining experiences at the Michelin star restaurant the Pur' by Jean-François Rouquette. Hotel guests can also enjoy Le Spa - an exquisite spa and fitness centre with beauty partner La Mer, featuring massages and everything for your well-being within a luxury hotel environment. Superb facilities for conferences and weddings complemented by signature Hyatt catering and event planning, set our hotel apart as one of the city's premier addresses for corporate gatherings and social celebrations.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.443527195451!2d2.327974676375262!3d48.86882087133356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e31a5ccece7%3A0xbebf217250b5bb95!2sPark%20Hyatt%20Paris-Vend%C3%B4me!5e0!3m2!1sen!2sus!4v1690887077085!5m2!1sen!2sus",
  },
  //Japan
  {
    id: 11,
    name: "Hotel Hyatt Regency Kyoto",
    location: "Kyoto, Japan",
    city: "Kyoto",
    country: "Japan",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/49/51/495128616.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/49/51/495128616.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/43/1643309066.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/49/51/495128544.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/14/87/1487361580.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/49/51/495128622.jpeg",
    },
    guests: 4,
    beds: 2,
    bathrooms: 2,
    price: 330,
    reviews: 992,
    ratings: 9.4,
    gym: true,
    wifi: true,
    pool: true,
    kitchen: true,
    aircon: true,
    balcony: true,
    description:
      "Hotel Hyatt Regency Kyoto is located in the eastern Higashiyama Ward of the city. Guestrooms feature large flatscreen TVs, DVD players, complimentary Wi-Fi, work desks and safes. Tea and coffee-making facilities and free bottled water are included, as are bathrobes, slippers and toiletries. This hotel boasts a spa which offers a range of treatments. There is also a fitness center on site. Wi-Fi is free in some public areas, where there is a 24-hour front desk. Free newspapers are available in the lobby. The Grill specializes in meat and seafood, while Trattoria Sette offers Italian meals. Touzan Japanese Restaurant serves sushi and has a view of the Japanese rock garden. Guests can enjoy sakes from the Fushimi district at Touzan Bar. Hotel Hyatt Regency Kyoto is within a five-minute walk of Shichijo Station and Kyoto National Museum. Sanjusangendo Temple is less than a half-mile away.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.832930909525!2d2.2819227763759327!3d48.8804613713351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f8b8149404f%3A0x451d76ae1e117f24!2sHyatt%20Regency%20Paris%20%C3%89toile!5e0!3m2!1sen!2sus!4v1690887814603!5m2!1sen!2sus",
  },
  {
    id: 12,
    name: "Hyatt Regency Seragaki Island Okinawa",
    location: "Kunigami, Japan",
    city: "Kunigami",
    country: "Japan",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/44/1644579974.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/44/1644579974.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/44/1644580000.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/14/82/1482129878.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/14/82/1482129884.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/14/82/1482129874.jpeg",
    },
    guests: 3,
    beds: 3,
    bathrooms: 2,
    price: 422,
    reviews: 373,
    ratings: 8.7,
    gym: true,
    wifi: true,
    pool: true,
    kitchen: true,
    aircon: true,
    balcony: true,
    description:
      "Relax at the full-service spa, where you can enjoy massages, body treatments, and facials. If you're looking for recreational opportunities, you'll find an indoor pool, a sauna, and a fitness center. This hotel also features complimentary wireless Internet access, concierge services, and shopping on site.Grab a bite to eat at one of the hotel's 6 restaurants, or stay in and take advantage of the room service (during limited hours). Snacks are also available at the coffee shop/cafe. Relax with a refreshing drink from the poolside bar or one of the 3 bars/lounges. Full breakfasts are available daily from 7 AM to 10:30 AM for a fee.The following facilities are closed seasonally each year. They will be closed from November 7 to March 20:One of the swimming poolsBeachFeatured amenities include complimentary newspapers in the lobby, dry cleaning/laundry services, and a 24-hour front desk. This hotel has 4 meeting rooms available for events. A roundtrip airport shuttle is provided for a surcharge (available 24 hours), and self parking (subject to charges) is available onsite.Make yourself at home in one of the 343 guestrooms featuring refrigerators and plasma televisions. Rooms have private balconies. Complimentary wired and wireless Internet access keeps you connected, and satellite programming provides entertainment. Private bathrooms with shower/tub combinations feature deep soaking bathtubs and rainfall showerheads.Distances are displayed to the nearest 0.1 mile and kilometer. Okinawakaigan Quasi-National Park - 0.1 km / 0.1 mi Nabee Beach - 2 km / 1.2 mi Manza Beach - 2.3 km / 1.4 mi Chura Orchard Golf Club - 3.8 km / 2.4 mi Cape Manza - 3 km / 1.8 mi Mission Beach - 5.6 km / 3.5 mi Tanicha Beach - 6.7 km / 4.2 mi Kibogaoka Entrance Mae Beach - 7.9 km / 4.9 mi Kariyushi Beach - 8.3 km / 5.2 mi Yaka Beach - 9.2 km / 5.7 mi Sun Marina Beach - 9.3 km / 5.7 mi Tiger Beach - 9.3 km / 5.8 mi Busena Beach - 9.7 km / 6 mi Kise Beach - 10.5 km / 6.5 mi Bankoku Shinryokan - 10.7 km / 6.7 mi The preferred airport for Hyatt Regency Seragaki Island Okinawa is Naha Airport (OKA) - 57.6 km / 35.8 mi With a stay at Hyatt Regency Seragaki Island Okinawa in Onna, you'll be 1.8 mi (3 km) from Cape Manza and 7.1 mi (11.5 km) from Kise Country Club. This 4-star hotel is 9.3 mi (14.9 km) from Ryukyu Mura and 9.8 mi (15.7 km) from Blue Cave.Near Manza Beach",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.254149272805!2d127.86629097530343!3d26.51194947688844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e503be38c480d7%3A0xb1ce8d076a8ef431!2sHyatt%20Regency%20Seragaki%20Island%2C%20Okinawa!5e0!3m2!1sen!2sus!4v1690888363876!5m2!1sen!2sus",
  },

  {
    id: 13,
    name: "Always Niseko",
    location: "Kutchan, Japan",
    city: "Kutchan",
    country: "Japan",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/58/1758952742.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/58/1758952742.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/89/1689887674.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/89/1689887668.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/89/1689887700.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/58/1758952740.jpeg",
    },
    guests: 2,
    beds: 2,
    bathrooms: 1,
    price: 60,
    reviews: 447,
    ratings: 7.6,
    gym: false,
    wifi: true,
    pool: true,
    kitchen: false,
    aircon: true,
    balcony: false,
    description:
      "Make use of convenient amenities such as complimentary wireless Internet access, concierge services, and babysitting (surcharge). Additional features at this hotel include ski storage and a reception hall. The complimentary ski shuttle makes getting to the slopes a breeze.Enjoy a meal at the restaurant or snacks in the hotel's coffee shop/cafe. Mingle with other guests at the complimentary reception, held on select days. Buffet breakfasts are available daily from 7:00 AM to 10:00 AM for a fee.Featured amenities include multilingual staff, luggage storage, and laundry facilities. A roundtrip airport shuttle is provided for a surcharge (available on request), and self parking (subject to charges) is available onsite.Make yourself at home in one of the 104 guestrooms featuring refrigerators and flat-screen televisions. Complimentary wired and wireless Internet access is available. Private bathrooms with showers feature complimentary toiletries and hair dryers. Conveniences include safes and desks, and housekeeping is provided daily.Distances are displayed to the nearest 0.1 mile and kilometer. Niseko Mountain Resort Grand Hirafu - 0.7 km / 0.4 mi Niseko-Shakotan-Otarukaigan Quasi-National Park - 1 km / 0.7 mi Noasc - 4.2 km / 2.6 mi Niseko Takahashi Dairy Farm - 5 km / 3.1 mi Annupuri - 3.2 km / 2 mi Wonderland Chair A - 4.6 km / 2.9 mi Shikotsu-Toya National Park - 5.5 km / 3.4 mi Lake Hangetsu Nature Park - 5.6 km / 3.5 mi Niseko Village - 6.9 km / 4.3 mi Kutchancho Asahigaoka Ski Area - 7.8 km / 4.8 mi Kaributo - 7.9 km / 4.9 mi Road Station Niseko View Plaza - 8.8 km / 5.5 mi Niseko Annupuri Gondola - 9.4 km / 5.9 mi Niseko Distillery - 9.6 km / 6 mi Kanro-sui - 9.7 km / 6 mi The preferred airport for Always Niseko is New Chitose Intl. Airport (CTS) - 116.2 km / 72.2 mi When you stay at Always Niseko in Kutchan, you'll be near ski lifts, within a 15-minute walk of Niseko Mountain Resort Grand Hirafu and Niseko-Shakotan-Otarukaigan Quasi-National Park. This ski hotel is 4.3 mi (6.9 km) from Niseko Village and 18.4 mi (29.6 km) from Rusutsu Resort.Near Niseko Mountain Resort Grand Hirafu",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.969315813098!2d140.70038937603476!3d42.852381071151434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0ab073ffffffff%3A0xf05127d037699d8d!2sAlways%20Niseko!5e0!3m2!1sen!2sus!4v1690888786308!5m2!1sen!2sus",
  },
  {
    id: 14,
    name: "The Royal Park Kyoto Sanjo",
    location: "Kyoto, Japan",
    city: "Kyoto",
    country: "Japan",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/09/1609213184.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/09/1609213184.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/09/1609213188.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/09/1609213200.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/14/89/1489280082.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/10/02/1002834192.jpeg",
    },
    guests: 2,
    beds: 2,
    bathrooms: 2,
    price: 149,
    reviews: 772,
    ratings: 8.7,
    gym: true,
    wifi: true,
    pool: true,
    kitchen: false,
    aircon: true,
    balcony: false,
    description:
      "Situated in the Kawaramachi- Sanjō neighbourhood, The Royal Park Kyoto Sanjo offers modern accommodations in the heart of the city. Guests will find themselves just ten minutes’ walk from the vibrant Nishiki Market. Guest rooms feature crisp, fresh décor alongside modern amenities, including TV, refrigerator, and safe. All rooms feature a dehumidifier and a full bathroom with complimentary toiletries and a bathroom kit. Upgraded suites feature a living area with sofa. The hotel offers a 24-hour reception and concierge services. Self-service laundry facilities are available. Free Wi-Fi is included as standard. The hotel restaurant, Monsieur Itoh, offers casual dining and serves Western cuisine and local dishes. Drinks are available in The Bar, while a bakery can be found on the ground floor. The Royal Park Kyoto Sanjo is an eight-minute walk from the Museum of Kyoto. The Imperial Palace and Nijō Castle, two icons of Kyoto’s history, are less than three kilometres away. Sanjō and Kyoto Shiyakusho Mae subway stations are six minutes away on foot.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6357768.306505024!2d133.27592295287565!3d38.915312779332574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001089316d5a87f%3A0x24e8bcff5172c7a6!2sThe%20Royal%20Park%20Hotel%20Kyoto%20Sanjo!5e0!3m2!1sen!2sus!4v1690889046092!5m2!1sen!2sus",
  },

  {
    id: 15,
    name: "Suginoi Hotel",
    location: "Beppu, Japan",
    city: "Beppu",
    country: "Japan",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/81/1681735672.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/81/1681735672.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/81/1681735674.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/56/1756483558.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/57/1757536332.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/81/1681735706.jpeg",
    },
    guests: 2,
    beds: 2,
    bathrooms: 2,
    price: 350,
    reviews: 337,
    ratings: 9.0,
    gym: true,
    wifi: true,
    pool: true,
    kitchen: false,
    aircon: true,
    balcony: false,
    description:
      "Relax at the full-service spa, where you can enjoy massages, body treatments, and facials. You're sure to appreciate the recreational amenities, which include 2 spa tubs, hot springs, and a sauna. Additional amenities at this hotel include complimentary wireless Internet access, an arcade/game room, and gift shops/newsstands.Grab a bite to eat at Seeds, one of the hotel's many dining establishments, which include 2 restaurants and a coffee shop/cafe. Wrap up your day with a drink at the bar/lounge. Buffet breakfasts are available daily from 7:00 AM to 9:30 AM for a fee.The property will be renovating from January 16 2023 to June 30 2023 (completion date subject to change). The following areas are affected: Hot springs During renovations, the hotel will make every effort to minimize noise and disturbance.Featured amenities include a 24-hour front desk, luggage storage, and laundry facilities. A train station pick-up service is provided at no charge, and free self parking is available onsite.Make yourself at home in one of the 587 guestrooms featuring refrigerators and flat-screen televisions. Complimentary wireless Internet access is available to keep you connected. Bathrooms have hair dryers and toilets with an electronic bidet. Conveniences include phones, as well as safes and blackout drapes/curtains.Distances are displayed to the nearest 0.1 mile and kilometer. Kankaiji Onsen - 0.1 km / 0.1 mi B-Con Plaza, Global Tower - 1.3 km / 0.8 mi Ichinoide Kaikan - 1.4 km / 0.9 mi Jigokumushikobo Kannawa - 1.4 km / 0.9 mi Beppu Park - 1.5 km / 1 mi Beppu Rakutenchi - 1.6 km / 1 mi Beppu City Traditional Bamboo Centre - 2.6 km / 1.6 mi Aso Kuju National Park - 3 km / 1.9 mi Kaimonji Onsen - 3.3 km / 2 mi Beppu Tower - 3.5 km / 2.2 mi Takegawara Onsen - 3.9 km / 2.4 mi Kintetsu Beppu Ropeway - 4 km / 2.5 mi White Pond Hell Hot Springs - 4.2 km / 2.6 mi Golden Dragon Hell Hot Springs - 4.2 km / 2.6 mi Hyotan Hot Spring - 4.2 km / 2.6 mi The preferred airport for Suginoi Hotel is Oita Airport (OIT) - 46.8 km / 29.1 mi With a stay at Suginoi Hotel in Beppu, you'll be in the suburbs, just steps from Kankaiji Onsen and a 2-minute drive from Jigokumushikobo Kannawa. This family-friendly hotel is 2.7 mi (4.4 km) from Hells of Beppu and 2.5 mi (4.1 km) from Takegawara Onsen.Near Beppu Rakutenchi ",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.3105905801885!2d131.4699279755698!3d33.28453657345578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3546a65c25198f21%3A0x43d0b1816f0e489!2sSuginoi%20Hotel!5e0!3m2!1sen!2sus!4v1690890291083!5m2!1sen!2sus",
  },
  // Switzerland
  {
    id: 16,
    name: "Nash Suites",
    location: "Cointrin, Switzerland",
    city: "Cointrin",
    country: "Switzerland",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/10/1710738066.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/10/1710738066.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/10/1710738062.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/58/43/584301778.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/10/1710738056.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/uploadimages/39/06/39066444.jpeg",
    },
    guests: 2,
    beds: 2,
    bathrooms: 1,
    price: 119,
    reviews: 288,
    ratings: 7.5,
    gym: true,
    wifi: true,
    pool: true,
    kitchen: false,
    aircon: true,
    balcony: false,
    description:
      "Be sure to enjoy recreational amenities including a sauna and a fitness center. Additional features at this hotel include complimentary wireless Internet access, concierge services, and a vending machine.Enjoy a meal at Nash Suites Restaurant or snacks in the coffee shop/cafe. The hotel also offers room service (during limited hours). Quench your thirst with your favorite drink at the bar/lounge. Continental breakfasts are available daily from 5:30 AM to 10:30 AM for a fee.Featured amenities include a business center, complimentary newspapers in the lobby, and dry cleaning/laundry services. A shuttle from the airport to the hotel is complimentary at scheduled times.Make yourself at home in one of the 133 air-conditioned rooms featuring kitchenettes with refrigerators and microwaves. Complimentary wireless Internet access keeps you connected, and flat-screen televisions are provided for your entertainment. Conveniences include phones, as well as laptop-compatible safes and coffee/tea makers.Distances are displayed to the nearest 0.1 mile and kilometer. Balexert - 1.2 km / 0.8 mi Geneva Arena - 1.3 km / 0.8 mi Palexpo - 1.8 km / 1.1 mi Trembley Park - 2.1 km / 1.3 mi Vivarium de Meyrin - 2.4 km / 1.5 mi Forum Meyrin Theatre - 2.8 km / 1.8 mi World Trade Organization Headquarters - 3 km / 1.9 mi Ariana Ceramics and Glass Museum - 3.1 km / 1.9 mi Ariana Park - 3.1 km / 1.9 mi International Red Cross and Red Crescent Museum - 3.2 km / 2 mi Smurphs Buildings - 3.2 km / 2 mi Centre International de Conferences Geneve - 3.2 km / 2 mi International Museum of the Red Cross and Red Crescent - 3.2 km / 2 mi Broken Chair Sculpture - 3.3 km / 2 mi United Nations European Headquarters - 3.3 km / 2.1 mi The preferred airport for Nash Suites Airport Hotel is Geneva International Airport (GVA) - 1.3 km / 0.8 mi Located in Meyrin (Cointrin), Nash Suites Airport Hotel is within a 5-minute drive of Palexpo and Trembley Park. This 4-star hotel is 2.1 mi (3.5 km) from United Nations European Headquarters and 0.9 mi (1.5 km) from Balexert.In Meyrin (Cointrin)",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16779.749184151002!2d6.088868079440006!3d46.23740669247036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c650ac146ede7%3A0xf01b7e43fead2467!2sNash%20Suites%20Airport%20Hotel!5e0!3m2!1sen!2sus!4v1690891027949!5m2!1sen!2sus",
  },
  {
    id: 17,
    name: "Hotel D'Angleterre",
    location: "Geneva, Switzerland",
    city: "Geneva",
    country: "Switzerland",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/14/98/1498031662.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/14/98/1498031662.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/11/56/1156027064.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/99/1599867826.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/14/98/1498031678.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/99/1599867770.jpeg",
    },
    guests: 3,
    beds: 2,
    bathrooms: 1,
    price: 249,
    reviews: 296,
    ratings: 8.2,
    gym: true,
    wifi: true,
    pool: true,
    kitchen: false,
    aircon: false,
    balcony: true,
    description:
      "Regarded as one of the world’s great luxury hotels, the d’Angleterre Geneva is in an enviable position overlooking Lake Geneva. It is renowned for its meticulous attention to detail. Each room is decorated with original works of art, and incorporates high-tech features as unobtrusively as possible. Flat screen TV’s and ipod docking stations are standard, and fast in-room Wi-Fi is also naturally included. Aside from the fine dining, and elegant bars, the d’Angleterre also has several meeting spaces that can be used for everything from small business meetings to large functions. Windows Restaurant offers fine dining with a wonderful view over Lake Geneva. Its wine list is particularly noteworthy. The Leopard Bar is one of Geneva’s most sophisticated venues, and offers guest the opportunity to drink and dance in a splendid setting. The hotel is naturally very central. Geneva’s famous boutiques are a mere 10-minute walk away.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10762809.55938845!2d-5.157932704539574!3d48.80786716109057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c652456b7b799%3A0xe1c9f79328d61a3f!2sHotel%20d&#39;Angleterre%20Geneva!5e0!3m2!1sen!2sus!4v1690891925159!5m2!1sen!2sus",
  },
  {
    id: 18,
    name: "Warwick Geneva",
    location: "Geneva, Switzerland",
    city: "Geneva",
    country: "Switzerland",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/98/1598021934.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/98/1598021934.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/98/1598021954.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/98/1598021984.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/98/1598021982.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/98/1598021958.jpeg",
    },
    guests: 2,
    beds: 2,
    bathrooms: 1,
    price: 139,
    reviews: 8.8,
    description:
      "Warwick Geneva is a stylish hotel conveniently located at Geneva. It aims to offer guests pure relaxation and a pleasurable stay through its modern facilities and excellent staff. Each room is equipped with free Wi-Fi, a television with satellite channels, an air conditioner, a minibar, a private bathroom with complimentary toiletries and hairdryer, coffee/tea making facilities, an alarm, a safe, and a telephone. Complimentary Wi-Fi is available at the public areas of the hotel. The hotel offers laundry services and currency exchange. Guests can use the 24-hour business centre and the off-site fitness centre. Parking is also offered for a surcharge. Téséo Restaurant offers an elegant ambience. It specialises in Swiss cuisine. Téséo Bar offers a wide array of delectable cocktails and light snacks. The distance between Lake Geneva and Warwick Geneva is just 300 metres. Geneva International Airport can be reached by riding a train for six minutes.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.980592552897!2d6.14178477622053!3d46.210841071095935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c65273c3a8d1d%3A0xa820f3ae2c78578f!2sWarwick%20Geneva!5e0!3m2!1sen!2sus!4v1690892800690!5m2!1sen!2sus",
  },
  {
    id: 19,
    name: "Hotel Alpha-Palmiers by Fassbind",
    location: "Lausanne, Switzerland",
    city: "Lausanne",
    country: "Switzerland",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/19/69/196913196.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/19/69/196913196.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/54/1754172816.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/97/1597642380.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/14/97/1497436008.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/13/91/1391257998.jpeg",
    },
    guests: 4,
    beds: 3,
    bathrooms: 1,
    price: 121,
    reviews: 119,
    ratings: 7.6,
    gym: false,
    wifi: true,
    pool: true,
    kitchen: false,
    aircon: true,
    balcony: false,
    description:
      "Located in a quiet pocket in Lausanne's city centre, Hotel Alpha-Palmiers by Fassbind offers travellers extensive in-house dining options and a peaceful stay amidst amazing architecture and pretty gardens. The air-conditioned rooms, many overlooking the gardens, feature en-suite bathrooms with a hairdryer. A flat-screen TV, DVD player, and dial-direct phones provide extra comforts, along with a minibar filled with Swiss chocolates. Suites add kitchenettes. With 16 well-equipped meeting rooms available for get-togethers, guests are assured of a first-class experience. For relaxation, there's a sauna and Turkish steam bath, and multilingual staff attend to the 24-hour front desk. Delicious Thai and Swiss cuisine is served at Jardin Thai, fondue specials at the French brasserie, L’Esprit Bistrot, and a wide selection of drinks is available at the hotel's bar. Le Bourg, a well-known concert hall in Lausanne, is 550 metres from Hotel Alpha-Palmiers by Fassbind. Lausanne Cathedral is a 12-minute walk, and the shores of glorious Lac Leman are one and a half kilometres away.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.4764818822023!2d6.627494476238096!3d46.518472371110796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c2e32980648e1%3A0xa51da185d267cb81!2sAlpha%20Palmiers%20by%20Fassbind!5e0!3m2!1sen!2sus!4v1690893091358!5m2!1sen!2sus",
  },
  {
    id: 20,
    name: "Matterhorn Focus",
    location: "Zermatt, Switzerland",
    city: "Zermatt",
    country: "Switzerland",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/66/51/665147334.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/66/51/665147334.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/uploadimages/43/13/43137516.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/11/32/1132686080.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/52/1752436924.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/uploadimages/17/79/17790990.jpeg",
    },
    guests: 3,
    beds: 2,
    bathrooms: 1,
    price: 389,
    reviews: 3033,
    ratings: 9.6,
    gym: true,
    wifi: true,
    pool: true,
    kitchen: true,
    aircon: true,
    balcony: true,
    description:
      "The Design & Lifestyle Hotel Garni Matterhorn FOCUS in Zermatt is like a work of art. The combination of modern architecture, genial comfort, attentive service and fascinating countryside create a special ambiance. The splendid location with an unbeatable view of the Matterhorn emphasizes the high standards that the hosts set for the hotel. Most of the 30 spacious rooms and suites offer a view of the famous Matterhorn, some even from the free-standing bath tubs. While from the other rooms there is a view of the buzz of activity in the charming Valais village of Zermatt. We recommend the Focus roof suite with fireplace and balcony facing the Matterhorn. The spacious and exclusive wellness area invites guests to relax in luxury, where all their needs will be catered for. It is very important to the hosts, that the guests are able to enjoy to the fullest their well-deserved and always too short holiday. To this end, a splendid indoor pool, an outdoor whirlpool, a saline bath, a caldarium and a Finnish sauna are waiting for the guests. A restroom with heated couches provides relaxation. Architecture by Heinz Julen The artist Heinz Julen, known worldwide for his eye-catching and surprising designs, has created another spectacular work. Lamps, sofas and beds, as well as free-standing bathtubs with a view of the Matterhorn especially created for the hotel, give it a special charm. With its distinct lines and materials, the architectural design follows that of the mountain railways. The Matterhorn FOCUS particularly elegant, without being obtrusive, and blends perfectly into the mountain environment.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2770.859910880301!2d7.740142776209345!3d46.013988371088175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478f35c4d285b9bf%3A0x49d0db1a4e009c80!2sFocus!5e0!3m2!1sen!2sus!4v1690894579109!5m2!1sen!2sus",
  },
  // South Korea
  {
    id: 21,
    name: "Hotel Skypark Central Myeongdong",
    location: "Seoul, South Korea",
    city: "Seoul",
    country: "South Korea",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/39/1639518600.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/39/1639518600.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/39/1639518614.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/39/1639518630.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/39/1639518628.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/39/1639518620.jpeg",
    },
    guests: 2,
    beds: 2,
    bathrooms: 1,
    price: 59,
    reviews: 1257,
    ratings: 8.1,
    gym: false,
    wifi: true,
    pool: true,
    kitchen: false,
    aircon: false,
    balcony: false,
    description:
      "Make use of convenient amenities, which include complimentary wireless Internet access and concierge services.For the benefit of our customers, we have provided a rating based on our rating system.Featured amenities include a 24-hour business center, a 24-hour front desk, and multilingual staff.Make yourself at home in one of the 312 guestrooms featuring refrigerators and flat-screen televisions. Complimentary wireless Internet access keeps you connected, and satellite programming is available for your entertainment. Private bathrooms with shower/tub combinations feature deep soaking bathtubs and complimentary toiletries. Conveniences include phones, as well as safes and electric kettles.Distances are displayed to the nearest 0.1 mile and kilometer. Myeongdong Street - 0.1 km / 0.1 mi Lotte Department Store - 0.3 km / 0.2 mi Myeongdong Cathedral - 0.4 km / 0.2 mi Seoul City Hall - 0.7 km / 0.4 mi Cheonggyecheon - 0.7 km / 0.4 mi Namdaemun Market - 0.8 km / 0.5 mi Chojun Textile & Quilt Art Museum - 0.8 km / 0.5 mi Kokkiri Bowlingjang - 0.8 km / 0.5 mi Shinsegae Shopping Center - 0.9 km / 0.5 mi Dongrang Yesool Center Daegeukjang - 0.9 km / 0.5 mi Namsan Park - 0.9 km / 0.5 mi Deoksugung Palace - 1 km / 0.6 mi Insa-dong - 1 km / 0.6 mi Namsan Cable Car - 1.1 km / 0.7 mi Sungnyemun Gate - 1.2 km / 0.7 mi The nearest airports are:Incheon Intl. Airport (ICN) - 69.4 km / 43.1 mi Gimpo Intl. Airport (GMP) - 19.6 km / 12.2 mi The preferred airport for Hotel Skypark Central Myeongdong is Incheon Intl. Airport (ICN). Located in Seoul (Myeongdong), Hotel Skypark Central Myeongdong is within a 15-minute walk of Namdaemun Market and Chojun Textile & Quilt Art Museum. This hotel is 0.6 mi (1 km) from Dongrang Yesool Center Daegeukjang and 0.7 mi (1.2 km) from Kokkiri Bowlingjang.In Seoul (Myeongdong)",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.5946969672705!2d126.98265337576554!3d37.564611772039186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2efc3f91faf%3A0x850121fa2be0391a!2sHotel%20Skypark%20Central%20Myeongdong!5e0!3m2!1sen!2sus!4v1690895524474!5m2!1sen!2sus",
  },
  {
    id: 22,
    name: "Grand Hyatt Jeju",
    location: "Jeju-si, South Korea",
    city: "Jeju-si",
    country: "South Korea",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/02/1702559018.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/02/1702559018.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/02/1702558998.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/02/1702559044.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/02/1702559000.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/02/1702559014.jpeg",
    },
    guests: 2,
    beds: 2,
    bathrooms: 2,
    price: 289,
    reviews: 1022,
    ratings: 9.1,
    gym: true,
    wifi: true,
    pool: true,
    kitchen: false,
    aircon: true,
    balcony: true,
    description:
      "Relax at the full-service spa, where you can enjoy massages, body treatments, and facials. You're sure to appreciate the recreational amenities, including an outdoor pool, an indoor pool, and a spa tub. Additional amenities at this hotel include complimentary wireless Internet access, concierge services, and a hair salon.Enjoy Korean cuisine at Pocha, one of the hotel's many dining establishments, which include 10 restaurants and a coffee shop/cafe. Relax with a refreshing drink from the poolside bar or one of the 2 bars/lounges. Buffet breakfasts are available daily from 6:30 AM to 11:00 AM for a fee.The property will be renovating from January 30 2023 to February 16 2023 (completion date subject to change). The following areas are affected: One of the swimming pools Guests will have access to the following alternate facilities during the renovation:Indoor pool During renovations, the hotel will make every effort to minimize noise and disturbance.For the benefit of our customers, we have provided a rating based on our rating system.Featured amenities include a business center, dry cleaning/laundry services, and a 24-hour front desk.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390115.9240132479!2d126.10745173627001!3d33.58900410683501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350cfb0c3e0b2ea1%3A0xde4af154befac551!2sGrand%20Hyatt%20Jeju!5e0!3m2!1sen!2sus!4v1690895732452!5m2!1sen!2sus",
  },
  {
    id: 23,
    name: "Paradise City",
    location: "Incheon, South Korea",
    city: "Incheon",
    country: "South Korea",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/52/42/524256108.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/52/42/524256108.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/52/42/524256106.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/38/1638055330.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/52/42/524256132.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/38/1638055376.jpeg",
    },
    guests: 4,
    beds: 4,
    bathrooms: 2,
    price: 100,
    reviews: 670,
    ratings: 9.7,
    gym: true,
    wifi: true,
    pool: true,
    kitchen: false,
    aircon: true,
    balcony: false,
    description:
      "Try your luck at the casino and enjoy other recreational amenities including an outdoor pool and an indoor pool. Additional features at this resort include complimentary wireless Internet access, concierge services, and gift shops/newsstands.Stop by the resort's restaurant, On the Plate, for lunch or dinner. Dining is also available at the coffee shop/cafe, and 24-hour room service is provided. Relax with your favorite drink at the bar/lounge or the poolside bar. Buffet breakfasts are available daily from 6:30 AM to 10:30 AM for a fee.For the benefit of our customers, we have provided a rating based on our rating system.Featured amenities include complimentary wired Internet access, a business center, and complimentary newspapers in the lobby. A roundtrip airport shuttle is complimentary at scheduled times.Make yourself at home in one of the 711 guestrooms featuring refrigerators and free minibar items. Wired and wireless Internet access is complimentary, and flat-screen televisions with cable programming provide entertainment. Private bathrooms with separate bathtubs and showers feature deep soaking bathtubs and rainfall showerheads. Conveniences include phones, as well as safes and electric kettles.Distances are displayed to the nearest 0.1 mile and kilometer. BMW Driving Center - 5.3 km / 3.3 mi Geuppo Beach - 5.8 km / 3.6 mi Marsian Beach - 6.4 km / 4 mi Silmido Island - 7.2 km / 4.5 mi SKY72 Golf Club - 8.3 km / 5.1 mi Incheon Bridge - 8.5 km / 5.3 mi Silmido Beach - 9.9 km / 6.1 mi Eulwangri Beach - 11.6 km / 7.2 mi Wangsan Beach - 12.3 km / 7.6 mi Hanagae Beach - 12.9 km / 8 mi Yeongjong Pier - 13.9 km / 8.6 mi Baemikkumi Sculpture Park - 17 km / 10.6 mi Urban Beach - 26.7 km / 16.6 mi Songdo Convensia Convention Center - 27.9 km / 17.4 mi Songdo Yoowonji - 28.3 km / 17.6 mi The nearest airports are:Incheon Intl. Airport (ICN) - 3.9 km / 2.4 mi Gimpo Intl. Airport (GMP) - 41.4 km / 25.7 mi The preferred airport for Paradise City is Incheon Intl. Airport (ICN). With a stay at Paradise City in Incheon (Jung-gu), you'll be within a 10-minute drive of BMW Driving Center and Geuppo Beach. This 5-star resort is 18.4 mi (29.7 km) from Songdo Central Park and 19.8 mi (31.8 km) from Incheon Port Passenger Terminal.Near Geuppo Beach",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.0034455338973!2d126.45334477575936!3d37.437023372072424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b9bec10605ca5%3A0x3fbfe197851adcc6!2sParadise%20City!5e0!3m2!1sen!2sus!4v1690896418101!5m2!1sen!2sus",
  },
  {
    id: 24,
    name: "Best Western Premier Incheon Airport",
    location: "Incheon, South Korea",
    city: "Incheon",
    country: "South Korea",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/33/1633554396.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/33/1633554396.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/33/1633554392.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/33/1633554414.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/11/32/1132798054.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/33/1633554430.jpeg",
    },
    guests: 2,
    beds: 2,
    bathrooms: 1,
    price: 99,
    reviews: 1712,
    ratings: 7.1,
    gym: true,
    wifi: true,
    pool: false,
    kitchen: false,
    aircon: true,
    balcony: false,
    description:
      "The hotel is located a short, three minute distance from the airport.Discover the Best Western Premier Incheon Airport Hotel's exotic sentiment, located in the heart of the international Business Center and Youngjong Island. You can enjoy the traditional Korean, Japanese and Western foods at our restaurants. A short distance away you can play golf, sea fish, and shop or have your stress relieved at the boiled sea spa with massage.Please note that all room rates are excluding breakfast.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.934593475947!2d126.45703097575935!3d37.43864987207193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b9ad1d0f6b33d%3A0x11fcacdb30fc8211!2sBest%20Western%20Premier%20Incheon%20Airport%20Hotel!5e0!3m2!1sen!2sus!4v1690896732860!5m2!1sen!2sus",
  },
  {
    id: 25,
    name: "Nanta Jeju",
    location: "Jeju-si, South Korea",
    city: "Jeju-si",
    country: "South Korea",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/14/92/1492322856.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/14/92/1492322856.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/17/1617225484.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/17/1617225480.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/10/00/1000932338.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/14/92/1492322868.jpeg",
    },
    guests: 2,
    beds: 2,
    bathrooms: 1,
    price: 60,
    reviews: 3070,
    ratings: 8.9,
    gym: false,
    wifi: true,
    pool: false,
    kitchen: false,
    aircon: true,
    balcony: false,
    description:
      "Hotel Nanta is the best luxurious hotel in Jeju located on the slopes of Mt. Halla, with 204 rooms. Nanta is the representative performance of Korea and now moves forward as creative and decent hotel brand. Hotel Nanta offers the best place for family gatherings, luxurious weddings, and grand international conferences. A skilled chef with a prestigious 30-year career offers various and unique cuisines.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.1332798457397!2d126.54302348291642!3d33.44583400478279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350cfc405457e3e3%3A0x7bc1525cae386056!2sHOTEL%20NANTA!5e0!3m2!1sen!2sus!4v1690897179203!5m2!1sen!2sus",
  },
  // Philippines
  {
    id: 26,
    name: "The Bellevue Resort",
    location: "Panglao, Philippines",
    city: "Panglao",
    country: "Philippines",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/41/1641042956.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/41/1641042956.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/41/1641042922.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/41/1641042918.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/41/1641042960.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/41/1641042936.jpeg",
    },
    guests: 2,
    beds: 2,
    bathrooms: 1,
    price: 133,
    reviews: 1647,
    ratings: 9.0,
    gym: true,
    wifi: true,
    pool: true,
    kitchen: false,
    aircon: true,
    balcony: true,
    description:
      "Pamper yourself with a visit to the spa, which offers massages and body treatments. Additional features at this resort include complimentary wireless Internet access and concierge services.Enjoy international cuisine at Lamian, one of the resort's 2 restaurants, or stay in and take advantage of the room service (during limited hours). Wrap up your day with a drink at the bar/lounge. To-go breakfasts are available daily from 7 AM to 10 AM for a fee.Featured amenities include a business center, complimentary newspapers in the lobby, and dry cleaning/laundry services. A roundtrip airport shuttle is provided for a surcharge (available 24 hours), and free self parking is available onsite.Make yourself at home in one of the 159 air-conditioned rooms featuring minibars and flat-screen televisions. Rooms have private balconies. Complimentary wireless Internet access keeps you connected, and cable programming is available for your entertainment. Private bathrooms with separate bathtubs and showers feature rainfall showerheads and complimentary toiletries.Distances are displayed to the nearest 0.1 mile and kilometer. Doljo Beach - 0.1 km / 0.1 mi Virgin Island - 0.4 km / 0.2 mi Momo Beach - 4.8 km / 3 mi Danao Beach - 6.6 km / 4.1 mi Alona Beach - 6.8 km / 4.2 mi Hinagdanan Cave - 10.7 km / 6.7 mi Panglao Beach - 11 km / 6.8 mi White Beach - 12 km / 7.5 mi Dumaluan Beach - 12.6 km / 7.8 mi Bohol National Museum - 17.3 km / 10.7 mi Cathedral of San Jose - 17.3 km / 10.7 mi Lite Port Center - 18.1 km / 11.3 mi Tagbilaran Wharf - 18.3 km / 11.4 mi Spanish Belfry - 19.3 km / 12 mi Baclayon Church - 22.2 km / 13.8 mi The nearest major airport is Panglao (TAG-Bohol Intl.) - 8.7 km / 5.4 miLocated in Panglao, The Bellevue Resort is on the beach, within a 5-minute walk of Doljo Beach and Virgin Island. This 5-star resort is 4.2 mi (6.8 km) from Alona Beach and 3.2 mi (5.1 km) from Momo Beach.Near Doljo Beach",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.0906389920397!2d123.72760097489119!3d9.587455390497892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa52cae6f99da5%3A0xd3fa6f9fce59284e!2sThe%20Bellevue%20Resort!5e0!3m2!1sen!2sus!4v1690898465628!5m2!1sen!2sus",
  },
  {
    id: 27,
    name: "Clark Marriott Hotel",
    location: "Mabalacat, Philippines",
    city: "Mabalacat",
    country: "Philippines",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/18/1618547518.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/18/1618547518.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/uploadimages/43/62/43621480.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/13/93/1393120074.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/12/61/1261465192.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/18/1618547526.jpeg",
    },
    guests: 3,
    beds: 2,
    bathrooms: 1,
    price: 200,
    reviews: 257,
    ratings: 8.5,
    gym: true,
    wifi: true,
    pool: true,
    kitchen: true,
    aircon: true,
    balcony: true,
    description:
      "Clark Marriott Hotel is the first international hotel brand in Clark, Pampanga. This five star hotel is located in the vibrant central business district of Clark Freeport Zone, Mabalacat, Philippines - just minutes from Clark International Airport, shopping, dining and entertainment. The topnotch hotel boasts of 260 rooms and suites with contemporary design and deluxe amenities as well as unique dining experiences including Goji Kitchen + Bar, featuring an all-day buffet, and Smoki Moto, showcasing authentic Korean cuisine in a relaxing atmosphere. Indulge in a soothing massage or facial at Quan Spa, a full-service, on-site wellness center. Stay fit in 24/7 Fitness Center, swim in the outdoor pool, and let the children enjoy Kids Club. Those looking to host an event will appreciate the Grand Ballroom and meeting rooms, boasting the latest technology and stylish decor.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.4267860678297!2d120.52267137498619!3d15.189792885369462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339692b399cbfe7d%3A0x72c3a24660f84efd!2sClark%20Marriott%20Hotel!5e0!3m2!1sen!2sus!4v1690899842924!5m2!1sen!2sus",
  },
  {
    id: 28,
    name: "Quest Plus Conference Center Clark",
    location: "Angeles, Philippines",
    city: "Angeles",
    country: "Philippines",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/uploadimages/49/00/49004098.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/uploadimages/49/00/49004098.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/uploadimages/49/00/49004106.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/84/1684187006.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/84/1684187004.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/49/62/496214080.jpeg",
    },
    guests: 2,
    beds: 2,
    bathrooms: 2,
    price: 108,
    reviews: 327,
    ratings: 7.9,
    gym: true,
    wifi: true,
    pool: true,
    kitchen: false,
    aircon: false,
    balcony: false,
    description:
      "Quest Plus Conference Center, Clark will be the 2nd Quest property to open in the Philippines. It will have 303 newly refurbished guestrooms, a Grand Ballroom, Meeting rooms and an All day Cafe. The Quest Club lounge and Charley’s Tapas Bar will be added facilities of the hotel when it opens in August 2016. Quest Plus Conference Center, Clark is a 4 star hotel with an affordable lifestyle. It aims to combine the value of premium budget hotels with unique and inspiring designs, creative hospitality concepts and state of the art technology for travelers seeking a stylish and unpretentious working environment. Nestling within the beautifully landscaped Mimosa Leisure Estate, the hotel offers everything expected from an international destination plus a 36 hole championship golf course, a casino, a hub for duty free shopping, nature walks & activities and a nightlife entertainment among others.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.5483949231507!2d120.52110667498583!3d15.183126385375155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396ed5d4e82fcc9%3A0x8f32a03b5239890!2sQuest%20Plus%20Conference%20Center%20Clark!5e0!3m2!1sen!2sus!4v1690900100157!5m2!1sen!2sus",
  },
  {
    id: 29,
    name: "Holiday Inn Manila Galleria",
    location: "Pasig, Philippines",
    city: "Pasig",
    country: "Philippines",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/99/1599697876.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/99/1599697876.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/99/1599697868.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/99/1599697874.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/99/1599697906.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/99/1599697864.jpeg",
    },
    guests: 2,
    beds: 2,
    bathrooms: 1,
    price: 70,
    reviews: 2020,
    ratings: 7.8,
    gym: true,
    wifi: true,
    pool: false,
    kitchen: false,
    aircon: false,
    balcony: false,
    description:
      "Enjoy direct access to Robinson’s Galleria mall from Holiday Inn Manila Galleria, or cool off in the hotel’s resort-style pool and indulge in a relaxing spa treatment. Air-conditioned guestrooms feature LCD TVs with cable channels, desks, Wi-Fi (charged), tea/coffeemaker and a minibar. Some have city views. Suites and club rooms have separate living areas. Holiday Inn Manila Galleria boasts a large outdoor pool and a sauna. Other amenities include a kids’ play area, a fitness gym, a business center and free parking. An all-day buffet and a la carte menu are available at on-site Fab Restaurant, where children under twelve dine for free. Indulge in a cocktail at Bar One and enjoy live entertainment every night. Located in the the Ortigas Commercial District, this hotel is one km from Mega Mall, 1.2 km from the Lopez Museum, 1.9 km from Wack-Wack Golf Club and ten km from Manila center.",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.1586325692506!2d121.05786287497374!3d14.590035085895074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a357c835d4090f%3A0xbce37c714b04c484!2sHoliday%20Inn%20Manila%20Galleria%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2sus!4v1690900400254!5m2!1sen!2sus",
  },
  {
    id: 30,
    name: "Dusit Thani Mactan Cebu Resort",
    location: "Cebu City, Philippines",
    city: "Cebu City",
    country: "Philippines",
    images: {
      thumbnail:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/42/1642961308.jpeg",
      large:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/42/1642961308.jpeg",
      small1:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/42/1642961296.jpeg",
      small2:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/42/1642961298.jpeg",
      small3:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/16/42/1642961318.jpeg",
      small4:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/17/56/1756378126.jpeg",
    },
    guests: 3,
    beds: 2,
    bathrooms: 2,
    price: 177,
    reviews: 1777,
    ratings: 8.6,
    gym: true,
    wifi: true,
    pool: true,
    kitchen: false,
    aircon: true,
    balcony: false,
    description:
      "Relax at the full-service spa, where you can enjoy massages. After dipping into one of the 2 outdoor swimming pools, you can spend some time at the private beach. Additional amenities at this hotel include complimentary wireless Internet access, concierge services, and an arcade/game room.Enjoy a meal at the restaurant, or stay in and take advantage of the hotel's 24-hour room service. Unwind at the end of the day with a drink at the bar/lounge or the poolside bar. Full breakfasts are available daily from 6:00 AM to 10:00 AM for a fee.Featured amenities include express check-in, express check-out, and complimentary newspapers in the lobby. Planning an event in Lapu-Lapu? This hotel has facilities measuring 13294 square feet (1235 square meters), including conference space. A roundtrip airport shuttle is provided for a surcharge (available 24 hours), and free self parking is available onsite.Make yourself at home in one of the 272 air-conditioned rooms featuring iPod docking stations and minibars. Wired and wireless Internet access is complimentary, while 52-inch Smart televisions with premium TV channels provide entertainment. Private bathrooms with bathtubs or showers feature rainfall showerheads and complimentary toiletries. Conveniences include phones, as well as laptop-compatible safes and desks.Distances are displayed to the nearest 0.1 mile and kilometer. CHI, The Spa - 3.7 km / 2.3 mi Magellan Shrine - 4.1 km / 2.5 mi Jpark Island Waterpark - 8.6 km / 5.4 mi Mactan Doctors' Hospital - 10.2 km / 6.3 mi Mactan Marina Mall - 10.2 km / 6.3 mi Cebu Yacht Club - 10.3 km / 6.4 mi Mactan Town Center - 10.7 km / 6.6 mi City Times Square - 10.9 km / 6.7 mi Marcelo Fernan Bridge - 11.1 km / 6.9 mi Gaisano Grand Mall Mactan - 11.3 km / 7 mi The Outlets at Pueblo Verde - 11.4 km / 7.1 mi Lapu-Lapu City Hall - 12 km / 7.4 mi Gaisano Island Mall Mactan - 12.2 km / 7.6 mi Our Lady of the Rule Church - 13.5 km / 8.4 mi Olango Wildlife Observation Deck - 14.3 km / 8.9 mi The nearest major airport is Mactan - Cebu Intl. Airport (CEB) - 12 km / 7.4 miWith a stay at Dusit Thani Mactan Cebu Resort in Lapu-Lapu (Punta Engaño), you'll be within a 15-minute drive of CHI, The Spa and Mactan Doctors' Hospital. This 5-star hotel is 11.6 mi (18.7 km) from SM City Cebu and 12.9 mi (20.8 km) from Waterfront Cebu City Casino.In Lapu-Lapu (Punta Engaño)",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989858.726562346!2d119.89061377451367!3d12.426624124806688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99642fb4068e3%3A0x705db72012f63e5a!2sDusit%20Thani%20Mactan%20Cebu!5e0!3m2!1sen!2sus!4v1690900583822!5m2!1sen!2sus",
  },
];

export default hotels;
