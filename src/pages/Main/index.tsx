import React, {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import getRealm from '../../services/realm';

import Repository from '../../components/Repository';

import * as S from './styles';

interface RepositoryProps {
  id: string;
  name: string;
  full_name: string;
  description: string;
  stargazers_count: string;
  forks_count: string;
}

const Main: React.FC = () => {
  const renderItem = ({}) => (
    <Repository name="Test" stars="123" forks="123" description="dest" />
  );

  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function loadRepositories() {
      const realm = await getRealm();

      const data: Realm.Results<Realm.Object> = realm
        .objects('Repository')
        .sorted('stars', true);

      setRepositories(data);
    }

    loadRepositories();
  }, []);

  async function saveRepository(repository: RepositoryProps) {
    const data = {
      id: repository.id,
      name: repository.name,
      fullName: repository.full_name,
      description: repository.description,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
    };

    // const renderItem = ({}) => (
    //   <Repository
    //     name={data.name}
    //     stars={data.stars}
    //     forks={data.forks}
    //     description={data.description}
    //   />
    // );

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Repository', data);
    });
  }

  async function handleAddRepository() {
    try {
      const response = await api.get(`/repos/${input}`);

      await saveRepository(response.data);

      setInput('');
      setError(false);
      Keyboard.dismiss();
    } catch (error) {
      setError(true);
    }
  }

  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>

      <S.Form>
        <S.Input
          value={input}
          error={error}
          onChangeText={setInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório..."
        />
        <S.Submit onPress={handleAddRepository}>
          <Icon name="plus" size={22} color="#fff" />
        </S.Submit>
      </S.Form>

      <S.List
        keyboardShouldPersistTaps="handled"
        data={repositories}
        keyExtractor={(item) => item.id}
        renderItem={(data) => (
          <Repository
            name={data.name}
            stars={data.stars}
            forks={data.forks}
            description={data.description}
          />
        )}
      />
    </S.Container>
  );
};

export default Main;
