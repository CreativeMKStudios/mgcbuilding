export type Area = {
  slug: string;
  name: string;
  county: string;
  title: string;
  description: string;
  distance: string;
  housing: string;
  jobs: string;
  note: string;
};

export const areas: Area[] = [
  {
    slug: "shortstown",
    name: "Shortstown",
    county: "Bedfordshire",
    title: "Builders in Shortstown",
    description:
      "MGC Building Ltd is based at 52 Greycote, Shortstown, Bedford, MK42 0TU. Extensions, lofts, drives and garden rooms on our own doorstep.",
    distance: "This is our base. The yard address is 52 Greycote, MK42 0TU.",
    housing:
      "Shortstown sits by the old Cardington airship sheds. Greycote and the streets around it are mostly later housing, with the older part of the village still mixed in. Plots are often tighter than they look on a plan, and access is a side gate or a short drive.",
    jobs: "On our own streets the usual asks are rear extensions, garden rooms, new drives, and internal jobs where a wall needs to come out. We can often visit the same day.",
    note: "If you can see the sheds from the house, you are very close to us. Call and we will say when we can come.",
  },
  {
    slug: "bedford",
    name: "Bedford",
    county: "Bedfordshire",
    title: "Extension builders in Bedford",
    description:
      "House extensions, loft conversions and renovations in Bedford. MGC Building Ltd is based a few miles south in Shortstown. Call 07908 160142.",
    distance: "Bedford town centre is about 3 miles north of our Shortstown base.",
    housing:
      "Bedford has Victorian terraces, 1930s semis, and newer estates at places like Great Denham and the north of the town. The old streets have chimneys, narrow side returns and gardens that back onto other gardens. The newer estates have garages and shorter plots.",
    jobs: "Rear extensions on semis are the job we see most. Lofts where the roof pitch allows it, garage conversions, and full renovations when the house is tired. Drives and block paving when the concrete out front has failed.",
    note: "Parking and skip space matter in the town. We plan that on the visit, not on the first morning.",
  },
  {
    slug: "kempston",
    name: "Kempston",
    county: "Bedfordshire",
    title: "Builders in Kempston",
    description:
      "Extensions, garage conversions and block paving in Kempston. MGC Building Ltd, based in Shortstown, about 4 miles away.",
    distance: "Kempston is about 4 miles west of Shortstown, across the Great Ouse.",
    housing:
      "Kempston is a mix of older streets near the high street and later estates. A lot of the houses are semis with a garage and a rear garden that can take a single-storey extension.",
    jobs: "Side and rear extensions, garage conversions, and new drives to replace cracked concrete. Internal openings when the kitchen is stuck at the back of the house.",
    note: "We treat Kempston as local. It is a normal morning’s drive, not an outing.",
  },
  {
    slug: "wixams",
    name: "Wixams",
    county: "Bedfordshire",
    title: "Building work in Wixams",
    description:
      "Garden rooms, driveways and home improvements in Wixams. MGC Building Ltd is based a few minutes north in Shortstown.",
    distance: "Wixams is just south of us, a few minutes from Greycote.",
    housing:
      "Wixams is a new settlement. The houses are recent, the streets are planned, and many plots were never drawn for a big two-storey extension. That changes the work.",
    jobs: "Garden rooms, driveways, patios and internal changes are more common here than knocking the back of a 1930s semi off. Where an extension does fit, we still check the estate rules and planning before we price it as a simple job.",
    note: "Being close means small jobs still make sense. You do not need a huge extension to call.",
  },
  {
    slug: "cardington",
    name: "Cardington",
    county: "Bedfordshire",
    title: "Builders in Cardington",
    description:
      "Building work in Cardington, the village next to our Shortstown base. Extensions, repairs and drives from MGC Building Ltd.",
    distance: "Cardington is the next village, about a mile from 52 Greycote.",
    housing:
      "The sheds dominate the skyline. Around them the housing is a mix of village brick and newer closes. Some of the older houses sit where the outside look matters to the council.",
    jobs: "Extensions, roof work, drives and repairs. On the older houses we talk about planning permission before we talk about brick colour.",
    note: "If your house faces the sheds, we already know the lanes. Tell us the house name or the number.",
  },
  {
    slug: "elstow",
    name: "Elstow",
    county: "Bedfordshire",
    title: "Builders in Elstow",
    description:
      "Extensions and home improvements in Elstow, a short drive from MGC Building Ltd in Shortstown, Bedford.",
    distance: "Elstow is about 2 miles west of Shortstown.",
    housing:
      "Elstow still has the old village, plus newer housing around it. Gardens and access change street by street. Some jobs are a wheelbarrow down a path. Some have a proper drive.",
    jobs: "Rear extensions, loft work where the roof allows, and landscaping when the garden is being rebuilt with the house.",
    note: "Close enough that we can pop back if something needs a decision mid-job. That matters more than people think.",
  },
  {
    slug: "ampthill",
    name: "Ampthill",
    county: "Bedfordshire",
    title: "Builders in Ampthill",
    description:
      "House extensions and renovations in Ampthill. MGC Building Ltd is based in Shortstown, about 8 miles north. Call 07908 160142.",
    distance: "Ampthill is about 8 miles south of our base.",
    housing:
      "Ampthill is a market town with a conservation area around the centre. Georgian and Victorian houses sit on the old streets. Later estates sit on the edge, and they behave more like the rest of Bedfordshire.",
    jobs: "On the edge, extensions and lofts. In the centre, renovations and careful external work. We will not promise a start date until we know whether planning permission is needed.",
    note: "The centre is not the place for a guess. We would rather tell you to wait for the council than pull the front of a listed-looking house apart.",
  },
  {
    slug: "flitwick",
    name: "Flitwick",
    county: "Bedfordshire",
    title: "Builders in Flitwick",
    description:
      "Loft conversions and rear extensions in Flitwick. MGC Building Ltd, Shortstown, about 11 miles away.",
    distance: "Flitwick is about 11 miles south of Shortstown.",
    housing:
      "Flitwick grew with the railway. A lot of the housing is 1960s through to recent estates. Plots are modest, which is why people look up into the loft or push the back wall out.",
    jobs: "Loft conversions, single-storey rear extensions, and garage conversions on the estates that still have a garage you can give up.",
    note: "We cover Flitwick as part of south Bedfordshire. It is a booked visit, not a same-hour call-out.",
  },
  {
    slug: "biggleswade",
    name: "Biggleswade",
    county: "Bedfordshire",
    title: "Builders in Biggleswade",
    description:
      "Extensions, renovations and driveways in Biggleswade. MGC Building Ltd works from Shortstown, about 13 miles west.",
    distance: "Biggleswade is about 13 miles east of Shortstown.",
    housing:
      "Biggleswade is a market town with an older centre and large newer estates on the edge. The houses range from tight town plots to family semis with a drive.",
    jobs: "Extensions and renovations in the town, drives and garden work on the estates. We price the travel into the quote so it is not a surprise later.",
    note: "East Bedfordshire is inside the area we already cover. Say which part of town you are in when you call.",
  },
  {
    slug: "sandy",
    name: "Sandy",
    county: "Bedfordshire",
    title: "Builders in Sandy",
    description:
      "Home extensions and building work in Sandy, Bedfordshire. MGC Building Ltd, based in Shortstown. Call 07908 160142.",
    distance: "Sandy is about 9 miles east of our Shortstown base.",
    housing:
      "Sandy is smaller than Biggleswade. Older streets sit near the station and the town centre, with newer housing around them. Gardens are often long enough for a rear extension.",
    jobs: "Rear extensions, internal renovations, and new drives. Roof work when the house is being opened up anyway.",
    note: "It is an easy run on the A1 corridor from Bedford. We book Sandy visits in with other east-beds jobs where we can.",
  },
  {
    slug: "milton-keynes",
    name: "Milton Keynes",
    county: "Buckinghamshire",
    title: "Builders in Milton Keynes",
    description:
      "Extensions, garage conversions and driveways in Milton Keynes. MGC Building Ltd comes from Shortstown, Bedford, about 16 miles east.",
    distance: "Central Milton Keynes is about 16 miles west, along the A421.",
    housing:
      "Milton Keynes is estates and grid squares: 1970s houses through to new builds. Many were built with a garage and a short garden. That is why garage conversions and rear extensions are common, and why a full new house is less common for us here.",
    jobs: "Garage conversions, single-storey rear extensions, block paving and garden rooms. We are not a Milton Keynes firm with a yard in the city. We travel in for the job, and the quote says so.",
    note: "Tell us the estate or the grid square. MK is too big for a vague address.",
  },
  {
    slug: "st-neots",
    name: "St Neots",
    county: "Cambridgeshire",
    title: "Builders in St Neots",
    description:
      "House extensions and renovations in St Neots. MGC Building Ltd is based in Shortstown, Bedford, about 12 miles away.",
    distance: "St Neots is about 12 miles east of Shortstown.",
    housing:
      "St Neots is the largest town in Cambridgeshire. The centre is an older market town. Around it are large modern estates. Both need builders, for different reasons.",
    jobs: "In the centre, renovations and careful extensions. On the estates, lofts, garages and rear extensions. Drives where the original surface has gone.",
    note: "Cambridgeshire is one of the five counties we cover. St Neots is the closest large town on that side.",
  },
  {
    slug: "northampton",
    name: "Northampton",
    county: "Northamptonshire",
    title: "Building work in Northampton",
    description:
      "Extensions and renovations in Northampton from MGC Building Ltd, based in Shortstown, Bedford. Call 07908 160142.",
    distance: "Northampton is about 22 miles north of our base.",
    housing:
      "Northampton has terraces, semis and large modern estates. It is a city, not a village, so the job has to be worth the trip for both of us.",
    jobs: "Extensions, renovations and structural jobs. We take them when the work suits a crew coming from Bedford. We do not pretend to have a yard in Northampton.",
    note: "If the job is a small repair, a nearer builder will serve you better. If it is an extension or a proper renovation, call and we will say yes or no quickly.",
  },
  {
    slug: "wellingborough",
    name: "Wellingborough",
    county: "Northamptonshire",
    title: "Builders in Wellingborough",
    description:
      "Extensions and house renovations in Wellingborough. MGC Building Ltd works from Shortstown, about 16 miles south.",
    distance: "Wellingborough is about 16 miles north of Shortstown.",
    housing:
      "Terraces near the centre, semis, and newer estates on the edge. A lot of the older houses need a steel if the kitchen is going to open up, and a proper look at the drains before the back comes off.",
    jobs: "Rear extensions, opening up downstairs, and renovations. Drives on the houses that front a dropped kerb.",
    note: "Northamptonshire is inside our area. Wellingborough is a booked day, not a detour.",
  },
  {
    slug: "rushden",
    name: "Rushden",
    county: "Northamptonshire",
    title: "Builders in Rushden",
    description:
      "Home extensions and building work in Rushden and Higham Ferrers. MGC Building Ltd, Shortstown, Bedford.",
    distance: "Rushden is about 14 miles north-east of Shortstown.",
    housing:
      "Rushden and Higham Ferrers sit side by side. The housing is the same mix you see across north Bedfordshire and east Northants: older streets, then estates. Gardens are often long enough for a single-storey extension.",
    jobs: "Extensions, loft conversions where the roof allows, and landscaping when the garden is being done with the house.",
    note: "Say Rushden or Higham Ferrers when you call so we send the quote to the right street.",
  },
  {
    slug: "hitchin",
    name: "Hitchin",
    county: "Hertfordshire",
    title: "Builders in Hitchin",
    description:
      "Renovations and extensions in Hitchin, Hertfordshire. MGC Building Ltd is based in Shortstown, Bedford. Call 07908 160142.",
    distance: "Hitchin is about 18 miles south-east of our base.",
    housing:
      "Hitchin is an old market town. The centre has brick and timber houses, some of them sensitive. Later housing sits around the edges and is more straightforward to extend.",
    jobs: "On the edges, extensions and lofts. In the centre, renovations and jobs where the outside of the house may need permission. We check that before we promise a date.",
    note: "Hertfordshire is the fifth county we cover. Hitchin is the town we mean when someone asks about north Herts.",
  },
];

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}

export const countiesInOrder = [
  "Bedfordshire",
  "Buckinghamshire",
  "Cambridgeshire",
  "Northamptonshire",
  "Hertfordshire",
] as const;
