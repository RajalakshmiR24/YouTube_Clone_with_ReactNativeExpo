import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ShortsPlay = () => {
  return (
    <View style={styles.shortsplay}>
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract10.png")}
      />
      <Image
        style={[styles.shortsplayChild, styles.shortsplayLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />
      <Image
        style={[styles.shortsplayItem, styles.shortsplayLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-47.png")}
      />
      <Image
        style={[styles.shortsplayInner, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-93.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group-82.png")}
      />
      <Image
        style={styles.subtractIcon1}
        contentFit="cover"
        source={require("../assets/subtract11.png")}
      />
      <Image
        style={styles.subtractIcon2}
        contentFit="cover"
        source={require("../assets/subtract12.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-211.png")}
      />
      <Text style={[styles.text, styles.textFlexBox]}>+</Text>
      <Image
        style={styles.shortsplayChild1}
        contentFit="cover"
        source={require("../assets/group-111.png")}
      />
      <Image
        style={[styles.shortsplayChild2, styles.shortsplayChildPosition]}
        contentFit="cover"
        source={require("../assets/group-142.png")}
      />
      <Image
        style={styles.library1Icon}
        contentFit="cover"
        source={require("../assets/library-11.png")}
      />
      <Image
        style={[styles.shortsplayChild3, styles.shortsplayChildPosition]}
        contentFit="cover"
        source={require("../assets/group-132.png")}
      />
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.explore, styles.exploreTypo]}>Explore</Text>
      <Text style={[styles.channels, styles.exploreTypo]}>Channels</Text>
      <Text style={[styles.library, styles.exploreTypo]}>Library</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector43.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector44.png")}
      />
      <View style={[styles.shorts1Parent, styles.groupIconPosition]}>
        <Image
          style={[styles.shorts1Icon, styles.shortsplayLayout]}
          contentFit="cover"
          source={require("../assets/shorts-11.png")}
        />
        <Text style={[styles.shorts, styles.textFlexBox]}>Shorts</Text>
      </View>
      <Text style={[styles.loremIpsumDolor, styles.loremTypo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </Text>
      <Text style={[styles.loremIpsumDolor1, styles.loremTypo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </Text>
      <Image
        style={styles.shortsplayChild4}
        contentFit="cover"
        source={require("../assets/ellipse-44.png")}
      />
      <Image
        style={[styles.shortsplayChild5, styles.shortsplayChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={[styles.shortsplayChild6, styles.shortsplayChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Text style={[styles.loremIpsumDolor2, styles.loremIpsumDolor2Layout]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </Text>
      <Text style={[styles.amazonprimeoofical, styles.loremIpsumDolor2Layout]}>
        @amazonprimeoofical
      </Text>
      <View style={[styles.rectangleView, styles.ellipseIconLayout]} />
      <Text style={[styles.subscrib, styles.homeTypo]}>Subscrib</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  shortsplayLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout: {
    width: "7.97%",
    height: "3.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIconPosition: {
    top: "3.79%",
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 32,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  shortsplayChildPosition: {
    top: "93.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.productSans,
  },
  exploreTypo: {
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_xs,
    top: "96.92%",
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "-9.12%",
    top: "107.35%",
    width: "3.33%",
    height: "1.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  loremTypo: {
    fontFamily: FontFamily.abhayaLibreRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  shortsplayChildLayout: {
    height: 6,
    width: 4,
    left: 328,
    position: "absolute",
  },
  loremIpsumDolor2Layout: {
    width: "61.8%",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  subtractIcon: {
    width: 389,
    height: 770,
    borderRadius: Border.br_lg,
  },
  shortsplayChild: {
    height: "6.64%",
    width: "16.66%",
    top: "82.11%",
    right: "4.89%",
    bottom: "11.26%",
    left: "78.45%",
  },
  shortsplayItem: {
    height: "4.98%",
    width: "12.04%",
    top: "77.01%",
    right: "82.82%",
    bottom: "18.01%",
    left: "5.13%",
  },
  shortsplayInner: {
    top: "4.09%",
    right: "15.07%",
    left: "76.95%",
    bottom: "92.42%",
    position: "absolute",
  },
  groupIcon: {
    right: "28.7%",
    bottom: "92.71%",
    left: "63.33%",
    width: "7.97%",
    height: "3.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  subtractIcon1: {
    width: 12,
    height: 39,
    borderRadius: Border.br_lg,
  },
  subtractIcon2: {
    width: 375,
    height: 74,
    borderRadius: Border.br_26xl,
  },
  ellipseIcon: {
    top: 749,
    left: 170,
    width: 32,
  },
  text: {
    width: "3.09%",
    top: "88.74%",
    left: "48.47%",
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.productSans,
    textAlign: "left",
    color: Color.colorWhite,
  },
  shortsplayChild1: {
    top: 786,
    left: 48,
    width: 26,
    height: 26,
    position: "absolute",
  },
  shortsplayChild2: {
    height: "2.83%",
    width: "5.71%",
    right: "63.27%",
    bottom: "3.92%",
    left: "31.02%",
  },
  library1Icon: {
    top: 784,
    left: 295,
    width: 29,
    height: 29,
    position: "absolute",
    overflow: "hidden",
  },
  shortsplayChild3: {
    height: "2.74%",
    width: "5.73%",
    right: "31.19%",
    bottom: "4.02%",
    left: "63.08%",
  },
  home: {
    width: "8.19%",
    left: "11.8%",
    top: "96.92%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  explore: {
    width: "9.99%",
    left: "28.73%",
  },
  channels: {
    width: "12.56%",
    left: "58.71%",
  },
  library: {
    width: "9.48%",
    left: "80.01%",
  },
  vectorIcon: {
    right: "55.9%",
    left: "40.77%",
  },
  vectorIcon1: {
    right: "15.13%",
    left: "81.54%",
  },
  shorts1Icon: {
    height: "100%",
    width: "12.37%",
    top: "0%",
    right: "87.63%",
    bottom: "0%",
    left: "0%",
  },
  shorts: {
    top: 2,
    left: 32,
    fontSize: FontSize.size_xl,
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    width: 117,
    height: 24,
  },
  shorts1Parent: {
    height: "3.79%",
    width: "40.63%",
    right: "51.94%",
    left: "7.43%",
    bottom: "92.42%",
  },
  loremIpsumDolor: {
    height: "5.45%",
    width: "32.82%",
    top: "105.21%",
    left: "13.33%",
  },
  loremIpsumDolor1: {
    height: "5.57%",
    width: "32.58%",
    top: "104.5%",
    left: "55.38%",
  },
  shortsplayChild4: {
    top: 38,
    height: 5,
    width: 4,
    left: 328,
    position: "absolute",
  },
  shortsplayChild5: {
    top: 46,
  },
  shortsplayChild6: {
    top: 54,
  },
  loremIpsumDolor2: {
    top: "83.53%",
    left: "5.9%",
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.productSans,
  },
  amazonprimeoofical: {
    top: "78.55%",
    left: "18.46%",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.aBeeZeeRegular,
  },
  rectangleView: {
    top: 655,
    left: 204,
    backgroundColor: Color.colorCrimson,
    width: 84,
    borderRadius: Border.br_lg,
  },
  subscrib: {
    width: "11.8%",
    top: "78.67%",
    left: "60.27%",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  shortsplay: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_26xl,
  },
});

export default ShortsPlay;
