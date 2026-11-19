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
  {slug:"infrastructure-project-advisory",name:"Infrastructure Project Advisory",brief:"Project development, bid strategy and financing of infrastructure assets.",image:"/media/v3/service-infrastructure.jpg",origin:"https://www.afiicorp.com/bidadvisory/",intro:"AFII Corporate Advisors' Indian infrastructure practice has supported project development, commercial evaluation and coordination among public bodies, private developers and specialist firms. The published scope includes roads, railways, energy and urban infrastructure, with an emphasis on credible bid structures and viable implementation routes.",what:["Infrastructure project appraisal and development","PPP and concession approaches","Risk review before bidding","Project financial and commercial structuring","Institutional and technical partner coordination"]},
  {slug:"structured-finance-investments",name:"Investments & Structured Finance",brief:"Project debt, mezzanine capital and investment structures for real assets.",image:"/media/v3/service-finance.jpg",origin:"https://www.afiicorp.com/",intro:"AFII's published history describes channeling mezzanine and debt investments in energy and transportation assets. The group has also worked on structured trade finance and tailored equity and debt approaches for infrastructure businesses. Any specific financing, investment or regulated activity depends on mandate, counterparty and local requirements.",what:["Project and infrastructure finance","Structured debt, mezzanine and equity solutions","Trade finance and liquidity structures","Refinancing and asset-backed finance","Capital structure reviews"]},
  {slug:"project-incubation",name:"Project Incubation",brief:"Turning early-stage infrastructure proposals into structured opportunities.",image:"/media/v3/service-incubation.jpg",origin:"https://www.afiicorp.com/",intro:"AFII's original India website describes early-stage incubation across transportation, energy, wastewater and clean technology. It also describes working with global public enterprises and local stakeholders on Public–Public Partnership (PuP) initiatives in infrastructure.",what:["Project origination and concept development","Early-stage commercial evaluation","Public–Public Partnership (PuP) engagement","Stakeholder and institutional alignment","Partner identification and handover preparation"]},
  {slug:"bid-consortium-advisory",name:"Bid & Consortium Advisory",brief:"Bringing complementary partners together for competitive project bids.",image:"/media/v3/service-bid.jpg",origin:"https://www.afiicorp.com/bidadvisory/",intro:"AFII describes supporting mid-cap construction businesses with global partner identification, PPP bid structuring and early risk identification. The objective is to evaluate commercial feasibility before commitments are made and bring relevant technical and financial capabilities to a bid.",what:["Bid strategy and qualification","Consortium partner selection","Commercial and risk review","PPP and concession positioning","Coordination across financial and technical teams"]},
  {slug:"public-enterprise-partnerships",name:"Government & Public Enterprise Advisory",brief:"Cross-institutional coordination for public infrastructure programmes.",image:"/media/v3/service-public.jpg",origin:"https://www.afiicorp.com/about/",intro:"AFII's India experience includes engagement with international public enterprises, local governments and citizen stakeholders to develop infrastructure concepts. Published material highlights the PuP approach for projects with significant capital needs and long-term public-service impact.",what:["Government and public-enterprise collaboration","Project and procurement strategy","Public-institution stakeholder coordination","Programmatic infrastructure development","PPP and PuP structuring support"]}
];
export const industries = [
  {title:"Transport & Mobility",text:"Railways, metro, highways, airports, freight corridors and associated infrastructure.",image:"/media/v3/industry-transport.jpg",practice:"infrastructure-project-advisory"},
  {title:"Energy & Power",text:"Conventional generation, solar, wind, electricity networks and energy-related investment.",image:"/media/v3/industry-energy.jpg",practice:"project-incubation"},
  {title:"Water & Wastewater",text:"Water supply, recycling, wastewater and essential utility systems.",image:"/media/v3/industry-water.jpg",practice:"public-enterprise-partnerships"},
  {title:"Industry & Manufacturing",text:"Industrial assets, equipment, paper production and structured trade opportunities.",image:"/media/v3/industry-manufacturing.jpg",practice:"structured-finance-investments"},
  {title:"Urban Infrastructure",text:"Housing and real estate development, public facilities and municipal programmes.",image:"/media/v3/industry-urban.jpg",practice:"infrastructure-project-advisory"},
  {title:"Aviation & Logistics",text:"Specialised equipment, aircraft leasing and transportation-linked finance.",image:"/media/v3/industry-aviation.jpg",practice:"structured-finance-investments"},
];
/** Group names and offices are from afiicapital.com published contact/group/team pages.
 * AFII.eu could not be independently inspected at packaging time. Do not imply all are one company.
 */
