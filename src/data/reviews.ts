export type Review = {
  name: string;
  date: string;
  source: "Google" | "Bark" | "Yell";
  stars?: number;
  text: string;
  reply?: string;
  job?: string;
};

export const googleReviews: Review[] = [
  {
    name: "vena harwood",
    date: "27 May 2025",
    source: "Google",
    stars: 5,
    text: "Quality work, completed in a timely manner. They are friendly and tidy up after themselves. Would recommend! Found out about this company after hiring tools which was easy and stress free.",
  },
  {
    name: "Abiola Fajojuto",
    date: "14 June 2025",
    source: "Google",
    stars: 5,
    text: "I saw then on Facebook marketplace, i hired a roller from them, good Communication fast delivery and reliable no sarcasm. I definitely recommend them if you want to hire any DIY Materials.",
  },
  {
    name: "MasterChief117",
    date: "16 May 2025",
    source: "Google",
    stars: 2,
    text: "Hire tools before with MGC not any problem at all communication proper service. Now I want Hire again tool from them unfortunately they not reply.",
  },
  {
    name: "Emil Zaman",
    date: "23 May 2024",
    source: "Google",
    stars: 5,
    text: "Good Honest Business, Not a RIP Off! Quality Craftsmanship, takes time to consider your designs and provides suggestions for improvements. Explains building regulations to you etc so you know exactly what's going on and what can be achieved. 5*!",
    reply:
      "Hi Emil Zaman, Thank you for your kind words! We're thrilled to hear you appreciated our craftsmanship and guidance. It's our goal to ensure you feel informed and supported throughout the process. We look forward to working with you again on future projects. Regards, MGC Building Ltd.",
  },
  {
    name: "Andy Haydon",
    date: "10 May 2024",
    source: "Google",
    stars: 5,
    job: "Garage conversion",
    text: "Very capable, quick, honest and efficient - garage conversion looks great! Highly recommended.",
  },
];

export const otherReviews: Review[] = [
  {
    name: "Nicole",
    date: "6 May 2024",
    source: "Bark",
    job: "Landscaping",
    text: "Thank you to Maciek and his team for creating our amazing landscaping project. It's absolutely perfect, porcelain slabs, new lawn and pond beautifully! A fantastic team to have on site with us, very friendly, hard workers and really tidy. We will definitely recommend you to others!",
  },
  {
    name: "Richard",
    date: "21 May 2024",
    source: "Bark",
    job: "House extension and renovation",
    text: "I had my whole house renovated and extended by MGC Building, they been amazing. House extension, 4 chimneys breast removed, plastering, painting, wallpaper and loads more work has been done by them. I was very impressed how fast and efficient they worked, and at a very reasonable price. The job has been done to a high standard, everything was done just the way I wanted it. They has not only been patient and understanding, but also delivered genuine advice and ideas when needed. He ensured he was responsive, punctual and met customer satisfaction. Him and his team do a great job. I will certainly be calling out again in the future.",
  },
  {
    name: "Emil Zaman",
    date: "22 May 2024",
    source: "Bark",
    job: "Driveway",
    text: "Honest, Good Quality Craftmanship, And not a RIP OFF!",
  },
  {
    name: "Sue",
    date: "11 July 2024",
    source: "Bark",
    job: "Cabin front",
    text: "Marie did a great job replacing the front of my cabin. He was professional, friendly and helpful and even stayed late on a Saturday to make sure the job was completed on time. I would recommend him.",
  },
  {
    name: "Anna",
    date: "17 May 2024",
    source: "Bark",
    text: "Many thanks to Maciek and his team! You paid close attention to details on our tight construction schedule and made sure all aspects of the job were completed on time. You always kept me informed and you were very fair when unexpected issues came up. Your high quality work and your excellent service gave us the results we expected. I would recommend them 100%!",
  },
  {
    name: "Amy",
    date: "18 May 2024",
    source: "Bark",
    text: "MGC Building have been amazing! They have worked efficiently and always kept things tidy and as clean as possible. Everyone has been kind and helpful and I have no hesitation in recommending them for any building work.",
  },
  {
    name: "James",
    date: "16 May 2024",
    source: "Bark",
    text: "It was great working with a group of builders who gave us the benefit of their expertise during the build process. The team were courteous and always accommodating when we asked for additional work. All in all a great experience. Will definitely use again.",
  },
  {
    name: "Jakub",
    date: "17 May 2024",
    source: "Bark",
    text: "We wanted to say thank you for all the hard work you and your crew put into helping us with our house. We recognize this has been a frustrating problem, but we want you to know we appreciate the effort you have put in to correct our problem. The recent work done on the house looks great. Thanks again!",
  },
  {
    name: "Nick",
    date: "16 May 2024",
    source: "Bark",
    text: "Hard worker very friendly & kept me informed at all times, neat & tidy, would 100% use again.",
  },
  {
    name: "Ross",
    date: "9 July 2024",
    source: "Yell",
    text: "Maciej was very respectful and patient with us during the project. His workmanship was very good and we're very happy with the end result. Would definitely recommend him.",
  },
  {
    name: "Mihail",
    date: "3 May 2024",
    source: "Yell",
    job: "House extension",
    text: "Maciej worked on our house extension. The work was done with good knowledge and skills in due time and fairly priced. Would definitely recommend them.",
  },
];
