export const elements={
  API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT,
  imageBase:"https://anyspaze.blob.core.windows.net/image",
  stateList: [
    {
      "code": "AN",
      "name": "Andaman and Nicobar Islands"
    },
    {
      "code": "AP",
      "name": "Andhra Pradesh"
    },
    {
      "code": "AR",
      "name": "Arunachal Pradesh"
    },
    {
      "code": "AS",
      "name": "Assam"
    },
    {
      "code": "BR",
      "name": "Bihar"
    },
    {
      "code": "CG",
      "name": "Chandigarh"
    },
    {
      "code": "CH",
      "name": "Chhattisgarh"
    },
    {
      "code": "DH",
      "name": "Dadra and Nagar Haveli"
    },
    {
      "code": "DD",
      "name": "Daman and Diu"
    },
    {
      "code": "DL",
      "name": "Delhi"
    },
    {
      "code": "GA",
      "name": "Goa"
    },
    {
      "code": "GJ",
      "name": "Gujarat"
    },
    {
      "code": "HR",
      "name": "Haryana"
    },
    {
      "code": "HP",
      "name": "Himachal Pradesh"
    },
    {
      "code": "JK",
      "name": "Jammu and Kashmir"
    },
    {
      "code": "JH",
      "name": "Jharkhand"
    },
    {
      "code": "KA",
      "name": "Karnataka"
    },
    {
      "code": "KL",
      "name": "Kerala"
    },
    {
      "code": "LD",
      "name": "Lakshadweep"
    },
    {
      "code": "MP",
      "name": "Madhya Pradesh"
    },
    {
      "code": "MH",
      "name": "Maharashtra"
    },
    {
      "code": "MN",
      "name": "Manipur"
    },
    {
      "code": "ML",
      "name": "Meghalaya"
    },
    {
      "code": "MZ",
      "name": "Mizoram"
    },
    {
      "code": "NL",
      "name": "Nagaland"
    },
    {
      "code": "OR",
      "name": "Odisha"
    },
    {
      "code": "PY",
      "name": "Puducherry"
    },
    {
      "code": "PB",
      "name": "Punjab"
    },
    {
      "code": "RJ",
      "name": "Rajasthan"
    },
    {
      "code": "SK",
      "name": "Sikkim"
    },
    {
      "code": "TN",
      "name": "Tamilnadu"
    },
    {
      "code": "TS",
      "name": "Telangana"
    },
    {
      "code": "TR",
      "name": "Tripura"
    },
    {
      "code": "UK",
      "name": "Uttarakhand"
    },
    {
      "code": "UP",
      "name": "Uttar Pradesh"
    },
    {
      "code": "WB",
      "name": "West Bengal"
    }
  ],
  shippingSlots: [
    "1:00 AM",
    "2:00 AM",
    "3:00 AM",
    "4:00 AM",
    "5:00 AM",
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
    "12:00 PM"
  ],
  addWarehouseForm: [
    {
      title: "Warehouse Certifications",
      fileds: [

        {
          name: "FSSAI approved",
          fieldName: "FSSAIApproved",
          fieldType: "radio",
          values: [
            {
              name: true,
              label: "Yes"
            },
            {
              name: false,
              label: "No"
            }
          ]
        },
        {
          name: "Drug Licensed",
          fieldName: "drugLicensed",
          fieldType: "radio",
          values: [
            {
              name: true,
              label: "Yes"
            },
            {
              name: false,
              label: "No"
            }
          ]
        },
        {
          name: "Excise approved",
          fieldName: "exciseApproved",
          fieldType: "radio",
          values: [
            {
              name: true,
              label: "Yes"
            },
            {
              name: false,
              label: "No"
            }
          ]
        }
      ]
    },
    {
      title: "Security & Backup",
      fileds: [
        {
          name: "Security 24 x 7",
          fieldName: "security",
          fieldType: "radio",
          values: [
            {
              name: true,
              label: "Yes"
            },
            {
              name: false,
              label: "No"
            }
          ]

        },
        {
          name: "CCTV Surveillance",
          fieldName: "CCTVSurveillance",
          fieldType: "radio",
          values: [
            {
              name: true,
              label: "Yes"
            },
            {
              name: false,
              label: "No"
            }
          ]

        },
        {
          name: "Fire Extinguishers",
          fieldName: "fireExtinguishers",
          fieldType: "radio",
          values: [
            {
              name: true,
              label: "Yes"
            },
            {
              name: false,
              label: "No"
            }
          ]

        },
        {
          name: "Power Backup - Generator",
          fieldName: "PowerBackupGenerator",
          fieldType: "radio",
          values: [
            {
              name: true,
              label: "Yes"
            },
            {
              name: false,
              label: "No"
            }
          ]

        }
      ]
    },
    {
      title: "Material Handling Systems",
      fileds: [
        {
          name: "Hand Pallet Trolley",
          fieldName: "handPalletTrolley",
          fieldType: "radio",
          values: [
            {
              name: true,
              label: "Yes"
            },
            {
              name: false,
              label: "No"
            }
          ]
        },
        {
          name: "Fork Lift",
          fieldName: "forkLift",
          fieldType: "radio",
          values: [
            {
              name: true,
              label: "Yes"
            },
            {
              name: false,
              label: "No"
            }
          ]
        }
      ]
    },
    {
      title: "Packaging Services",
      fileds: [
        {
          name: "Wooden Pallet/Crate Packing",
          fieldName: "woodenPallet",
          fieldType: "radio",
          values: [
            {
              name: true,
              label: "Yes"
            },
            {
              name: false,
              label: "No"
            }
          ]
        },
        {
          name: "Shrinkwrap/Strapping",
          fieldName: "shrinkWrap",
          fieldType: "radio",
          values: [
            {
              name: true,
              label: "Yes"
            },
            {
              name: false,
              label: "No"
            }
          ]
        }
      ]
    },
    {
      title: "Technology",
      fileds: [
        {
          name: "Internet Leased Line",
          fieldName: "internetleasedline",
          fieldType: "radio",
          values: [
            {
              name: true,
              label: "Yes"
            },
            {
              name: false,
              label: "No"
            }
          ]
        },
        {
          name: "WMS Software",
          fieldName: "wmsSoftware",
          fieldType: "radio",
          values: [
            {
              name: true,
              label: "Yes"
            },
            {
              name: false,
              label: "No"
            }
          ]
        },
        {
          name: "Manual MIS",
          fieldName: "manualMIS",
          fieldType: "radio",
          values: [
            {
              name: true,
              label: "Yes"
            },
            {
              name: false,
              label: "No"
            }
          ]
        },
        {
          name: "Barcoding",
          fieldName: "barcoding",
          fieldType: "radio",
          values: [
            {
              name: true,
              label: "Yes"
            },
            {
              name: false,
              label: "No"
            }
          ]
        }
      ]
    }
  ]
}