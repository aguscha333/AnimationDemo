import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';
import ParallelAnimatedBox from './ParallelAnimatedBox';
import SequenceAnimatedBox from './SequenceAnimatedBox';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <ParallelAnimatedBox />
        <SequenceAnimatedBox />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
