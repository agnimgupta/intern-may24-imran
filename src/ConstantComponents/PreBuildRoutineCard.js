import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const PreBuildRoutineCard = ({ img, title, tltReminder }) => {
  return (
    <TouchableOpacity style={styles.Container}>
      <View style={styles.imgCont}>
        <Image
          source={img}
          style={styles.image}
          resizeMode="cover" // Adjust as needed
        />
      </View>

      <View style={styles.title}>
        <Text style={styles.titleTXT}>{title}</Text>
      </View>

      <View style={styles.ContentCont}>

        <View style={{ height: 14, flexDirection:'row', alignItems:'center' }}>
          <View style={styles.iconCont}>
            <Ionicons name="calendar-outline" size={14} color="#A0A0A0"/>
          </View>
          <View style={{alignItems:'center', }}>
            <Text style={styles.ContentText}>12 Weeks</Text>
          </View>
        </View>

        <View style={{ height: 14, flexDirection:'row', alignItems:'center' }}>
          <View style={styles.iconCont}>
            <Ionicons name="list" size={14} color="#A0A0A0"/>
          </View>
          <View style={{alignItems:'center', }}>
            <Text style={styles.ContentText}>3 Reminder Items</Text>
          </View>
        </View>
        
        <View style={{ height: 14, flexDirection:'row', alignItems:'center' }}>
          <View style={styles.iconCont}>
            <Ionicons name="bulb-outline" size={14} color="#A0A0A0"/>
          </View>
          <View style={{alignItems:'center', }}>
            <Text style={styles.ContentText}>by you</Text>
          </View>
        </View>

       
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    width: 161,
    height: 287,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E7E7E7",
    padding: 10,
    marginRight: 18,
  },

  imgCont: {
    height: 144,
    width: 144,
    marginBottom: 5,
  },

  image: {
    height: "100%",
    width: "100%",
    borderRadius: 12,
  },

  title: {
    
    right:28,
    flexDirection: "row",
    alignItems: "center",
    
  },

  titleTXT: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Nunito-SemiBold",
    marginBottom: 10,
    marginRight: 10,
    color:'#212529'
  },

  ContentCont: {
    right:14,
    width: 112,
    height: 64,
    gap:10,
    
    alignItems:'flex-start',
   
  },

  iconCont:{
    height:14,
    width:14,
    marginRight:5
  },

  ContentText: {
    fontSize: 10,
    fontWeight: "400",
    color: "#A0A0A0",
    fontFamily: "Nunito-Medium",
  },

});

export default PreBuildRoutineCard;
