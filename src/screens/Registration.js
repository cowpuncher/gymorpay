import React from 'react'
import { 
    StyleSheet, 
    View, 
    Image, 
    Dimensions,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

var { height } = Dimensions.get('window');
 
var box_count = 1  ;
var box_height = height / box_count;

export const Registration = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image 
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />
            </View>
            <View style={flex.block}>
                    <TouchableOpacity
                        style={button.active}
                        onPress={() => { alert('Регистрируемся, красавчик!'); }}
                        >
                        <Text  style={button.text}>
                            Регистрация
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={button.aut}
                        onPress={() => { alert('Вводим данные, красавчик!'); }}
                        >
                        <Text  style={button.link}>
                            Аторизация
                        </Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.block}>
                <TextInput 
                    style={styles.input}
                    placeholderTextColor='white'
                    placeholder= 'Имя'
                />
                <TextInput 
                    style={styles.input}
                    placeholderTextColor='white'
                    placeholder= 'E-mail'
                />
                <TextInput 
                    style={styles.input}
                    placeholderTextColor='white'
                    placeholder= 'Пароль'
                />
                <TextInput 
                    style={styles.input}
                    placeholderTextColor='white'
                    placeholder= 'Павторите пароль'
                />
                <TouchableOpacity
                    style={button.enter}
                    onPress={() => { alert('Зарегистрировался, красавчик!'); }}
                >
                    <Text  style={button.text}>
                        Зарегистрироваться
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text  style={styles.title}>
                    Войти сейчас
                </Text>
                <View  style={flex.block}>
                    <TouchableOpacity
                        style={styles.networkVk}
                        onPress={() => { alert('You tapped the Vk button!'); }}
                        >
                        <Icon
                            name="vk"
                            color="#ffffff"
                        >
                        </Icon>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.networkGoogle}
                        onPress={() => { alert('You tapped the Google button!'); }}
                        >
                         <Icon
                            name="google"
                            color="#ffffff"
                        >
                        </Icon>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.networkFb}
                        onPress={() => { alert('You tapped the Facebook button!'); }}
                        >
                        <Icon
                            name="facebook"
                            color="#ffffff"
                        >
                        </Icon>
                    </TouchableOpacity>
                </View>
            </View>
        </View> 
    )
}

const flex = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
})

const button = StyleSheet.create({
    active: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1D4E89',
        width: 100,
        height: 29,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 6
    },
    aut: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 29,
        borderRadius: 6
    },
    enter: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1D4E89',
        width: '90%',
        height: 44,
        borderRadius: 8,
        marginBottom: 20
    },
    text: {
        fontSize: 12,
        color: '#ffffff'
    },
    link: {
        fontSize: 12,
        color: '#1D4E89'
    }    
})

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#E5E5E5',
        height: box_height
    },
    logo: {
        marginBottom: 70
    },
    block: {
        width: '100%',
        alignItems: 'center'
    },  
    input: {
        color: '#A8AEB6',
        width: '90%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#A8AEB6',
        color: '#fff',
        width: '90%',
        padding: 10,
        height: 44,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 20
    },
    networkVk: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#4680C2",
        width: 28,
        height: 28,
        borderRadius: 5,
        marginTop: 50
    }
    ,
    networkGoogle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#EB4335",
        width: 28,
        height: 28,
        borderRadius: 5,
        marginTop: 50
    },
    networkFb: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#114E94",
        width: 28,
        height: 28,
        borderRadius: 5,
        marginTop: 50
    }
});