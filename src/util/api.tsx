import axios, { AxiosResponse } from "axios";

// const token = "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";
const token = "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";

interface Post {
  name: string;
  description: string;
  url: string;
  isPrivate: boolean;
}

export const getUser = axios
  .get("https://api.github.com/user", {
    headers: {
      Authorization: `token ${token}`,
    },
  })
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });

export const getRepos = async () => {
  try {
    const response = await axios.get("https://api.github.com/user/repos", {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("getRepo error ==> ", error);
    return [];
  }
};

// export const addRepo = async (props: {
//   name: string;
//   url: string;
//   description: string;
//   isPrivate: boolean;
// }) => {
export const addRepo = async (
  name: string,
  description: string,
  url: string,
  isPrivate: boolean
): Promise<Post | null> => {
  try {
    const data = {
      name: name,
      description: description,
      html_url: url,
      private: isPrivate,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.post<Post>(
      "https://api.github.com/user/repos",
      data,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("setRepo error ==>", error);
    return null;
  }
};
