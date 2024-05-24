import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const CustomHeader = ({navigation}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.topContent}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/bf86/f72b/5c845f4632a24b416e1b7b4b9c009145?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PUehuWISfpUIPVotNr7c~Tlhhb36JQWRV0hKmp7Z1lQQcusi70Rr63jKhDFexhZADQVErGfok65U-rO~McH5Ky3AYcEORyD-CT8j422gB4iOcHzd09HZ~qxnxM5RAx9fACQ43K9nGRsHbEtHB54~n3EWZugL7Tv~5UKsYX6U7PhfS6MrSzIEiyp890sxYt6sFB~3wRtxeum1o9HIGhQPvA7A9cGrMSfMahVeyUQOIDCPvurzD7cuUvKq87YlJlC39CLZpZwoT6bqZ~r4g0SzB3PQbgCuKDnGCW-vId5KAg8iygYAiZ1Id5aHppzzdzjOsdUCp-njRVInvts046QLQQ__",
          }} // Replace with actual image source
        />
        <View style={{}}>
          <Text style={styles.name}>Lorem ipsum</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.concern}>Migraine</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 64,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    elevation:1
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 40,
    marginRight: 15,
  },
  backButton: {
    marginLeft: 10,
  },
  info: {
    flex: 1,
    marginLeft: 16,
  },
  topContent: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily:'Nunito-Bold'
    
  },
  concern: {
    
    fontSize: 14,
    color: "gray",
    fontFamily:'Nunito-Light'
  },
});

export default CustomHeader;
