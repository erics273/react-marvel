import React, { Component } from 'react';
import { Navbar, FormGroup, Button } from 'react-bootstrap';

export class SearchCharacters extends Component {

  handleSearch = (e) => {
    e.preventDefault();
    if (!e.target.search.value.trim()) {
      this.props.getCharacters();
    } else {
      this.props.getCharacters(e.target.search.value.trim());
    }
  }

  render() {
    return (<Navbar.Form pullRight>
      <form onSubmit={this.handleSearch}>
        <FormGroup>
          <input name="search" type="text" placeholder="Search" className="form-control" />
        </FormGroup>
        {' '}
        <Button type="submit">Submit</Button>
      </form>
    </Navbar.Form>
    )
  }
}

export default SearchCharacters;
