import { StyleSheet, View, Dimensions } from 'react-native';
import { GluestackUIProvider, Heading, Box, Divider, Text, Input, InputField } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import { GREY } from './consts/color';
import KeyBox from './components/Key';
import { useState } from 'react';
import { DEL_KEY_TEXT, ENTER_KEY_TEXT } from './consts/text';
import BasicBox from './components/BasicBox';
import { store } from './app/store';
import { Provider } from 'react-redux';
import InputDisplay from './features/input/InputDisplay';
import InputBoard from './features/input/InputBoard';

export default function App() {
  const windowWidth = Dimensions.get('window').width;

  const [input, setInput] = useState("");

  const [isLeft, setLeft] = useState(true);

  const CurrentHalf = () => {
    return <Box alignItems="center" justifyContent="center" style={{
      height: 55,
      width: '50%',
      backgroundColor: GREY
    }}>
      <div onClick={() => setLeft(!isLeft)}><Text size='lg'><b>WHITE</b></Text></div>
    </Box>
  }

  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <Box width="100%" alignItems="center">
          <Box alignItems="center" justifyContent="center" style={{
            maxWidth: 1000,
            height: 70,
            width: '100%',
          }}>
            <Heading>Compound Puzzle</Heading>
          </Box>
          <Divider style={{
            maxWidth: 1000,
            width: '100%',
          }}/>
          <BasicBox dark><Text size='lg'><b>WHITE → ROOM</b></Text></BasicBox>
          <BasicBox><Text size='lg'><b>{isLeft ? "WHITE" + input : input + "WHITE"}</b></Text></BasicBox>
          <BasicBox row>
            {isLeft ? <CurrentHalf /> : <InputDisplay />}
            {!isLeft ? <CurrentHalf /> : <InputDisplay />}
          </BasicBox>
          <InputBoard />
        </Box>
      </GluestackUIProvider>
    </Provider>
  );
}