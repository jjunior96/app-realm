import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as S from './styles';

interface RepositoryProps {
  name: string;
  description: string;
  stars: string;
  forks: string;
}

const Repository: React.FC<RepositoryProps> = ({
  name,
  description,
  stars,
  forks,
}) => {
  return (
    <S.Container>
      <S.Name>{name} </S.Name>
      <S.Description>{description} </S.Description>

      <S.Stats>
        <S.Stat>
          <Icon name="star" size={16} color={'#333'} />
          <S.StatCount>{stars} </S.StatCount>
        </S.Stat>

        <S.Stat>
          <Icon name="code-fork" size={16} color={'#333'} />
          <S.StatCount>{forks} </S.StatCount>
        </S.Stat>
      </S.Stats>
    </S.Container>
  );
};

export default Repository;
