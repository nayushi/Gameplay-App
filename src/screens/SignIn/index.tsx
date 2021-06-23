import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  StatusBar,
} from "react-native";
import { styles } from "./styles";
import illustration from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const [text, setText] = useState("");
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home')

  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={illustration} style={styles.image} resizeMode="stretch" />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`} e organize suas {`\n`} partidas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com Discord" onPress={handleSignIn}/>
      </View>
    </SafeAreaView>
  );
}
