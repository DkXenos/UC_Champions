export interface Winner {
  name: string;
  team?: string;
  project?: string;
}

export interface FinishedCompetition {
  id: string;
  title: string;
  category: string;
  endDate: string;
  firstPlace: Winner;
  secondPlace: Winner;
  thirdPlace: Winner;
}

export const finishedCompetitions: FinishedCompetition[] = [
  {
    id: "finished-1",
    title: "UC App Dev Competition 2023",
    category: "Technology",
    endDate: "December 15, 2023",
    firstPlace: {
      name: "John Doe",
      team: "The Coders",
      project: "Innovative Mobile App",
    },
    secondPlace: {
      name: "Sarah Johnson",
      team: "Tech Titans",
      project: "Smart Home Integration",
    },
    thirdPlace: {
      name: "Mike Chen",
      team: "Code Warriors",
      project: "Fitness Tracking AI",
    },
  },
  {
    id: "finished-2",
    title: "Business Case Challenge 2023",
    category: "Business",
    endDate: "November 30, 2023",
    firstPlace: {
      name: "Jane Smith",
      team: "Strategic Thinkers",
      project: "Sustainable Business Model",
    },
    secondPlace: {
      name: "Robert Lee",
      team: "Innovation Hub",
      project: "Green Supply Chain",
    },
    thirdPlace: {
      name: "Emma Davis",
      team: "Future Leaders",
      project: "Digital Marketplace",
    },
  },
  {
    id: "finished-3",
    title: "Design Jam 2023",
    category: "Creative",
    endDate: "October 20, 2023",
    firstPlace: {
      name: "Alex Johnson",
      project: "Next-Gen UI/UX for Social Good",
    },
    secondPlace: {
      name: "Maria Garcia",
      project: "Accessible Web Design",
    },
    thirdPlace: {
      name: "Tom Wilson",
      project: "Interactive Portfolio",
    },
  },
  {
    id: "finished-4",
    title: "Robotics Challenge 2023",
    category: "Engineering",
    endDate: "September 5, 2023",
    firstPlace: {
      name: "Emily White",
      team: "RoboMinds",
      project: "Autonomous Warehouse Bot",
    },
    secondPlace: {
      name: "James Brown",
      team: "Mech Masters",
      project: "Search and Rescue Drone",
    },
    thirdPlace: {
      name: "Lisa Anderson",
      team: "Bot Builders",
      project: "Agricultural Robot",
    },
  },
  {
    id: "finished-5",
    title: "AI Hackathon 2023",
    category: "Technology",
    endDate: "August 25, 2023",
    firstPlace: {
      name: "Michael Brown",
      project: "Predictive Analytics for Healthcare",
    },
    secondPlace: {
      name: "Jennifer Taylor",
      project: "Natural Language Processor",
    },
    thirdPlace: {
      name: "Daniel Martinez",
      project: "Computer Vision System",
    },
  },
  {
    id: "finished-6",
    title: "Marketing Pitch Competition 2023",
    category: "Business",
    endDate: "July 10, 2023",
    firstPlace: {
      name: "Sarah Green",
      team: "Market Movers",
    },
    secondPlace: {
      name: "Andrew Clark",
      team: "Brand Builders",
    },
    thirdPlace: {
      name: "Victoria Hall",
      team: "Digital Marketers",
    },
  },
  {
    id: "finished-7",
    title: "Short Film Festival 2023",
    category: "Creative",
    endDate: "June 18, 2023",
    firstPlace: {
      name: "David Black",
      project: "The Last Leaf",
    },
    secondPlace: {
      name: "Sophie Turner",
      project: "Urban Dreams",
    },
    thirdPlace: {
      name: "Lucas Wright",
      project: "Silent Echo",
    },
  },
  {
    id: "finished-8",
    title: "Biotech Innovation Fair 2022",
    category: "Science",
    endDate: "December 1, 2022",
    firstPlace: {
      name: "Linda Chen",
      team: "Gene Geniuses",
      project: "CRISPR-based Diagnostics",
    },
    secondPlace: {
      name: "Peter Kim",
      team: "BioTech Innovators",
      project: "Protein Synthesis Model",
    },
    thirdPlace: {
      name: "Rachel Green",
      team: "Lab Leaders",
      project: "DNA Sequencing Tool",
    },
  },
  {
    id: "finished-9",
    title: "UC App Dev Competition 2022",
    category: "Technology",
    endDate: "November 28, 2022",
    firstPlace: {
      name: "Chris Rodriguez",
      team: "App Wizards",
      project: "Social Networking for Gamers",
    },
    secondPlace: {
      name: "Amy Zhang",
      team: "Mobile Masters",
      project: "E-Learning Platform",
    },
    thirdPlace: {
      name: "Brian Foster",
      team: "Dev Squad",
      project: "Local Business Finder",
    },
  },
  {
    id: "finished-10",
    title: "Sustainable Energy Challenge 2022",
    category: "Engineering",
    endDate: "October 15, 2022",
    firstPlace: {
      name: "Jessica Taylor",
      project: "Low-cost Solar Panel",
    },
    secondPlace: {
      name: "Mark Johnson",
      project: "Wind Energy Harvester",
    },
    thirdPlace: {
      name: "Claire Adams",
      project: "Hydroelectric Micro-Generator",
    },
  },
  {
    id: "finished-11",
    title: "Entrepreneurship Expo 2022",
    category: "Business",
    endDate: "September 22, 2022",
    firstPlace: {
      name: "Kevin Martinez",
      team: "Venture Catalysts",
      project: "Peer-to-Peer Lending Platform",
    },
    secondPlace: {
      name: "Nicole Thompson",
      team: "Startup Stars",
      project: "Subscription Box Service",
    },
    thirdPlace: {
      name: "Ryan Cooper",
      team: "Business Innovators",
      project: "Freelance Marketplace",
    },
  },
  {
    id: "finished-12",
    title: "Data Science Bowl 2022",
    category: "Technology",
    endDate: "August 1, 2022",
    firstPlace: {
      name: "Amanda Wilson",
      project: "Ocean Health Prediction Model",
    },
    secondPlace: {
      name: "George Martinez",
      project: "Climate Change Analytics",
    },
    thirdPlace: {
      name: "Hannah Lee",
      project: "Financial Market Forecaster",
    },
  },
  {
    id: "finished-13",
    title: "Architectural Design Contest 2022",
    category: "Creative",
    endDate: "July 5, 2022",
    firstPlace: {
      name: "Brian Clark",
      project: "Modular Urban Housing",
    },
    secondPlace: {
      name: "Olivia Scott",
      project: "Sustainable Community Center",
    },
    thirdPlace: {
      name: "Ethan Moore",
      project: "Eco-Friendly Office Space",
    },
  },
  {
    id: "finished-14",
    title: "Cybersecurity Capture The Flag 2022",
    category: "Technology",
    endDate: "June 12, 2022",
    firstPlace: {
      name: "Olivia Harris",
      team: "The White Hats",
    },
    secondPlace: {
      name: "Nathan Parker",
      team: "Cyber Defenders",
    },
    thirdPlace: {
      name: "Isabella Cruz",
      team: "Security Squad",
    },
  },
  {
    id: "finished-15",
    title: "UC App Dev Competition 2021",
    category: "Technology",
    endDate: "December 10, 2021",
    firstPlace: {
      name: "Steven Lewis",
      team: "Code Monkeys",
      project: "AR Learning Assistant",
    },
    secondPlace: {
      name: "Grace Mitchell",
      team: "App Architects",
      project: "Virtual Tour Guide",
    },
    thirdPlace: {
      name: "Tyler Bennett",
      team: "Dev Dynasty",
      project: "Recipe Sharing App",
    },
  },
  {
    id: "finished-16",
    title: "Business Case Challenge 2021",
    category: "Business",
    endDate: "November 25, 2021",
    firstPlace: {
      name: "Rachel Walker",
      team: "The Strategists",
      project: "Circular Economy Initiative",
    },
    secondPlace: {
      name: "Jordan Hayes",
      team: "Business Analysts",
      project: "Supply Chain Optimization",
    },
    thirdPlace: {
      name: "Megan Price",
      team: "Strategy Group",
      project: "Customer Retention Program",
    },
  },
  {
    id: "finished-17",
    title: "Game Development Jam 2021",
    category: "Creative",
    endDate: "October 30, 2021",
    firstPlace: {
      name: "Paul Allen",
      project: "Pixel Odyssey",
    },
    secondPlace: {
      name: "Kelly Ross",
      project: "Dungeon Crawler",
    },
    thirdPlace: {
      name: "Austin Bell",
      project: "Puzzle Quest",
    },
  },
  {
    id: "finished-18",
    title: "Civil Engineering Bridge Build 2021",
    category: "Engineering",
    endDate: "September 15, 2021",
    firstPlace: {
      name: "Nancy King",
      team: "The Bridge Builders",
      project: "Tensegrity Bridge Design",
    },
    secondPlace: {
      name: "William Gray",
      team: "Structure Masters",
      project: "Suspension Bridge Model",
    },
    thirdPlace: {
      name: "Samantha Reed",
      team: "Civil Engineers",
      project: "Arch Bridge Design",
    },
  },
];