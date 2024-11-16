import { StyleSheet } from 'react-native';


export const colors = {
    black100: '#0A0E15',
    black90: '#212631',
    black80: '#373F4E',
    black70: '#4E576A',
    black60: '#667085',

    white100: 'white',
    white90: '#F0F1F5',
    white80: '#E0E4EB',
    white70: '#D1D6E0',
    white60: '#BFC6D4',

    orange: '#FF9427',

    divider: '#2F2F2F',

    textPrimary: 'white',
    textSecondary: '#B8B8B8',
    textDisable: '#898989',

    background: '#121212',
}



export const globalStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.background,
    },

    title: {
        fontSize: 30,
        fontWeight: '300',
        marginLeft: 20,
        marginBottom: 10,
        color: colors.textSecondary
    },

    image: {
        flex: 1,
        borderRadius: 12,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 12,
    }

})