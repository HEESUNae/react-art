import { useState } from 'react';
import { PfmListType } from '../../shared/types/pfm-list.type';
import { PerfomanceCard } from '../../shared/ui/pfm-card/prm-card';
import { Pagination } from '../../widgets/pagination/pagination';
import { useHomeModel } from './home.model';
import { StyledHome } from './home.style';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTab, setCurrentTab] = useState(0);
  const { fetchPfm } = useHomeModel(currentPage);

  if (!fetchPfm.isSuccess) return <></>;

  return (
    <StyledHome>
      <div className="banner"></div>
      <div className="perfomance-container">
        {fetchPfm.data.items.item.map((item: PfmListType) => (
          <PerfomanceCard item={item} key={item.LOCAL_ID} />
        ))}
        -
      </div>
      <Pagination
        fetchPfm={fetchPfm}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
    </StyledHome>
  );
}

// ACTOR: null;
// AUDIENCE: '초등학생 이상';
// AUTHOR: null;
// CHARGE: 'R석 230,000원 / S석 170,000원 / A석 120,000원 / B석 70,000원 / C석 40,000원';
// CNTC_INSTT_NM: '예술의전당';
// COLLECTED_DATE: '2024-11-21 00:11:05';
// CONTACT_POINT: '02-6954-7760';
// CONTRIBUTOR: '(주)인아츠프로덕션';
// DESCRIPTION: '[PROGRAM]  모차르트: 교향곡 29번 A 장조, K. 201/186a\nW. A. Mozart: Symphony No.29 in A Major, K. 201/186a\n\nI. Allegro moderato\nII. Andante\nIII. Menuetto: Allegretto - Trio\nIV. Allegro con spirito\n\n하이든: 트럼펫 협주곡 E플랫 장조,Hob.VIIe:1\nJ. Haydn: Trumpet Concerto in E flat Major, Hob.VIIe:1\n\nI. Allegro\nII. Andante\nIII. Finale - Allegro: I. Allegro con spirito \n-인터미션-\n\n멘델스존: 헤브리디스 서곡 b 단조, Op.26\nF. Mendelssohn: Hebrides Overture in b minor, Op.26\n\n차이코프스키: 현악 오케스트라를 위한 세레나데 C 장조, Op.48\nP. I. Tchaikovsky: Serenade for String Orchestra in C Major, Op.48\n\nI. Andante Non Troppo - Allegro Moderato\nII. Moderato, Tempo Di Valse\nIII. Larghetto Elegiaco\nIV. Andante - Allegro Con Spirito\n\n *본 프로그램은 연주자의 사정으로 사전 공지 없이 변경될 수 있습니다.\n\n [PROFILE] \n\n 아카데미 오브 세인트 마틴 인 더 필즈 (Academy of St Martin in the Fields)\n\n세계적인 챔버 오케스트라 중 하나로 손꼽히는 아카데미 오브 세인트 마틴 인 더 필즈(이하 ASMF)는 새롭고 독보적인 해석으로 최고의 무대를 선보이고 있다.\n1958년 네빌 마리너 경이 런던의 주요 연주자들과 함께 창립한 ASMF는 이듬해 1959년 11월, 동명의 교회에서 첫 공연을 열었다. 베스트셀러가 된 비발디의 &lsquo;사계&rsquo; 음반(1969)과 아카데미상에 빛나는 영화 &lsquo;아마데우스&rsquo;의 사운드트랙(1984) 등 창단 이후 뛰어난 무대와 여러 녹음 활동을 통해 독보적이면서도 세련된 사운드로 국제적인 명성을 얻게 되었다. 500여 개의 수준 높은 음반과 광범위한 투어 프로그램을 통해 선보인 ASMF의 음악은 전 세계 청중들에게 사랑받고 있다.\n현재 음악 감독이자 비르투오소 바이올리니스트인 조슈아 벨이 이끄는 ASMF는 본래의 특징인 지휘자가 없는 소규모 앙상블 형태와 협동 정신, 유연성은 그대로 유지하고 있다. 특히 조슈아 벨과 토모 켈러의 서포트 아래 ASMF는 세계적인 공연장에서 교향곡부터 실내악에 이르는 다양한 음악을 선보이며 연주자 중심 공연의 경계를 새로운 차원으로 확장해 가고 있다.\nASMF의 2023년은 그 어느 때보다 풍성했다. 조슈아 벨과 함께한 유럽 투어를 비롯해 첼리스트 게리 호프만, 만돌리니스트 아비 아비탈이 함께한 미국 공연을 했고, 조성진과 함께 독일과 이탈리아 전역에서 연주했다. 브라보! 베일 페스티벌과 독일의 여러 여름 페스티벌에도 함께했다. 2023/24 시즌에는 조슈아 벨과 함께 호주 투어에 올랐고, 로열 알버트홀에서 &lsquo;아마데우스&rsquo; 실시간 상영 무대를 가졌으며, 베이트리체 라나, 아담 피셔와 함께 독일 투어, 율리아 피셔와 함께한 스페인 공연, 그리고 조슈아 벨과 함께 미국 투어를 진행했다.\n2024년 4월에는 악단의 창립자인 네빌 마리너 경의 탄생 100주년을 기념하며 특별 이벤트 &lsquo;마리너 100&rsquo;을 개최했다. 총 네 번의 의미 있는 공연을 선보이며, 그의 삶과 음악계에 남긴 유산을 기념하는 시간을 가졌다.\nASMF는 연주자 중심이라는 단체의 본질을 바탕으로, 런던 전역 및 그 너머의 다양한 커뮤니티와 협력하여 복지, 유대감, 자율성 증진을 위한 노력을 이어가고 있다. 이를 위해 학교 및 노숙자 협업하고 있으며, 사우스뱅크 신포니아와 함께 다음 세대의 관현악 연주자들을 지원하고 있다.';
// DURATION: null;
// EVENT_PERIOD: '19:30';
// EVENT_SITE: null;
// GENRE: '클래식';
// IMAGE_OBJECT: 'https://www.sac.or.kr/site/main/file/image/uu/3f37525b318440efb2cfcc05dd16cc91';
// ISSUED_DATE: '2022-12-09';
// LOCAL_ID: '10025009';
// NUMBER_PAGES: null;
// PERIOD: '2024-11-21~2024-11-21';
// SPATIAL_COVERAGE: null;
// SUB_DESCRIPTION: null;
// TABLE_OF_CONTENTS: null;
// TITLE: '아카데미 오브 세인트 마틴 인 더 필즈';
// URL: 'https://www.sac.or.kr/site/main/show/show_view?SN=60863';
// VIEW_COUNT: null;
