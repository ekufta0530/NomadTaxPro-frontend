export const API = {
  auth: {
    register: "/api/users/register",
    login: "/api/users/auth",
    logout: "/api/users/logout",
    resetPassword: "/api/users/reset-password",
    newPassword: "/api/users/new-password",
    profile: {
      updatePic: "/api/users/profile/url",
    },
    periodStartDate: { 
      update: "/api/users/period-start-date/update",
    }
  },
  aws: {
    upload: "/api/aws/upload",
  },
  country: {
    favorite: {
      add: "/api/country/favorite/add",
      remove: "/api/country/favorite/remove",
      get: "/api/country/favorite/get",
    },
    stay: {
      addUpdate: "/api/country/stay/add-update",
      get: "/api/country/stay/get",
      delete: "/api/country/stay/delete",
    },
    info: {
      request: "/api/country/request-info",
    },
  },
};
