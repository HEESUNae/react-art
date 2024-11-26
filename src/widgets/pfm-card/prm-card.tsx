import { PfmListType } from '../../shared/types/pfm-list.type';
import { Badge } from '../../shared/ui/badge/badge';
import Button from '../../shared/ui/button/button';
import { StyledPfmCard } from './pfm-card.style';

interface PerfomanceCardProps {
  item: PfmListType;
}

export function PerfomanceCard({ item }: PerfomanceCardProps) {
  return (
    <StyledPfmCard>
      <div className="pfm-card">
        <div className="img-wrap">
          <img src={item.IMAGE_OBJECT} />
        </div>
        <div className="pfm-info">
          <Badge>{item.GENRE}</Badge>
          <p className="preiod">
            {item.PERIOD} {item.EVENT_PERIOD}
          </p>
          <p className="title">{item.TITLE}</p>
          <p>{item.CHARGE}</p>
          <Button className={'primary'}>
            <a href={item.URL} target="_blank">
              자세히보기
            </a>
          </Button>
        </div>
      </div>
    </StyledPfmCard>
  );
}
