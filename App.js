import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";

// imports
import Header from "./Components/Header";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import { Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#0072bc",
    accent: "#0072bc",
  },
};

const ActivityIndicatorElement = () => {
  return <ActivityIndicator color='#009688' size='large' style={styles.activityIndicatorStyle} />;
};

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PaperProvider theme={theme} style={{ flex: 1, alignItems: "flex-end", marginTop: 30 }}>
        <Header />
        <WebView
          source={{
            uri: "https://muspakistan.com/",
          }}
          startInLoadingState={true}
          scalesPageToFit={true}
          style={{
            width: screenWidth,
            height: screenHeight,
          }}
          //Enable Javascript support
          javaScriptEnabled={true}
          //For the Cache
          domStorageEnabled={true}
          onLoadStart={() => setVisible(true)}
          onLoad={() => setVisible(false)}
          renderLoading={ActivityIndicatorElement}
        />
        {visible ? <ActivityIndicatorElement /> : null}
      </PaperProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // width: deviceWidth,
    // height: deviceHeight,
  },
  activityIndicatorStyle: {
    flex: 1,
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
  },
});
