import { ReactNode } from 'react';
import { StyledButton } from './button.style';

interface ButtonProps {
  type?: 'button' | 'submit';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className = 'primary', onClick, ...rest }: ButtonProps) {
  return (
    <StyledButton className={className} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
}
