import baseUrl from "../Api/baseURL";

const useInsertDataWithImage = async (url, parmas) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, parmas, config);
  return res;
};

const useInsertData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  try {
    const response = await baseUrl.post(url, params, config);
    return response.data; // Return only the data property from the response
  } catch (error) {
    throw error; // Rethrow the error to be caught in the action creator
  }
};

export { useInsertData, useInsertDataWithImage };
