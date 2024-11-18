import { StackScreenProps } from '@react-navigation/stack'
import { View, Text } from 'react-native'
import { RootStackParams } from '../../navigation/Navigation'
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { globalStyles } from '../../../config/theme/app-theme';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> { };

export const DetailsScreen = ({ route }: Props) => {

    const { movieId } = route.params;

    const { isLoading, movie, cast = [] } = useMovie(movieId)

    if (isLoading) {
        return <FullScreenLoader />
    }

    return (
        <ScrollView style={globalStyles.background}>
            <MovieHeader
                title={movie!.title}
                releaseDate={movie!.releaseDate}
                poster={movie!.poster}
                duration={movie!.duration} />
            <MovieDetails movie={movie!} cast={cast} />
        </ScrollView>
    )
}
