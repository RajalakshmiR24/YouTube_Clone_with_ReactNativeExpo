import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const ShortsPage = () => {
  return (
    <View style={styles.shortspage}>
      <Image
        style={[styles.subtractIcon, styles.subtractIconLayout]}
        contentFit="cover"
        source={require("../assets/subtract6.png")}
      />
      <View style={styles.shortspageChild} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout5]}
        contentFit="cover"
        source={require("../assets/vector31.png")}
      />
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector32.png")}
      />
      <Image
        style={styles.shortspageItem}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.shortspageInner, styles.vectorIconLayout5]}
        contentFit="cover"
        source={require("../assets/ellipse-121.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-92.png")}
      />
      <Image
        style={[styles.shortspageChild1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-81.png")}
      />
      <Image
        style={styles.shorts1Icon}
        contentFit="cover"
        source={require("../assets/shorts-1.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout4]}
        contentFit="cover"
        source={require("../assets/vector33.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout3]}
        contentFit="cover"
        source={require("../assets/vector34.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector35.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout4]}
        contentFit="cover"
        source={require("../assets/vector36.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout3]}
        contentFit="cover"
        source={require("../assets/vector37.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconLayout4]}
        contentFit="cover"
        source={require("../assets/vector38.png")}
      />
      <Image
        style={[styles.vectorIcon8, styles.vectorIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector39.png")}
      />
      <Text style={[styles.all, styles.designerTypo]}>All</Text>
      <Text style={[styles.game, styles.designerTypo]}>Game</Text>
      <Text style={[styles.loremIpsumDolor, styles.liveTypo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </Text>
      <Text style={[styles.adel82, styles.liveTypo]}>
        Adel . 8.2 M views . 5 min ago
      </Text>
      <Text style={[styles.ui, styles.uiTypo]}>Ui</Text>
      <Text style={[styles.figma, styles.designerTypo]}>figma</Text>
      <Text style={[styles.uiDesigner, styles.designerTypo]}>Ui designer</Text>
      <Text style={[styles.uxDesigner, styles.designerTypo]}>Ux designer</Text>
      <Image
        style={styles.subtractIcon1}
        contentFit="cover"
        source={require("../assets/subtract7.png")}
      />
      <Image
        style={[styles.subtractIcon2, styles.subtractIconLayout]}
        contentFit="cover"
        source={require("../assets/subtract8.png")}
      />
      <Image
        style={[styles.subtractIcon2, styles.subtractIconLayout]}
        contentFit="cover"
        source={require("../assets/subtract8.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.live, styles.liveTypo]}>live</Text>
      <Image
        style={[styles.ellipseIcon, styles.shortspageChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.shortspageChild2, styles.shortspageChildPosition2]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.shortspageChild3, styles.shortspageChildPosition2]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.shortspageChild2, styles.shortspageChildPosition2]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.shortspageChild3, styles.shortspageChildPosition2]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.shortspageChild6, styles.shortspageChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.shortspageChild7, styles.shortspageChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Image
        style={[styles.shortspageChild8, styles.shortspageChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Image
        style={[styles.shortspageChild9, styles.shortspageChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.shortspageChild10, styles.shortspageChildPosition2]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.shortspageChild11, styles.shortspageChildPosition2]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={styles.subtractIcon4}
        contentFit="cover"
        source={require("../assets/subtract9.png")}
      />
      <Image
        style={styles.shortspageChild12}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Text style={[styles.text, styles.uiTypo]}>+</Text>
      <Image
        style={styles.shortspageChild13}
        contentFit="cover"
        source={require("../assets/group-11.png")}
      />
      <Image
        style={[styles.shortspageChild14, styles.shortspageChildPosition1]}
        contentFit="cover"
        source={require("../assets/group-141.png")}
      />
      <Image
        style={styles.library1Icon}
        contentFit="cover"
        source={require("../assets/library-1.png")}
      />
      <Image
        style={[styles.shortspageChild15, styles.shortspageChildPosition1]}
        contentFit="cover"
        source={require("../assets/group-131.png")}
      />
      <Text style={styles.home}>Home</Text>
      <Text style={[styles.explore, styles.exploreTypo]}>Explore</Text>
      <Text style={[styles.channels, styles.exploreTypo]}>Channels</Text>
      <Text style={[styles.library, styles.exploreTypo]}>Library</Text>
      <Image
        style={styles.vectorIcon9}
        contentFit="cover"
        source={require("../assets/vector40.png")}
      />
      <Image
        style={[styles.vectorIcon10, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector41.png")}
      />
      <Image
        style={[styles.vectorIcon11, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector41.png")}
      />
      <Image
        style={[styles.vectorIcon12, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector42.png")}
      />
      <Image
        style={[styles.vectorIcon13, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector42.png")}
      />
      <Text style={[styles.shorts, styles.liveTypo]}>Shorts</Text>
      <Text style={[styles.loremIpsumDolor1, styles.loremTypo1]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </Text>
      <Text style={[styles.loremIpsumDolor2, styles.loremTypo1]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </Text>
      <Image
        style={[styles.subtractIcon, styles.subtractIconLayout]}
        contentFit="cover"
        source={require("../assets/subtract6.png")}
      />
      <Text style={[styles.loremIpsumDolor3, styles.loremTypo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </Text>
      <Text style={[styles.loremIpsumDolor4, styles.loremTypo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </Text>
      <Image
        style={[styles.shortspageChild16, styles.shortspageChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.shortspageChild17, styles.shortspageChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.shortspageChild18, styles.shortspageChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.shortspageChild19, styles.shortspageChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.shortspageChild20, styles.shortspageChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.shortspageChild21, styles.shortspageChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  subtractIconLayout: {
    width: 127,
    borderRadius: Border.br_lg,
  },
  vectorIconLayout5: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout: {
    bottom: "93.13%",
    top: "4.03%",
    height: "2.84%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.14%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout4: {
    top: "4.86%",
    height: "1.07%",
    bottom: "94.08%",
    width: "1.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout3: {
    top: "5.21%",
    height: "0.71%",
    bottom: "94.08%",
    width: "1.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout2: {
    width: "1.28%",
    top: "5.21%",
    height: "0.71%",
    bottom: "94.08%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  designerTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_smi,
    top: "10.43%",
    position: "absolute",
  },
  liveTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  uiTypo: {
    width: "3.09%",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  shortspageChildLayout1: {
    height: 3,
    width: 3,
    left: 325,
    position: "absolute",
  },
  shortspageChildPosition2: {
    left: 157,
    height: 3,
    width: 3,
    position: "absolute",
  },
  shortspageChildLayout: {
    height: 4,
    left: 157,
    width: 3,
    position: "absolute",
  },
  shortspageChildPosition1: {
    top: "93.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  exploreTypo: {
    color: Color.colorDimgray_200,
    top: "96.92%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  vectorIconLayout1: {
    left: "40.77%",
    right: "55.9%",
    height: "1.78%",
    width: "3.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    bottom: "-9.12%",
    top: "107.35%",
  },
  vectorIconLayout: {
    left: "81.54%",
    right: "15.13%",
    height: "1.78%",
    width: "3.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  loremTypo1: {
    fontFamily: FontFamily.abhayaLibreRegular,
    fontSize: FontSize.size_3xs,
    width: "32.82%",
    height: "5.45%",
    textAlign: "left",
    color: Color.colorWhite,
    left: "13.33%",
    position: "absolute",
  },
  loremTypo: {
    left: "55.38%",
    width: "32.58%",
    fontFamily: FontFamily.abhayaLibreRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorWhite,
    height: "5.57%",
    position: "absolute",
  },
  shortspageChildPosition: {
    left: 300,
    height: 3,
    width: 3,
    position: "absolute",
  },
  subtractIcon: {
    height: 247,
  },
  shortspageChild: {
    height: "2.61%",
    width: "9.75%",
    top: "10.19%",
    bottom: "87.2%",
    left: "8.19%",
    backgroundColor: Color.colorGray_200,
    right: "82.06%",
    position: "absolute",
    borderRadius: Border.br_lg,
  },
  vectorIcon: {
    height: "1.9%",
    top: "4.5%",
    right: "84.87%",
    bottom: "93.6%",
    left: "8.98%",
    width: "6.14%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon1: {
    height: "0.83%",
    top: "5.09%",
    right: "87.19%",
    left: "11.28%",
    bottom: "94.08%",
    width: "1.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  shortspageItem: {
    width: "12.04%",
    top: "2.73%",
    right: "8.22%",
    bottom: "91.71%",
    left: "79.74%",
    height: "5.57%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  shortspageInner: {
    height: "3.44%",
    width: "7.43%",
    top: "37.2%",
    right: "81.02%",
    bottom: "59.36%",
    left: "11.55%",
  },
  groupIcon: {
    right: "23.87%",
    left: "69.99%",
  },
  shortspageChild1: {
    right: "33.59%",
    left: "60.27%",
  },
  shorts1Icon: {
    height: "2.52%",
    width: "4.37%",
    top: "44.08%",
    right: "82.3%",
    bottom: "53.4%",
    left: "13.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon2: {
    left: "16.41%",
    right: "82.06%",
  },
  vectorIcon3: {
    right: "80.53%",
    left: "17.94%",
  },
  vectorIcon4: {
    right: "78.97%",
    left: "19.74%",
  },
  vectorIcon5: {
    right: "77.44%",
    left: "21.03%",
  },
  vectorIcon6: {
    right: "76.16%",
    left: "22.31%",
  },
  vectorIcon7: {
    right: "74.36%",
    left: "24.11%",
  },
  vectorIcon8: {
    right: "72.83%",
    left: "25.89%",
  },
  all: {
    width: "3.58%",
    left: "11.28%",
  },
  game: {
    width: "8.98%",
    left: "22.31%",
  },
  loremIpsumDolor: {
    width: "61.8%",
    top: "36.97%",
    fontWeight: "700",
    left: "21.55%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.productSans,
    color: Color.colorWhite,
  },
  adel82: {
    width: "38.72%",
    top: "41.11%",
    color: Color.colorDimgray_100,
    left: "21.55%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.productSans,
  },
  ui: {
    left: "38.72%",
    fontSize: FontSize.size_smi,
    top: "10.43%",
    width: "3.09%",
  },
  figma: {
    width: "8.47%",
    left: "49.24%",
  },
  uiDesigner: {
    width: "16.41%",
    left: "65.13%",
  },
  uxDesigner: {
    width: "17.18%",
    left: "88.97%",
  },
  subtractIcon1: {
    width: 301,
    height: 182,
    borderRadius: Border.br_lg,
  },
  subtractIcon2: {
    height: 250,
  },
  rectangleView: {
    top: 136,
    left: 56,
    backgroundColor: Color.colorCrimson,
    width: 41,
    height: 22,
    position: "absolute",
    borderRadius: Border.br_lg,
  },
  live: {
    width: "4.61%",
    top: "16.47%",
    left: "17.45%",
    color: Color.colorWhite,
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_xs,
  },
  ellipseIcon: {
    top: 321,
  },
  shortspageChild2: {
    top: 420,
  },
  shortspageChild3: {
    top: 692,
  },
  shortspageChild6: {
    top: 326,
  },
  shortspageChild7: {
    top: 425,
  },
  shortspageChild8: {
    top: 697,
  },
  shortspageChild9: {
    top: 331,
  },
  shortspageChild10: {
    top: 431,
  },
  shortspageChild11: {
    top: 703,
  },
  subtractIcon4: {
    width: 375,
    height: 74,
    borderRadius: Border.br_26xl,
  },
  shortspageChild12: {
    top: 749,
    left: 170,
    width: 32,
    height: 32,
    position: "absolute",
  },
  text: {
    top: "88.74%",
    left: "48.47%",
    fontSize: FontSize.size_2xl,
  },
  shortspageChild13: {
    top: 786,
    left: 48,
    width: 26,
    height: 26,
    position: "absolute",
  },
  shortspageChild14: {
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
  shortspageChild15: {
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
    fontFamily: FontFamily.productSans,
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
  vectorIcon9: {
    height: "1.66%",
    top: "34.83%",
    right: "15.89%",
    bottom: "63.51%",
    left: "80.78%",
    width: "3.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon10: {
    bottom: "23.1%",
    top: "75.12%",
  },
  vectorIcon11: {
    left: "40.77%",
    right: "55.9%",
    height: "1.78%",
    width: "3.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon12: {
    bottom: "23.1%",
    top: "75.12%",
  },
  vectorIcon13: {
    bottom: "-9.12%",
    top: "107.35%",
  },
  shorts: {
    top: 373,
    left: 78,
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    width: 101,
    height: 16,
    color: Color.colorWhite,
  },
  loremIpsumDolor1: {
    top: "72.99%",
  },
  loremIpsumDolor2: {
    top: "105.21%",
  },
  loremIpsumDolor3: {
    top: "72.27%",
  },
  loremIpsumDolor4: {
    top: "104.5%",
  },
  shortspageChild16: {
    top: 419,
  },
  shortspageChild17: {
    top: 691,
  },
  shortspageChild18: {
    top: 424,
  },
  shortspageChild19: {
    top: 696,
  },
  shortspageChild20: {
    top: 430,
  },
  shortspageChild21: {
    top: 702,
  },
  shortspage: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_26xl,
  },
});

export default ShortsPage;
