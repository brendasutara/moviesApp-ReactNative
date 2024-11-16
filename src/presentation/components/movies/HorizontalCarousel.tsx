import { Text, View } from 'react-native'
import { colors, globalStyles } from '../../../config/theme/app-theme'
import { Movie } from '../../../core/entities/movie.entity'
import { FlatList } from 'react-native-gesture-handler'
import { MoviePoster } from './MoviePoster'

interface Props {
    movies: Movie[],
    title?: string,
}

export const HorizontalCarousel = ({ movies, title }: Props) => {
    return (
        <View
            style={{ height: title ? 260 : 220 }}>

            {
                title && (
                    <Text
                        style={globalStyles.title}
                    >
                        {title}
                    </Text>
                )
            }

            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <MoviePoster movie={item} width={140} height={200} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

        </View>
    )
}