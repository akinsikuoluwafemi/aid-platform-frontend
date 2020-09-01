export const requestData = [
  {
    id: 1,
    description: "lorem lorem lorem lorem lorem",
    type: {
      oneTimeTask: true,
      materialneed: null,
    },
    location: {
      lat: 12.000333,
      lng: 10.00022,
    },
    color: "blue",
    status: "unfufilled",
    //fulfilled green
    responders: ["tope", "philip", "tola"],
    requeter: "steven",
  },
  {
    id: 2,
    description: "lorem lorem lorem lorem lorem",
    type: {
      oneTimeTask: null,
      materialneed: true,
    },
    location: {
      lat: 15.200333 + 8,
      lng: 12.770022 + 6,
    },
    color: "green",
    status: "fufilled",
    //fulfilled green
    responders: ["tumise", "trump", "dele"],
    requeter: "charlie",
  },
];

export const user = [
  {
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: "",
    document: "",
    role: "requester",
  },

  {
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: "",
    document: "",
    role: "volunteer",
  },
];