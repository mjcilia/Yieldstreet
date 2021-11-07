export interface ISurveyContent {
  sidebar: {
    heading: string;
    subHeading: string;
  };
  steps: Array<string>;
}

export interface ISurveyMeta {
  activeStep: number;
}

export interface ISurveyDataIdentity {
  name?: string;
  email?: string;
}

export interface ISurveyDataDetails {
  age: string;
  gender: "male" | "female";
}

export interface ISurveyDataFavorites {
  book: string;
  colors: Array<string>;
}

export interface ISurveyState {
  content: ISurveyContent;
  meta: ISurveyMeta;
  data: {
    steps: {
      identity: ISurveyDataIdentity;
      details: ISurveyDataDetails;
      favorites: ISurveyDataFavorites;
    };
  };
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
  },
  data: {
    steps: {
      identity: {
        name: "",
        email: "",
      },
      details: {
        age: "30",
        gender: "male",
      },
      favorites: {
        book: "Born to Manage",
        colors: ["blue"],
      },
    },
  },
};
