import { PfmListType } from '../../types/pfm-list.type';
import { Badge } from '../badge/badge';
import Button from '../button/button';
import { StyledPfmCard } from './pfm-card.style';

interface PerfomanceCardProps {
  data: PfmListType[];
}

export function PerfomanceCard({ data }: PerfomanceCardProps) {
  return (
    <StyledPfmCard>
      {data.map((item: PfmListType) => (
        <div className="pfm-card" key={item.LOCAL_ID}>
          <div className="img-wrap">
            <img src={item.IMAGE_OBJECT} />
          </div>
          <div className="pfm-info">
            <div className="title-wrap">
              <Badge>
                {item.GENRE} | {item.EVENT_PERIOD}
              </Badge>
              <p className="preiod">{item.PERIOD}</p>
            </div>
            <p className="title">{item.TITLE}</p>
            <p>{item.CHARGE}</p>
            <Button className={'primary'}>
              <a href={item.URL} target="_blank">
                자세히보기
              </a>
            </Button>
          </div>
        </div>
      ))}
    </StyledPfmCard>
  );
}
