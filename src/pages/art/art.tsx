import { SubBanner } from '../../widgets/sub-banner/sub-banner';
import { useArtModel } from './art.model';
import { StyledArt } from './art.style';

type MovieDataType = Record<string, string>;
export default function Art() {
  const { fetchArt } = useArtModel();

  if (!fetchArt.isSuccess) return <></>;

  // 영상이 없는 자료들은 제외
  const notLists = [1, 12, 14, 16, 17, 33, 34];
  const movieData = fetchArt.data.items.item.filter(
    (item: MovieDataType, idx: number) => notLists.indexOf(idx + 1) === -1 && { ...item, id: idx + 1 }
  );

  return (
    <StyledArt>
      <SubBanner content={'예술의 전당에서 제공하는 다양한 영상 자료를 만나보세요'} bgUrl={'/images/movie.jpg'} />
      <div className="inner">
        <div className="movie-container">
          {movieData.map((item: MovieDataType) => (
            <div className="movie" key={item.id}>
              <a href={item.url} className="art-title-bar" target="_blank">
                <img src={item.referenceIdentifier} alt="" />ㄴ
                <div className="youtube">
                  <img src="/icons/play.svg" alt="" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </StyledArt>
  );
}
