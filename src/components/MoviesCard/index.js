import { Image, StyleSheet, TouchableOpacity } from "react-native"

export const MoviesCard = (props) => {
    return (
        <TouchableOpacity>
            <Image style={styles.img} source={props.movieURL} alt="Img-Card"/>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    img: {
        marginLeft: 20,
    },
})