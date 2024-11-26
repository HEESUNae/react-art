import { useEffect, useState } from 'react';
import { Markdown } from '../../shared/ui/markdown/markdown';
import { useNovelModel } from './novel.model';
import { StyledNovel } from './novel.style';
import Button from '../../shared/ui/button/button';
import { SubBanner } from '../../widgets/sub-banner/sub-banner';

export default function Novel() {
  const [checkedTab, setCheckedTab] = useState('비평');
  const { fetchNovel, novelItems } = useNovelModel(checkedTab);
  const [markContent, setMarkContent] = useState<any>('');

  useEffect(() => {
    if (!fetchNovel.data) return;
    setMarkContent(fetchNovel.data[0]?.DESCRIPTION);
  }, [fetchNovel, setMarkContent]);

  useEffect(() => {
    if (!markContent) return;
    setMarkContent(markContent);
  }, [markContent]);

  if (!fetchNovel.isSuccess) return <></>;

  return (
    <StyledNovel>
      <SubBanner content={'비평, 시, 소설 등 다채로운 문학 웹진의 세계를 경험해보세요'} bgUrl="/images/novel.jpg" />
      <div className="inner">
        <div className="tab-container">
          {novelItems.map((novel) => (
            <Button className={`tab ${checkedTab === novel ? 'active' : ''}`} onClick={() => setCheckedTab(novel)}>
              {novel}
            </Button>
          ))}
        </div>
        <div className="content-container">
          <div className="novel-viewer">
            <Markdown content={markContent} />
          </div>
          <table className="table-list">
            <thead>
              <tr>
                <th>번호</th>
                <th>분류</th>
                <th>제목</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              {fetchNovel.data.map((item: any) => (
                <tr key={item.rnum} className={item.DESCRIPTION === markContent ? 'active' : ''}>
                  <td>{item.rnum}</td>
                  <td>{item.GENRE_NM}</td>
                  <td>
                    <p onClick={() => setMarkContent(item.DESCRIPTION)}>{item.TITLE}</p>
                  </td>
                  <td>{item.VIEW_COUNT}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </StyledNovel>
  );
}

// CNTC_INSTT_NM: '한국문화예술위원회';
// DESCRIPTION: '<h4>&nbsp; &nbsp;튤립이 있는 식탁보</h4>\n<p style="text';
// GENRE: '110';
// GENRE_NM: '소설';
// ISSUED_DATE: '2024/10/03';
// LOCAL_ID: '102714';
// TABLE_OF_CONTENTS: '  튤립이 있는 식탁보  강태식    존슨 카운티 외곽에는 중산층들이 모여 사는, 거의 모든 면에서 깨끗한 주택가가 형성되어 있었고, 완전히 똑같이 생긴 집들이 - 지붕과 창문과 현관 손잡이와 마당을 두른 나무울타리의 모양까지 똑같은 집들이 - 거리 이쪽 끝에서 저쪽 끝까지 죽 늘어서 있었다. 진입로에는 작고 예쁜 우체통이 서 있고 - 어느 집이나 다 - 우유 배달 업체의 상표가 찍힌 낡은 주머니나 고양이에게 먹이를 주지 말라는 팻말이 울타리 한쪽에 걸려 있으며 마당 잔디가 빗질 자국이 남아 있는 머리처럼 잘 정돈되어 있었다. 화단에 심은 꽃들도 거의 비슷하거나 완전히 똑같아 보였다. 차를 몰고 천천히 지나면서 보면 그랬다. 어디선가 가끔 피아노 치는 소리가 들리기도 했는데 모든 음이 기계가 치는 것처럼 정확했지만 음이 정확하다는 것말고는 전혀 특별할 것이 없는 연주였다.   얼마 전에 하나뿐인 아들 톰을 다른 주에 있는 대학에 보낸 벤 하우저와 로지 하우저도 그 거리에 있는 많은 집들 중 한 곳에서 살았다. 그들은 아직도 아들의 방문 앞에 멍하니 서서 그 안에 아들이 쓰던 물건들만 - 사인볼과 다 버리고 딱 두 개 남은 레고 모듈러 시리즈와 절대로 버리지 말라고 고집을 부려서 버리지 못한 낡은 청바지와 픽업트럭을 끌고 이케아 매장에 가서 사온, 벤이 꼬박 이틀 동안 조립해서 겨우 완성한 오래된 이층 침대와 디딤판에 노란색 번개 마크가 크게 프린팅된 스케이트보드 같은 것들만 &ndash; 남아 있다는 것을, 자기들이 그런 물건들과 함께 - 한때 아들이 필요로 했던 물건들과 함께 - 그 집에 남겨졌다는 것을 어떻게 받아들여야 할지 결정하지 못한 상태였다. 하지만 벤과 로지는 아들이 자기들 품을 영영 떠났다는 것을 어렴풋이 짐작했고 - 날마다 그런 짐작이 확고한 사실로 굳어 가는 것을 지켜보았고 - 자기들이 톰의 방문을 바라보며 아주 많은 시간을 보내게 되리라는 것을 예감했다.   벤은 불을 켜지 않은 거실에 앉아 - 창 너머로 어둠이 차오르고 있었지만 벤은 희미한 빛이 감도는 그맘때의 거실을 둘러보며 오래 쓴 소파에 가만히 앉아 있는 것을 좋아했다. - 로지가 외출 준비를 완전히 마치고 이제 정말 다 끝났다고 말해 주기를 - 립스틱만 바르면 된다거나 스카프만 고르고 금방 나가겠다는 말말고 진짜 이제 정말 다 끝났다고 말해 주기를 - 기다리고 있었다. 벤은 탁자 위에 놓인 리모컨을 한동안 바라보다가 리모컨으로 할 수 있는 일이 무엇인지 문득 생각이 난 것처럼 손을 뻗어 TV를 켰고, 채널을 이리저리 돌린 뒤에 다시 TV를 껐다.   &ldquo;뭐 해, 벤?&rdquo;   로지의 목소리가 한 블록 떨어진 곳에서 망치질을 하는 것처럼 안방 문 너머로 들려왔다. 화장대 앞에 앉아서 눈썹을 그리거나 파운데이션을 더 꼼꼼하게 바르면서 몸을 뒤로 틀어 소리 지르는 로지의 모습이 눈에 선했다. 옷에 붙은 머리카락을 손가락 끝으로 집어 떼어내거나 잠자리에 들기 전에 침대보를 잡아 펴는 것처럼 오랜 세월 동안 숱하게 보아 온 모습들.   &ldquo;아';
// TITLE: '튤립이 있는 식탁보';
// URL: 'https://munjang.or.kr/board.es?mid=a20103000000&bid=0003&act=view&list_no=102714';
// VIEW_COUNT: '6';
// rnum: '1';
