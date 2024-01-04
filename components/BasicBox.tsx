import { GluestackUIProvider, Heading, Box, Divider, Text, Input, InputField } from '@gluestack-ui/themed';
import { GREY } from '../consts/color';
import { StyleSheet, View, Dimensions, ViewProps } from 'react-native';

interface BasicBoxBrops extends Partial<ViewProps> {
    dark?: boolean,
    row?: boolean
}

export default function BasicBox(props: BasicBoxBrops) {
    const windowWidth = Dimensions.get('window').width;
    return (
        <Box
            alignItems="center"
            justifyContent="center"
            style={{
                height: 55,
                width: '100%',
                maxWidth: Math.min(windowWidth - 30, 500),
                borderStyle: 'solid',
                borderWidth: 1,
                marginTop: 30,
                borderColor: GREY,
                backgroundColor: props.dark ? GREY : undefined,
                flexDirection: props.row ? 'row' : undefined
          }}>{props.children}</Box>
    );
}