import { Text, View } from 'react-native'
import { FullMovie } from '../../../core/entities/movie.entity'
import { globalStyles } from '../../../config/theme/app-theme'
import { Formatter } from '../../../config/helpers/formatter'

interface Props {
    movie: FullMovie,
}

export const MovieDetails = ({ movie }: Props) => {
    return (
        <>
            <View >
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={globalStyles.subTitle}>{movie.rating}</Text>
                    <Text style={globalStyles.subTitle}> - {movie.genres.join(', ')}</Text>
                </View>
                <View style={globalStyles.marginContainer}>
                    <Text style={globalStyles.titleDetail}>Historia</Text>
                    <Text style={globalStyles.subTitle}>{movie.description}</Text>
                </View>
                <View style={globalStyles.marginContainer}>
                    <Text style={globalStyles.titleDetail}>Presupuesto</Text>
                    <Text style={globalStyles.subTitle}>{Formatter.currency(movie.budget)}</Text>
                </View>
                <View style={{ ...globalStyles.marginContainer, marginBottom: 100 }}>
                    <Text style={globalStyles.titleDetail}>Actores</Text>
                </View>
            </View>
        </>
    )
}