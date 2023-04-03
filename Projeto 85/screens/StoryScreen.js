import React, {component} from 'react';
import {Text, Touchable, TouchableOpacity, View} from 'react-native';

export default class StoryScreen extends component {
    render() {
        return (
            <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            </View>
        )
    }
}

const current_color = this.state.speakerColor;
this.setState({
    speakerColor: current_color === "gray" ? "#ee8249" : "gray"
}); if (current_color === "gray") {
    Speech.speak('${title} by ${author}');
    Speech.speak(story);
    Speech.speak("A moral da história é!");
    Speech.speak(moral);
} else {
    Speech.stop();
}
<TouchableOpacity>
    onPress={()=>
    this.initiateTTS(
        this.props.route.params.story.title,
        this.props.route.params.story.author,
        this.props.route.params.story.story,
        this.props.route.params.story.moral
    )
    }
    <Ionicons>
        name={this.state.speakericon}
        size={RFValue(30)}
        color={this.state.speakerColor}
        style={{margin, RFValue}}
    </Ionicons>
</TouchableOpacity>
asyncinitiateTTS(title, author, story, moral);{
    const current_color= this.state.speakerColor;
    this.setState({
        speakeColor: current_color === "gray" ? "#ee8249" : "gray"
    });
    if (current_color === "gray") {
        Speech.speak('${title} by ${author}');
        Speech.speak(story);
        Speech.speak("A moral da história é!");
        Speech.speak(moral);
    } else{
        Speech.stop();
    }
}