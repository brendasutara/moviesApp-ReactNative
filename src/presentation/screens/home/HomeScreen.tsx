import { View, Text, ScrollView } from 'react-native'
import { useMovies } from '../../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { colors, globalStyles } from '../../../config/theme/app-theme';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();

    if (isLoading) {
        return (<Text>Cargando...</Text>)
    }

    return (
        <ScrollView style={globalStyles.background}>
            <View style={{
                marginTop: top + 20,
                paddingBottom: 30,
            }}>
                <Text
                    style={globalStyles.titleApp}
                >
                    Movies
                </Text>
                <PosterCarousel movies={nowPlaying} />

                <HorizontalCarousel
                    movies={popular}
                    title='Populares'
                    loadNextPage={popularNextPage}
                />

                <HorizontalCarousel movies={topRated} title='Mejor calificadas' />

                <HorizontalCarousel movies={upcoming} title='Próximamente' />
            </View>
        </ScrollView>
    )
}
