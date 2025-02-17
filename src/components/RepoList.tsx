import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import styled from "styled-components";
import { Star } from "../assets/icons";

import { getRepos } from "../util/api";

interface RepoListProps {
  repoList: [];
}
const RepoList: React.FC<RepoListProps> = ({ repoList }) => {
  // const [userRepos, setUserRepos] = useState();

  // useEffect(() => {
  //   const fetchRepos = async () => {
  //     const repos = await getRepos();
  //     setUserRepos(repos);
  //   };
  //   fetchRepos();
  // }, []);

  return (
    <RepoListContainer>
      {repoList &&
        Object.values(repoList)
          .slice(0, 100)
          .map((repo: any, index) => {
            return (
              <Repo key={index}>
                <div>
                  <p>{repo.name}</p>
                  <i>
                    <span>{repo.stargazers_count}</span>
                    <Star />
                  </i>
                </div>

                <div>
                  <p>{repo.owner.login}</p>
                  <p>{repo.private}</p>
                </div>
                <p>{repo.html_url}</p>
              </Repo>
            );
          })}
    </RepoListContainer>
  );
};

const RepoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

const Repo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 16px;
  box-shadow: 0px 0px 11px 1px rgb(0 0 0 / 17%);
  overflow: hidden;

  i svg {
    /* font-size: 20px; */
    width: 16px;
    height: 16px;
    margin-left: 10px;
  }
  i span {
    font-size: 17px;
    font-weight: 700;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  > div:first-child {
    p {
      font-size: 17px;
      font-weight: 700;
    }
  }

  > div:nth-child(2) {
    p:first-child {
      color: #606b85;
      font-weight: 500;
      font-size: 17px;
      line-height: 21px;
    }
  }

  > p {
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
    color: #008cff;
  }
`;
export default RepoList;
