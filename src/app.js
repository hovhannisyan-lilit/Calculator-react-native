import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Platform,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  useColorScheme,
  Button,
  ScrollView,
  RefreshControl, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable,
} from "react-native";
import image from "./assets/images/image41.png";

function App(props) {
  const input = useRef();
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const colorScheme = useColorScheme();
  const handleRefresh = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <ScrollView
      style={{ flex: 1 }}
      refreshControl={(
        <RefreshControl
          refreshing={loading}
          onRefresh={handleRefresh}
          tintColor="red"
          colors={['red']}
          title="Loading..."
          titleColor="red"
        />
      )}
    >

      <Text
        style={styles.title}
        numberOfLines={1}
        ellipsizeMode="head"
        selectable
        selectionColor="blue"
        onLayout={(ev) => {
          console.log(ev.nativeEvent);
        }}
      >
        Hello qwehqwgehqwe https://facebook.com qwhegqwhge2 312312
      </Text>

      <Pressable delayLongPress={5000} onLongPress={() => alert(2)} onPress={() => input.current.focus()} >
        <Text style={{backgroundColor: 'red'}}>Hell</Text>
      </Pressable>
      <Image source={image} />

      <Image
        blurRadius={0}
        style={styles.image}
        fadeDuration={1000}
        onLayout={(ev) => {
          console.log(ev.nativeEvent);
        }}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png?!23123",
        }}
      />

      <TextInput
        ref={input}
        autoComplete="email"
        autoCapitalize="characters"
        style={styles.input}
        value={value}
        onChangeText={setValue}
        cursorColor="red"
        disableFullscreenUI
        selectionColor="blue"
        placeholder="hell0"
        placeholderTextColor="red"
        returnKeyType="yahoo"
        secureTextEntry
        textAlign={"center"}
        textContentType="emailAddress"
        keyboardType={Platform.OS === "ios" ? "name-phone-pad" : "default"}
        dataDetectorTypes="phoneNumber"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "red",
    paddingTop: 100,
  },
  titleBlue: {
    color: "blue",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  input: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "red",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default App;
