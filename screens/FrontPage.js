import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const FrontPage = () => {
  return (
    <View style={styles.frontpage}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <View style={styles.shorts3Parent}>
            <Image
              style={styles.shorts3Icon}
              contentFit="cover"
              source={require("../assets/shorts-2.png")}
            />
            <Text style={styles.text}>+</Text>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame3.png")}
            />
          </View>
          <Image
            style={styles.frameIcon1}
            contentFit="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View style={styles.frame2}>
          <Text style={styles.welcomeToBest}>{`Welcome 
to best video app in wolrd`}</Text>
          <View style={styles.frame3}>
            <Text style={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              curabitur cursus arcu mollis commodo fringilla.
            </Text>
            <View style={styles.frame4}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector20.png")}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/group-2.png")}
              />
              <View style={styles.frame5}>
                <Text style={styles.logIn}>Log in</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.dontHaveAnContainer}>
        <Text style={styles.dontHaveAnAccount}>
          <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
          <Text style={styles.text1}>{` `}</Text>
        </Text>
        <Text style={styles.signUp}>Sign up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  shorts3Icon: {
    position: "relative",
    width: 33,
    height: 32,
    overflow: "hidden",
  },
  text: {
    position: "relative",
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.productSans,
    color: Color.colorWhite,
    textAlign: "left",
    marginLeft: 6,
  },
  frameIcon: {
    position: "relative",
    width: 56,
    height: 39,
    overflow: "hidden",
    marginLeft: 6,
  },
  shorts3Parent: {
    width: 113,
    height: 39,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 4,
    marginLeft: 3,
  },
  frameIcon1: {
    position: "relative",
    width: 132,
    height: 37,
    overflow: "hidden",
    marginTop: 11,
  },
  frame1: {
    width: 132,
    height: 87,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeToBest: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: FontFamily.productSans,
    color: Color.colorWhite,
    textAlign: "center",
    width: 290,
    height: 58,
    marginRight: 12,
  },
  loremIpsumDolor: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.productSans,
    color: Color.colorSilver,
    textAlign: "center",
    width: 269,
    height: 48,
    marginRight: 13,
  },
  vectorIcon: {
    position: "absolute",
    height: "43.16%",
    width: "8.92%",
    top: "27.85%",
    right: "0%",
    bottom: "28.99%",
    left: "91.08%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  frameChild: {
    position: "absolute",
    height: "35.95%",
    width: "8.73%",
    top: "31.65%",
    right: "26.31%",
    bottom: "32.41%",
    left: "64.97%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  logIn: {
    position: "relative",
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.productSans,
    color: Color.colorWhite,
    textAlign: "center",
  },
  frame5: {
    position: "absolute",
    height: "100%",
    width: "48.41%",
    top: "0%",
    right: "51.59%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorCrimson,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: 27,
  },
  frame4: {
    width: 314,
    height: 79,
    overflow: "hidden",
    marginRight: 8,
    marginTop: 108,
  },
  frame3: {
    width: 322,
    height: 235,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 27,
  },
  frame2: {
    width: 322,
    height: 320,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 86,
  },
  frame: {
    width: 322,
    height: 493,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  dontHaveAn: {
    color: Color.colorDimgray_300,
  },
  text1: {
    color: Color.colorSilver,
  },
  dontHaveAnAccount: {
    fontFamily: FontFamily.productSans,
  },
  signUp: {
    fontWeight: "700",
    fontFamily: FontFamily.productSans,
    color: Color.colorGainsboro,
  },
  dontHaveAnContainer: {
    fontSize: FontSize.size_smi,
    textAlign: "center",
    height: 16,
    marginLeft: 3,
    marginTop: 114,
  },
  frontpage: {
    position: "relative",
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 34,
    paddingVertical: 86,
  },
});

export default FrontPage;
