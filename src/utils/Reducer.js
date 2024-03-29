import { reducerCases } from "./Constants";

const initialState= {
    token: null,
    playlists: [],
    userInfo : null,
    selectedPlaylistId: '5Ip7K4RczDHqnE86ZGm1VC',
    selectedPlaylist: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case reducerCases.SET_TOKEN : {
            return {
                ...state,
                token: action.token,
            };
        }
        case reducerCases.SET_PLAYLISTS : {
            return {
                ...state,
                playlists: action.playlists,
            };
        }
        case reducerCases.SET_USER : {
            return {
                ...state,
                userInfo: action.userInfo,
            };
        }
        case reducerCases.SET_PLAYLIST: {
            return {
                ...state,
                selectedPlaylist: action.selectedPlaylist,
            }
        }
        default:
            return state;
    }
};

export {reducer, initialState};