import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import RBSheet from "react-native-raw-bottom-sheet";
import Colors from "../Constants/Colors";
import BottomSheetContent from "./BottomSheetContent";

const ChatScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "1",
      type: "received",
      text: "Hi Doctor, Geetanjali here",
      Time: "Yesterday at 10:20 PM",
    },
    {
      id: "2",
      type: "sent",
      text: "Hey Mayank, it's Geet here. What would you like to know?",
      Time: "Yesterday at 10:24 PM",
    },
    { id: "3", type: "received", audio: true },
  ]);
  const [inputText, setInputText] = useState("");
  const refRBSheet = useRef();

  const openBottomSheet = () => {
    refRBSheet.current.open();
  };
  const renderItem = ({ item }) => (
    <View
      style={[
        styles.message,
        item.type === "sent" ? styles.sent : styles.received,
      ]}
    >
      {item.type === "received" && (
        <Image
          style={styles.avatar}
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/91ba/cd31/e1e665c833197532a6cb8a1607eb2660?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kN1acw0G5bpyuW4Xl1OpTyyyoZmnmoMFYB9XK3IatoXPMmO-Z3gTOxyijINxMKQAQOLnA47Goi1IjLgNFYY2s4fEtd9tgbRJpmylNGnyzVJjEGJVLp1SaxRdFyQ19p02Aq5zRMXYF1qeMvC8YGpc8av6F6Uy~Kxkajge-PUjZ~CfBqa8LJzHcd07MH~DfEnu-Htkiy-nhnSRCACo3nGLJLTyhFgBf0BC3vCeKGJYKzPRUqCgMtDvq30lPRr0FqYzD8VgjPQ232zjpVMa0xZDYsR6yFO0od-XG1IFCSn7EBfEwb58dLnlVPo0mgHGTuY6Fv-aBLedZykZVQ38jzUDng__",
          }}
        />
      )}
      <View style={{ width: 192, height: 58 }}>
        {item.text && <Text style={styles.messageText}>{item.text}</Text>}
        {item.Time && (
          <Text
            style={{
              fontFamily: "Nunito-Regular",
              fontWeight: "400",
              fontSize: 12,
              textAlign: "right",
            }}
          >
            {item.Time}
          </Text>
        )}
      </View>

      {item.audio && (
        <TouchableOpacity
          style={{}}
          onPress={() => {
            /* Handle audio play */
          }}
        >
          <Text style={styles.audio}>🎵 Audio Message</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const handleSend = () => {
    refRBSheet.current.open();
    // if (inputText.trim()) {
    //   setMessages([
    //     ...messages,
    //     { id: Date.now().toString(), type: "sent", text: inputText },
    //   ]);
    //   setInputText("");
    // }
  };

  return (
    <View style={styles.container}>
      <View style={styles.yesterDayCont}>
        <Text style={styles.yesterDayText}>Yesterday</Text>
      </View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <View style={styles.TextInputCont}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Type your message"
          />
          <View>
            <Ionicons name="add" size={20} color={Colors.primary100} />
          </View>
        </View>

        {/* <Button
          title="Send"
          onPress={handleSend}
          disabled={!inputText.trim()}
        /> */}
        <TouchableOpacity style={styles.SendButtonCont} onPress={handleSend}>
          <Ionicons name="send" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <RBSheet
        ref={refRBSheet}
        height={350}
        useNativeDriver={false}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0, 0, 0, 0.5)", 
          },
          container: {
            backgroundColor: "white",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          draggableIcon: {
            backgroundColor: "#A0A0A0",
            width: 40,
            height: 4,
          },
        }}
        customModalProps={{
          animationType: "slide",
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: true,
        }}
      >
        <View style={styles.bottomSheetcont}>
          <BottomSheetContent />
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  chatContainer: {
    
    flex:1,
    padding: 10,
  },
  yesterDayCont: {
    marginTop: 15,
    marginBottom: 15,
    width: 76,
    height: 22,
    backgroundColor: "#F4F4F4",
    borderRadius: 3,
    alignItems: "center",
  },
  yesterDayText: {
    fontFamily: "Nunito-Regular",
    fontSize: 12,
    fontWeight: "400",
  },
  message: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 35,
    
  },
  received: {
    height:80,
    justifyContent: "flex-start",
  },
  sent: {
    justifyContent: "flex-end",
  },
  avatar: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 10,
  },
  messageText: {
    maxwidth:"80%",
    backgroundColor: "#EAF2EA",
    borderRadius: 16,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5,
    fontFamily: "Nunito-SemiBold",
    fontWeight: "500",
    fontSize: 14,
  },
  audio: {
    color: Colors.primary100,
    right: 190,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopColor: "#ddd",
  },
  TextInputCont: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    width: 268,
    height: 56,
    borderRadius: 16,
    backgroundColor: Colors.neutrals100,
  },
  input: {
    padding: 10,
    width: 240,
    height: 56,
    borderColor: "#FAFAFA",
    borderRadius: 20,
    marginRight: 40,
  },

  SendButtonCont: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 8,
  },
  bottomSheetcont: {
    width: "100%",
    height: "100%",
    // paddingRight: 10,
    // paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 20,
    alignItems:'center'
  },
});

export default ChatScreen;
