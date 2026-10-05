export const site = {
  name: "MGC Building Ltd",
  legalName: "MGC Building Ltd",
  url: "https://www.mgcbuilding.com",
  tagline: "Extensions, lofts and home building from Shortstown.",
  description:
    "Bedford builders based in Shortstown. Extensions, loft conversions, new homes, driveways and landscaping across five counties. Call 07908 160142.",
  phoneDisplay: "07908 160142",
  phoneTel: "+447908160142",
  email: "info@mgcbuilding.com",
  hireUrl: "https://www.mgc-hire.co.uk/",
  address: {
    street: "52 Greycote",
    locality: "Shortstown",
    region: "Bedford",
    county: "Bedfordshire",
    postcode: "MK42 0TU",
    country: "United Kingdom",
    countryCode: "GB",
  },
  geo: {
    lat: 52.1097944,
    lng: -0.4339148,
  },
  mapsUrl: "https://maps.app.goo.gl/Ji5Sru3mRugR8wUM7",
  mapsEmbed: "https://maps.google.com/maps?q=52.1097944,-0.4339148&z=15&output=embed",
  reviewsUrl:
    "https://search.google.com/local/reviews?placeid=ChIJA8l2o4C2d0gR19J1mhOlv6w",
  placeId: "ChIJA8l2o4C2d0gR19J1mhOlv6w",
  googleRating: 4.4,
  googleReviewCount: 5,
  founded: 2017,
  foundedLabel: "August 2017",
  director: "Maciej Zielonka",
  hours: [
    { days: "Monday to Saturday", hours: "7:30am to 6:30pm" },
    { days: "Sunday", hours: "Closed" },
  ],
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:30",
      closes: "18:30",
    },
  ],
  counties: [
    "Bedfordshire",
    "Buckinghamshire",
    "Cambridgeshire",
    "Northamptonshire",
    "Hertfordshire",
  ],
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/mgcbuilding",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61553789703180",
    },
    {
      label: "Bark",
      href: "https://www.bark.com/en/gb/company/mgc-building-ltd/POeVn/",
    },
    {
      label: "MyBuilder",
      href: "https://www.mybuilder.com/profile/mgc_building_ltd",
    },
  ],
} as const;

export const steps = [
  {
    n: "01",
    title: "Tell us the job",
    text: "Call, email or send a WhatsApp. Give us the address and what you want done. Photos of the house help.",
  },
  {
    n: "02",
    title: "We visit and quote",
    text: "We come and look. The visit and the written quote are free. We say if the job is likely to need planning permission or building regulations approval.",
  },
  {
    n: "03",
    title: "We agree a start, then build",
    text: "You get dates before we start. On a lived-in house we keep a way through and clear up as we go.",
  },
] as const;

export const faqs = [
  {
    q: "Do you come out for a free quote?",
    a: "Yes. Call 07908 160142 or email info@mgcbuilding.com. There is no fee for the first visit or the written quote.",
  },
  {
    q: "Where do you work?",
    a: "We are based at 52 Greycote, Shortstown, Bedford, MK42 0TU. We take jobs across Bedfordshire, Buckinghamshire, Cambridgeshire, Northamptonshire and Hertfordshire.",
  },
  {
    q: "Will the job need building regulations?",
    a: "Most extensions, loft conversions and jobs that take a wall out do. Building regulations are the safety rules. We tell you what applies and we build to that standard. If the street also needs planning permission, we say so before we start. The council makes the decision.",
  },
  {
    q: "Do you hire out tools as well?",
    a: "Yes. People hire kit from us, such as rollers, as well as booking building work. Ask when you call, or see the tool hire site.",
  },
  {
    q: "Can we stay in the house?",
    a: "On most extensions and renovations, yes. We keep routes clear and tidy as we go. A full strip-out or a new build is different. We will tell you which one yours is.",
  },
  {
    q: "What are your hours?",
    a: "Monday to Saturday, 7:30am to 6:30pm. We are closed on Sunday.",
  },
] as const;

export function localBusinessSchema() {
  return {
    "@type": ["GeneralContractor", "HomeAndConstructionBusiness"],
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    image: [
      `${site.url}/og.jpg`,
      `${site.url}/images/work/w72.webp`,
      `${site.url}/images/logo.png`,
    ],
    logo: `${site.url}/images/logo.png`,
    telephone: site.phoneTel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postcode,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.mapsUrl,
    areaServed: site.counties.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    openingHoursSpecification: site.openingHours.map((row) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: row.days,
      opens: row.opens,
      closes: row.closes,
    })),
    foundingDate: "2017-08-09",
    founder: {
      "@type": "Person",
      name: site.director,
    },
    sameAs: [site.mapsUrl, site.hireUrl, ...site.socials.map((s) => s.href)],
    knowsAbout: [
      "Home extensions",
      "Loft conversions",
      "New build homes",
      "Garage conversions",
      "Driveways and block paving",
      "Landscaping",
      "Groundworks",
    ],
  };
}
