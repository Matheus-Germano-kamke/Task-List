import { StackNavigationProp } from '@react-navigation/stack';

export interface IStackScreenProps{
    name: string;
    navigation: StackNavigationProp<any>;
    //route: RouteProp<ParamListBase, any>;
    userLogged: string;
    home: object,
    route: {params: {email: string}}
}
