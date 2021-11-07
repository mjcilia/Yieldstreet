export interface ISurveyContent {
  sidebar: {
    heading: string;
    subHeading: string;
  };
  steps: Array<string>;
}

export interface ISurveyMeta {
  activeStep: number;
  isValid: boolean;
}

export interface ISurveyDataIdentity {
  name?: string;
  email?: string;
}

export interface ISurveyDataDetails {
  age: string;
  gender: "male" | "female" | "other";
}

export interface ISurveyDataFavorites {
  book: string;
  colors: {
    red: boolean;
    green: boolean;
    blue: boolean;
  };
}

export interface ISurveyData {
  identity: ISurveyDataIdentity;
  details: ISurveyDataDetails;
  favorites: ISurveyDataFavorites;
}

export interface ISurveyState {
  content: ISurveyContent;
  meta: ISurveyMeta;
  data: ISurveyData;
}

/**
 * @constant { ISurveyState } initialState
 */
export const initialState: ISurveyState = {
  content: {
    sidebar: {
      heading: "Are you familiar with alternative investments?",
      subHeading:
        "We want to ensure your experience on Yieldstreet is personalized. Join over 300,000+ members.",
    },
    steps: ["Identity", "Details", "Favorites", "Summary"],
  },
  meta: {
    activeStep: 0,
    isValid: false,
  },
  data: {
    identity: {
      name: "",
      email: "",
    },
    details: {
      age: "30",
      gender: "male",
    },
    favorites: {
      book: "",
      colors: {
        red: false,
        green: false,
        blue: false,
      },
    },
  },
};
