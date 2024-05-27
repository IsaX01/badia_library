import React from 'react';
import { View, Text, Pressable, Button, Alert, StyleSheet } from 'react-native';
import { ArrowLeftStartOnRectangleIcon } from "react-native-heroicons/micro";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../store/authActions';
import { ProfileCard } from '../components/ProfileCard';

export const Profile = ({ navigation }) => {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.user !== null);
  const [isLoading, setIsLoading] = React.useState(false);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await dispatch(logoutUser());

      if (!isAuthenticated) {
        navigation.replace('Auth');
      } else {
        Alert.alert("Error", "Logout fail");
      }
    } catch (error) {
      Alert.alert("Error", "Error connecting to the server.");
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <ProfileCard key={user.id} user={user} />
      </View>
      <Pressable
        style={styles.button}
        onPress={handleLogout}
        disabled={isLoading}
      >
        <Text style={[styles.text, { color: "#c2edff" }]}>{isLoading ? 'Loading...' : 'Logout'}</Text>
        <ArrowLeftStartOnRectangleIcon size={24} color="#c2edff" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    // backgroundColor: "#141414",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  profile: {
    gap: 10,
    padding: 5,
  },
  content: {
    marginVertical: 30,
  },
  input: {
    borderColor: "#32c9fe",
    borderWidth: 1,
    height: 50,
    // color: '#fafafa',
    marginVertical: 15,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
    marginVertical: 15,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    width: 200,
    backgroundColor: "#07b2f0",
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "semibold",
    letterSpacing: 0.25,
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: "center",
    objectFit: "cover",
    borderRadius: 15,
  },
});