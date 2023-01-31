import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    tittle: {
        fontSize: 44,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 40,
        alignContent: 'center',
        marginHorizontal: 20,
    },
    imageDecoration: {
        height: 173,
        width: 277,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
    },
    buttom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#00BFDD',
        borderRadius: 10,
        borderWidth: 2,
        width: 154,
        paddingVertical: 6,
        marginTop: 80,
    },
    textButtom: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 8,
    },
    imgButtom: {
        width: 29,
        height: 27,
    }
});

export default styles;