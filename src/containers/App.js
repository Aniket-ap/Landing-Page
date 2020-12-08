import React, { Component } from "react";
import { getCategories } from "../apis/index";

class App extends Component {
  state = {
    categories: [],
    images: [],
  };

  async componentDidMount() {
    const categories = await getCategories();
    console.log(categories);
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
