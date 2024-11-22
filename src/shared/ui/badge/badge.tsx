import { ReactNode } from 'react';
import { StyledBadge } from './badge.style';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = 'primary-badge' }: BadgeProps) {
  return <StyledBadge className={className}>{children}</StyledBadge>;
}
