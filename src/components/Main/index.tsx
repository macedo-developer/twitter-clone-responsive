import React from 'react';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottonMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './style';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Renata Macedo</strong>
          <span>34 Tweets</span>
        </ProfileInfo>
      </Header>
      {/* <ProfilePage/> */}
      <BottonMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottonMenu>
    </Container>
  );
};

export default Main;
