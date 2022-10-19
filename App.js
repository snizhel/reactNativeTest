import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Hello from "./components/hello";
import Main from "./components/MainComponent";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/ConfigureStore";

// redux-persist
import { PersistGate } from "redux-persist/es/integration/react";
const { persistor, store } = ConfigureStore();
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  databaseURL: "https://lab52-30a35-default-rtdb.firebaseio.com/"
};
initializeApp(firebaseConfig);
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
