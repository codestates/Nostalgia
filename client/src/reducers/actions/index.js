// action types
export const HIT_THE_THUMB_BTN = "HIT_THE_THUMB_BTN";
export const CANCEL_THUMB_BTN = "CANCEL_THUMB_BTN";
export const ADD_FAVORITE = 'ADD_FAVORITE'
export const CANCEL_FAVORITE = 'CANCEL_FAVORITE'
export const SET_QUANTITY = "SET_QUANTITY";
export const NOTIFY = "NOTIFY";
export const ENQUEUE_NOTIFICATION = "ENQUEUE_NOTIFICATION";
export const DEQUEUE_NOTIFICATION = "DEQUEUE_NOTIFICATION";

// actions creator functions
export const fetchData = (api, action) => (dispatch) => {
  return fetch(api)
  .then((res) => res.json())
  .then((data) => {
    dispatch(action(data))
  })
  .catch((err) => console.log(err))
};

export const hitTheThumbBtn = (itemId) => {
  return {
    type: HIT_THE_THUMB_BTN,
    payload: {
      quantity: 1,
      itemId
    }
  }
}

export const cancelThumbBtn = (itemId) => {
  return {
    type: CANCEL_THUMB_BTN,
    payload: {
      itemId
    }
  }
}

export const addFavorite = (favoriteId) => {
  return {
    type: ADD_FAVORITE,
    payload: {
      favoriteId
    }
  }
};

export const cancelFavorite = (favoriteId) => {
  return {
    type: CANCEL_FAVORITE,
    payload: {
      favoriteId
    }
  }
}

export const setQuantity = (itemId, quantity) => {
  return {
    type: SET_QUANTITY,
    payload: {
      itemId,
      quantity
    }
  }
}

export const notify = (message, dismissTime = 5000) => dispatch => {
  const uuid = Math.random()
  dispatch(enqueueNotification(message, dismissTime, uuid))
  setTimeout(() => {
    dispatch(dequeueNotification())
  }, dismissTime)
}

export const enqueueNotification = (message, dismissTime, uuid) => {
  return {
    type: ENQUEUE_NOTIFICATION,
    payload: {
      message,
      dismissTime,
      uuid
    }
  }
}

export const dequeueNotification = () => {
  return {
    type: DEQUEUE_NOTIFICATION
  }
}