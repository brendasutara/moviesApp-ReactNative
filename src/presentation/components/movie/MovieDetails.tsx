import { Text, View } from 'react-native'
import { FullMovie } from '../../../core/entities/movie.entity'
import { globalStyles } from '../../../config/theme/app-theme'
import { Formatter } from '../../../config/helpers/formatter'
import { Cast } from '../../../core/entities/cast.entity'
import { FlatList } from 'react-native-gesture-handler'
import { CastActor } from '../cast/CastActor'

interface Props {
    movie: FullMovie,
    cast: Cast[]
}

export const MovieDetails = ({ movie, cast }: Props) => {
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

                <View style={{ ...globalStyles.marginContainer, marginBottom: 20 }}>
                    <Text style={globalStyles.titleDetail}>Actores</Text>
                    <FlatList
                        data={cast}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <CastActor actor={item} />}
                    />
                </View>
            </View>
        </>
    )
}