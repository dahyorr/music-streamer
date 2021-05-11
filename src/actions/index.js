import { CHECK_AUTH, AUTH_DATA, AUTH_ERROR,SEARCH_ERROR, SEARCH_RESULT } from "./types";
import spotify from "../helpers/spotifyApi";
import store from "../store";

const getHeaders = () => {
  const authState = store.getState().auth;
  if (authState.access_token) {
    return {
      Authorization: `${authState.token_type} ${authState.access_token} `,
    };
  } else {
    return {};
  }
};

// export const authorize = () => (dispatch) => {};

export const checkAuth = (hash) => (dispatch) => {
  const authState = hash.substring(1).split("&").reduce((initial, item) => {
      if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});

  if (authState.access_token){
    try {
      spotify.get("/me", {
          headers: {
            Authorization: `${authState.token_type} ${authState.access_token}`,
          },
        }).then(r => dispatch({
          type: AUTH_DATA,
          payload: r.data,
        })).catch(error => {dispatch({
          type: AUTH_ERROR,
          payload: error.message,
        });
        // if (error.response.status === 401){ //fix
        //   dispatch({
        //     type: CHECK_AUTH,
        //     payload: {authorized: false, loading:false},
        //   })
        // }
      })
    }finally{
      authState.authorized = authState.access_token ? true : false;
      authState.loading = false;
      dispatch({
        type: CHECK_AUTH,
        payload: authState,
      });
    }
  }else {
      authState.authorized = authState.access_token ? true : false;
      authState.loading = false;
      dispatch({
        type: CHECK_AUTH,
        payload: authState,
      })
  }
  
  // let obj = { Title: 'MusciStreamer', Url: 'http://localhost:3000' };
  // window.history.pushState(obj, obj.Title, obj.Url);
  
};

export const search = (input) => (dispatch) => {
  spotify.get("/search", {
      params: {
        q: input,
        type: "track",
      },
      headers: getHeaders()
    })
    .then(r => dispatch({
      type: SEARCH_RESULT,
      payload: r.data
    })).catch(error=> dispatch({
      type: SEARCH_ERROR,
      payload: error.message
    }));
};

// export const getPlayingTrack = () => dispatch =>{
//   spotify.get('me/player',{
//     headers: getHeaders()
//   }).then(r=> console.log(r)).catch(error => console.log(error))
// }