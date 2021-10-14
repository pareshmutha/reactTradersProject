import { post, get } from '../../../apiHandler';


export const getAllUnVerifiedReviews = (params) => {
    return (dispatch) => {
        return get('getAllUnVerifiedReviews', params)
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

export const approveReview = (params) => {
  return (dispatch) => {
      return post('approveReview', params)
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

export const getAllUnVerifiedTraders = (params) => {
  return (dispatch) => {
      return get('getAllUnVerifiedTraders', params)
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

export const approveTrader = (params) => {
  return (dispatch) => {
    return post('approveTrader', params)
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

export const deleteUser = (params) => {
  return (dispatch) => {
    return post('deleteUser', params)
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

export const getAllCustomers = (params) => {
  return (dispatch) => {
      return get('getAllCustomers', params)
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