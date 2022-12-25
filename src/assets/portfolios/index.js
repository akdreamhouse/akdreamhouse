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
];
