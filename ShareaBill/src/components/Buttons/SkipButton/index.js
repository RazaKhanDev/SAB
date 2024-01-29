import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

const SkipButton = ({containerStyle, btnStyle, showBtn}) => {
  return (
    <View style={{}}>
      {showBtn && (
        <LinearGradient
          colors={['#343a54', '#6a6ea7']}
          style={styles.linearStyle}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <View style={styles.circleTwoGradient}>
            <Text style={{color: '#fff'}}>Skip</Text>
          </View>
        </LinearGradient>
      )}
    </View>
  );
};

export default SkipButton;
