export const site = {
  name: "AFII Corporate Advisors",
  legalName: "AFII Corporate Advisors Limited",
  country: "India",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.afiicorp.com",
  groupUrl: "https://afii.eu/",
  ukUrl: "https://afiicapital.com/",
  contactEmail: "reachus@afiicorp.com",
  privacyEmail: "reachus@afiicorp.com",
  address: "Madam Sara Mathew Lane, B 1/14, Safdarjung Enclave, New Delhi 110029, India",
  telephoneLabel: "+91 11 4600 3500",
  telephone: "+911146003500",
  pendingVerification: ["AFII Group master legal relationships", "India entity and CIN", "Publication rights for external network portraits", "Authority to publish advisory and transaction claims", "Grievance/privacy contact details"]
};
export const navItems = [
  { name: "About", href: "/about" },
  { name: "Expertise", href: "/expertise" },
  { name: "Industries", href: "/industries" },
  { name: "Transactions", href: "/transactions" },
  { name: "AFII Group", href: "/group" },
  { name: "People & Offices", href: "/offices" },
];
export const services = [
  {slug:"infrastructure-project-advisory",name:"Infrastructure Project Advisory",brief:"Project development, bid strategy and financing of infrastructure assets.",image:"/media/v3/service-infrastructure.jpg",intro:"AFII Corporate Advisors' Indian infrastructure practice has supported project development, commercial evaluation and coordination among public bodies, private developers and specialist firms. Our work encompasses roads, railways, energy and urban infrastructure, with an emphasis on credible bid structures and viable implementation routes.",what:["Infrastructure project appraisal and development","PPP and concession approaches","Risk review before bidding","Project financial and commercial structuring","Institutional and technical partner coordination"]},
  {slug:"structured-finance-investments",name:"Investments & Structured Finance",brief:"Project debt, mezzanine capital and investment structures for real assets.",image:"/media/v3/service-finance.jpg",intro:"AFII has experience in mezzanine and debt investment structures for energy and transport assets. The group has also worked on structured trade finance and tailored equity and debt approaches for infrastructure businesses. Any specific financing, investment or regulated activity depends on mandate, counterparty and local requirements.",what:["Project and infrastructure finance","Structured debt, mezzanine and equity solutions","Trade finance and liquidity structures","Refinancing and asset-backed finance","Capital structure reviews"]},
  {slug:"project-incubation",name:"Project Incubation",brief:"Turning early-stage infrastructure proposals into structured opportunities.",image:"/media/v3/service-incubation.jpg",intro:"AFII undertakes early-stage project incubation across transportation, energy, wastewater and clean technology. Our team works with global public enterprises and local stakeholders on Public–Public Partnership (PuP) initiatives in infrastructure.",what:["Project origination and concept development","Early-stage commercial evaluation","Public–Public Partnership (PuP) engagement","Stakeholder and institutional alignment","Partner identification and handover preparation"]},
  {slug:"bid-consortium-advisory",name:"Bid & Consortium Advisory",brief:"Bringing complementary partners together for competitive project bids.",image:"/media/v3/service-bid.jpg",intro:"AFII supports mid-cap construction businesses with global partner identification, PPP bid structuring and early risk identification. The objective is to evaluate commercial feasibility before commitments are made and bring relevant technical and financial capabilities to a bid.",what:["Bid strategy and qualification","Consortium partner selection","Commercial and risk review","PPP and concession positioning","Coordination across financial and technical teams"]},
  {slug:"public-enterprise-partnerships",name:"Government & Public Enterprise Advisory",brief:"Cross-institutional coordination for public infrastructure programmes.",image:"/media/v3/service-public.jpg",intro:"AFII's India experience includes collaboration with international public enterprises, local governments and citizen stakeholders to develop infrastructure concepts. The PuP approach supports collaboration for projects with significant capital needs and long-term public-service impact.",what:["Government and public-enterprise collaboration","Project and procurement strategy","Public-institution stakeholder coordination","Programmatic infrastructure development","PPP and PuP structuring support"]}
];
export const industries = [
  {title:"Transport & Mobility",text:"Railways, metro, highways, airports, freight corridors and associated infrastructure.",image:"/media/v3/industry-transport.jpg",practice:"infrastructure-project-advisory"},
  {title:"Energy & Power",text:"Conventional generation, solar, wind, electricity networks and energy-related investment.",image:"/media/v3/industry-energy.jpg",practice:"project-incubation"},
  {title:"Water & Wastewater",text:"Water supply, recycling, wastewater and essential utility systems.",image:"/media/v3/industry-water.jpg",practice:"public-enterprise-partnerships"},
  {title:"Industry & Manufacturing",text:"Industrial assets, equipment, paper production and structured trade opportunities.",image:"/media/v3/industry-manufacturing.jpg",practice:"structured-finance-investments"},
  {title:"Urban Infrastructure",text:"Housing and real estate development, public facilities and municipal programmes.",image:"/media/v3/industry-urban.jpg",practice:"infrastructure-project-advisory"},
  {title:"Aviation & Logistics",text:"Specialised equipment, aircraft leasing and transportation-linked finance.",image:"/media/v3/industry-aviation.jpg",practice:"structured-finance-investments"},
];
export const groupCompanies = [
  {name:"AFII Corporate Advisors Limited",country:"India",city:"New Delhi",role:"India corporate & infrastructure advisory",url:"https://www.afiicorp.com/",kind:"India entity"},
  {name:"AFII Capital Partners Limited",country:"United Kingdom",city:"London",role:"Structured finance and international advisory",url:"https://afiicapital.com/",kind:"International firm"},
  {name:"AFII Structured Finance GmbH",country:"Germany",city:"Eschborn / Frankfurt",role:"Structured finance practice",url:"https://afiicapital.com/contact/",kind:"International firm"},
  {name:"AFII Middle East LLC FZ",country:"United Arab Emirates",city:"Dubai",role:"Middle East client and capital-market engagement",url:"https://afiicapital.com/contact/",kind:"International firm"},
];
export type NetworkPresence = {
  place: string;
  country: string;
  detail: string;
  contact: string;
  address: string;
  type: string;
  mapAddress?: string;
};
export const networkPresences: NetworkPresence[] = [
  {place:"New Delhi",country:"India",detail:"AFII Corporate Advisors Limited · India office",contact:"Vinit Vidyarthi · Head of India Business; K. Aakash · Director",address:"Madam Sara Mathew Lane, B1/14 Safdarjung Enclave, New Delhi 110029, India",mapAddress:"B1/14 Safdarjung Enclave, New Delhi 110029, India",type:"India office"},
  {place:"Mumbai",country:"India",detail:"Infrastructure advisory",contact:"Abhijit K. Avarsekar · Senior Advisor, Infrastructure",address:"The A-Club, Suite W4, One IndiaBulls, Tower 2A, 8th Floor, Lower Parel, Mumbai 400013, India",mapAddress:"One IndiaBulls Tower 2A, Lower Parel, Mumbai 400013, India",type:"India office"},
  {place:"Frankfurt / Eschborn",country:"Germany",detail:"AFII Structured Finance GmbH",contact:"Dr. Mahesh M. Gandhi; Kirti Gulati",address:"Alfred-Herrhausen-Allee 3-5, 65760 Eschborn, Germany",mapAddress:"Alfred-Herrhausen-Allee 3-5, 65760 Eschborn, Germany",type:"International office"},
  {place:"London",country:"United Kingdom",detail:"AFII Capital Partners Limited",contact:"AFII UK team",address:"Kemp House, 124-128 City Road, London EC1V 2NX, United Kingdom",mapAddress:"Kemp House, 124-128 City Road, London EC1V 2NX, UK",type:"International office"},
  {place:"Zug",country:"Switzerland",detail:"International network",contact:"AFII international network",address:"Gotthardstrasse 14, 6300 Zug, Switzerland",mapAddress:"Gotthardstrasse 14, 6300 Zug, Switzerland",type:"International office"},
  {place:"Dubai",country:"United Arab Emirates",detail:"AFII Middle East LLC FZ",contact:"Kirti Gulati",address:"Meydan Free Zone, Dubai, United Arab Emirates",mapAddress:"Meydan Free Zone, Dubai, UAE",type:"International office"},
  {place:"Munich",country:"Germany",detail:"International partner network",contact:"Johann Mair; Ralph Ketelhut",address:"Munich, Germany",type:"Partner network"},
  {place:"Helsinki",country:"Finland",detail:"Regional business partner network",contact:"Jonathan Pallares",address:"Helsinki, Finland",type:"Partner network"},
  {place:"Tel Aviv",country:"Israel",detail:"Regional business network",contact:"Rafi Peled",address:"Tel Aviv, Israel",type:"Partner network"},
  {place:"Vietnam",country:"Vietnam",detail:"Far East business network",contact:"Nguyen Thi Thanh Nga",address:"Vietnam",type:"Partner network"},
];
export const people = [
  {name:"Vinit Vidyarthi",role:"Head of India Business",place:"New Delhi",image:"/media/people/vinit-vidyarthi.jpeg",group:"India"},
  {name:"Abhijit K. Avarsekar",role:"Senior Advisor · Infrastructure",place:"Mumbai",image:"/media/people/abhijit-avar-sekar.png",group:"India"},
  {name:"Punam Bhasin",role:"Director — AFII Corp (India)",place:"India",image:"/media/people/punam-bhasin.jpg",group:"India"},
  {name:"K. Aakash",role:"Director",place:"New Delhi",image:"/media/people/kumar-aakash.png",group:"India"},
  {name:"Dr. Mahesh M. Gandhi",role:"Managing Director & President",place:"Frankfurt",image:"/media/people/mahesh-gandhi.png",group:"International network"},
  {name:"Kirti Gulati",role:"Managing Director & Vice President",place:"Frankfurt / UAE",image:"/media/people/kirti-gulati.jpg",group:"International network"},
  {name:"Sidhartha S. Gandhi",role:"Government Advisory & Infrastructure Development",place:"India",image:"/media/people/sidhartha-gandhi.jpeg",group:"International network"},
  {name:"Nguyen Thi Thanh Nga",role:"Vietnam business lead",place:"Vietnam",image:"/media/people/nguyen-thi-thanh-nga.png",group:"International network"},
];
