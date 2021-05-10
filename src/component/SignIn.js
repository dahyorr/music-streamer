import spotifyIcon from "../static/spotify_icon_white.png";
import { authorizationURL } from "../helpers/config";
const Signin = () => {
  return (
    <div className="Signin">
      <div className="container flex">
        <p className="large-text">Sign In With Spotify</p>
        <button
          className="signin-button flex"
          onClick={() => window.location.replace(authorizationURL)}
        >
          <img src={spotifyIcon} alt="spotify-icon" />
          Sign in with Spotify
        </button>
      </div>
    </div>
  );
};
export default Signin;
