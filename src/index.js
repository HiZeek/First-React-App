import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import Header from './components/header';
import JSON from './018 db.json';
import NewsList from './components/news_list';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      news: JSON,
      filtered: JSON
    }
  }

  filterNews(keywords){
    let filtered = this.state.news.filter((item) => {
      return item.title.indexOf(keywords) > -1;
    })
    this.setState({filtered: filtered})
  }

  render(){
    return(
      <div>
        <Header newsSearch = {keywords => this.filterNews(keywords)}/>
        <NewsList news = {this.state.filtered}/>
      </div>
    )
  }

}

ReactDOM.render(<App/>, document.querySelector('#root'));