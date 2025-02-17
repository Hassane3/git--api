import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Header from "../Header";
import UserProfil from "../UserProfil";
import styled from "styled-components";
import UserRepo from "../UserRepo";
import RepoList from "../RepoList";
import { addRepo, getRepos } from "../../util/api";

interface Post {
  name: string;
  description: string;
  url: string;
  isPrivate: boolean;
}

const App: React.FC = () => {
  const [repos, setRepos] = useState<[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPostName, setNewPostName] = useState<string>("");
  const [newPostUrl, setNewPostUrl] = useState<string>("");
  const [newPostDescription, setNewPostDescription] = useState<string>("");
  const [newPostIsPrivate, setNewPostIsPrivate] = useState<boolean>(false);

  const handleNewPost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPost = await addRepo(
      newPostName,
      newPostUrl,
      newPostDescription,
      newPostIsPrivate
    );
    if (newPost) {
      setPosts([...posts, newPost]);
      setNewPostName("");
      setNewPostDescription("");
      setNewPostUrl("");
      setNewPostIsPrivate(false);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const repos = await getRepos();
      setRepos(repos);
      // setPosts(posts);
    };
    fetchPosts();
  });
  return (
    <div className="container">
      <Header />
      <Content>
        <UserBox>
          <UserProfil />
          <UserRepo
            name={newPostName}
            description={newPostDescription}
            url={newPostUrl}
            isPrivate={newPostIsPrivate}
            handleSubmit={handleNewPost}
            setName={setNewPostName}
            setDescription={setNewPostDescription}
            setUrl={setNewPostUrl}
            setIsPrivate={setNewPostIsPrivate}
          />
        </UserBox>
        <RepoList repoList={repos} />
      </Content>
    </div>
  );
};
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* height: 80vh; */
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 820px) {
    width: 40vw;
  }
`;
export default App;
