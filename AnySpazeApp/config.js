import { Colors } from "react-native-paper"
export const config = {
  API_ENDPOINT: 'https://anyspaze.azurewebsites.net/api',
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
  ]

}

export const HeaderStyle = {
  headerStyle: {
    backgroundColor: "#000"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}
export const LabelBlack = {
  color: Colors.black,
  marginBottom: 10,
  marginTop: 20,
}
export const InputContainerDark = {
  display: "flex",
  flexDirection: "row",
  borderBottomColor: Colors.grey500,
  borderBottomWidth: 1,
  paddingBottom: 5
}
export const InputDark = {

  width: "100%",
  paddingHorizontal: 10,
  color: Colors.black,
  fontSize: 16

}
export const ButtonDark = {
  backgroundColor: Colors.black,
  marginTop: 40,
  borderRadius: 10,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center"
}
export const ButtonLight = {
  backgroundColor: "#eee",
  marginTop: 40,
  borderRadius: 10,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center"
}
export const DarkBtnText = {
  textAlign: "center",
  fontWeight: "bold",
  marginVertical: 20,
  color: Colors.white
}
export const LightBtnText = {
  textAlign: "center",
  fontWeight: "bold",
  marginVertical: 20,
  color: Colors.black
}
export const ErrorDark = { color: Colors.red800, marginVertical: 10 }

export const SuccessDark = {
  color: Colors.green800,
  fontWeight: "bold",
  marginVertical: 10
}
export const BottomTabStyle = { height: 80, width: "100%", backgroundColor: "#fff", position: "absolute", bottom: 0, zIndex: 11, display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignContent: "space-between", borderTopColor: Colors.grey300, borderTopWidth: 1 }

export const BottomTabBtnStyle = { height: "100%", paddingTop: 10, alignItems: "center", flex: 1, display: "flex" }

export const BottomTabBtnText = { color: Colors.black }


export const ModalCenteredView = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 0,
  backgroundColor: "rgba(0,0,0,0.8)",
  zIndex: 111

}
export const modalView = {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  zIndex: 111
}


export const listItem = {
  backgroundColor: "#fff",
  margin: 0,
  padding: 15,
  display: "flex"
}
export const localityStyle= {
  fontSize: 16,
  marginBottom: 10,
  color:"#000",
   textTransform:"capitalize"
}
export const warehouseListTitle={
  fontSize: 20,
  marginBottom: 4,
  color: "#000"
}