import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { getUser } from "../util/api";
import { Location } from "../assets/icons";
import palmier from "../assets/palmier.jpg";
import photo_profil from "../assets/photo_profil.jpg";

const UserProfil: React.FC = () => {
  const [userInfos, setUserInfos]: any = useState({});

  useEffect(() => {
    getUser.then((response) => setUserInfos(response));
  }, []);
  return (
    <div>
      <UserInfos>
        <img alt="background" src={palmier} />
        <UserProfilImg>
          <img
            alt="profil"
            src={userInfos ? userInfos.avatar_url : photo_profil}
          />
        </UserProfilImg>
        <UserInformations>
          <div>
            <h2>{userInfos.name}</h2>
            <p>@{userInfos.login}</p>
            {userInfos.bio && <p>{userInfos.bio}</p>}
          </div>
          {userInfos.location && (
            <div>
              <i>
                <Location />
              </i>
              <p>{userInfos.location}</p>
            </div>
          )}
        </UserInformations>
      </UserInfos>
      <div></div>
    </div>
  );
};

const UserInfos = styled.div`
  height: 300px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    height: 50%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  > div {
    margin: 0 20px;
  }
`;

const UserProfilImg = styled.div`
  height: 100px;
  width: 100px;
  position: relative;

  img {
    border-radius: 50%;
    border: 3px solid #fff;
    height: 100%;
    width: 100%;
  }
`;

const UserInformations = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  > div:first-child {
    display: flex;
    flex-direction: column;
  }

  > div:nth-child(2) {
    display: flex;
    align-items: center;
  }

  h2 {
    font-weight: 700;
    font-size: 24px;
    color: #000000;
  }
  p {
    font-weight: 500;
    font-size: 17px;
    color: #606b85;
  }
  i {
    margin-right: 6px;
    display: grid;
    align-self: center;
  }
`;

export default UserProfil;
