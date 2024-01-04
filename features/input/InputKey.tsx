import { Box, Button, ButtonText } from '@gluestack-ui/themed';
import { GREY } from '../../consts/color';
import { useAppDispatch } from '../../app/hooks';
import { add } from './inputSlice';
import React from 'react';

interface KeyBoxProps {
    wide?: boolean,
    text: string
}

export default function KeyBox(props: KeyBoxProps) {
    const dispatch = useAppDispatch()

    return (
        <Box
            justifyContent="center"
            margin={2}
            height={55}
            width={props.wide ? 60 : 40}
            alignItems="center"
        >
            <Button h={53} w={props.wide ? 60 : 38} size="sm" bg={GREY} onPress={() => dispatch(add(props.text))}>
                <ButtonText color="black">{props.text}</ButtonText>
            </Button>
        </Box>
    );
}