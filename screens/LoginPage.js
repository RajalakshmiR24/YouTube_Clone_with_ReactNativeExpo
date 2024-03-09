import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const LoginPage = () => {
  return (
    <View style={styles.loginpage}>
      <Text style={styles.dontHaveAnContainer}>
        <Text style={styles.dontHaveAnAccount}>
          <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.signUp}>Sign up</Text>
      </Text>
      <Text style={styles.forgetPassword}>Forget password ?</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition1]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={styles.vectorIcon2}
          contentFit="cover"
          source={require("../assets/vector12.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector13.png")}
        />
        <Image
          style={styles.vectorIcon4}
          contentFit="cover"
          source={require("../assets/vector14.png")}
        />
        <Image
          style={[styles.vectorIcon5, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector15.png")}
        />
        <Image
          style={[styles.vectorIcon6, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector16.png")}
        />
        <Image
          style={[styles.vectorIcon7, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector17.png")}
        />
        <Image
          style={[styles.vectorIcon8, styles.vectorIconPosition1]}
          contentFit="cover"
          source={require("../assets/vector18.png")}
        />
        <Image
          style={[styles.vectorIcon9, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector19.png")}
        />
        <Image
          style={[styles.shorts2Icon, styles.frameInnerPosition]}
          contentFit="cover"
          source={require("../assets/shorts-2.png")}
        />
        <Text style={styles.text1}>+</Text>
      </View>
      <View style={[styles.frame, styles.frameLayout1]}>
        <Text style={[styles.enterEmail, styles.logInTypo]}>Enter email</Text>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/group-3.png")}
        />
      </View>
      <View style={[styles.frame1, styles.frameLayout1]}>
        <Text style={[styles.password, styles.logInTypo]}>Password</Text>
        <Image
          style={[styles.lock1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/lock-1.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/group-4.png")}
        />
      </View>
      <View style={styles.frame2}>
        <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
      </View>
      <View style={styles.frame3}>
        <Image
          style={[styles.vectorIcon10, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/vector20.png")}
        />
        <Image
          style={[styles.frameInner, styles.frameInnerPosition]}
          contentFit="cover"
          source={require("../assets/group-2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition1: {
    bottom: "9.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout1: {
    top: "9.38%",
    width: "6.54%",
    height: "81.25%",
    bottom: "9.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    width: "5.61%",
    height: "59.38%",
    top: "31.25%",
    bottom: "9.38%",
  },
  vectorIconPosition: {
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameInnerPosition: {
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout1: {
    borderWidth: 1,
    borderColor: Color.colorGray_400,
    borderStyle: "solid",
    borderRadius: Border.br_lg,
    left: "9.23%",
    right: "8.21%",
    width: "82.56%",
    height: "8.18%",
    position: "absolute",
    overflow: "hidden",
  },
  logInTypo: {
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    position: "absolute",
  },
  frameLayout: {
    width: "5.19%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  dontHaveAn: {
    color: Color.colorDimgray_300,
  },
  text: {
    color: Color.colorSilver,
  },
  dontHaveAnAccount: {
    fontFamily: FontFamily.productSans,
  },
  signUp: {
    fontWeight: "700",
    color: Color.colorGainsboro,
    fontFamily: FontFamily.productSans,
  },
  dontHaveAnContainer: {
    top: "80.92%",
    left: "27.44%",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    position: "absolute",
  },
  forgetPassword: {
    top: "47.75%",
    left: "58.97%",
    fontSize: 16,
    opacity: 0.2,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  vectorIcon: {
    height: "1.56%",
    width: "1.51%",
    top: "4.86%",
    right: "87.46%",
    bottom: "93.58%",
    left: "11.03%",
  },
  vectorIcon1: {
    height: "87.5%",
    width: "19.16%",
    right: "47.2%",
    left: "33.64%",
    top: "3.13%",
  },
  vectorIcon2: {
    height: "34.38%",
    width: "5.14%",
    right: "53.74%",
    bottom: "34.38%",
    left: "41.12%",
    top: "31.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon3: {
    right: "37.85%",
    left: "55.61%",
  },
  vectorIcon4: {
    right: "31.78%",
    left: "61.68%",
    height: "59.38%",
    width: "6.54%",
    top: "31.25%",
    bottom: "9.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon5: {
    right: "25.23%",
    left: "69.16%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon6: {
    right: "19.16%",
    left: "74.3%",
  },
  vectorIcon7: {
    right: "14.02%",
    left: "80.37%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon8: {
    height: "84.38%",
    width: "6.07%",
    top: "6.25%",
    right: "6.54%",
    left: "87.38%",
  },
  vectorIcon9: {
    left: "94.39%",
    width: "5.61%",
    height: "59.38%",
    top: "31.25%",
    bottom: "9.38%",
  },
  shorts2Icon: {
    width: "15.42%",
    right: "84.58%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  text1: {
    left: "23.36%",
    fontSize: FontSize.size_2xl,
    top: "3.13%",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  vectorParent: {
    top: 147,
    left: 85,
    width: 214,
    height: 32,
    position: "absolute",
  },
  enterEmail: {
    left: "16.46%",
    top: "31.88%",
    fontSize: FontSize.size_xl,
    opacity: 0.2,
    fontFamily: FontFamily.productSans,
    textAlign: "center",
  },
  frameChild: {
    height: "20.58%",
    top: "39.13%",
    right: "88.6%",
    bottom: "40.29%",
    left: "6.21%",
  },
  frame: {
    top: "27.37%",
    bottom: "64.45%",
  },
  password: {
    left: "15.22%",
    top: "31.88%",
    fontSize: FontSize.size_xl,
    opacity: 0.2,
    fontFamily: FontFamily.productSans,
    textAlign: "left",
  },
  lock1Icon: {
    height: "28.99%",
    width: "6.21%",
    top: "34.78%",
    right: "88.2%",
    bottom: "36.23%",
    left: "5.59%",
  },
  frameItem: {
    height: "24.2%",
    top: "37.68%",
    right: "5.99%",
    bottom: "38.12%",
    left: "88.82%",
  },
  frame1: {
    top: "37.32%",
    bottom: "54.5%",
  },
  logIn: {
    top: "33.33%",
    left: "42.24%",
    fontFamily: FontFamily.abhayaLibreExtraBold,
    textAlign: "center",
  },
  frame2: {
    top: "53.44%",
    bottom: "38.39%",
    backgroundColor: Color.colorCrimson,
    borderRadius: Border.br_lg,
    left: "9.23%",
    right: "8.21%",
    width: "82.56%",
    height: "8.18%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon10: {
    width: "25.45%",
    left: "74.55%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameInner: {
    height: "83.28%",
    width: "24.91%",
    top: "8.8%",
    right: "75.09%",
    bottom: "7.92%",
  },
  frame3: {
    top: 577,
    left: 142,
    width: 110,
    height: 34,
    position: "absolute",
    overflow: "hidden",
  },
  loginpage: {
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default LoginPage;
