import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import * as S from './styles';

const Main: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>

      <S.Form>
        <S.Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório..."
        />
        <S.Submit onPress={() => {}}>
          <Icon name="plus" size={22} color="#fff" />
        </S.Submit>
      </S.Form>
    </S.Container>
  );
};

export default Main;
