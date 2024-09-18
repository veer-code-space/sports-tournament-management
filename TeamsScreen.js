import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { TextInput, Button, Card, Title, Paragraph, Appbar } from 'react-native-paper';

const TeamsScreen = ({ navigation }) => {
  const [teams, setTeams] = useState([]);
  const [teamName, setTeamName] = useState('');

  const addTeam = () => {
    if (teamName.trim()) {
      setTeams([...teams, { name: teamName, players: [] }]);
      setTeamName('');
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Teams" />
        <Appbar.Action icon="match-play" onPress={() => navigation.navigate('Matches')} />
      </Appbar.Header>
      <View style={styles.inputContainer}>
        <TextInput
          label="Team Name"
          value={teamName}
          onChangeText={setTeamName}
          style={styles.input}
        />
        <Button mode="contained" onPress={addTeam} style={styles.button}>
          Add Team
        </Button>
      </View>
      <FlatList
        data={teams}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.name}</Title>
              <Paragraph>{item.players.length} Players</Paragraph>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 8,
  },
  button: {
    marginTop: 8,
  },
  card: {
    marginBottom: 8,
  },
});

export default TeamsScreen;
