export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "ion-home",
      userType: "super",
    },
    {
      name: "Mail",
      url: "/mail",
      icon: "ion-android-mail",
      userType: "super",
    },
    {
      name: "Supervision",
      url: "/report",
      icon: "ion-star",
      userType: "super",
      children: [{
        name: "Assign",
        url: "/assign",
        userType: "super",
      }]
    },
    {
      name: "Report",
      url: "/report",
      icon: "ion-clipboard",
      userType: "super",
      children: [{
        name: "Doctors Report",
        url: "/doctorsReport",
        userType: "super",
      }]
    },
    {
      name: "Settings",
      url: "/settings",
      icon: "ion-settings",
      userType: "super",
    },
    {
      name: "Profile",
      url: "/profile",
      icon: "ion-person",
      userType: "super",
    },
  ]
};
