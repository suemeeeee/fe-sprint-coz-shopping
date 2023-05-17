// action types
export const ADD_TO_BOOKMARK = "ADD_TO_BOOKMARK";
export const REMOVE_FROM_BOOKMARK = "REMOVE_FROM_BOOKMARK";

export const NOTIFY = "NOTIFY";
export const ENQUEUE_NOTIFICATION = "ENQUEUE_NOTIFICATION";
export const DEQUEUE_NOTIFICATION = "DEQUEUE_NOTIFICATION";

// actions creator functions
export const addToBookmark = (itemId) => {
  return {
    type: ADD_TO_BOOKMARK,
    payload: {
      id,
      type,
      title,
      sub_title,
      brand_name,
      price,
      discountPercentage,
      image_url,
      brand_image_url,
      follower,
    },
  };
};

export const removeFromBookmark = (itemId) => {
  return {
    type: REMOVE_FROM_BOOKMARK,
    payload: {
      itemId,
    },
  };
};

export const notify =
  (message, dismissTime = 5000) =>
  (dispatch) => {
    const uuid = Math.random();
    dispatch(enqueueNotification(message, dismissTime, uuid));
    setTimeout(() => {
      dispatch(dequeueNotification());
    }, dismissTime);
  };

export const enqueueNotification = (message, dismissTime, uuid) => {
  return {
    type: ENQUEUE_NOTIFICATION,
    payload: {
      message,
      dismissTime,
      uuid,
    },
  };
};

export const dequeueNotification = () => {
  return {
    type: DEQUEUE_NOTIFICATION,
  };
};
