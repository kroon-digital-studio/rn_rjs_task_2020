/**
 * Question 1:
 * What are the issues in the page, how would you fix it?
 */

import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

const mapCompaniesIntoPeople = (people, companies) => {
  /* Map Company names into each person that they work for */
};

const mapPeopleIntoHouses = (houses, people) => {
  /* Map people into house who live in the house */
};

class App extends React.Component {
  render() {
    this.props.fetchPeople()
    return (
      <View style={styles.container}>
        <People data={this.props.people}/>
        <House data={this.props.houses} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { people: { data }, companies, houses } = state;
  const people = mapCompaniesIntoPeople(data, companies);
  const houses = mapPeopleIntoHouses(houses, data)
  return {
    people,
    houses,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPeople: () => dispatch(fetchPeople())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
