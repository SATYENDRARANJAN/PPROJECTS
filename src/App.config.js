const GIT_REPO =
  "https://github.com/codegeous/react-component-depot/tree/master/src/";
const YOUTUBE_BASE = "https://youtu.be/";

export default {
  api: process.env.REACT_APP_API_ENDPOINT,

  GOOGLE: {
    GAPI_KEY: "",
    reCaptcha: process.env.REACT_APP_RECAPCTHA_SITE_TOKEN,
    GA_TRACKING_CODE: process.env.REACT_APP_GA_TRACKING_CODE,
  },

  hCaptchaSiteToken: process.env.REACT_APP_HCAPTCHA_SITE_TOKEN,

  links: {
   
    fileDownloader: {
      tutorial: `${YOUTUBE_BASE}0AS9Gfd1j5s`,
      code: `${GIT_REPO}pages/FileDownloader/index.js`,
    },
    imageZoom: {
      tutorial: `${YOUTUBE_BASE}uhgQFqr9ezQ`,
      code: `${GIT_REPO}pages/ImageZoom/index.js`,
    },
  },
  youtubeVideos: [
 
//  
  ],
};
