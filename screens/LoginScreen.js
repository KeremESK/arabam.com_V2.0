import React,{useState} from 'react';
import {SafeAreaView,Text,Button,TextInput,View,StyleSheet,TouchableOpacity} from 'react-native';

export default function Login({navigation}) {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Giriş Ekranı</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Kullanıcı Adı"
          placeholderTextColor="#000000"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Şifre"
          placeholderTextColor="#000000"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Home")}>Giriş Yap</Text>
        </TouchableOpacity>
       <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("SignIn")}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D869C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#CDE8E5',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#CDE8E5',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    border:"solid black 1px"
  },
  inputText: {
    height: 50,
    color: '#0D9276',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    backgroundColor: '#CDE8E5',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '50%',
    marginRight:"10px"
  },
  buttonText: {
    color: '#000000',
  },
});