import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import Menu from '../../../assets/images/Vector.svg';

const BackButton = ({showMenu}) => {
  const navigation = useNavigation();
  const handleButton = () => {
    navigation.goBack();
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <View style={{width: '100%', backgroundColor: 'red'}}> */}

      <LinearGradient
        colors={['#5A9CA9', '#345B61']}
        useAngle
        angle={250}
        style={[!showMenu && styles.linearBack, showMenu && styles.linearMenu]}
        start={{x: 1, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <TouchableOpacity
          style={[
            !showMenu && styles.menuGradient,
            showMenu && styles.circleTwoGradient,
          ]}
          onPress={() => handleButton()}>
          {showMenu ? (
            <Menu width={50} height={50} />
          ) : (
            <Image
              source={require('../../../assets/images/back_arrow.png')}
              width={38}
              height={38}
            />
          )}
        </TouchableOpacity>
      </LinearGradient>

      {/* </View> */}
    </View>
  );
};

export default BackButton;