export const groupCompanies = [
  {name:"AFII Corporate Advisors Limited",country:"India",city:"New Delhi",role:"India corporate & infrastructure advisory",url:"https://www.afiicorp.com/",kind:"India entity"},
  {name:"AFII Capital Partners Limited",country:"United Kingdom",city:"London",role:"Structured finance and international advisory",url:"https://afiicapital.com/",kind:"International firm"},
  {name:"AFII Structured Finance GmbH",country:"Germany",city:"Eschborn / Frankfurt",role:"Structured finance practice",url:"https://afiicapital.com/contact/",kind:"International firm"},
  {name:"AFII Middle East LLC FZ",country:"United Arab Emirates",city:"Dubai",role:"Middle East client and capital-market engagement",url:"https://afiicapital.com/contact/",kind:"International firm"},
];
export const networkPresences = [
  {place:"New Delhi",country:"India",detail:"AFII Corporate Advisors Limited · India representative office",contact:"K. Aakash · Representative Director; Vinit Vidyarthi · India Senior Advisor",address:"Madam Sara Mathew Lane, B 1/14, Safdarjung Enclave, New Delhi 110029",type:"India office"},
  {place:"Mumbai",country:"India",detail:"Infrastructure advisory",contact:"Abhijit K. Avarsekar · India infrastructure contact",address:"The A-Club, Suite W4, One IndiaBulls, Tower 2A, 8th Floor, Lower Parel, Mumbai 400013",type:"India office"},
  {place:"Frankfurt / Eschborn",country:"Germany",detail:"AFII Structured Finance GmbH",contact:"Dr. Mahesh M. Gandhi; Kirti Gulati · Managing Directors",address:"Alfred-Herrhausen-Allee 3–5, 65760 Eschborn",type:"International office"},
  {place:"London",country:"United Kingdom",detail:"AFII Capital Partners Limited",contact:"Contact via AFII Capital",address:"124–128 City Road, London EC1V 2NX",type:"International office"},
  {place:"Dubai",country:"United Arab Emirates",detail:"AFII Middle East LLC FZ · Meydan Free Zone",contact:"Kirti Gulati · Published business lead",address:"Meydan Free Zone, Dubai",type:"International office"},
  {place:"Munich",country:"Germany",detail:"K3M and partners referenced in the public network",contact:"Johann Mair; Ralph Ketelhut · Published senior partner network",address:"Location/meeting details on request",type:"Partner network"},
  {place:"Helsinki",country:"Finland",detail:"Regional business partner network",contact:"Jonathan Pallares · Published business partner",address:"Contact via AFII Capital",type:"Representative network"},
  {place:"Tel Aviv",country:"Israel",detail:"Israel business contact",contact:"Rafi Peled · Published senior partner",address:"Contact via AFII Capital",type:"Representative network"},
  {place:"Vietnam",country:"Vietnam",detail:"Far East business coverage",contact:"Nguyen Thi Thanh Nga · Published Vietnam business head",address:"Contact via AFII Capital",type:"Representative network"},
];
export const people = [
  {name:"K. Aakash",role:"Representative Director — India",place:"New Delhi",image:"/media/people/kumar-aakash.png",group:"India"},
  {name:"Vinit Vidyarthi",role:"India Senior Advisor · Investment Banking",place:"New Delhi",image:"/media/people/vinit-vidyarthi.jpeg",group:"India"},
  {name:"Punam Bhasin",role:"Director — AFII Corp (India)",place:"India",image:"/media/people/punam-bhasin.jpg",group:"India"},
  {name:"Abhijit K. Avarsekar",role:"Senior Advisor · Infrastructure",place:"Mumbai",image:"/media/people/abhijit-avar-sekar.png",group:"India"},
  {name:"Dr. Mahesh M. Gandhi",role:"Managing Director & President",place:"Frankfurt",image:"/media/people/mahesh-gandhi.png",group:"International network"},
  {name:"Kirti Gulati",role:"Managing Director & Vice President",place:"Frankfurt / UAE",image:"/media/people/kirti-gulati.jpg",group:"International network"},
  {name:"Sidhartha S. Gandhi",role:"Government Advisory & Infrastructure Development",place:"India",image:"/media/people/sidhartha-gandhi.jpeg",group:"International network"},
  {name:"Nguyen Thi Thanh Nga",role:"Vietnam business lead",place:"Vietnam",image:"/media/people/nguyen-thi-thanh-nga.png",group:"International network"},
];
export const sourceLinks = [
  {title:"AFII Corporate Advisors original website",href:"https://www.afiicorp.com/"},
  {title:"AFII Corporate Advisors background",href:"https://www.afiicorp.com/about/"},
  {title:"AFII Capital — Group and entities",href:"https://afiicapital.com/"},
  {title:"AFII Capital — Offices",href:"https://afiicapital.com/contact/"},
  {title:"AFII Capital — Published team",href:"https://afiicapital.com/team/"},
];
