import { Box } from 'grommet';
import { ChildrenProps } from 'types';
import { Navigation } from './navigation';
import { Title } from './title';
import styled from 'styled-components';
import { useAtMostSize } from 'hooks/atMostSize';

const Container = styled(Box)`
  min-height: 100vh;
`;

const PageContent = styled(Box)`
  margin: 0 auto;
  max-width: var(--max-width);
  width: 100%;
`;

export function Layout({ children }: ChildrenProps): JSX.Element {
  const atMost420px = useAtMostSize(420);

  return (
    <Container direction="column">
      <Box
        direction="column"
        align="center"
        flex={{ grow: 0 }}
        justify="stretch"
        pad={{ horizontal: `xsmall`, vertical: `small` }}
      >
        <Title mobile={atMost420px} />
        <Navigation mobile={atMost420px} />
      </Box>
      <PageContent flex={{ grow: 1 }} pad={{ top: `small` }}>
        {children}
      </PageContent>
    </Container>
  );
}