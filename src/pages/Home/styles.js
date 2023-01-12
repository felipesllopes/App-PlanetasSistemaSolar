import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    imgFundo: {
        height: '100%',
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 5,
    },
    titulo: {
        fontSize: 33,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        margin: 10,
        marginVertical: 20,
    },
    icone: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        margin: 10,
        padding: 2,
        backgroundColor: 'black',
    },
    nomePlaneta: {
        color: 'white',
        fontSize: 19,
        marginLeft: 15,
    },
    imgPlaneta: {
        height: 50,
        width: 50,
        marginRight: 15,
        margin: 5,
    }
});

export default styles;