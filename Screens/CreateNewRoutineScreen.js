import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Colors from "../Constants/Colors";
import CustomTextInput from "../Routine/Components/CustomTextInput";
import CustomDropDown from "../Routine/Components/CustomDropDown";
import Description from "../Routine/Components/Description";
import Octicons from "react-native-vector-icons/Octicons";
import AddItemsCard from "../Routine/Components/AddItemsCard";
import ProductCard from "../Routine/Components/ProductCard";
import Ionicons from "react-native-vector-icons/Ionicons";
import MainButton from "../ConstantComponets/MainButton";
import GreyOutAddItemsCard from "../Routine/Components/GreyOutAddItemsCard";
import Dropdown from "../ConstantComponets/DropDown";

const CreateNewRoutineScreen = ({ navigation }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleSelect = (item) => {
    console.log("Selected item:", item);
  };

  const images = [
    {
      id: 1,
      src: "https://s3-alpha-sig.figma.com/img/b817/f76a/5dc4094996135838c49faee209c8a1c1?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IemQdo3ltDV5QUlDwIFvxTqiydC-pm6CBqyqdXJRMLZw11Q3zegMtvEJi3eyntCNq67ayoEzOiqClxNIfpCVNLA-dtcwF6C8XLggSwQOtlBhvHc8HMjkFjd46l6dFiq6PI-oWUQCcp8zdlUJt2Mg2oA3QL8zFW7A3LVtCJf2wLZshgywc9yYGQABDhcoTu3GeopPt92voIjf-eWuYisgOsr8qi6tu5TXo-eXslx05vD0TlqsI938PKmenIFXwmWYRph3TIRI7sfIeN0kIdOglDDSukpDx7Fo2uTdIHnzgaU-6s1ZWCgtjEWKYliWg064TBOU~IB3l-X8yTIybyDKaQ__",
    },
    {
      id: 2,
      src: "https://s3-alpha-sig.figma.com/img/7619/ee48/89f953d53871d9b72dd460351ec571ab?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VELSvxeUVwy75o6uUtveu4PyXmqcqD8vxjNSrE6-XTJMUP5WaDQTuo1uxC7yegFo73itUa0jktSrAk3bIJ0uhREPHVmc0ACPRqMrI5bNcpr9vFW82lkxGwk2MunV-CBCb3efGeSCAGYzgnj9eVA~FlO6IRgIZBzrGlJ9xfWYjQttDZMg49DgToW6ayyFX-GtJRoj9qMZRFStlKlUfxQncg5tciskOEUpy~bGql0jHQbHfbbHnwiE774N3PzPPopAEvpwBULVLcmvMgLVCbN8VK4ql7mTyb5vzvM-WrQKi~cNRjqpg1BPPbSKo8uNq7rAAzp~-W~mHaU82qVn-CoXAg__",
    },
    {
      id: 3,
      src: "https://s3-alpha-sig.figma.com/img/bc1a/08fd/dc4e04c2cc8cba01b4b87bc251c4d185?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lq1pyCHrYQ9sVWB7u~HDmAhnKxb1JglXO7kG57xNPvPrMQ-O~PaKs1xhCdgPXgBO5w7uzLFV-J58kmF07wPtuGgqQCyyEXkafLkGkAl1QuXgnCZyLDQhHj4LJ0DcsOTZfqcPikVylZu5WthlByCYu3XEp8j3hnBzUyzmunMfcWiTL4p6rPp-wGLGtbMI2BhwPypbqq1r7I2HPjQ56l7rMyD5LSnvxzIl3SNs-JGRiYClbHqMZCDBMHcIkLf1sC2OLZYpcNixsWG1pAg5sFEp4fOd3NTADfIAl58U9DaWR9fWxmlfH1MST0BzLnUxJ9csuMw-uAMn7FH7o5JNYFCzQg__",
    },
    {
      id: 4,
      src: "https://s3-alpha-sig.figma.com/img/def9/c8af/8dc14cee8f5ebb37fc0a5fe82a973111?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BpDJ1-~ngqTACW~zoE92Crx5dhc5i15PDsZbYj5f1AM8-6T1tNheUv1vFVGfmbaBqBErVrePiJskGRXWE62gp96w216EiWVfIUX2EROaVRV~Gb~cTCz6x1uZLHnIaeC5TpexfG5HfFVDtks00XrM30mAklKx-rx1~tp5e7h91qX-VBdnLmRWKE4zTugVLcpEPimLPgA5klIpaqwsnuH1XoBM790G4juOKsrFH-LiqICsq4quBl4iIFCjF2GA3kFGRqvSyomuUhR2a5yO32xHIsoYUsuqU0fM7j-2hVRkasjRQwL8QApV-n5n2Kv7ZqBYVhoX6UznWroPUZCwjFgZlw__",
    },
    {
      id: 5,
      src: "https://s3-alpha-sig.figma.com/img/9eff/ecd6/4db883ed7266e4cca5aa0902c8435298?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RtS2xKn4Y8zg861gbJNYx~2NcuY8MPEGEDXRvBLTiOyrh19vnc7-7WpX6jOfK6PF6Yk0whiUQSrdELC7HHYEpPiXC71KECscLTgLbgIXXK6qwRg5FZGdNSfzxgQJhcn0gd4r2uZnTb0mh85IUYsGed89Db0kh2f6-K2TfI0MtZqLWyClGQW8s8-9oQz0jvl4~N-biqx61UX0NhATDABrJuvwN7yKDhO4ubRse1qfSOMPpO2uh2oHAlDt7bV76SppNFiC5ngYl71Qvc~ljuuafV-h6l1Gvx79wEF8pMYL9dJeVnVXyuAF6UHRuGJF2yHfOJIVAJ79fCZ1vXt1Gy~HVw__",
    },
  ];

  const items = [
    { label: "Item 1", value: "item1" },
    { label: "Item 2", value: "item2" },
    { label: "Item 3", value: "item3" },
  ];
  
  const handlePress = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <ScrollView
      style={styles.ScrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.mainContainer}>
        <CustomTextInput />
        <View style={styles.subTextCont}>
          <Text style={styles.subText}>
            This will be displayed as your Routine name.
          </Text>
        </View>

        <TouchableOpacity style={styles.uploadImageContainer}>
          <Octicons name="image" size={40} />
          <Text
            style={{
              marginTop: 10,
              fontWeight: "400",
              fontFamily: "Nunito-SemiBold",
              fontSize: 14,
            }}
          >
            Upload Images
          </Text>
        </TouchableOpacity>

        <View style={styles.subTextCont}>
          <Text style={styles.subText}>
            This will be displayed as your Thumbnail.
          </Text>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              fontFamily: "Nunito",
              color: Colors.neutrals800,
              fontSize: 17,
            }}
          >
            OR
          </Text>
        </View>

        <Text style={styles.subHeaderText}>Select from our picks</Text>

        {/* SELECT FORM BELOW */}
        <View style={styles.container}>
          {images.map((image, index) => (
            <TouchableOpacity
              key={image.id}
              onPress={() => handlePress(index)}
              style={[
                styles.imageContainer,
                selectedImageIndex === index && styles.selectedImageContainer,
              ]}
            >
              <Image source={{ uri: image.src }} style={styles.image} />
              {selectedImageIndex === index && (
                <View style={styles.iconContainer}>
                  <Ionicons
                    name="checkmark-circle"
                    size={24}
                    color={Colors.primary100}
                  />
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
        {/* SELECT FORM BELOW */}
        <View style={styles.CategorydropDown}>
          <CustomDropDown label="Category" placeholder="Lifestyle" />
        </View>

       

        <View style={styles.subTextCont}>
          <Text style={styles.subText}>
            Please select the category of your Routine.
          </Text>
        </View>

        <View>
          <Description />
        </View>

        <View style={styles.subTextCont}>
          <Text style={styles.subText}>
            Please select the category of your Routine.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <View style={styles.DurationdropDown}>
            <CustomDropDown label="Duration" placeholder="Six" />
          </View>

          <View style={styles.UnitdropDown}>
            <CustomDropDown label="Unit" placeholder="Weeks" />
          </View>
        </View>
        <View style={styles.addReminderContainer}>
          <AddItemsCard
            heading="Add Reminder Items"
            subHeading="Please select the category of your Routine."
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <ProductCard />
        </View>

        <TouchableOpacity style={styles.MoreRemainderContainer}>
          <Text style={styles.MoreRemainderText}>More Reminder Items (2)</Text>
          <Octicons name="chevron-right" size={20} />
        </TouchableOpacity>

        <View style={styles.addReminderContainer}>
          <GreyOutAddItemsCard
            heading="Add Reminder Channels"
            subHeading="We will notify you about your Routine using channels."
          />
        </View>
        <View style={styles.supportingTextContainer}>
          <Text style={styles.supportingText}>
            This feature is available only for patients using the routine{" "}
          </Text>
        </View>

        <View style={styles.addReminderContainer}>
          <GreyOutAddItemsCard
            heading="Assign a Caregiver"
            subHeading="We will keep updating caregiver about your Routine."
          />
        </View>
        <View style={styles.supportingTextContainer}>
          <Text style={styles.supportingText}>
            You are the default carer for this routine.{" "}
          </Text>
        </View>

        <View style={styles.ButtonContainer}>
          <MainButton
            onPress={() => navigation.navigate("AddReminder")}
            ButtonTitle="Proceed"
          />
        </View>

        {/* <TouchableOpacity style={styles.btnStyle}>
          <Text style={styles.btnText}>Proceed</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ScrollContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
  },
  mainContainer: {
    alignItems: "center",
    paddingBottom: 50,
  },
  subTextCont: {
    marginTop: 5,
    marginBottom: 15,
    width: 342,
    height: 20,
  },

  subText: {
    fontFamily: "Nunito-Regular",
    fontWeight: "400",
    left: 12,
    color: "#A0A0A0",
  },

  subHeaderText: {
    fontFamily: "Nunito-Regular",
    fontWeight: "400",
    fontSize: 14,
    marginBottom: 10,
    right: 100,
  },

  uploadImageContainer: {
    width: 210,
    height: 210,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#D6D6D6",
    backgroundColor: Colors.primaryTint2,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dashed",
  },
  container: {
    width: 340,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: "transparent",

    borderRadius: 8,
  },
  selectedImageContainer: {
    borderColor: Colors.primary100,
    borderWidth: 2.5,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 8,
  },

  CategorydropDown: {
    width: 342,
    height: 56,
    borderWidth: 1,
    borderColor: "#D6D6D6",
    borderRadius: 18,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 28,
  },
  DurationdropDown: {
    width: 197,
    height: 56,
    borderWidth: 1,
    borderColor: "#D6D6D6",
    borderRadius: 18,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 28,
    marginRight: 10,
  },
  UnitdropDown: {
    width: 131,
    height: 56,
    borderWidth: 1,
    borderColor: "#D6D6D6",
    borderRadius: 18,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 28,
  },

  addReminderContainer: {},

  ProductCardContainer: {},

  MoreRemainderContainer: {
    width: 335,
    height: 19,
    left: 5,
    marginTop: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  MoreRemainderText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#101018",
    fontFamily: "Nunito-SemiBold",
  },

  supportingTextContainer: {
    width: 335,
    height: 16,
    marginBottom: 18,
  },
  supportingText: {
    fontFamily: "Nunito-Bold",
    fontSize: 12,
    fontWeight: "600",
  },

  btnStyle: {
    width: "100%",
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    marginTop: 25,
    marginBottom: 12,
    paddingLeft: 10,
    paddingRight: 10,
  },

  btnText: {
    fontFamily: "SemiBold",
    color: "white",
    fontSize: 18,
  },
  ButtonContainer: {
    width: 335,
    marginTop: 25,
  },
  iconContainer: {
    position: "absolute",
    top: -11,
    right: -12,
    backgroundColor: "white",
    borderRadius: 12,
  },
});

export default CreateNewRoutineScreen;
