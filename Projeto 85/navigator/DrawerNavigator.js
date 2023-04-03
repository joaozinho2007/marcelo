import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator= () => {
    return(
    <Drawer.Navigator>
        <Drawer.Screen name="Tela inicial" component={StackNavigator}
        />
        <Drawer.Screen name="Perfil" component={profile}/>
    </Drawer.Navigator>
    );
};

export default DrawerNavigator;
renderItem = ({item: story}) => {
    return <StoryCard story={story} navigation={this.props.navigation}/
    >;
}