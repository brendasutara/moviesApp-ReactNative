import { Image, Pressable, StyleSheet, View } from 'react-native'
import { Movie } from '../../../core/entities/movie.entity'
import { globalStyles } from '../../../config/theme/app-theme';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/Navigation';

interface Props {
    movie: Movie;
    width?: number,
    height?: number
}
export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <Pressable
            onPress={() => navigation.navigate('Details', { movieId: movie.id })}
            style={({ pressed }) => ({
                width,
                height,
                marginHorizontal: 4,
                paddingVertical: 20,
                paddingHorizontal: 5,
                opacity: pressed ? 0.9 : 1,
            })}
        >
            <View style={globalStyles.imageContainer}>
                <Image
                    style={globalStyles.imageContainer}
                    source={{ uri: movie.poster }}
                />
            </View>
        </Pressable>
    )
}