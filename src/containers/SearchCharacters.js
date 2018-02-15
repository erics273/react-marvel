import React from 'react'
import { connect } from 'react-redux'
import { getCharacters } from '../actions/character'
import SearchCharacters from "../components/SearchCharacters/SearchCharacters";

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    getCharacters: (search) => {
      dispatch(getCharacters(search))
    }
  }
}

const SearchCharactersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCharacters)

export default SearchCharactersContainer