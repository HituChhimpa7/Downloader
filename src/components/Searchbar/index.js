import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity, 
} from 'react-native';
import React, {useState} from 'react';
import ReactNativeBlobUtil from 'react-native-blob-util';

const Search = () => {
  const [pastedURL, SetPastedURL] = useState('');


  const downloadFile = () => {
    const {config, fs} = ReactNativeBlobUtil;
    const date = new Date();
    const fileDr = fs.dirs.DownloadDir;
    config({
      // add this option that makes response data to be stored as a file,
      // this is much more performant.
      fileCache: true,
      appendExt: 'mp4',
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          fileDr +
          '/download_' +
          Math.floor(date.getDate() + date.getSeconds() / 2) +
          '.mp4',
        description: 'file downloaded',
      },
    })
      .fetch('GET', pastedURL, {
        //some headers ..'
      })
      .then(res => {
        // the temp file path
        console.log('The file saved to ', res.path());
        alert('file downloaded successfully');
      });
  };

  return (
    <KeyboardAvoidingView style={styles.main}>
      <Text>Paste the link here! </Text>
      <TextInput
        style={styles.textinput}
        placeholder="Enter the URL"
        onChangeText={txt => SetPastedURL(txt)}
        value={pastedURL}
      />
      <View style={styles.view}>
        <TouchableOpacity
          onPress={() => {
            downloadFile();
          }}>
          <Text style={styles.btn}>Download Image </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Search;
const styles = StyleSheet.create({
  textinput: {
    borderWidth: 1,
    width: '94%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    fontSize: 20,
  },

  main: {
    alignItems: 'center',
    marginTop: 100,
  },
  btn: {
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
  },
  view: {
    marginTop: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8F00',
    height: 60,
    width: '80%',
  },
});
