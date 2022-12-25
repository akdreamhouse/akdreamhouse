import blog01 from "../../assets/blog01.jpg";
import blog02 from "../../assets/blog02.jpg";
import {
  facebookIcon,
  instaGramIcon,
  linkdinIcon,
  twitterIcon,
  youTubeIcon,
} from "../constants";

export const portfolioProjects = [
  {
    projectID: 1,
    projectName: "AK Dream House",
    projectOnwer: "dr. Deep Singh Raj",
    projectCategory: "Residential",
    projectAreaSize: "70*50 Sq Ft",
    projectStatus: "Done",
    projectLocation: "Indore MP India",
    projectStartDate: "14-April, 2020",
    projectEndDate: "20-January, 2021",
    projectWebsite: "akdreamhouses.com",
    projectSocialMediaLinks: [
      { socialMediaName: "facebook", socialIcon: facebookIcon },
      {
        socialMediaName: "instagram",
        socialIcon: instaGramIcon,
      },
      { socialMediaName: "linkdin", socialIcon: linkdinIcon },
      { socialMediaName: "twitter", socialIcon: twitterIcon },
      { socialMediaName: "youTube", socialIcon: youTubeIcon },
    ],
    projectImages: [
      {
        imageLink: blog02,
      },
    ],
  },
  {
    projectID: 2,
    projectName: "Amrit Complex",
    projectOnwer: "Ak Astaya",
    projectCategory: "Residential",
    projectAreaSize: "25*50 Sq Ft",
    projectStatus: "Progess",
    projectLocation: "Dewas MP India",
    projectStartDate: "10-June, 2022",
    projectEndDate: "",
    projectWebsite: "",
    projectSocialMediaLinks: [
      { socialMediaName: "facebook", socialIcon: facebookIcon, socialLink: "" },
      {
        socialMediaName: "instagram",
        socialIcon: instaGramIcon,
      },
      { socialMediaName: "linkdin", socialIcon: linkdinIcon },
      { socialMediaName: "twitter", socialIcon: twitterIcon },
      { socialMediaName: "youTube", socialIcon: youTubeIcon },
    ],
    projectImages: [
      {
        imageLink: blog01,
      },
    ],
  },
];
