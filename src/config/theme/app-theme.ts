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

    titleApp: {
        fontSize: 30,
        fontWeight: '500',
        marginLeft: 10,
        color: colors.textPrimary
    },
    title: {
        fontSize: 30,
        fontWeight: '300',
        marginLeft: 10,
        marginBottom: 10,
        color: colors.textSecondary
    },
    titleDetail: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        color: colors.textSecondary
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8,
        color: colors.textSecondary
    },

    imageContainer: {
        flex: 1,
        borderRadius: 12,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    posterImage: {
        flex: 1
    },
    marginContainer: {
        marginHorizontal: 15,
        marginTop: 20,
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 35,
        left: 10,
    },
    backButtonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.55)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },

})