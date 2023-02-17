export const GET_ALBUMS = "GET_ALBUMS";
export const GET_LOADING = "GET_LOADING";
export const GET_ERROR = "GET_ERROR";
export const GET_FAVORITES = "GET_FAVORITES";
export const GET_PODCAST = "GET_PODCAST";

export const getAlbumsAsync = (query) => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data, "data from service");
        dispatch({
          type: GET_ALBUMS,
          payload: data,
        });
        dispatch({
          type: GET_LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: GET_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_LOADING,
        payload: false,
      });
      dispatch({
        type: GET_ERROR,
        payload: true,
      });
    }
  };
};
export const getPodcastAsync = (query) => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data, "data from serviceP");
        dispatch({
          type: GET_PODCAST,
          payload: data,
        });
        dispatch({
          type: GET_LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: GET_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_LOADING,
        payload: false,
      });
      dispatch({
        type: GET_ERROR,
        payload: true,
      });
    }
  };
};

export const getFavoriteAsync = (query) => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data, "data from serviceP");
        dispatch({
          type: GET_FAVORITES,
          payload: data,
        });
        dispatch({
          type: GET_LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: GET_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_LOADING,
        payload: false,
      });
      dispatch({
        type: GET_ERROR,
        payload: true,
      });
    }
  };
};
