export type SurveyData = {
  identity: {
    name: string;
    email: string;
  };
  details: {
    age: number;
    gender: "male" | "female";
  };
  favorites: {
    favoriteBook: string;
    favoriteColors: Array<string>;
  };
};

export const surveySteps: Array<string> = [
  "Identity",
  "Details",
  "Favorites",
  "Summary",
];

export const surveyContent = {
  sidebar: {
    heading: "Are you familiar with alternative investments?",
    subHeading:
      "We want to ensure your experience on Yieldstreet is personalized. Join over 300,000+ members.",
  },
};
