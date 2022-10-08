// ======================== //

const path = (roots, sublink) => {
  return `${roots}${sublink}`;
};

const ROUTS_PATH = "/auth";

// ======================== //

export const PATH_AUTH = {
  root: ROUTS_PATH,
  login: path(ROUTS_PATH, "/login"),
  signup: path(ROUTS_PATH, "/sigup"),
  verify: path(ROUTS_PATH, "/verify"),
  resetPassword: path(ROUTS_PATH, "/reset-password"),
  newPassword: path(ROUTS_PATH, "/new-password"),
};

export const PATH_PAGE = {
  comingSoon: "/coming-soon",
  home: "/",
  page404: "/404",
  page403: "/403",
  page500: "/500",
};
