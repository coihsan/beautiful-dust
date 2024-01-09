import { iconsUI } from "../constants/icons";
export const navlink = [
  {
    id: 0,
    text: "Projects",
    url: "#",
  },
  {
    id: 1,
    text: "Source",
    url: "#",
  },
  {
    id: 2,
    text: "Blog",
    url: "#",
  },
];
export const personaldata: {
  key: number;
  about: string;
  passion: {
    key: number;
    icon: JSX.Element;
    skilled: string;
  }[];
  location: {
    key: number;
    icon: JSX.Element;
    skilled: string;
  }[];
}[] = [
  {
    key: 0,
    about:
      "I can handle jobs such as Digital Marketing, Graphic Design, and also as a Frontend Developer in marketing with a team or individually.",
    passion: [
      {
        key: 0,
        icon: iconsUI.globe,
        skilled: "SEM",
      },
      {
        key: 1,
        icon: iconsUI.palette,
        skilled: "Design",
      },
      {
        key: 2,
        icon: iconsUI.layout,
        skilled: "Frontend Developer",
      },
      {
        key: 3,
        icon: iconsUI.search,
        skilled: "SEO",
      },
    ],
    location: [
      {
        key: 2,
        icon: iconsUI.map,
        skilled: "Kota Tangerang - Karawaci",
      },
    ],
  },
];

export const offering = [
  "Landing Page Creation",
  "Blog",
  "Portofolios",
  "Company Profile",
];
export const credentials = [
  {
    id: 0,
    url: "#",
    title: "Skillshop",
  },
  {
    id: 1,
    url: "#",
    title: "Accredible.net",
  },
];
export const ResumeData = [
  {
    id: 0,
    company: "PT. Anang Jhonny",
    year: "Current job",
    position: "Freelance Digital Marketing",
  },
  {
    id: 1,
    company: "Huang Jia Restaurant",
    year: "Mar 2021 - Mar 2022",
    position: "Design & Digtal Marketing",
  },
  {
    id: 2,
    company: "PT Aha Store",
    year: "Jul - Oct 2020",
    position: "Design & Marketplace",
  },
  {
    id: 3,
    company: "Flight Store",
    year: "Jun - Oct 2019",
    position: "Design & Digtal Marketing",
  },
  {
    id: 4,
    company: "PT Juwita Collection",
    year: "Jan - Mar 2019",
    position: "Digital Marketing",
  },
  {
    id: 5,
    company: "PT Bossco Indolestari",
    year: "Sept 2017 - Jun 2018",
    position: "Marketing Coordinator",
  },
  {
    id: 6,
    company: "PT. Netciti Persada",
    year: "Jan 2016 - Apr 2017",
    position: "Graphic Designer",
  },
  {
    id: 7,
    company: "Bina Sarana Informatika",
    year: "2012 - 2015",
    position: "D3 Broadcasting Communication",
  },
];
