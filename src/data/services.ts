export type Service = {
  slug: string;
  name: string;
  nav: string;
  summary: string;
  photo: string;
  title: string;
  description: string;
  lede: string;
  body: string[];
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "home-extensions",
    name: "Home extensions",
    nav: "Home extensions",
    summary: "Single and two-storey extensions, with the steels and the brickwork.",
    photo: "w72",
    title: "Home extensions in Bedford and nearby",
    description:
      "Single-storey and two-storey house extensions from MGC Building Ltd in Shortstown. Steels, roofs, brickwork and the finish. Call 07908 160142.",
    lede: "A lot of our work is extensions. Single storey, two storey, side returns, and the steels that hold the house up when a wall comes out.",
    body: [
      "The photos on this site are mostly real extension jobs: trenches, blockwork, roof timbers, and the finished brick with the doors in. That is the work, not a show home.",
      "We look at how you want to use the new room, where the drains and the neighbours sit, and whether a wall can come out. Then we price it in writing.",
      "Most extensions need building regulations approval. Some also need planning permission, especially on older streets and in conservation areas. We tell you which one applies before we book a start date. The council makes the decision.",
    ],
    includes: [
      "Single-storey rear and side extensions",
      "Two-storey additions tied into the existing house",
      "Steels and openings when a wall comes out",
      "New roofs, flashings and brickwork to match",
      "Making good so the new part joins the old house",
    ],
  },
  {
    slug: "loft-conversions",
    name: "Loft conversions",
    nav: "Loft conversions",
    summary: "A room in the roof, with stairs and windows that meet the rules.",
    photo: "w12",
    title: "Loft conversions from a Bedford builder",
    description:
      "Loft conversions with roof windows, stairs and a room you can use. MGC Building Ltd, based in Shortstown, Bedford. Call 07908 160142.",
    lede: "A loft adds a room without taking the garden. The roof has to be strong enough, the stairs have to fit, and the room has to pass building regulations.",
    body: [
      "We open the roof, fit the structure, the stairs and the windows, and leave a finished room. Roof windows are a common choice on the jobs we photograph. A dormer is possible where the roof shape and the planning rules allow it.",
      "Not every loft is worth converting. If the head height is too low, or the stairs would wreck the floor below, we will say so on the visit.",
    ],
    includes: [
      "Roof structure and floor strength",
      "Roof windows, or a dormer where it is allowed",
      "Stairs into the new room",
      "Insulation, plasterboard and making good",
      "Building regulations for the conversion",
    ],
  },
  {
    slug: "new-builds",
    name: "New builds",
    nav: "New builds",
    summary: "From the groundworks to the shell, priced from real drawings.",
    photo: "w41",
    title: "New build homes",
    description:
      "New house building from the groundworks up. MGC Building Ltd works from Shortstown across Bedfordshire and nearby counties. Call 07908 160142.",
    lede: "A new house is a long job. We run the site from the groundworks through the shell, and on to the fit-out when that is part of the quote.",
    body: [
      "You need drawings, and you usually need planning permission, before a new house can start. If you already have those, we can price the build. If you are still at the sketch stage, we can tell you what a builder needs to see before a price means anything.",
      "We do not sell plots, and we do not claim a warranty scheme we have not put in writing on your job. Ask us what is covered when we quote.",
    ],
    includes: [
      "Foundations and the ground slab",
      "Brick and block shell",
      "Roof structure and covering",
      "First and second fix, when it is in the quote",
      "Working to the approved drawings",
    ],
  },
  {
    slug: "renovations",
    name: "Renovations",
    nav: "Renovations",
    summary: "Strip-out, new openings, plaster, and the rooms that come after.",
    photo: "w01",
    title: "House renovations and refits",
    description:
      "House renovations in Bedford: strip-outs, new openings, kitchens as part of a wider job, plastering and making good. MGC Building Ltd.",
    lede: "Some houses need more than one trade. We take on the strip-out, the structure, and the work that makes the rooms usable again.",
    body: [
      "Richard’s review describes a whole house that was extended, with chimney breasts taken out, then plaster, paint and paper. That is the sort of renovation we mean: one crew, one plan, the messy parts included.",
      "Kitchens show up in our photos because they are often part of a bigger job, not a standalone unit-swap. Bathrooms are the same. If you only want a tap changed, we are probably the wrong firm. If the room is coming apart, call us.",
    ],
    includes: [
      "Strip-out and disposal",
      "Chimney breast removal where the structure allows it",
      "New openings and steels",
      "Plastering and making good",
      "Kitchens and bathrooms as part of the wider job",
    ],
  },
  {
    slug: "garage-conversions",
    name: "Garage conversions",
    nav: "Garage conversions",
    summary: "A garage turned into a room, not a stud wall behind the old door.",
    photo: "w29",
    title: "Garage conversions",
    description:
      "Garage conversions into rooms you can use. Insulation, a new front if the door goes, and a proper finish. MGC Building Ltd, Bedford.",
    lede: "Andy Haydon’s Google review is about a garage conversion. He called it capable, quick and honest. That is the job: turn the garage into a room, and do it properly.",
    body: [
      "A garage is cold and the floor is often lower than the house. A real conversion deals with the insulation, the damp, the floor level and the front wall if the door comes out. A stud wall behind the old door is not a conversion.",
      "Many garages can be converted under permitted development, but not all. We check the likely rules for your house before we start.",
    ],
    includes: [
      "Taking the door out and building a new front wall",
      "Insulation and a usable floor level",
      "Electrics and plaster ready for decoration",
      "Joining the room to the rest of the house",
    ],
  },
  {
    slug: "garden-rooms",
    name: "Garden rooms",
    nav: "Garden rooms",
    summary: "A base that will not move, then a timber room in the garden.",
    photo: "w75",
    title: "Garden rooms",
    description:
      "Garden rooms with a proper base, built by MGC Building Ltd from Shortstown, Bedford. Call 07908 160142 for a free quote.",
    lede: "A garden room is a simpler build than an extension. It still needs a base that will not move, and a building that keeps the weather out.",
    body: [
      "We set out the slab and put up the timber building. If you want power, light and a floor you can live with in January, say so at the quote. A bare shell and a finished room are different prices.",
      "Some garden rooms need planning permission because of the size or how close they sit to the boundary. We will tell you if yours is likely to.",
    ],
    includes: [
      "A concrete or paved base",
      "Timber garden buildings",
      "Doors, windows and a weatherproof shell",
      "Power, when you ask for it in the quote",
    ],
  },
  {
    slug: "groundworks",
    name: "Groundworks",
    nav: "Groundworks",
    summary: "Trenches, slabs, drains and the digger work before the brick starts.",
    photo: "w60",
    title: "Groundworks",
    description:
      "Foundations, drainage and site clearance for extensions and new builds. MGC Building Ltd, Shortstown, Bedford.",
    lede: "Groundworks are the part you do not see for long. If the trenches and the drains are wrong, the rest of the build pays for it.",
    body: [
      "Our photos show diggers in tight gardens, trench foundations, hardcore, and tree stumps coming out before a base goes down. That is normal on a Bedfordshire plot, where access is often a side gate.",
      "We do this as part of our own extensions and new builds, and we can price groundworks on their own if you already have a plan.",
    ],
    includes: [
      "Reduced levels and site clearance",
      "Trench and strip foundations",
      "Hardcore, blinding and slabs",
      "Drainage runs and connections",
      "Digger work in tight gardens",
    ],
  },
  {
    slug: "driveways-patios",
    name: "Driveways, patios and block paving",
    nav: "Driveways and patios",
    summary: "Block paving, slabs and kerbs, on a base that can take the weight.",
    photo: "w88",
    title: "Driveways, patios and block paving",
    description:
      "Block paving, patios and kerbs in Bedford and nearby. See a real before-and-after drive from MGC Building Ltd. Call 07908 160142.",
    lede: "We lay block paving, slabs and kerbs. The before-and-after on our home page is one front drive: sand and stacks of blocks, then a finished herringbone with a charcoal kerb.",
    body: [
      "A drive fails when the base is thin or the water has nowhere to go. We dig out, lay a proper base, set the kerbs, and lay the blocks to a fall that takes the rain off the house.",
      "Emil Zaman booked a driveway and wrote that the price was fair and the work was honest. Bring the photos of your front if you want a quote before the visit.",
    ],
    includes: [
      "Block paving in herringbone and other bonds",
      "Kerbs and edgings",
      "Patio slabs",
      "Dig-out and a compacted base",
      "Falls so water leaves the house",
    ],
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    nav: "Landscaping",
    summary: "Levels, paving, lawns and the heavy work a garden needs first.",
    photo: "w59",
    title: "Landscaping",
    description:
      "Garden landscaping: levels, paving, lawns and the heavy digging. MGC Building Ltd, based in Shortstown, Bedford.",
    lede: "We take on garden builds as well as the house. Levels, paving, lawns, and the digging that has to happen first.",
    body: [
      "A Bark review from Nicole describes porcelain slabs, a new lawn and a pond, and a crew that left the site tidy. That is the standard we are hired for.",
      "If the garden also needs a wall, steps or a base for a garden room, we can price that with the rest instead of sending you to three different firms.",
    ],
    includes: [
      "Levels and excavation",
      "Porcelain and other paving",
      "Lawns and soil preparation",
      "Ponds and heavier garden builds",
      "Walls and steps where the garden needs them",
    ],
  },
  {
    slug: "design",
    name: "Design help",
    nav: "Design help",
    summary: "What will fit the house, what the walls can take, and a straight price.",
    photo: "w50",
    title: "Design help before the build",
    description:
      "Practical design help before a build: what will fit, what the walls can take, and what it is likely to cost. MGC Building Ltd, Bedford.",
    lede: "Some jobs start with a sketch, not a digger. We help you work out what will fit the house, what the structure can take, and what it is likely to cost.",
    body: [
      "If you already have drawings from an architect or a designer, we can price and build from those. If you do not, we can still walk the house with you and mark up a simple plan a quoter can use.",
      "We are builders, not a planning consultancy. We will tell you if a job is likely to need planning permission or building regulations approval. We do not replace the council, and we do not charge as if we did.",
    ],
    includes: [
      "A site visit to see what the house can take",
      "Plain advice on layout, steels and stairs",
      "Pricing from your drawings, or from a marked-up plan",
      "A clear list of what the council is likely to need",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
