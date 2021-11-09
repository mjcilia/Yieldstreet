import {
  ISurveyDataIdentity,
  ISurveyDataDetails,
  ISurveyDataFavorites,
  ISurveyState,
} from "./survey.state";
import surveyReducer, {
  nextSurveyStep,
  prevSurveyStep,
  updateSurveyIdentity,
  updateSurveyDetails,
  updateSurveyFavorites,
  validateSurvey,
  submitSurvey,
} from ".";

describe("Survey Reducer", () => {
  const initialState: ISurveyState = {
    content: {
      sidebar: {
        heading: "Are you familiar with alternative investments?",
        subHeading:
          "We want to ensure your experience on Yieldstreet is personalized. Join over 300,000+ members.",
      },
      steps: ["Identity", "Details", "Favorites", "Summary"],
    },
    meta: {
      activeStep: 2,
      isValid: false,
      isSubmitted: false,
      errors: {
        identity: false,
        favorites: false,
      },
    },
    data: {
      identity: {
        name: "",
        email: "",
      },
      details: {
        age: "30",
        gender: "Male",
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

  const identityFixture: ISurveyDataIdentity = {
    name: "Mark",
    email: "markjcilia@gmail.com",
  };

  const detailsFixture: ISurveyDataDetails = {
    age: "40",
    gender: "Female",
  };

  const favoritesFixture: ISurveyDataFavorites = {
    colors: {
      red: false,
      green: true,
      blue: false,
    },
    book: "Born To Manage",
  };

  it("should handle initial state", () => {
    const { meta, content } = surveyReducer(undefined, { type: "unknown" });
    expect(meta.activeStep).toEqual(0);
    expect(meta.isValid).toEqual(false);
    expect(content.steps).toEqual(
      expect.arrayContaining(["Identity", "Details", "Favorites", "Summary"])
    );
  });
  it("should handle nextSurveyStep", () => {
    const { meta } = surveyReducer(initialState, nextSurveyStep());
    expect(meta.activeStep).toEqual(3);
  });
  it("should handle prevSurveyStep", () => {
    const { meta } = surveyReducer(initialState, prevSurveyStep());
    expect(meta.activeStep).toEqual(1);
  });
  it("should handle updateSurveyIdentity", () => {
    const { data } = surveyReducer(
      initialState,
      updateSurveyIdentity(identityFixture)
    );
    expect(data.identity).toEqual(identityFixture);
  });
  it("should handle updateSurveyDetails", () => {
    const { data } = surveyReducer(
      initialState,
      updateSurveyDetails(detailsFixture)
    );
    expect(data.details).toEqual(detailsFixture);
  });
  it("should handle updateSurveyFavorites", () => {
    const { data } = surveyReducer(
      initialState,
      updateSurveyFavorites(favoritesFixture)
    );
    expect(data.favorites).toEqual(favoritesFixture);
  });
  it("should handle validateSurvey [invalid initalState]", () => {
    const { meta } = surveyReducer(initialState, validateSurvey());
    expect(meta.isValid).toEqual(false);
  });
  it("should handle validateSurvey [invalid]", () => {
    const { meta } = surveyReducer(
      initialState,
      updateSurveyIdentity(identityFixture)
    );
    expect(meta.isValid).toEqual(false);
  });
  it("should handle validateSurvey [valid]", () => {
    const state1 = surveyReducer(
      initialState,
      updateSurveyIdentity(identityFixture)
    );
    const state2 = surveyReducer(state1, updateSurveyDetails(detailsFixture));
    const state3 = surveyReducer(
      state2,
      updateSurveyFavorites(favoritesFixture)
    );
    const { meta } = surveyReducer(state3, validateSurvey());
    expect(meta.isValid).toEqual(true);
    expect(meta.isSubmitted).toEqual(false);
  });
  it("should handle submit", () => {
    const { meta } = surveyReducer(initialState, submitSurvey());
    expect(meta.isSubmitted).toEqual(true);
  });
});
