import { Anchor } from 'styles/anchor';
import { AnchorHTMLAttributes } from 'react';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import { theme } from 'theme';

export const NavBar = styled(Box)`
  display: flex;
  justify-content: center;
  padding: ${theme.spacing(2)}px ${theme.spacing(2)}px 0 ${theme.spacing(2)}px;
  width: 100%;
  max-width: var(--max-width);

  & > * {
    font-size: ${theme.typography.h5.fontSize};
  }

  & > * + * {
    margin-left: ${theme.spacing(2)}px;

    ${theme.breakpoints.up(`sm`)} {
      margin-left: ${theme.spacing(10)}px;
    }
  }
`;

interface INavBarLinkProps extends AnchorHTMLAttributes<unknown> {
  current: string;
}

export const NavBarAnchor = styled(Anchor)<INavBarLinkProps>`
  color: ${({ current }) =>
    current === `true` ? theme.palette.primary.main : `initial`};
`;
