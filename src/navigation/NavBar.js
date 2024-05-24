import { Pressable, Platform, View, StyleSheet } from "react-native";
import {
  HomeIcon,
  BookOpenIcon,
  UserIcon,
  ClipboardDocumentListIcon
} from "react-native-heroicons/micro";
import { useNavigation } from "@react-navigation/native";

export const NavBar = ({ state }) => {
  const navigation = useNavigation();
  const getBgColor = (index) => {
    return state.index === index ? "#79daff" : "transparent";
  };
  const getColor = (index) => {
    return state.index === index ? "#0090cd" : "#101010";
};
  return (
    <View style={styles.content}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.navigate("Dashboard")}>
          <View
            style={[styles.iconContainer, { backgroundColor: getBgColor(0) }]}
          >
            <HomeIcon size={28} style={{color: getColor(0)}}/>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Books")}>
          <View
            style={[styles.iconContainer, { backgroundColor: getBgColor(1) }]}
          >
            <BookOpenIcon size={28} style={{color: getColor(1)}}/>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Loans")}>
          <View
            style={[styles.iconContainer, { backgroundColor: getBgColor(2) }]}
          >
            <ClipboardDocumentListIcon size={28} style={{color: getColor(2)}}/>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Profile")}>
          <View
            style={[styles.iconContainer, { backgroundColor: getBgColor(3) }]}
          >
            <UserIcon size={28} style={{color: getColor(3)}}/>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    // paddingHorizontal: 20,
    // paddingVertical: 16,
    borderRadius: 30,
    // shadowColor: "#07a8f0",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.50,
    // shadowRadius: 1.30,
    backgroundColor:"#dff4ff",
    elevation: 1,    
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 15
  },
  iconContainer: {
    borderRadius: 50,
    padding: 10,
    alignItems: 'center'
  },
  content: {
    marginHorizontal: 10,
    marginVertical: 12,
    borderRadius: 30,
    // elevation: 5,
    // shadowColor: "#07a8f0",
    // shadowOpacity: 0.50,
    // shadowRadius: 5.30,

  },
});

