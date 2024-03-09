import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SignUpPage = () => {
  return (
    <View style={styles.signupPage}>
      <Text style={styles.alreadyHaveAn}>Already have an account? Login</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <View style={[styles.frame, styles.frameLayout1]}>
        <Text style={[styles.fullName, styles.fullNamePosition]}>
          Full name
        </Text>
        <Image
          style={[styles.frameChild, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/group-6.png")}
        />
      </View>
      <View style={[styles.frame1, styles.frameLayout1]}>
        <Text style={[styles.enterEmail, styles.fullNamePosition]}>
          Enter email
        </Text>
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/group-3.png")}
        />
      </View>
      <View style={[styles.frame2, styles.frameLayout1]}>
        <Text style={[styles.fullName, styles.fullNamePosition]}>Password</Text>
        <Image
          style={[styles.lock1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/lock-1.png")}
        />
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/group-4.png")}
        />
      </View>
      <View style={[styles.frame3, styles.frameLayout1]}>
        <Text style={[styles.fullName, styles.fullNamePosition]}>
          Repeat password
        </Text>
        <Image
          style={[styles.lock1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/lock-1.png")}
        />
      </View>
      <View style={styles.frame4}>
        <Text style={[styles.signUp, styles.textClr]}>Sign Up</Text>
      </View>
      <View style={styles.frame5}>
        <Image
          style={[styles.vectorIcon1, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/vector20.png")}
        />
        <Image
          style={[styles.groupIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/group-21.png")}
        />
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector18.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector19.png")}
        />
        <Image
          style={[styles.shorts2Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/shorts-2.png")}
        />
        <Text style={[styles.text, styles.textClr]}>+</Text>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <Image
          style={[styles.frameIcon1, styles.frameIconPosition]}
          contentFit="cover"
          source={require("../assets/frame1.png")}
        />
        <Image
          style={[styles.frameIcon2, styles.frameIconPosition]}
          contentFit="cover"
          source={require("../assets/frame2.png")}
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
  frameLayout1: {
    borderWidth: 1,
    borderColor: Color.colorGray_400,
    borderStyle: "solid",
    left: "8.97%",
    right: "8.46%",
    borderRadius: Border.br_lg,
    width: "82.56%",
    height: "8.18%",
    position: "absolute",
    overflow: "hidden",
  },
  fullNamePosition: {
    opacity: 0.2,
    top: "31.88%",
    color: Color.colorWhite,
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  framePosition: {
    bottom: "38.12%",
    top: "37.68%",
    height: "24.2%",
  },
  frameLayout: {
    width: "5.19%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textClr: {
    color: Color.colorWhite,
    position: "absolute",
  },
  iconPosition1: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  iconPosition: {
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    bottom: "9.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconPosition: {
    height: 26,
    top: 3,
    position: "absolute",
    overflow: "hidden",
  },
  alreadyHaveAn: {
    top: "85.19%",
    left: "24.87%",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.aBeeZeeRegular,
    color: Color.colorSilver,
    textAlign: "center",
    position: "absolute",
  },
  vectorIcon: {
    height: "1.56%",
    width: "1.51%",
    top: "4.98%",
    right: "87.46%",
    bottom: "93.46%",
    left: "11.03%",
  },
  fullName: {
    left: "15.22%",
    textAlign: "left",
  },
  frameChild: {
    width: "4.44%",
    right: "89.04%",
    left: "6.52%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    top: "20.73%",
    bottom: "71.09%",
  },
  enterEmail: {
    left: "16.46%",
    textAlign: "center",
  },
  frameItem: {
    height: "20.58%",
    top: "39.13%",
    right: "88.6%",
    bottom: "40.29%",
    left: "6.21%",
  },
  frame1: {
    top: "30.57%",
    bottom: "61.26%",
  },
  lock1Icon: {
    height: "28.99%",
    width: "6.21%",
    top: "34.78%",
    right: "88.2%",
    bottom: "36.23%",
    left: "5.59%",
  },
  frameInner: {
    right: "5.99%",
    left: "88.82%",
    bottom: "38.12%",
    top: "37.68%",
    height: "24.2%",
  },
  frame2: {
    top: "40.4%",
    bottom: "51.42%",
  },
  frame3: {
    top: "50.24%",
    bottom: "41.59%",
  },
  signUp: {
    top: "33.33%",
    left: "39.44%",
    fontFamily: FontFamily.abhayaLibreExtraBold,
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  frame4: {
    top: "61.37%",
    right: "8.97%",
    bottom: "30.45%",
    left: "8.46%",
    backgroundColor: Color.colorCrimson,
    borderRadius: Border.br_lg,
    width: "82.56%",
    height: "8.18%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
    width: "25.45%",
    left: "74.55%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon: {
    height: "83.28%",
    width: "24.91%",
    top: "8.8%",
    right: "75.09%",
    bottom: "7.92%",
  },
  frame5: {
    top: 635,
    left: 139,
    width: 110,
    height: 34,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon2: {
    height: "84.38%",
    width: "6.07%",
    top: "6.25%",
    right: "6.54%",
    left: "87.38%",
  },
  vectorIcon3: {
    height: "59.38%",
    width: "5.61%",
    top: "31.25%",
    left: "94.39%",
    right: "0%",
  },
  shorts2Icon: {
    width: "15.42%",
    right: "84.58%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  text: {
    top: "3.13%",
    left: "23.36%",
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    color: Color.colorWhite,
  },
  frameIcon: {
    top: 1,
    left: 72,
    width: 41,
    height: 28,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon1: {
    left: 119,
    width: 27,
  },
  frameIcon2: {
    left: 148,
    width: 36,
  },
  vectorParent: {
    top: 106,
    left: 89,
    width: 214,
    height: 32,
    position: "absolute",
  },
  signupPage: {
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SignUpPage;
