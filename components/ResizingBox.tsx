import { Box } from '@gluestack-ui/themed';
import { Dimensions, ViewProps } from 'react-native';

interface ResizingBoxProps extends Partial<ViewProps> {
    dark?: boolean,
    row?: boolean
}

export default function ResizingBox(props: ResizingBoxProps) {
    const windowWidth = Dimensions.get('window').width;
    return (
        <Box
            alignItems="center"
            justifyContent="center"
            style={{
                width: '100%',
                maxWidth: Math.min(windowWidth - 30, 500),
                marginTop: 30,
            }}
        >
            {props.children}
        </Box>
    );
}