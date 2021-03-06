import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocatinIcon,
  CakeIcon,
  Followage,
} from './style';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Renata Macedo</h1>
        <h2>@r_macedo77</h2>

        <p>Developer</p>
        <ul>
          <li>
            <LocatinIcon />
            João Pessoa, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 12 de Agosto de 1998
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>78</strong>
          </span>
          <span>
            34 <strong>seguidores</strong>
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
