import React from "react";
import { connect } from "react-redux";
import { checkAuth, search, getPlayingTrack } from "../actions";
import Header from "./Header";
import Nav from "./Nav";
import Player from "./Player";
import SearchList from "./SearchList";
import Signin from "./SignIn";
import Playlist from "./Playlist";
// import spotify from '../helpers/spotifyApi'

class App extends React.Component {
  componentDidMount() {
    const hash = window.location.hash;
    this.props.checkAuth(hash);

  }

  render() {
    if (this.props.loading) return null;
    else {
       if(this.props.authorized) this.props.getPlayingTrack()
      return (
        <div className="App">
          <Playlist/>
          <Nav />
          {this.props.authorized ? (
            <div className="wrapper">
              <Header />
              <div className="content">
                <SearchList/>
              </div>
              <Player />
            </div>
          ) : (
            <div className="wrapper">
              <Signin />
            </div>
          )}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  authorized: state.auth.authorized,
});

export default connect(mapStateToProps, { checkAuth, search, getPlayingTrack })(App);
