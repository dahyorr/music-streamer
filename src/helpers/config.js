export const clientId = '5f01810b96064024853a2a9864a87973';
export const redirectUri = "http://localhost:3000";
export const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
  ];
export const accountsURI = 'https://accounts.spotify.com/authorize'
export const authorizationURL = `${accountsURI}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token`
