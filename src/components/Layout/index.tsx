import React from 'react';

import { Container, Wrapper } from './styles';

const Layout: React.FC = (props) => {
  return (
    <Container>
      <Wrapper>
        {props.children}
      </Wrapper>
    </Container>
  );
}

export default Layout;