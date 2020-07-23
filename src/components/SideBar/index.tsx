import React from 'react';

import StickBox from 'react-sticky-box';

import List from '../List';
import FollowSugestion from '../FollowSugestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './style';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSugestion name="Nubank" nickname="@nubank" />,
              <FollowSugestion name="Luke Morales" nickname="@lukemorales" />,
              <FollowSugestion
                name="Camila Magalhães"
                nickname="@camilaamgl"
              />,
            ]}
          />
          <List
            title="Assuntos do Momento"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Assuntos do Momento"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Assuntos do Momento"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Assuntos do Momento"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickBox>
    </Container>
  );
};

export default SideBar;
