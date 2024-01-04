import { Box } from '@gluestack-ui/themed';
import ResizingBox from '../../components/ResizingBox';
import InputKey from './InputKey';
import { ENTER_KEY_TEXT, DEL_KEY_TEXT } from '../../consts/text';

export default function InputDisplay() {
    return (
        <ResizingBox>
            <Box flexDirection="row">
              <InputKey text="Q" />
              <InputKey text="W"/>
              <InputKey text="E"/>
              <InputKey text="R"/>
              <InputKey text="T"/>
              <InputKey text="Y"/>
              <InputKey text="U"/>
              <InputKey text="I"/>
              <InputKey text="O"/>
              <InputKey text="P"/>
            </Box>
            <Box flexDirection="row">
              <InputKey text="A"/>
              <InputKey text="S"/>
              <InputKey text="D"/>
              <InputKey text="F"/>
              <InputKey text="G"/>
              <InputKey text="H"/>
              <InputKey text="J"/>
              <InputKey text="K"/>
              <InputKey text="L"/>
            </Box>
            <Box flexDirection="row">
              <InputKey text={ENTER_KEY_TEXT} wide/>
              <InputKey text="Z"/>
              <InputKey text="X"/>
              <InputKey text="C"/>
              <InputKey text="V"/>
              <InputKey text="B"/>
              <InputKey text="N"/>
              <InputKey text="M"/>
              <InputKey text={DEL_KEY_TEXT} wide/>
            </Box>
            <Box flexDirection="row">
              <InputKey text="SWAP" wide/>
            </Box>
        </ResizingBox>
    );
}