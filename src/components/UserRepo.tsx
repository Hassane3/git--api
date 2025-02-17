import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Arrow } from "../assets/icons";
import { addRepo } from "../util/api";

interface UserRepoProps {
  name: string;
  url: string;
  description: string;
  isPrivate: boolean;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setIsPrivate: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserRepo: React.FC<UserRepoProps> = ({
  handleSubmit,
  setName,
  setUrl,
  setDescription,
  setIsPrivate,
  name,
  url,
  description,
  isPrivate,
}) => {
  const [shouldOpenRepo, setShouldOpenRepo] = useState(false);
  // const [posts, setPosts] 0= useState([]);

  // const [name, setName] = useState("");
  // const [url, setUrl] = useState("");
  // const [description, setDescription] = useState("");
  // const [isPrivate, setIsPrivate] = useState(false);

  // const handleSubmit = (e: Event) => {
  //   e.preventDefault();
  // const fetchPosts = async () => {
  //   try {
  //     const response = await addRepo({ name, url, description, isPrivate });
  //     setPosts(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // };
  return (
    <RepoContainer>
      <RepoHeader>
        <span>Créer un nouveau repository</span>
        <i
          onClick={() => setShouldOpenRepo(!shouldOpenRepo)}
          className={shouldOpenRepo ? undefined : "arrowToBottom"}
        >
          <Arrow />
        </i>
      </RepoHeader>

      {shouldOpenRepo && (
        // <RepoContent onSubmit={(e) => handleSubmit(e.nativeEvent)}>
        <RepoContent
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        >
          <div>
            <span>Publier en privé</span>
            <Toggle
              onClick={() => setIsPrivate(!isPrivate)}
              className={isPrivate ? "active" : undefined}
            >
              <div></div>
            </Toggle>
          </div>
          <div>
            <label>
              Nom
              <input
                placeholder="Saisissez le nom du repository..."
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              URL
              <input
                placeholder="Saisissez l'URL..."
                value={url}
                onChange={(event) => setUrl(event.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Description
              <input
                placeholder="Saisissez la description..."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </label>
          </div>
          <RepoButton type="submit" value="Soumettre" />
        </RepoContent>
      )}
    </RepoContainer>
  );
};

const RepoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const RepoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;

  i {
    cursor: pointer;
    svg {
      transform: rotateZ(0);
      transform-origin: center;
      transition: all 0.3s ease;
    }
  }

  span {
    font-size: 20px;
    font-weight: 700;
  }
  .arrowToBottom {
    svg {
      transform: rotateZ(-180deg);
    }
  }
`;

const RepoContent = styled.form`
  display: grid;
  grid-gap: 14px;

  label {
    font-weight: 500;
    color: #606b85;
    font-size: 15px;
    display: flex;
    flex-direction: column;
  }
  > div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span {
      font-weight: 500;
      font-size: 17px;
      color: #000000;
    }
  }
  div input {
    border: 1px solid;
    border-color: #e1e3ea;
    border-radius: 16px;
    padding: 16px;
    text-decoration: none;
    &:focus {
      outline: none;
      border-color: #66b3ff;
    }
  }
  .active {
    background-color: #66b3ff;
    div {
      transform: translateX(80%);
    }
  }
`;
const RepoButton = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border: none;
  background: #66b3ff;
  border-radius: 16px;

  color: #fff;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;

  cursor: pointer;
`;

const Toggle = styled.i`
  width: 40px;
  background-color: rgba(120, 120, 128, 30%);
  border-radius: 15px;
  position: relative;
  padding: 2px;
  display: flex;
  align-items: center;
  /* justify-content: flex-start; */
  transition: ease 0.3s;
  cursor: pointer;
  transition: all ease 0.2s;

  div {
    height: 20px;
    width: 20px;
    background-color: #ffffff;
    border-radius: 50%;
    position: relative;
    transform: translateX(0);
    transform-origin: center;
    transition: all ease 0.2s;
  }

  /* .active {
    div {
      justify-content: flex-end;
      background-color: #66b3ff;
    }
  } */
`;
export default UserRepo;
