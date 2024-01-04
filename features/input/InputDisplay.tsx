import { Box, Text } from '@gluestack-ui/themed';
import { useAppSelector } from '../../app/hooks';

export default function InputDisplay() {
    const inputValue = useAppSelector((state) => state.input.value)
    return (
        <Box
            alignItems="center"
            justifyContent="center"
            style={{
                height: 55,
                width: '50%',
            }}
        >
            <Text size='lg'>
                {inputValue}
            </Text>
        </Box>
    );
}