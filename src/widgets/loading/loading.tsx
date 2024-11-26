import { useIsFetching } from '@tanstack/react-query';
import { StyledLoading } from './loading.style';

export function Loading() {
  const isFatching = useIsFetching();
  return (
    isFatching > 0 && (
      <StyledLoading>
        <span className="loader"></span>
      </StyledLoading>
    )
  );
}
