export type Course = {
  code: string;
  name: string;
  hours: number;
  prereq: string;
  note: string;
  ocw: string;
};

export type Program = {
  id: string;
  school: string;
  name: string;
  degree: string;
  duration: string;
  desc: string;
  courses: Course[];
};

export const SCHOOLS = [
  "All",
  "Engineering",
  "Sloan",
  "Architecture",
  "Science",
  "HST / Residency",
  "EECS / Einstein Track",
] as const;

export type School = (typeof SCHOOLS)[number];

export const programs: Program[] = [
  {
    "id": "meche-sm",
    "school": "Engineering",
    "name": "Mechanical Engineering",
    "degree": "S.M.",
    "duration": "21 mo",
    "desc": "Advanced mechanics, controls, manufacturing. Thesis required.",
    "courses": [
      {
        "code": "2.01",
        "name": "Mechanics of Materials",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/2-01/"
      },
      {
        "code": "2.02",
        "name": "Continuum Mechanics",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/2-02/"
      },
      {
        "code": "2.03",
        "name": "Dynamics & Control",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/2-03/"
      },
      {
        "code": "2.04",
        "name": "Thermo-Fluids",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/2-04/"
      },
      {
        "code": "2.05",
        "name": "Robotics",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/2-05/"
      },
      {
        "code": "2.06",
        "name": "Thesis Research",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/2-06/"
      }
    ]
  },
  {
    "id": "eecs-sm",
    "school": "Engineering",
    "name": "Electrical Engineering & Computer Science",
    "degree": "S.M. EECS",
    "duration": "24 mo",
    "desc": "Circuits, systems, computation. Research intensive.",
    "courses": [
      {
        "code": "6.1200",
        "name": "Discrete Math",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/6-1200/"
      },
      {
        "code": "6.1220",
        "name": "Design & Analysis of Algorithms",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/6-1220/"
      },
      {
        "code": "6.3900",
        "name": "Machine Learning",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/6-3900/"
      },
      {
        "code": "6.3800",
        "name": "Artificial Intelligence",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/6-3800/"
      },
      {
        "code": "6.101",
        "name": "Analog Electronics",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/6-101/"
      },
      {
        "code": "6.1210",
        "name": "Computation Structures",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/6-1210/"
      },
      {
        "code": "6.Thesis",
        "name": "MEng Thesis",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/6-thesis/"
      }
    ]
  },
  {
    "id": "aero-sm",
    "school": "Engineering",
    "name": "Aeronautics & Astronautics",
    "degree": "S.M. AeroAstro",
    "duration": "24 mo",
    "desc": "Aerodynamics, propulsion, space systems.",
    "courses": [
      {
        "code": "16.01",
        "name": "Unified Aero",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/16-01/"
      },
      {
        "code": "16.02",
        "name": "Flight Vehicle Design",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/16-02/"
      },
      {
        "code": "16.03",
        "name": "Aerodynamics",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/16-03/"
      },
      {
        "code": "16.04",
        "name": "Propulsion",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/16-04/"
      },
      {
        "code": "16.09",
        "name": "Space Systems",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/16-09/"
      },
      {
        "code": "16.Th",
        "name": "Thesis",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/16-th/"
      }
    ]
  },
  {
    "id": "cheme-sm",
    "school": "Engineering",
    "name": "Chemical Engineering",
    "degree": "S.M. ChemE",
    "duration": "24 mo",
    "desc": "Transport, kinetics, process design.",
    "courses": [
      {
        "code": "10.10",
        "name": "ChemE Thermo",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/10-10/"
      },
      {
        "code": "10.34",
        "name": "Numerical Methods",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/10-34/"
      },
      {
        "code": "10.40",
        "name": "ChemE Lab",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/10-40/"
      },
      {
        "code": "10.50",
        "name": "Separations",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/10-50/"
      },
      {
        "code": "10.65",
        "name": "Kinetics",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/10-65/"
      },
      {
        "code": "10.91",
        "name": "Research",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/10-91/"
      }
    ]
  },
  {
    "id": "cee-sm",
    "school": "Engineering",
    "name": "Civil & Environmental Engineering",
    "degree": "S.M. CEE",
    "duration": "21 mo",
    "desc": "Structures, environment, transportation.",
    "courses": [
      {
        "code": "1.01",
        "name": "Civil Eng Design",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/1-01/"
      },
      {
        "code": "1.02",
        "name": "Mechanics",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/1-02/"
      },
      {
        "code": "1.03",
        "name": "Env Fluid",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/1-03/"
      },
      {
        "code": "1.04",
        "name": "Materials",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/1-04/"
      },
      {
        "code": "1.05",
        "name": "Systems",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/1-05/"
      },
      {
        "code": "1.06",
        "name": "Project",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/1-06/"
      }
    ]
  },
  {
    "id": "matse-sm",
    "school": "Engineering",
    "name": "Materials Science & Engineering",
    "degree": "S.M. DMSE",
    "duration": "24 mo",
    "desc": "Materials design from atoms to devices.",
    "courses": [
      {
        "code": "3.01",
        "name": "Structure of Materials",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/3-01/"
      },
      {
        "code": "3.02",
        "name": "Thermo & Kinetics",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/3-02/"
      },
      {
        "code": "3.03",
        "name": "Mechanics of Materials",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/3-03/"
      },
      {
        "code": "3.04",
        "name": "Electronic Props",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/3-04/"
      },
      {
        "code": "3.05",
        "name": "Lab",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/3-05/"
      },
      {
        "code": "3.06",
        "name": "Thesis",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/3-06/"
      }
    ]
  },
  {
    "id": "nse-sm",
    "school": "Engineering",
    "name": "Nuclear Science & Engineering",
    "degree": "S.M. NSE",
    "duration": "24 mo",
    "desc": "Reactor physics, fusion, quantum eng.",
    "courses": [
      {
        "code": "22.01",
        "name": "Nuclear Physics",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/22-01/"
      },
      {
        "code": "22.02",
        "name": "Reactor Eng",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/22-02/"
      },
      {
        "code": "22.03",
        "name": "Fusion",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/22-03/"
      },
      {
        "code": "22.04",
        "name": "Radiation",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/22-04/"
      },
      {
        "code": "22.05",
        "name": "Materials",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/22-05/"
      },
      {
        "code": "22.06",
        "name": "Thesis",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/22-06/"
      }
    ]
  },
  {
    "id": "bcs-sm",
    "school": "Engineering",
    "name": "Biological Engineering",
    "degree": "S.M. BioE",
    "duration": "24 mo",
    "desc": "Quantitative biology, systems bio.",
    "courses": [
      {
        "code": "20.01",
        "name": "BioE Design",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/20-01/"
      },
      {
        "code": "20.02",
        "name": "Kinetics",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/20-02/"
      },
      {
        "code": "20.03",
        "name": "Genomics",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/20-03/"
      },
      {
        "code": "20.04",
        "name": "Tissue Eng",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/20-04/"
      },
      {
        "code": "20.05",
        "name": "Systems",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/20-05/"
      },
      {
        "code": "20.06",
        "name": "Thesis",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/20-06/"
      }
    ]
  },
  {
    "id": "idss-sm",
    "school": "Engineering",
    "name": "Data, Economics & Development",
    "degree": "S.M. IDSS",
    "duration": "21 mo",
    "desc": "Data science for societal systems.",
    "courses": [
      {
        "code": "IDS.131",
        "name": "Stats & Data",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/ids-131/"
      },
      {
        "code": "IDS.151",
        "name": "Econometrics",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/ids-151/"
      },
      {
        "code": "IDS.333",
        "name": "ML for Econ",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/ids-333/"
      },
      {
        "code": "IDS.400",
        "name": "Systems",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/ids-400/"
      },
      {
        "code": "IDS.501",
        "name": "Policy Lab",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/ids-501/"
      },
      {
        "code": "IDS.600",
        "name": "Thesis",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/ids-600/"
      }
    ]
  },
  {
    "id": "tpp-sm",
    "school": "Engineering",
    "name": "Technology & Policy",
    "degree": "S.M. TPP",
    "duration": "24 mo",
    "desc": "Tech strategy and policy analysis.",
    "courses": [
      {
        "code": "TPP.01",
        "name": "Policy Analysis",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/tpp-01/"
      },
      {
        "code": "TPP.02",
        "name": "Economics",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/tpp-02/"
      },
      {
        "code": "TPP.03",
        "name": "Systems",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/tpp-03/"
      },
      {
        "code": "TPP.04",
        "name": "Negotiation",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/tpp-04/"
      },
      {
        "code": "TPP.05",
        "name": "Thesis",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/tpp-05/"
      }
    ]
  },
  {
    "id": "sdm-sm",
    "school": "Engineering",
    "name": "System Design & Management",
    "degree": "S.M. SDM",
    "duration": "24 mo",
    "desc": "Complex systems leadership.",
    "courses": [
      {
        "code": "SDM.01",
        "name": "Systems Eng",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/sdm-01/"
      },
      {
        "code": "SDM.02",
        "name": "Product Design",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/sdm-02/"
      },
      {
        "code": "SDM.03",
        "name": "Leadership",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/sdm-03/"
      },
      {
        "code": "SDM.04",
        "name": "Operations",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/sdm-04/"
      },
      {
        "code": "SDM.05",
        "name": "Capstone",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/sdm-05/"
      }
    ]
  },
  {
    "id": "or-sm",
    "school": "Engineering",
    "name": "Operations Research",
    "degree": "S.M. ORC",
    "duration": "21 mo",
    "desc": "Optimization, stochastic systems.",
    "courses": [
      {
        "code": "15.01",
        "name": "Optimization",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-01/"
      },
      {
        "code": "15.02",
        "name": "Stochastic",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-02/"
      },
      {
        "code": "15.03",
        "name": "Analytics",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-03/"
      },
      {
        "code": "15.04",
        "name": "ML",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-04/"
      },
      {
        "code": "15.05",
        "name": "Thesis",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-05/"
      }
    ]
  },
  {
    "id": "mba",
    "school": "Sloan",
    "name": "Master of Business Administration",
    "degree": "MBA",
    "duration": "24 mo",
    "desc": "Leadership, finance, entrepreneurship.",
    "courses": [
      {
        "code": "15.401",
        "name": "Finance Theory",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-401/"
      },
      {
        "code": "15.501",
        "name": "Accounting",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-501/"
      },
      {
        "code": "15.601",
        "name": "Operations",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-601/"
      },
      {
        "code": "15.701",
        "name": "Marketing",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-701/"
      },
      {
        "code": "15.801",
        "name": "Org Behavior",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-801/"
      },
      {
        "code": "15.900",
        "name": "Competitive Strategy",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-900/"
      },
      {
        "code": "15.999",
        "name": "Sloan Fellows Lab",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-999/"
      }
    ]
  },
  {
    "id": "mfin",
    "school": "Sloan",
    "name": "Master of Finance",
    "degree": "MFin",
    "duration": "12 mo",
    "desc": "Quant finance, asset pricing.",
    "courses": [
      {
        "code": "15.402",
        "name": "Corp Finance",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-402/"
      },
      {
        "code": "15.403",
        "name": "Investments",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-403/"
      },
      {
        "code": "15.404",
        "name": "Options",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-404/"
      },
      {
        "code": "15.405",
        "name": "Fixed Income",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-405/"
      },
      {
        "code": "15.406",
        "name": "Analytics",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-406/"
      },
      {
        "code": "15.407",
        "name": "Capstone",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-407/"
      }
    ]
  },
  {
    "id": "mbAn",
    "school": "Sloan",
    "name": "Business Analytics",
    "degree": "MBAn",
    "duration": "12 mo",
    "desc": "Machine learning for business.",
    "courses": [
      {
        "code": "15.071",
        "name": "Analytics Edge",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-071/"
      },
      {
        "code": "15.072",
        "name": "Advanced Analytics",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-072/"
      },
      {
        "code": "15.073",
        "name": "ML Ops",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-073/"
      },
      {
        "code": "15.074",
        "name": "Optimization",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-074/"
      },
      {
        "code": "15.075",
        "name": "Practicum",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-075/"
      }
    ]
  },
  {
    "id": "msms",
    "school": "Sloan",
    "name": "Master of Science in Management Studies",
    "degree": "MSMS",
    "duration": "12 mo",
    "desc": "Global management immersion.",
    "courses": [
      {
        "code": "15.311",
        "name": "Org Processes",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-311/"
      },
      {
        "code": "15.312",
        "name": "Strategy",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-312/"
      },
      {
        "code": "15.313",
        "name": "Global Econ",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-313/"
      },
      {
        "code": "15.314",
        "name": "Innovation",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-314/"
      },
      {
        "code": "15.315",
        "name": "Leadership",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-315/"
      },
      {
        "code": "15.316",
        "name": "Project",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-316/"
      }
    ]
  },
  {
    "id": "sloan-fellows",
    "school": "Sloan",
    "name": "Sloan Fellows MBA",
    "degree": "SFMBA",
    "duration": "12 mo",
    "desc": "Executive mid-career leadership.",
    "courses": [
      {
        "code": "15.901",
        "name": "Leadership",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-901/"
      },
      {
        "code": "15.902",
        "name": "Entrepreneurship",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-902/"
      },
      {
        "code": "15.903",
        "name": "Global Markets",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-903/"
      },
      {
        "code": "15.904",
        "name": "Negotiation",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-904/"
      },
      {
        "code": "15.905",
        "name": "Innovation",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-905/"
      },
      {
        "code": "15.906",
        "name": "Capstone",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-906/"
      }
    ]
  },
  {
    "id": "emba",
    "school": "Sloan",
    "name": "Executive MBA",
    "degree": "EMBA",
    "duration": "20 mo",
    "desc": "Executive leadership for senior roles.",
    "courses": [
      {
        "code": "15.910",
        "name": "Economics",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-910/"
      },
      {
        "code": "15.911",
        "name": "Operations",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-911/"
      },
      {
        "code": "15.912",
        "name": "Finance",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-912/"
      },
      {
        "code": "15.913",
        "name": "Marketing",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-913/"
      },
      {
        "code": "15.914",
        "name": "Strategy",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-914/"
      },
      {
        "code": "15.915",
        "name": "Leadership Lab",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/15-915/"
      }
    ]
  },
  {
    "id": "march",
    "school": "Architecture",
    "name": "Master of Architecture",
    "degree": "MArch",
    "duration": "42 mo",
    "desc": "Design studio, history, technology.",
    "courses": [
      {
        "code": "4.101",
        "name": "Design Studio",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-101/"
      },
      {
        "code": "4.102",
        "name": "Structures",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-102/"
      },
      {
        "code": "4.103",
        "name": "History Theory",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-103/"
      },
      {
        "code": "4.104",
        "name": "Computation",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-104/"
      },
      {
        "code": "4.105",
        "name": "Building Tech",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-105/"
      },
      {
        "code": "4.106",
        "name": "Thesis",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-106/"
      }
    ]
  },
  {
    "id": "smarchs-comp",
    "school": "Architecture",
    "name": "SMArchS Computation",
    "degree": "SMArchS",
    "duration": "24 mo",
    "desc": "Computational design and fabrication.",
    "courses": [
      {
        "code": "4.201",
        "name": "Computation",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-201/"
      },
      {
        "code": "4.202",
        "name": "Machine Learning for Design",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-202/"
      },
      {
        "code": "4.203",
        "name": "Fabrication",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-203/"
      },
      {
        "code": "4.204",
        "name": "Geometry",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-204/"
      },
      {
        "code": "4.205",
        "name": "Thesis",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-205/"
      }
    ]
  },
  {
    "id": "smbt",
    "school": "Architecture",
    "name": "Building Technology",
    "degree": "SMBT",
    "duration": "24 mo",
    "desc": "Energy, materials, sustainability.",
    "courses": [
      {
        "code": "4.301",
        "name": "Building Physics",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-301/"
      },
      {
        "code": "4.302",
        "name": "Energy Modeling",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-302/"
      },
      {
        "code": "4.303",
        "name": "Materials",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-303/"
      },
      {
        "code": "4.304",
        "name": "Systems",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-304/"
      },
      {
        "code": "4.305",
        "name": "Thesis",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-305/"
      }
    ]
  },
  {
    "id": "smarchs-hist",
    "school": "Architecture",
    "name": "History Theory Criticism",
    "degree": "SMArchS HTC",
    "duration": "24 mo",
    "desc": "Architectural history and theory.",
    "courses": [
      {
        "code": "4.401",
        "name": "Historiography",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-401/"
      },
      {
        "code": "4.402",
        "name": "Theory",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-402/"
      },
      {
        "code": "4.403",
        "name": "Global Hist",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-403/"
      },
      {
        "code": "4.404",
        "name": "Methods",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-404/"
      },
      {
        "code": "4.405",
        "name": "Thesis",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-405/"
      }
    ]
  },
  {
    "id": "maud",
    "school": "Architecture",
    "name": "Urban Design",
    "degree": "MAUD",
    "duration": "21 mo",
    "desc": "Urban form and public realm.",
    "courses": [
      {
        "code": "4.501",
        "name": "Urban Design Studio",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-501/"
      },
      {
        "code": "4.502",
        "name": "Urban Economics",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-502/"
      },
      {
        "code": "4.503",
        "name": "Mobility",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-503/"
      },
      {
        "code": "4.504",
        "name": "Housing",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-504/"
      },
      {
        "code": "4.505",
        "name": "Capstone",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/4-505/"
      }
    ]
  },
  {
    "id": "physics-sm",
    "school": "Science",
    "name": "Physics",
    "degree": "S.M. Physics",
    "duration": "24 mo",
    "desc": "Quantum, astro, condensed matter.",
    "courses": [
      {
        "code": "8.01",
        "name": "Quantum Mechanics",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/8-01/"
      },
      {
        "code": "8.02",
        "name": "Stat Mech",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/8-02/"
      },
      {
        "code": "8.03",
        "name": "EM Theory",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/8-03/"
      },
      {
        "code": "8.04",
        "name": "Lab",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/8-04/"
      },
      {
        "code": "8.05",
        "name": "Thesis",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/8-05/"
      }
    ]
  },
  {
    "id": "chem-sm",
    "school": "Science",
    "name": "Chemistry",
    "degree": "S.M. Chem",
    "duration": "24 mo",
    "desc": "Synthesis, physical, bio-chem.",
    "courses": [
      {
        "code": "5.01",
        "name": "Organic",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/5-01/"
      },
      {
        "code": "5.02",
        "name": "Inorganic",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/5-02/"
      },
      {
        "code": "5.03",
        "name": "Physical",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/5-03/"
      },
      {
        "code": "5.04",
        "name": "Biochem",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/5-04/"
      },
      {
        "code": "5.05",
        "name": "Thesis",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/5-05/"
      }
    ]
  },
  {
    "id": "bio-sm",
    "school": "Science",
    "name": "Biology",
    "degree": "S.M. Bio",
    "duration": "24 mo",
    "desc": "Molecular, cell, systems bio.",
    "courses": [
      {
        "code": "7.01",
        "name": "Genetics",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/7-01/"
      },
      {
        "code": "7.02",
        "name": "Biochemistry",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/7-02/"
      },
      {
        "code": "7.03",
        "name": "Cell Bio",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/7-03/"
      },
      {
        "code": "7.04",
        "name": "Systems",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/7-04/"
      },
      {
        "code": "7.05",
        "name": "Thesis",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/7-05/"
      }
    ]
  },
  {
    "id": "math-sm",
    "school": "Science",
    "name": "Mathematics",
    "degree": "S.M. Math",
    "duration": "21 mo",
    "desc": "Pure and applied mathematics.",
    "courses": [
      {
        "code": "18.01",
        "name": "Analysis",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/18-01/"
      },
      {
        "code": "18.02",
        "name": "Algebra",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/18-02/"
      },
      {
        "code": "18.03",
        "name": "Topology",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/18-03/"
      },
      {
        "code": "18.04",
        "name": "Applied",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/18-04/"
      },
      {
        "code": "18.05",
        "name": "Thesis",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/18-05/"
      }
    ]
  },
  {
    "id": "eaps-sm",
    "school": "Science",
    "name": "Earth Atmospheric & Planetary Sci",
    "degree": "S.M. EAPS",
    "duration": "24 mo",
    "desc": "Climate, geophysics, planetary.",
    "courses": [
      {
        "code": "12.01",
        "name": "Climate",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/12-01/"
      },
      {
        "code": "12.02",
        "name": "Geophysics",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/12-02/"
      },
      {
        "code": "12.03",
        "name": "Atmosphere",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/12-03/"
      },
      {
        "code": "12.04",
        "name": "Ocean",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/12-04/"
      },
      {
        "code": "12.05",
        "name": "Thesis",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/12-05/"
      }
    ]
  },
  {
    "id": "dusp-mcp",
    "school": "Science",
    "name": "City Planning",
    "degree": "MCP",
    "duration": "24 mo",
    "desc": "Urban planning, policy, data.",
    "courses": [
      {
        "code": "11.01",
        "name": "Planning Theory",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/11-01/"
      },
      {
        "code": "11.02",
        "name": "Economics",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/11-02/"
      },
      {
        "code": "11.03",
        "name": "GIS",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/11-03/"
      },
      {
        "code": "11.04",
        "name": "Housing",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/11-04/"
      },
      {
        "code": "11.05",
        "name": "Capstone",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/11-05/"
      }
    ]
  },
  {
    "id": "media-sm",
    "school": "Science",
    "name": "Media Arts & Sciences",
    "degree": "S.M. Media",
    "duration": "24 mo",
    "desc": "Human-computer, tangible, AI.",
    "courses": [
      {
        "code": "MAS.01",
        "name": "HCI",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/mas-01/"
      },
      {
        "code": "MAS.02",
        "name": "Tangible",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/mas-02/"
      },
      {
        "code": "MAS.03",
        "name": "Affective",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/mas-03/"
      },
      {
        "code": "MAS.04",
        "name": "AI",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/mas-04/"
      },
      {
        "code": "MAS.05",
        "name": "Thesis",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/mas-05/"
      }
    ]
  },
  {
    "id": "brain-sm",
    "school": "Science",
    "name": "Brain & Cognitive Sciences",
    "degree": "S.M. BCS",
    "duration": "24 mo",
    "desc": "Neuroscience and cognition.",
    "courses": [
      {
        "code": "9.01",
        "name": "Neuroscience",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/9-01/"
      },
      {
        "code": "9.02",
        "name": "Cognitive",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/9-02/"
      },
      {
        "code": "9.03",
        "name": "Computation",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/9-03/"
      },
      {
        "code": "9.04",
        "name": "Systems",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/9-04/"
      },
      {
        "code": "9.05",
        "name": "Thesis",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/courses/9-05/"
      }
    ]
  },
  {
    "id": "hst-md",
    "school": "HST / Residency",
    "name": "HST MD — Physician-Scientist",
    "degree": "M.D. Harvard",
    "duration": "48 mo + 12 mo research",
    "desc": "MD from Harvard Medical School, designed for physician-scientists, half bio half physical sciences, research in 100s labs at Harvard/MIT/hospitals, clerkships starting April 2nd year.",
    "courses": [
      {
        "code": "HST.021",
        "name": "Human Pathology",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/hst-021/"
      },
      {
        "code": "HST.090",
        "name": "Cardiovascular Pathophysiology",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/hst-090/"
      },
      {
        "code": "HST.110",
        "name": "Molecular Biology & Genetics",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/hst-110/"
      },
      {
        "code": "HST.131",
        "name": "Biostatistics & Clinical Inference",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/hst-131/"
      },
      {
        "code": "HST.150",
        "name": "Human Anatomy & Histology",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/hst-150/"
      },
      {
        "code": "HST.230",
        "name": "Immunology",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/hst-230/"
      },
      {
        "code": "CLERK-MED",
        "name": "Clerkship: Internal Medicine",
        "hours": 240,
        "prereq": "HST.021-150",
        "note": "April Y2 start",
        "ocw": "https://hms.harvard.edu/clerkships"
      },
      {
        "code": "CLERK-SURG",
        "name": "Clerkship: Surgery",
        "hours": 240,
        "prereq": "",
        "note": "",
        "ocw": "https://hms.harvard.edu/clerkships"
      },
      {
        "code": "CLERK-PEDS",
        "name": "Clerkship: Pediatrics",
        "hours": 120,
        "prereq": "",
        "note": "",
        "ocw": "https://hms.harvard.edu/clerkships"
      },
      {
        "code": "CLERK-OB",
        "name": "Clerkship: OB/GYN + Neuro",
        "hours": 120,
        "prereq": "",
        "note": "",
        "ocw": "https://hms.harvard.edu/clerkships"
      }
    ]
  },
  {
    "id": "md-phd",
    "school": "HST / Residency",
    "name": "MD-PhD MEMP",
    "degree": "M.D./Ph.D. 7-8 yrs",
    "duration": "84-96 mo",
    "desc": "Medical Engineering & Medical Physics PhD. Thesis in HST labs. Physician-scientist pipeline.",
    "courses": [
      {
        "code": "HST.MEMP",
        "name": "Quantitative Physiology",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/hst-memp/"
      },
      {
        "code": "HST.500",
        "name": "Biomedical Signal Processing",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/hst-500/"
      },
      {
        "code": "HST.600",
        "name": "MEMP Thesis Research",
        "hours": 240,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/hst-thesis/"
      }
    ]
  },
  {
    "id": "md-mba",
    "school": "HST / Residency",
    "name": "MD/MBA",
    "degree": "M.D./MBA 5 yrs",
    "duration": "60 mo",
    "desc": "HST MD plus Sloan MBA for health innovation leadership.",
    "courses": [
      {
        "code": "HST.MBA1",
        "name": "Healthcare Ventures",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/hst-mba/"
      },
      {
        "code": "15.401",
        "name": "Finance + HST Clinical",
        "hours": 45,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/15-401/"
      }
    ]
  },
  {
    "id": "md-mph",
    "school": "HST / Residency",
    "name": "MD/MPH",
    "degree": "M.D./MPH 5 yrs",
    "duration": "60 mo",
    "desc": "Physician-scientist plus public health.",
    "courses": [
      {
        "code": "HST.MPH1",
        "name": "Epidemiology",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/hst-mph/"
      },
      {
        "code": "HST.MPH2",
        "name": "Health Policy",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/hst-policy/"
      }
    ]
  },
  {
    "id": "residency",
    "school": "HST / Residency",
    "name": "Residency Clinical — MGH/BWH",
    "degree": "Residency",
    "duration": "36-84 mo",
    "desc": "Post-MD clinical training at Mass General, Brigham, BIDMC. HST alumni track.",
    "courses": [
      {
        "code": "RES.001",
        "name": "Internal Medicine Residency",
        "hours": 3200,
        "prereq": "",
        "note": "",
        "ocw": "https://www.massgeneral.org/residency"
      },
      {
        "code": "RES.002",
        "name": "Surgery Residency",
        "hours": 3200,
        "prereq": "",
        "note": "",
        "ocw": "https://www.brighamandwomens.org/residency"
      }
    ]
  },
  {
    "id": "cs-foundation",
    "school": "EECS / Einstein Track",
    "name": "Computer Science B.S. → MEng + Einstein Physics Track",
    "degree": "B.S./MEng CS + Einstein",
    "duration": "48 mo + prereqs",
    "desc": "Full CS from ground up: Calc 1,2,3, Physics 1,2, all prereqs to high-level Einstein classes (Relativity, Quantum, GR). Same lecture hours as MIT.",
    "courses": [
      {
        "code": "18.01",
        "name": "Single Variable Calculus",
        "hours": 36,
        "prereq": "none",
        "note": "Calculus 1",
        "ocw": "https://ocw.mit.edu/18-01/"
      },
      {
        "code": "18.02",
        "name": "Multivariable Calculus",
        "hours": 36,
        "prereq": "18.01",
        "note": "Calculus 2",
        "ocw": "https://ocw.mit.edu/18-02/"
      },
      {
        "code": "18.03",
        "name": "Differential Equations",
        "hours": 36,
        "prereq": "18.02",
        "note": "",
        "ocw": "https://ocw.mit.edu/18-03/"
      },
      {
        "code": "18.06",
        "name": "Linear Algebra (Strang)",
        "hours": 36,
        "prereq": "18.02",
        "note": "",
        "ocw": "https://ocw.mit.edu/18-06/"
      },
      {
        "code": "18.065",
        "name": "Matrix Methods & Data",
        "hours": 36,
        "prereq": "18.06",
        "note": "",
        "ocw": "https://ocw.mit.edu/18-065/"
      },
      {
        "code": "8.01",
        "name": "Classical Mechanics (Physics 1)",
        "hours": 36,
        "prereq": "18.01",
        "note": "Physics 1",
        "ocw": "https://ocw.mit.edu/8-01/"
      },
      {
        "code": "8.02",
        "name": "Electricity & Magnetism (Physics 2)",
        "hours": 36,
        "prereq": "8.01 + 18.02",
        "note": "Physics 2",
        "ocw": "https://ocw.mit.edu/8-02/"
      },
      {
        "code": "8.03",
        "name": "Vibrations & Waves",
        "hours": 36,
        "prereq": "8.02",
        "note": "",
        "ocw": "https://ocw.mit.edu/8-03/"
      },
      {
        "code": "8.04",
        "name": "Quantum Physics I",
        "hours": 36,
        "prereq": "8.03 + 18.03",
        "note": "Quantum",
        "ocw": "https://ocw.mit.edu/8-04/"
      },
      {
        "code": "8.05",
        "name": "Quantum Physics II",
        "hours": 36,
        "prereq": "8.04",
        "note": "",
        "ocw": "https://ocw.mit.edu/8-05/"
      },
      {
        "code": "8.033 / 8.20",
        "name": "Relativity — Special (Einstein Special)",
        "hours": 36,
        "prereq": "8.02 + 18.03",
        "note": "High level Einstein class",
        "ocw": "https://ocw.mit.edu/8-033/"
      },
      {
        "code": "8.962",
        "name": "General Relativity (Einstein GR)",
        "hours": 42,
        "prereq": "8.033",
        "note": "High level Einstein class",
        "ocw": "https://ocw.mit.edu/8-962/"
      },
      {
        "code": "6.100A",
        "name": "Intro to CS Programming",
        "hours": 36,
        "prereq": "18.01",
        "note": "",
        "ocw": "https://ocw.mit.edu/6-100A/"
      },
      {
        "code": "6.1200",
        "name": "Discrete Math & Proofs",
        "hours": 36,
        "prereq": "6.100A",
        "note": "",
        "ocw": "https://ocw.mit.edu/6-1200/"
      },
      {
        "code": "6.1220",
        "name": "Algorithms & Data Structures",
        "hours": 36,
        "prereq": "6.1200 + 18.06",
        "note": "",
        "ocw": "https://ocw.mit.edu/6-1220/"
      },
      {
        "code": "6.3900 + 6.3800",
        "name": "ML & AI — Deep Learning",
        "hours": 36,
        "prereq": "6.1220 + 18.065 + 8.04",
        "note": "Capstone",
        "ocw": "https://ocw.mit.edu/6-3900/"
      }
    ]
  },
  {
    "id": "cs-bs",
    "school": "EECS / Einstein Track",
    "name": "CS B.S. Core — Systems",
    "degree": "B.S. CS",
    "duration": "48 mo",
    "desc": "Undergrad CS fundamentals: systems, arch, networks.",
    "courses": [
      {
        "code": "6.101",
        "name": "Systems & Architecture",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/6-101/"
      },
      {
        "code": "6.102",
        "name": "Software Construction",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/6-102/"
      },
      {
        "code": "6.103",
        "name": "Networks",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/6-103/"
      },
      {
        "code": "6.104",
        "name": "Compilers",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/6-104/"
      }
    ]
  },
  {
    "id": "cs-meng",
    "school": "EECS / Einstein Track",
    "name": "CS MEng — Thesis Track",
    "degree": "MEng CS",
    "duration": "12 mo",
    "desc": "Graduate research, thesis, advanced electives.",
    "courses": [
      {
        "code": "6.700",
        "name": "Adv Algorithms",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/6-700/"
      },
      {
        "code": "6.701",
        "name": "Distributed Systems",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/6-701/"
      },
      {
        "code": "6.Thesis",
        "name": "MEng Thesis",
        "hours": 120,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/thesis/"
      }
    ]
  },
  {
    "id": "cs-einstein-special",
    "school": "EECS / Einstein Track",
    "name": "Einstein Special — Spacetime & Quantum Info",
    "degree": "Cert Einstein Special",
    "duration": "12 mo",
    "desc": "Special Relativity + Quantum Information intersection for CS.",
    "courses": [
      {
        "code": "8.20",
        "name": "Intro Special Relativity",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/8-20/"
      },
      {
        "code": "6.845",
        "name": "Quantum Complexity",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/6-845/"
      }
    ]
  },
  {
    "id": "cs-einstein-gr",
    "school": "EECS / Einstein Track",
    "name": "Einstein GR — Numerical Relativity & AI",
    "degree": "Cert Einstein GR",
    "duration": "12 mo",
    "desc": "General Relativity computations with ML.",
    "courses": [
      {
        "code": "8.962",
        "name": "General Relativity II",
        "hours": 42,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/8-962/"
      },
      {
        "code": "6.862",
        "name": "Applied GR & Simulation",
        "hours": 36,
        "prereq": "",
        "note": "",
        "ocw": "https://ocw.mit.edu/6-862/"
      }
    ]
  }
];

export function programHours(program: Program) {
  return program.courses.reduce((sum, course) => sum + course.hours, 0);
}

export const catalogStats = {
  programs: programs.length,
  courses: programs.reduce((n, p) => n + p.courses.length, 0),
  hours: programs.reduce((n, p) => n + programHours(p), 0),
};
