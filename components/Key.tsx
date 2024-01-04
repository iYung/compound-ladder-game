import { GluestackUIProvider, Heading, Box, Divider, Text, Input, InputField } from '@gluestack-ui/themed';
import { GREY } from '../consts/color';

interface KeyBoxProps {
    wide?: boolean,
    text?: string
}

export default function KeyBox(props: KeyBoxProps) {
    return (
        <Box
            backgroundColor={GREY}
            padding={13}
            justifyContent="center"
            margin={4}
            height={50}
            width={props.wide ? 60 : undefined}
            borderRadius={6}
            alignItems="center"
        >
            <b>{props.text}</b>
        </Box>
    );
}