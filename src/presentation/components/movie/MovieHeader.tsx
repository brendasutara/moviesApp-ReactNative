import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../config/theme/app-theme';
import { IonIcon } from '../shared/IonIcon';

interface Props {
    poster: string,
    releaseDate: Date,
    title: string,
    duration: number
}

export const MovieHeader = ({ poster, title, releaseDate, duration }: Props) => {
    const { height: screenHeight } = useWindowDimensions();
    const navigation = useNavigation();

    return (
        <View style={[styles.imageContainer, { height: screenHeight * 0.7 }]}>
            <View style={styles.imageBorder}>
                <Image style={styles.posterImage} source={{ uri: poster }} />
                <LinearGradient
                    colors={['transparent', colors.background]}
                    locations={[0.2, 0.95]}
                    style={styles.gradientOverlay}
                />
            </View>
            <View style={{ alignItems: 'center', marginHorizontal: 20, marginTop: -50 }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>Estreno en el {releaseDate.toLocaleDateString('es-ES', { year: 'numeric' })} - {duration} min</Text>
            </View>
            <Pressable style={({ pressed }) => ({
                ...styles.backButton,
                opacity: pressed ? 0.9 : 1,
            })} onPress={() => navigation.goBack()}>
                <IonIcon name='chevron-back' color={colors.orange} size={30} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        backgroundColor: colors.background,
        paddingBottom: 20
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        position: 'relative',
    },
    posterImage: {
        flex: 1,
    },
    gradientOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%', // Ajusta la altura del degradado según lo necesites
    },
    marginContainer: {
        margin: 20,
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8,
        color: colors.textSecondary,
    },
    title: {
        fontSize: 30,
        marginBottom: 5,
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    backButton: {
        position: 'absolute',
        top: 35,
        left: 10,
        zIndex: 999,
        elevation: 9,
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.55)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
});
