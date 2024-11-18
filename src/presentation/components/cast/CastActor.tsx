import { Image, StyleSheet, Text, View } from 'react-native'
import { Cast } from '../../../core/entities/cast.entity'
import { colors } from '../../../config/theme/app-theme'

interface Props {
    actor: Cast
}

export const CastActor = ({ actor }: Props) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: actor.avatar }}
                style={{ width: 100, height: 120, borderRadius: 8 }}
            />

            <View style={styles.actorInfo}>
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: colors.textSecondary
                    }}>
                    {actor.name}
                </Text>
                <Text
                    style={{
                        fontSize: 12,
                        color: colors.textDisable
                    }}>
                    {actor.character}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 15,
        display: 'flex',
        flexDirection: 'column',
        width: 100,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4,
    }
})