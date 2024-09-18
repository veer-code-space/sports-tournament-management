import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Button, Card, Title, Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MatchesScreen = () => {
  const [matches, setMatches] = useState([]);

  const createMatch = (type) => {
    setMatches([...matches, { type, teams: [] }]);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Matches" />
      </Appbar.Header>
      <View style={styles.buttonContainer}>
        <Button
          icon={() => <Icon name="sports-cricket" size={20} color="white" />}
          mode="contained"
          onPress={() => createMatch('League')}
          style={styles.button}
        >
          League Match
        </Button>
        <Button
          icon={() => <Icon name="star" size={20} color="white" />}
          mode="contained"
          onPress={() => createMatch('Knockout')}
          style={styles.button}
        >
          Knockout Match
        </Button>
        <Button
          icon={() => <Icon name="group" size={20} color="white" />}
          mode="contained"
          onPress={() => createMatch('Group')}
          style={styles.button}
        >
          Group Match
        </Button>
        <Button
          icon={() => <Icon name="sports-kabaddi" size={20} color="white" />}
          mode="contained"
          onPress={() => createMatch('Super 6')}
          style={styles.button}
        >
          Super 6 Match
        </Button>
      </View>
      <FlatList
        data={matches}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.type} Match</Title>
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
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    marginBottom: 16,
  },
  button: {
    marginBottom: 8,
  },
  card: {
    marginBottom: 8,
  },
});

export default MatchesScreen;
