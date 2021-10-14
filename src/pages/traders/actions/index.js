import { post, get } from '../../../apiHandler';

const allTraders = (data) => {
    return {
        type: 'ALL_TRADERS',
        payload: data.allTraders || []
    };
};

export const getAllTraders = (params) => {
    return (dispatch) => {
        return get('getAllTraders', params)
        .then(
          (result) => {
            dispatch(allTraders(result));
            return result;
          },
          (error) => {
            return error;
          }
        );
    };
};

export const getTraderById = (params) => {
  return (dispatch) => {
      return post('getTraderById', params)
      .then(
        (result) => {
          return result;
        },
        (error) => {
          return error;
        }
      );
  };
};

export const submitReview = (params) => {
  return (dispatch) => {
      return post('submitReview', params)
      .then(
        (result) => {
          return result;
        },
        (error) => {
          return error;
        }
      );
  };
};

export const imageUpload = (params) => {
  return (dispatch) => {
      return post('imageUpload', params)
      .then(
        (result) => {
          return result;
        },
        (error) => {
          return error;
        }
      );
  };
};

export const updateTrader = (params) => {
  return (dispatch) => {
      return post('updateTrader', params)
      .then(
        (result) => {
          return result;
        },
        (error) => {
          return error;
        }
      );
  };
};