import React, { startTransition } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import Colors from "../../Constants/Colors";

const ProductCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/ca79/a101/f3dd61c66889f4114c63e74b665e5683?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b8zSUiHWed6cZnYZYL6K2DZCmRVSkjDlm~Nl0RRVWdJMHr1gGM6Qwbys9k6fuecbDpoFwGvUKR9kpFhx5TL0cB86yqn8myL2Wv3UVXJNlsizmGSQ10Fg4Ae2B9N~DwdP9Zg9HeszcaDDWJnrU~b4LWwjSA8eXcnyNYOfUOfajm963HpKcTXhZOF5HVDZyM4TxmS9Lp8Vc7XiywNM6tStAa4f4DL9LLTeCysRpPoEAYVGbhJciUNB4oRdBvC-lI5AC5ng4dcDi-fUQut2553bgM9s6XkXJF1SyEF2kU-xHzECf9TYLtmhR2I8iFOiwQOhgaJm5MkDz3bDBR5jmzVMwA__",
          }}
        />
      </View>

      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.headertext}>Amrutam Kunal Hair..</Text>
        </View>
        <View style={styles.edibleSign}>
          <Text
            style={{
              color: "#A0A0A0",
              fontSize: 14,
              fontFamily: "Nunito-Regular",
              fontWeight: "400",
            }}
          >
            Consumable
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.viewDetails}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: 342,
    height: 120,
    flexDirection: "row",
    margin: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#F3F3F3",
    borderRadius: 16,
  },
  imgContainer: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },

  contentContainer: {
    width: 185,
    height: 84,
    marginLeft: 10,
    justifyContent: "space-between",
  },

  edibleSign: {
    width: 88,
    height: 27,
    padding: 4,
    borderRadius: 64,
    backgroundColor: "#E9F1E0",
    textAlign: "center",
  },

  viewDetails: {
    fontFamily:"Nunito-SemiBold",
    color: Colors.primary100,
    fontWeight: "600",
    fontSize: 16,
  },
  headertext: {
    fontFamily: "Nunito-SemiBold",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default ProductCard;
