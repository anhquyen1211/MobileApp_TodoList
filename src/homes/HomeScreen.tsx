import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import {globalStyles} from '../styles/globalStyles';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import TextComponent from '../components/TextComponent';
import TitleComponent from '../components/TitleComponent';
import {colors} from '../constants/colors';
import CardComponent from '../components/CardComponent';

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent>
        <RowComponent justify="space-between">
          <TextComponent text="fafa" />
          <TextComponent text="fafa" />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <TextComponent text="Hi, Quyền" />
        <TitleComponent text="Be productive today" />
      </SectionComponent>
      <SectionComponent>
        <RowComponent
          styles={[globalStyles.inputContainer]}
          onPress={() => Alert.alert('Welcome!!!')}>
          <TextComponent text="Search" />
          <Text>S</Text>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={{flex: 1}}>
              <TitleComponent text='Task progress' />
              <TextComponent text='30/40 tasks done' />
            </View>
            <View>
              <TextComponent text='CircleChar' />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;
