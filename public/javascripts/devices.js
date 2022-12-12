const devicesWithHomeButton = [
  "8plus",
  "8",
  "7plus",
  "7",
  "6splus",
  "6s",
  "6plus",
  "6",
  "ipadmini",
  "ipadmini2",
  "ipadmini3",
  "ipadmini4",
  "ipadmini5",
  "ipad2",
  "ipad3",
  "ipad4",
  "ipad5",
  "ipad6",
  "ipad7",
  "ipadair",
  "ipadair2",
  "ipadair3",
  "ipadpro9",
  "ipadpro10",
  "ipadpro121",
  "ipadpro122"
];

const devicesWithVersions = {
    "apple-watch-series-3-38mm": ["GPS", "Cellular"],
    "apple-watch-series-3-42mm": ["GPS", "Cellular"],
};

const iphoneSixThroughEightPlus = [
    "6",
    "6s",
    "6splus",
    "7",
    "7plus",
    "8",
    "8plus",
]

const devices = {
    "ipadmini": {
        screen: {
            price: "$125",
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
            price: "$125",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$130",
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
            price: "$125",
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
            price: "$210",
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
            price: "$230",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$180",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        battery: {
            price: "$190",
            warranty: "90 day",
            duration: "1 hour",
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
    "ipadmini6": {
        screen: {
            price: "$440",
            // warranty: "90 day",
            // duration: "1 hour",
        },
        glassOnly: {
            price: "call",
            // warranty: "90 day",
            // duration: "3-5 hours"
        },
        battery: {
            price: "call",
            // warranty: "90 day",
            // duration: "1 hour",
        },
        charging: {
            price: "call",
            // warranty: "90 day",
            // duration: "3 hour",
        },
        water: {
            price: "call",
            // warranty: "90 day",
            // duration: "2-3 business days",
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
    "ipad6": {
        screen: {
            price: "$145",
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
    "ipad7": {
        screen: {
            price: "$145",
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
    "ipad8": {
        screen: {
            price: "$145",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "call",
            // warranty: "90 day",
            // duration: "1 hour",
        },
        charging: {
            price: "call",
            // warranty: "90 day",
            // duration: "3 hour",
        },
        water: {
            price: "call",
            // warranty: "90 day",
            // duration: "2-3 business days",
        },
    },
    "ipad9": {
        screen: {
            price: "$145",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "call",
            // warranty: "90 day",
            // duration: "1 hour",
        },
        charging: {
            price: "call",
            // warranty: "90 day",
            // duration: "3 hour",
        },
        water: {
            price: "call",
            // warranty: "90 day",
            // duration: "2-3 business days",
        },
    },
    "ipadair": {
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
    "ipadair2": {
        screen: {
            price: "$245",
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
            price: "$270",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$175",
            warranty: "90 day",
            duration: "3-5 hours"
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
            price: "$300-$450",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipadair4": {
        screen: {
            price: "$240",
            warranty: "90 day",
            duration: "1 hours"
        },
        glassOnly: {
            price: "$280",
            warranty: "90 day",
            duration: "3-5 hours"
        },
    },
    "ipadair5": {
        screen: {
            price: "$255",
            warranty: "90 day",
            duration: "1 hours"
        },
        glassOnly: {
            price: "call",
            // warranty: "90 day",
            // duration: "3-5 hours"
        },
    },
    "ipadpro9": {
        screen: {
            price: "$245",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$150",
            warranty: "90 day",
            duration: "3-5 hours"
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
    "ipadpro10": {
        screen: {
            price: "$290",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$175",
            warranty: "90 day",
            duration: "3-5 hours"
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
    "ipadpro111": {
        screen: {
            price: "$260",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$280",
            warranty: "90 day",
            duration: "3-5 hours"
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
    "ipadpro112": {
        screen: {
            price: "$260",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "call",
            // warranty: "90 day",
            // duration: "3-5 hours"
        },
        battery: {
            price: "call",
            // warranty: "90 day",
            // duration: "1 hour",
        },
        charging: {
            price: "call",
            // warranty: "90 day",
            // duration: "3 hour",
        },
        water: {
            price: "call",
            // warranty: "90 day",
            // duration: "2-3 business days",
        },
    },
    "ipadpro113": {
        screen: {
            price: "$275",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "call",
            // warranty: "90 day",
            // duration: "3-5 hours"
        },
        battery: {
            price: "call",
            // warranty: "90 day",
            // duration: "1 hour",
        },
        charging: {
            price: "call",
            // warranty: "90 day",
            // duration: "3 hour",
        },
        water: {
            price: "call",
            // warranty: "90 day",
            // duration: "2-3 business days",
        },
    },
    "ipadpro114": {
        screen: {
            price: "$275",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "call",
            // warranty: "90 day",
            // duration: "3-5 hours"
        },
        battery: {
            price: "call",
            // warranty: "90 day",
            // duration: "1 hour",
        },
        charging: {
            price: "call",
            // warranty: "90 day",
            // duration: "3 hour",
        },
        water: {
            price: "call",
            // warranty: "90 day",
            // duration: "2-3 business days",
        },
    },
    "ipadpro121": {
        screen: {
            price: "$320",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$230",
            warranty: "90 day",
            duration: "3-5 hours"
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
    "ipadpro122": {
        screen: {
            price: "$565",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$270",
            warranty: "90 day",
            duration: "3-5 hours"
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
            price: "$600-$650",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipadpro123": {
        screen: {
            price: "$280",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$240",
            warranty: "90 day",
            duration: "3-5 hours"
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
    "ipadpro124": {
        screen: {
            price: "$280",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$240",
            warranty: "90 day",
            duration: "3-5 hours"
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
    "ipadpro125": {
        screen: {
            price: "$435",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "call",
            // warranty: "90 day",
            // duration: "3-5 hours"
        },
        battery: {
            price: "call",
            // warranty: "90 day",
            // duration: "1 hour",
        },
        charging: {
            price: "call",
            // warranty: "90 day",
            // duration: "3 hour",
        },
        water: {
            price: "call",
            // warranty: "90 day",
            // duration: "2-3 business days",
        },
    },
    "ipadpro126": {
        screen: {
            price: "$435",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "call",
            // warranty: "90 day",
            // duration: "3-5 hours"
        },
        battery: {
            price: "call",
            // warranty: "90 day",
            // duration: "1 hour",
        },
        charging: {
            price: "call",
            // warranty: "90 day",
            // duration: "3 hour",
        },
        water: {
            price: "call",
            // warranty: "90 day",
            // duration: "2-3 business days",
        },
    },
    "apple-watch-series-2-38mm": {
        glassOnly: {
            price: "$120",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        glassTouch: {
            price: "$120",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        LCD: {
            price: "$115",
            warranty: "90 day",
            duration: "20-30 minutes"
        }
    },
    "apple-watch-series-2-42mm": {
        glassOnly: {
            price: "$120",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        glassTouch: {
            price: "$120",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        LCD: {
            price: "$135",
            warranty: "90 day",
            duration: "20-30 minutes"
        }
    },
    "apple-watch-series-3-38mm": {
        LCD: {
            price: {
                Cellular: "$160",
                GPS: "$160"
            },
            warranty: "90 day",
            duration: "20-30 minutes"
        },
        glassOnly: {
            price: "$160",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        glassTouch: {
            price: "$160",
            warranty: "90 day",
            duration: "3-5 hours"
        },
    },
    "apple-watch-series-3-42mm": {
        LCD: {
            price: {
                Cellular: "$190",
                GPS: "$190"
            },
            warranty: "90 day",
            duration: "20-30 minutes"
        },
        glassOnly: {
            price: "$190",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        glassTouch: {
            price: "$190",
            warranty: "90 day",
            duration: "3-5 hours"
        },
    },
    "apple-watch-series-4-40mm": {
        glassOnly: {
            price: "$210",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        // glassTouch: {
        //     price: "$210",
        //     warranty: "90 day",
        //     duration: "3-5 hours"
        // },
        LCD: {
            price: "$210",
            warranty: "90 day",
            duration: "20-30 minutes"
        }
    },
    "apple-watch-series-4-44mm": {
        glassOnly: {
            price: "$225",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        // glassTouch: {
        //     price: "$225",
        //     warranty: "90 day",
        //     duration: "3-5 hours"
        // },
        LCD: {
            price: "$225",
            warranty: "90 day",
            duration: "20-30 minutes"
        }
    },
    "apple-watch-series-5-40mm": {
        glassOnly: {
            price: "$190",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        glassTouch: {
            price: "$190",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        LCD: {
            price: "$190",
            warranty: "90 day",
            duration: "20-30 minutes"
        }
    },
    "apple-watch-series-5-44mm": {
        glassOnly: {
            price: "$225",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        glassTouch: {
            price: "$225",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        LCD: {
            price: "$225",
            warranty: "90 day",
            duration: "20-30 minutes"
        }
    },
    "apple-watch-series-6-40mm": {
        glassOnly: {
            price: "$160",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        glassTouch: {
            price: "$170",
            warranty: "90 day",
            duration: "3-5 hours"
        },
    },
    "apple-watch-series-6-44mm": {
        glassOnly: {
            price: "$160",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        glassTouch: {
            price: "$170",
            warranty: "90 day",
            duration: "3-5 hours"
        },
    },
    "apple-watch-series-se-40mm": {
        LCD: {
            price: "$190",
            warranty: "90 day",
            duration: "20-30 minutes"
        },
        glassOnly: {
            price: "$190",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        glassTouch: {
            price: "$190",
            warranty: "90 day",
            duration: "3-5 hours"
        },
    },
    "apple-watch-series-se-44mm": {
        LCD: {
            price: "$225",
            warranty: "90 day",
            duration: "20-30 minutes"
        },
        glassOnly: {
            price: "$225",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        glassTouch: {
            price: "$225",
            warranty: "90 day",
            duration: "3-5 hours"
        },
    },
    "apple-watch-series-6-40mm": {
        LCD: {
            price: "$190",
            warranty: "90 day",
            duration: "20-30 minutes"
        },
        glassOnly: {
            price: "$190",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        glassTouch: {
            price: "$190",
            warranty: "90 day",
            duration: "3-5 hours"
        },
    },
    "apple-watch-series-6-44mm": {
        LCD: {
            price: "$210",
            warranty: "90 day",
            duration: "20-30 minutes"
        },
        glassOnly: {
            price: "$210",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        glassTouch: {
            price: "$210",
            warranty: "90 day",
            duration: "3-5 hours"
        },
    },
    "apple-watch-series-7-41mm": {
        LCD: {
            price: "$210",
            warranty: "90 day",
            duration: "20-30 minutes"
        },
        glassOnly: {
            price: "$210",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        glassTouch: {
            price: "$210",
            warranty: "90 day",
            duration: "3-5 hours"
        },
    },
    "apple-watch-series-7-45mm": {
        LCD: {
            price: "$215",
            warranty: "90 day",
            duration: "20-30 minutes"
        },
        glassOnly: {
            price: "$215",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        glassTouch: {
            price: "$215",
            warranty: "90 day",
            duration: "3-5 hours"
        },
    },
    "apple-watch-series-se-2-40mm": {
        LCD: {
            price: "$190",
            warranty: "90 day",
            duration: "20-30 minutes"
        },
        glassOnly: {
            price: "$190",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        glassTouch: {
            price: "$190",
            warranty: "90 day",
            duration: "3-5 hours"
        },
    },
    "apple-watch-series-se-2-44mm": {
        LCD: {
            price: "$225",
            warranty: "90 day",
            duration: "20-30 minutes"
        },
        glassOnly: {
            price: "$225",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        glassTouch: {
            price: "$225",
            warranty: "90 day",
            duration: "3-5 hours"
        },
    },
    "6": {
        screen: {
            price: {
                OX7H: "$80",
                OX7S: null,
                OEMS: "$80",
                OEMT: null,
                OEML: null,
            },
            warranty: "90 day",
            duration: "15 minutes",
        },
        battery: {
            price: "$50",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$50",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$100-$150",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "6s": {
        screen: {
            price: {
                OX7H: "$85",
                OX7S: null,
                OEMS: "$85",
                OEMT: null,
                OEML: null,
            },
            warranty: "90 day",
            duration: "15 minutes",
        },
        battery: {
            price: "$50",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$50",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$100-$150",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "6plus": {
        screen: {
            price: {
                OX7H: "$85",
                OX7S: null,
                OEMS: "$90",
                OEMT: null,
                OEML: null,
            },
            warranty: "90 day",
            duration: "15 minutes",
        },
        battery: {
            price: "$50",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$50",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$100-$150",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "6splus": {
        screen: {
            price: {
                OX7H: "$90",
                OX7S: null,
                OEMS: "$95",
                OEMT: null,
                OEML: null,
            },
            warranty: "90 day",
            duration: "15 minutes",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$50",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$100-$150",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "7": {
        screen: {
            price: {
                OX7H: "$85",
                OX7S: null,
                OEMS: "$85",
                OEMT: null,
                OEML: null,
            },
            warranty: "90 day",
            duration: "15 minutes",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$55",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$100-$180",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "7plus": {
        screen: {
            price: {
                OX7H: "$90",
                OX7S: null,
                OEMS: "$100",
                OEMT: "$90",
                OEML: "$100",
            },
            warranty: "90 day",
            duration: "15 minutes",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$55",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$100-$180",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "8": {
        screen: {
            price: {
                OX7H: "$85",
                OX7S: null,
                OEMS: "$90",
                OEMT: null,
                OEML: null,
            },
            warranty: "90 day",
            duration: "15 minutes",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$60",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$100-$200",
            warranty: "90 day",
            duration: "2-3 business days",
        },
        backglass: {
            duration: "3 hour",
            price: "$100"
        }
    },
    "8plus": {
        screen: {
            price: {
                OX7H: "$90",
                OX7S: null,
                OEMS: "$90",
                OEMT: "$90",
                OEML: "$100",
            },
            warranty: "90 day",
            duration: "15 minutes",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$60",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$100-$200",
            warranty: "90 day",
            duration: "2-3 business days",
        },
        backglass: {
            duration: "3 hour",
            price: "$100"
        }
    },
    "x": {
        screen: {
            price: {
                OX7H: "$115",
                OX7S: "$120",
                OEMS: "$150",
                OEMT: null,
                OEML: null,
            },
            warranty: "90 day",
            duration: "15 minutes",
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$100-$300",
            warranty: "90 day",
            duration: "2-3 business days",
        },
        backglass: {
            duration: "3 hour",
            price: "$120"
        }
    },
    "xs": {
        screen: {
            price: {
                OX7H: null,
                OX7S: "$125",
                OEMS: "$180",
                OEMT: null,
                OEML: null,
            },
            warranty: "90 day",
            duration: "15 minutes",
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$100-$300",
            warranty: "90 day",
            duration: "2-3 business days",
        },
        backglass: {
            duration: "3 hour",
            price: "$120"
        }
    },
    "se2": {
        screen: {
            price: {
                OX7H: "$85",
                OX7S: null,
                OEMS: "$90",
                OEMT: null,
                OEML: null,
            },
            warranty: "90 day",
            duration: "15 minutes",
        },
        battery: {
            price: "$75",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$75",
            warranty: "90 day",
            duration: "30 minutes",
        },
        backglass: {
            duration: "3 hour",
            price: "$100"
        },
        logic: {
            duration: "1-3 days",
            price: "$100-$200"
        }
    },
    "xr": {
        screen: {
            price: {
                OX7H: "$125",
                OX7S: null,
                OEMS: "$150",
                OEMT: null,
                OEML: null,
            },
            warranty: "90 day",
            duration: "15 minutes",
        },
        battery: {
            price: "$75",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$75",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$100-$300",
            warranty: "90 day",
            duration: "2-3 business days",
        },
        backglass: {
            duration: "3 hour",
            price: "$120"
        }
    },
    "xsmax": {
        screen: {
            price: {
                OX7H: "$130",
                OX7S: "$150",
                OEMS: "$200",
                OEMT: null,
                OEML: null,
            },
            warranty: "90 day",
            duration: "15 minutes",
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$100-$300",
            warranty: "90 day",
            duration: "2-3 business days",
        },
        backglass: {
            duration: "3 hour",
            price: "$120"
        }
    },
    "11": {
        screen: {
            price: {
                OX7H: "$125",
                OX7S: null,
                OEMS: "$150",
                OEMT: null,
                OEML: null,
            },
            warranty: "90 day",
            duration: "15 minutes",
        },
        battery: {
            price: "$90",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$90",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$100-$400",
            warranty: "90 day",
            duration: "2-3 business days",
        },
        backglass: {
            duration: "3 hour",
            price: "$140"
        }
    },
    "11pro": {
        screen: {
            price: {
                OX7H: null,
                OX7S: "$140",
                OEMS: "$160",
                OEMT: null,
                OEML: null,
            },
            warranty: "90 day",
            duration: "15 minutes",
        },
        battery: {
            price: "$95",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$120",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$100-$400",
            warranty: "90 day",
            duration: "2-3 business days",
        },
        backglass: {
            duration: "3 hour",
            price: "$140"
        }
    },
    "11proMax": {
        screen: {
            price: {
                OX7H: null,
                OX7S: "$160",
                OEMS: "$210",
                OEMT: null,
                OEML: null,
            },
            warranty: "90 day",
            duration: "15 minutes",
        },
        battery: {
            price: "$95",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$120",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$100-$400",
            warranty: "90 day",
            duration: "2-3 business days",
        },
        backglass: {
            duration: "3 hour",
            price: "$140"
        }
    },
    "12mini": {
        screen: {
            price: {
                OX7H: "$185",
                OX7S: null,
                OEMS: "$265",
                OEMT: null,
                OEML: null,
            },
            warranty: "90 day",
            duration: "15 minutes",
        },
        battery: {
            price: "$120",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$120",
            warranty: "90 day",
            duration: "30 minutes",
        },
        backglass: {
            duration: "3 hour",
            price: "$150"
        }
    },
    "1212pro": {
        screen: {
            price: {
                OX7H: "$185",
                OX7S: "$200",
                OEMS: "$265",
                OEMT: null,
                OEML: null,
            },
            warranty: "90 day",
            duration: "15 minutes",
        },
        battery: {
            price: "$120",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$140",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$100-$500",
            warranty: "90 day",
            duration: "2-3 business days",
        },
        backglass: {
            duration: "3 hour",
            price: "$150"
        }
    },
    "12proMax": {
        screen: {
            price: {
                OX7H: "$205",
                OX7S: null,
                OEMS: "$315",
                OEMT: null,
                OEML: null,
            },
            warranty: "90 day",
            duration: "15 minutes",
        },
        battery: {
            price: "$140",
            warranty: "90 day",
            duration: "15 minutes",
        },
        water: {
            price: "$100-$500",
            warranty: "90 day",
            duration: "2-3 business days",
        },
        charging: {
            price: "$140",
            warranty: "90 day",
            duration: "30 minutes",
        },
        backglass: {
            duration: "3 hour",
            price: "$150"
        }
    },
    "13mini": {
        screen: {
            price: {
                OX7H: null,
                OX7S: null,
                OEMS: "$415",
                OEMT: null,
                OEML: null,
            },
            warranty: "90 day",
            duration: "15 minutes",
        }
    },
    "13": {
        screen: {
            price: {
                OX7H: null,
                OX7S: null,
                OEMS: "$320",
                OEMT: null,
                OEML: null,
            },
            warranty: "90 day",
            duration: "15 minutes",
        }
    },
    "13pro": {
        screen: {
            price: {
                OX7H: null,
                OX7S: null,
                OEMS: "$355",
                OEMT: null,
                OEML: null,
            },
            warranty: "90 day",
            duration: "15 minutes",
        }
    },
    "13proMax": {
        screen: {
            price: {
                OX7H: null,
                OX7S: null,
                OEMS: "$375",
                OEMT: null,
                OEML: null,
            },
            warranty: "90 day",
            duration: "15 minutes",
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
            duration: "1 hour",
        },
        charging: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixelXL": {
        screen: {
            price: "$125",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel2": {
        screen: {
            price: "$135",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel2XL": {
        screen: {
            price: "$140",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel3": {
        screen: {
            price: "$200",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel3XL": {
        screen: {
            price: "$190",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel3A": {
        screen: {
            price: "$180",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel3AXL": {
        screen: {
            price: "$185",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "call",
            // warranty: "90 day",
            // duration: "1 hour",
        },
        charging: {
            price: "call",
            // warranty: "90 day",
            // duration: "1 hour",
        },
    },
    "googlePixel4": {
        screen: {
            price: "$170",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$65",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$65",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel4XL": {
        screen: {
            price: "$225",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel4a": {
        screen: {
            price: "$240",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel4a5g": {
        screen: {
            price: "$205",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel5": {
        screen: {
            price: "$290",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel5A": {
        screen: {
            price: "$265",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel5a5g": {
        screen: {
            price: "$250",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel6": {
        screen: {
            price: "$265",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel6pro": {
        screen: {
            price: "$390",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel6A": {
        screen: {
            price: "$300",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel7": {
        screen: {
            price: "$300",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel7pro": {
        screen: {
            price: "$345",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel5a5g": {
        screen: {
            price: "$250",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "S20FE5G": {
        screen: {
            price: "$200",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Cloud Navy",
            "Cloud White",
            "Cloud Mint",
            "Cloud Orange",
            "Cloud Red",
            "Cloud Lavender",
        ]
    },
    "S20Ultra5g": {
        screen: {
            price: "$390",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$215",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Cosmic Grey",
            "Cosmic Black",
        ]
    },
    "S20Plus5g": {
        screen: {
            price: "$360",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$285",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Aura Blue",
            "Cloud White",
            "Cloud Blue",
            "Cosmic Grey",
            "Cosmic Black",
        ]
    },
    "S205G": {
        screen: {
            price: "$320",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$190",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Cloud Pink",
            "Cosmic Grey",
            "Cloud Blue",
            "Cosmic Black",
            "Cloud White",
        ]
    },
    "S10Lite": {
        screen: {
            price: "$230",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$85",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$85",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$85",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Prism White",
            "Prism Blue",
            "Prism Black",
        ]
    },
    "S105G": {
        screen: {
            price: "$370",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Majestic Black",
            "Crown Silver",
            "Royal Gold",
        ]
    },
    "S10Plus": {
        screen: {
            price: "$380",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$165",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Ceramic White",
            "Prism Blue",
            "Prism Green",
            "Prism Black",
            "Prism White",
            "Flamingo Pink",
        ]
    },
    "S10": {
        screen: {
            price: "$380",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$165",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Prism Black",
            "Prism White",
            "Prism Green",
            "Flamingo Pink",
            "Prism Blue",
        ]
    },
    "S10e": {
        screen: {
            price: "$210",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Prism Black",
            "Prism White",
            "Prism Green",
            "Canary Yellow",
            "Flamingo Pink",
            "Prism Blue",
        ]
    },
    "S9Plus": {
        screen: {
            price: "$260",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$150",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Sunrise Gold",
            "Midnight Black",
            "Lilac Purple",
            "Grey",
            "Coral Blue",
        ]
    },
    "S9": {
        screen: {
            price: "$250",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$140",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        battery: {
            price: "$75",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$75",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$75",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Sunrise Gold",
            "Midnight Black",
            "Lilac Purple",
            "Grey",
            "Coral Blue",
        ]
    },
    "S8Plus": {
        screen: {
            price: "$260",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$135",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        battery: {
            price: "$75",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$75",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$75",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Midnight Black",
            "Grey",
            "Maple Gold",
            "Coral Blue",
            "Arctic Silver",
        ]
    },
    "S8": {
        screen: {
            price: "$220",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$135",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        battery: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Grey",
            "Gold",
            "Coral Blue",
            "Midnight Black",
            "Maple Gold",
            "Arctic Silver",
        ]
    },
    "Note20Ultra": {
        screen: {
            price: "$420",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$230",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Mystic Bronze",
            "Mystic Black",
            "Mystic White",
        ]
    },
    "Note205G": {
        screen: {
            price: "$320",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$200",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Mystic Green",
            "Mystic Bronze",
            "Mystic Gray",
        ]
    },
    "S21": {
        glassOnly: {
            price: "$200",
            warranty: "90 day",
            duration: "3-5 hours"
        }
    },
    "S21plus": {
        glassOnly: {
            price: "$200",
            warranty: "90 day",
            duration: "3-5 hours"
        }
    },
    "S21ultra": {
        glassOnly: {
            price: "$240",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        LCD: {
            price: "$480",
            warranty: "90 day",
            duration: "1 hour"
        }
    },
    "S21FE5G": {
        glassOnly: {
            price: "$240",
            warranty: "90 day",
            duration: "3-5 hours"
        }
    },
    "Note10Plus": {
        screen: {
            price: "$360",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$180",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        battery: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Aura Black",
            "Aura White",
            "Aura Glow",
        ]
    },
    "Note10Lite": {
        screen: {
            price: "$265",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$95",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$95",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$95",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Aura Glow",
            "Aura Black",
        ]
    },
    "Note10": {
        screen: {
            price: "$410",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$170",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        battery: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Aura Black",
            "Aura Glow",
            "Aura White",
            "Aura Pink",
        ]
    },
    "Note9": {
        screen: {
            price: "$270",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$150",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        battery: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Cloud Silver",
            "Alpine White",
            "Ocean",
        ]
    },
    "Note8": {
        screen: {
            price: "$270",
            warranty: "90 day",
            duration: "1 hour",
        },
        glassOnly: {
            price: "$150",
            warranty: "90 day",
            duration: "3-5 hours"
        },
        battery: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Grey",
            "Gold",
            "Coral Blue",
            "Midnight Black",
            "Maple Gold",
            "Arctic Silver",
        ]
    },
}





export { 
    devices, 
    devicesWithHomeButton, 
    devicesWithVersions,
    iphoneSixThroughEightPlus
}