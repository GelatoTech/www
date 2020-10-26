const devicesWithHomeButton = [
  "8plus",
  "8",
  "7plus",
  "7",
  "6splus",
  "6s",
  "6plus",
  "6"
];

const devices = {
  "ipadmini": {
      screen: {
          price: "$100",
          warranty: "90 day",
          duration: "1 hour",
      },
      battery: {
          price: "$100",
          warranty: "90 day",
          duration: "1 hour",
      },
      charging: {
          price: "$100",
          warranty: "90 day",
          duration: "3 hour",
      },
      water: {
          price: "$300-$450",
          warranty: "90 day",
          duration: "2-3 business days",
      },
  },
  "ipadmini2": {
      screen: {
          price: "$100",
          warranty: "90 day",
          duration: "1 hour",
      },
      battery: {
          price: "$129",
          warranty: "90 day",
          duration: "1 hour",
      },
      charging: {
          price: "$100",
          warranty: "90 day",
          duration: "3 hour",
      },
      water: {
          price: "$300-$450",
          warranty: "90 day",
          duration: "2-3 business days",
      },
  },
  "ipadmini3": {
      screen: {
          price: "$150",
          warranty: "90 day",
          duration: "1 hour",
      },
      battery: {
          price: "$130",
          warranty: "90 day",
          duration: "1 hour",
      },
      charging: {
          price: "$130",
          warranty: "90 day",
          duration: "3 hour",
      },
      water: {
          price: "$300-$450",
          warranty: "90 day",
          duration: "2-3 business days",
      },
  },
  "ipadmini4": {
      screen: {
          price: "$250",
          warranty: "90 day",
          duration: "1 hour",
      },
      battery: {
          price: "$180",
          warranty: "90 day",
          duration: "1 hour",
      },
      charging: {
          price: "$180",
          warranty: "90 day",
          duration: "3 hour",
      },
      water: {
          price: "$300-$450",
          warranty: "90 day",
          duration: "2-3 business days",
      },
  },
  "ipadmini5": {
      screen: {
          price: "$250",
          warranty: "90 day",
          duration: "1 hour",
      },
      battery: {
          price: "$190",
          warranty: "90 day",
          duration: " 1 hour",
      },
      charging: {
          price: "$190",
          warranty: "90 day",
          duration: "3 hour",
      },
      water: {
          price: "$300-$450",
          warranty: "90 day",
          duration: "2-3 business days",
      },
  },
  "ipad2": {
      screen: {
          price: "$140",
          warranty: "90 day",
          duration: "1 hour",
      },
      battery: {
          price: "$130",
          warranty: "90 day",
          duration: " 1 hour",
      },
      charging: {
          price: "$130",
          warranty: "90 day",
          duration: "3 hour",
      },
      water: {
          price: "$300-$450",
          warranty: "90 day",
          duration: "2-3 business days",
      },
  },
  "ipad3": {
      screen: {
          price: "$140",
          warranty: "90 day",
          duration: "1 hour",
      },
      battery: {
          price: "$130",
          warranty: "90 day",
          duration: "1 hour",
      },
      charging: {
          price: "$130",
          warranty: "90 day",
          duration: "3 hour",
      },
      water: {
          price: "$300-$450",
          warranty: "90 day",
          duration: "2-3 business days",
      },
  },
  "ipad4": {
      screen: {
          price: "$140",
          warranty: "90 day",
          duration: "1 hour",
      },
      battery: {
          price: "$130",
          warranty: "90 day",
          duration: "1 hour",
      },
      charging: {
          price: "$130",
          warranty: "90 day",
          duration: "3 hour",
      },
      water: {
          price: "$300-$450",
          warranty: "90 day",
          duration: "2-3 business days",
      },
  },
  "ipad5": {
      screen: {
          price: "$150",
          warranty: "90 day",
          duration: "1 hour",
      },
      battery: {
          price: "$130",
          warranty: "90 day",
          duration: " 1 hour",
      },
      charging: {
          price: "$130",
          warranty: "90 day",
          duration: "3 hour",
      },
      water: {
          price: "$300-$450",
          warranty: "90 day",
          duration: "2-3 business days",
      },
  },
  "ipad6": {
      screen: {
          price: "$150",
          warranty: "90 day",
          duration: "1 hour",
      },
      battery: {
          price: "$130",
          warranty: "90 day",
          duration: " 1 hour",
      },
      charging: {
          price: "$130",
          warranty: "90 day",
          duration: "3 hour",
      },
      water: {
          price: "$300-$450",
          warranty: "90 day",
          duration: "2-3 business days",
      },
  },
  "ipad7": {
      screen: {
          price: "$180",
          warranty: "90 day",
          duration: "1 hour",
      },
      battery: {
          price: "$130",
          warranty: "90 day",
          duration: " 1 hour",
      },
      charging: {
          price: "$130",
          warranty: "90 day",
          duration: "3 hour",
      },
      water: {
          price: "$300-$450",
          warranty: "90 day",
          duration: "2-3 business days",
      },
  },
  "ipadair": {
      screen: {
          price: "$150",
          warranty: "90 day",
          duration: "1 hour",
      },
      battery: {
          price: "$130",
          warranty: "90 day",
          duration: " 1 hour",
      },
      charging: {
          price: "$130",
          warranty: "90 day",
          duration: "3 hour",
      },
      water: {
          price: "$300-$450",
          warranty: "90 day",
          duration: "2-3 business days",
      },
  },
  "ipadair2": {
      screen: {
          price: "$260",
          warranty: "90 day",
          duration: "1 hour",
      },
      battery: {
          price: "$130",
          warranty: "90 day",
          duration: "1 hour",
      },
      charging: {
          price: "$130",
          warranty: "90 day",
          duration: "3 hour",
      },
      water: {
          price: "$300-$450",
          warranty: "90 day",
          duration: "2-3 business days",
      },
  },
  "ipadair3": {
      screen: {
          price: "$280",
          warranty: "90 day",
          duration: "1 hour",
      },
      battery: {
          price: "$230",
          warranty: "90 day",
          duration: " 1 hour",
      },
      charging: {
          price: "$230",
          warranty: "90 day",
          duration: "3 hour",
      },
      water: {
          price: "$300-$450",
          warranty: "90 day",
          duration: "2-3 business days",
      }, //ipad pro
  },
  "ipadpro9": {
      screen: {
          price: "$260",
          warranty: "90 day",
          duration: "1 hour",
      },
      battery: {
          price: "$150",
          warranty: "90 day",
          duration: "1 hour",
      },
      charging: {
          price: "$150",
          warranty: "90 day",
          duration: "3 hour",
      },
      water: {
          price: "$300-$450",
          warranty: "90 day",
          duration: "2-3 business days",
      },
  },
  "ipadpro2": {
      screen: {
          price: "$350",
          warranty: "90 day",
          duration: "1 hour",
      },
      battery: {
          price: "$230",
          warranty: "90 day",
          duration: " 1 hour",
      },
      charging: {
          price: "$230",
          warranty: "90 day",
          duration: "3 hour",
      },
      water: {
          price: "$500-$550",
          warranty: "90 day",
          duration: "2-3 business days",
      },
  },
  "ipadpro3": {
      screen: {
          price: "$350",
          warranty: "90 day",
          duration: "1 hour",
      },
      battery: {
          price: "$230",
          warranty: "90 day",
          duration: "1 hour",
      },
      charging: {
          price: "$230",
          warranty: "90 day",
          duration: "3 hour",
      },
      water: {
          price: "$500-$550",
          warranty: "90 day",
          duration: "2-3 business days",
      },
  },
  "ipadpro10": {
      screen: {
          price: "$280",
          warranty: "90 day",
          duration: "1 hour",
      },
      battery: {
          price: "$150",
          warranty: "90 day",
          duration: "1 hour",
      },
      charging: {
          price: "$150",
          warranty: "90 day",
          duration: "3 hour",
      },
      water: {
          price: "$200-$400",
          warranty: "90 day",
          duration: "2-3 business days",
      },
  },
  "ipadpro121": {
      screen: {
          price: "$320",
          warranty: "90 day",
          duration: "1 hour",
      },
      battery: {
          price: "$230",
          warranty: "90 day",
          duration: " 1 hour",
      },
      charging: {
          price: "$230",
          warranty: "90 day",
          duration: "3 hour",
      },
      water: {
          price: "$600-$650",
          warranty: "90 day",
          duration: "2-3 business days",
      },
  },
  "ipadpro122": {
      screen: {
          price: "$500",
          warranty: "90 day",
          duration: "1 hour",
      },
      battery: {
          price: "$230",
          warranty: "90 day",
          duration: "1 hour",
      },
      charging: {
          price: "$230",
          warranty: "90 day",
          duration: "3 hour",
      },
      water: {
          price: "$600-$680",
          warranty: "90 day",
          duration: "2-3 business days",
      },
  },
  "ipadpro123": {
      screen: {
          price: "$400",
          warranty: "90 day",
          duration: "1 hour",
      },
      battery: {
          price: "$330",
          warranty: "90 day",
          duration: "1 hour",
      },
      charging: {
          price: "$330",
          warranty: "90 day",
          duration: "3 hour",
      },
      water: {
          price: "$600-$680",
          warranty: "90 day",
          duration: "2-3 business days",
      },
  },
  "ipadpro124": {
      screen: {
          price: "$400",
          warranty: "90 day",
          duration: "1 hour",
      },
    //   battery: {
    //       price: "$330",
    //       warranty: "90 day",
    //       duration: "1 hour",
    //   },
    //   charging: {
    //       price: "$330",
    //       warranty: "90 day",
    //       duration: "3 hour",
    //   },
    //   water: {
    //       price: "$600-$680",
    //       warranty: "90 day",
    //       duration: "2-3 business days",
    //   },
  },
  "6": {
    screen: {
        price: "$75",
        warranty: "Lifetime",
        duration: "15 minutes",
    },
    battery: {
        price: "$50",
        warranty: "90 day",
        duration: " 15 minutes",
    },
    charging: {
        price: "$50",
        warranty: "90 day",
        duration: "30 minutes",
    },
    water: {
        price: "$160-$200",
        warranty: "90 day",
        duration: "2-3 business days",
    },
},
"6s": {
    screen: {
        price: "$85",
        warranty: "Lifetime",
        duration: "15 minutes",
    },
    battery: {
        price: "$50",
        warranty: "90 day",
        duration: " 15 minutes",
    },
    charging: {
        price: "$50",
        warranty: "90 day",
        duration: "30 minutes",
    },
    water: {
        price: "$160-$200",
        warranty: "90 day",
        duration: "2-3 business days",
    },
},
"6plus": {
    screen: {
        price: "$85",
        warranty: "Lifetime",
        duration: "15 minutes",
    },
    battery: {
        price: "$50",
        warranty: "90 day",
        duration: " 15 minutes",
    },
    charging: {
        price: "$50",
        warranty: "90 day",
        duration: "30 minutes",
    },
    water: {
        price: "$160-$200",
        warranty: "90 day",
        duration: "2-3 business days",
    },
},
"6splus": {
    screen: {
        price: "$90",
        warranty: "Lifetime",
        duration: "15 minutes",
    },
    battery: {
        price: "$55",
        warranty: "90 day",
        duration: " 15 minutes",
    },
    charging: {
        price: "$55",
        warranty: "90 day",
        duration: "30 minutes",
    },
    water: {
        price: "$180-$240",
        warranty: "90 day",
        duration: "2-3 business days",
    },
},
"7": {
    screen: {
        price: "$90",
        warranty: "Lifetime",
        duration: "15 minutes",
    },
    battery: {
        price: "$55",
        warranty: "90 day",
        duration: " 15 minutes",
    },
    charging: {
        price: "$55",
        warranty: "90 day",
        duration: "30 minutes",
    },
    water: {
        price: "$180-$240",
        warranty: "90 day",
        duration: "2-3 business days",
    },
},
"7plus": {
    screen: {
        price: "$109",
        warranty: "Lifetime",
        duration: "15 minutes",
    },
    battery: {
        price: "$55",
        warranty: "90 day",
        duration: " 15 minutes",
    },
    charging: {
        price: "$55",
        warranty: "90 day",
        duration: "30 minutes",
    },
    water: {
        price: "$200-$250",
        warranty: "90 day",
        duration: "2-3 business days",
    },
},
"8": {
    screen: {
        price: "$109",
        warranty: "Lifetime",
        duration: "15 minutes",
    },
    battery: {
        price: "$55",
        warranty: "90 day",
        duration: " 15 minutes",
    },
    charging: {
        price: "$55",
        warranty: "90 day",
        duration: "30 minutes",
    },
    water: {
        price: "$200-$250",
        warranty: "90 day",
        duration: "2-3 business days",
    },
    backglass: {
      duration: "3 hour",
      price: "$140"
    }
},
"8plus": {
    screen: {
        price: "$120",
        warranty: "Lifetime",
        duration: "15 minutes",
    },
    battery: {
        price: "$55",
        warranty: "90 day",
        duration: " 15 minutes",
    },
    charging: {
        price: "$55",
        warranty: "90 day",
        duration: "30 minutes",
    },
    water: {
        price: "$200-$250",
        warranty: "90 day",
        duration: "2-3 business days",
    },
    backglass: {
      duration: "3 hour",
      price: "$140"
    }
},
"x": {
    screen: {
        price: "$200",
        warranty: "Lifetime",
        duration: "15 minutes",
    },
    battery: {
        price: "$65",
        warranty: "90 day",
        duration: " 15 minutes",
    },
    charging: {
        price: "$65",
        warranty: "90 day",
        duration: "30 minutes",
    },
    water: {
        price: "$250-$350",
        warranty: "90 day",
        duration: "2-3 business days",
    },
    backglass: {
      duration: "3 hour",
      price: "$150"
    }
},
"xs": {
    screen: {
        price: "$200",
        warranty: "Lifetime",
        duration: "15 minutes",
    },
    battery: {
        price: "$65",
        warranty: "90 day",
        duration: " 15 minutes",
    },
    charging: {
        price: "$65",
        warranty: "90 day",
        duration: "30 minutes",
    },
    water: {
        price: "$250-$350",
        warranty: "90 day",
        duration: "2-3 business days",
    },
    backglass: {
      duration: "3 hour",
      price: "$150"
    }
},
"xr": {
    screen: {
        price: "$150",
        warranty: "Lifetime",
        duration: "15 minutes",
    },
    battery: {
        price: "$65",
        warranty: "90 day",
        duration: " 15 minutes",
    },
    charging: {
        price: "$65",
        warranty: "90 day",
        duration: "30 minutes",
    },
    water: {
        price: "$250-$350",
        warranty: "90 day",
        duration: "2-3 business days",
    },
    backglass: {
      duration: "3 hour",
      price: "$150"
    }
},
"xsmax": {
    screen: {
        price: "$280",
        warranty: "Lifetime",
        duration: "15 minutes",
    },
    battery: {
        price: "$75",
        warranty: "90 day",
        duration: " 15 minutes",
    },
    charging: {
        price: "$75",
        warranty: "90 day",
        duration: "30 minutes",
    },
    water: {
        price: "$300 - $450",
        warranty: "90 day",
        duration: "2-3 business days",
    },
    backglass: {
      duration: "3 hour",
      price: "$150"
    }
},
"11": {
    screen: {
        price: "$150",
        warranty: "Lifetime",
        duration: "15 minutes",
    },
    battery: {
        price: "$100",
        warranty: "90 day",
        duration: " 15 minutes",
    },
    charging: {
        price: "$100",
        warranty: "90 day",
        duration: "30 minutes",
    },
    water: {
        price: "$300-$350",
        warranty: "90 day",
        duration: "2-3 business days",
    },
    backglass: {
      duration: "3 hour",
      price: "$180"
    }
},
"11pro": {
    screen: {
        price: "$280",
        warranty: "Lifetime",
        duration: "15 minutes",
    },
    battery: {
        price: "$100",
        warranty: "90 day",
        duration: " 15 minutes",
    },
    charging: {
        price: "$100",
        warranty: "90 day",
        duration: "30 minutes",
    },
    water: {
        price: "$300-$450",
        warranty: "90 day",
        duration: "2-3 business days",
    },
    backglass: {
      duration: "3 hour",
      price: "$180"
    }
},
"11proMax": {
    screen: {
        price: "$330",
        warranty: "Lifetime",
        duration: "15 minutes",
    },
    battery: {
        price: "$100",
        warranty: "90 day",
        duration: " 15 minutes",
    },
    charging: {
        price: "$100",
        warranty: "90 day",
        duration: "30 minutes",
    },
    water: {
        price: "$300-$350",
        warranty: "90 day",
        duration: "2-3 business days",
    },
    backglass: {
      duration: "3 hour",
      price: "$180"
    }
},
"googlePixel": {
    screen: {
        price: "$100",
        warranty: "90 day",
        duration: "1 hour",
    },
    battery: {
        price: "$55",
        warranty: "90 day",
        duration: " 1 hour",
    },
    charging: {
        price: "$55",
        warranty: "90 day",
        duration: " 1 hour",
    },
},
"googlePixelXL": {
    screen: {
        price: "$140",
        warranty: "90 day",
        duration: "1 hour",
    },
    battery: {
        price: "$55",
        warranty: "90 day",
        duration: " 1 hour",
    },
    charging: {
        price: "$55",
        warranty: "90 day",
        duration: " 1 hour",
    },
},
"googlePixel2": {
    screen: {
        price: "$130",
        warranty: "90 day",
        duration: "1 hour",
    },
    battery: {
        price: "$55",
        warranty: "90 day",
        duration: " 1 hour",
    },
    charging: {
        price: "$55",
        warranty: "90 day",
        duration: " 1 hour",
    },
},
"googlePixel2XL": {
    screen: {
        price: "$220",
        warranty: "90 day",
        duration: "1 hour",
    },
    battery: {
        price: "$55",
        warranty: "90 day",
        duration: " 1 hour",
    },
    charging: {
        price: "$55",
        warranty: "90 day",
        duration: " 1 hour",
    },
},
"googlePixel3": {
    screen: {
        price: "$250",
        warranty: "90 day",
        duration: "1 hour",
    },
    battery: {
        price: "$55",
        warranty: "90 day",
        duration: " 1 hour",
    },
    charging: {
        price: "$55",
        warranty: "90 day",
        duration: " 1 hour",
    },
},
"googlePixel3XL": {
    screen: {
        price: "$280",
        warranty: "90 day",
        duration: "1 hour",
    },
    battery: {
        price: "$55",
        warranty: "90 day",
        duration: " 1 hour",
    },
    charging: {
        price: "$55",
        warranty: "90 day",
        duration: " 1 hour",
    },
},
"googlePixel3A": {
    screen: {
        price: "$200",
        warranty: "90 day",
        duration: "1 hour",
    },
    battery: {
        price: "$55",
        warranty: "90 day",
        duration: " 1 hour",
    },
    charging: {
        price: "$55",
        warranty: "90 day",
        duration: " 1 hour",
    },
},
"googlePixel4": {
    screen: {
        price: "$200",
        warranty: "90 day",
        duration: "1 hour",
    },
    battery: {
        price: "$65",
        warranty: "90 day",
        duration: " 1 hour",
    },
    charging: {
        price: "$65",
        warranty: "90 day",
        duration: " 1 hour",
    },
},
"googlePixel4XL": {
    screen: {
        price: "$280",
        warranty: "90 day",
        duration: "1 hour",
    },
    battery: {
        price: "$75",
        warranty: "90 day",
        duration: " 1 hour",
    },
    charging: {
        price: "$65",
        warranty: "90 day",
        duration: " 1 hour",
    },
},
}





export { devices, devicesWithHomeButton }