import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Camera,
  CloudUpload,
  createIcons,
  FlaskConical,
  Globe,
  Hammer,
  Library,
  Mic,
  MonitorPlay,
  Plane,
  Search,
} from "lucide";

const listItems = [
  {
    title: "사진 스튜디오",
    description: "조형관 1층 화방 옆<br>자세한 정보는 스튜디오 문 앞 안내문 참고",
    icon: "camera",
    category: "시설"
  },
  {
    title: "상상공방",
    description: "조형관 지하 2층<br>레이저커팅실, CNC실, 목공 공간 등 다양한 전문 장비 구비",
    icon: "hammer",
    category: "시설"
  },
  {
    title: "디자인도서관",
    description: "성곡도서관 4층<br>소파, 빈백 휴식공간",
    icon: "library",
    category: "시설"
  },
  {
    title: "무료 인터넷 강의",
    description: "성곡도서관>자료이용>동영상 강좌<br>정보처리기사, 컴활1급, MS 오피스, 프리미어, 애프터이펙트, 오토캐드, 파이썬, 토익 등 각종 자격증, IT, 어학 강좌",
    linkLabel: "바로가기",
    linkHref: "https://lib.kookmin.ac.kr/search/movie",
    icon: "monitor-play",
    category: "웹사이트"
  },
  {
    title: "전자책 도서관",
    description: "성곡도서관>자료이용>전자책/오디오북",
    linkLabel: "바로가기",
    linkHref: "https://ebook.kookmin.ac.kr/FxLibrary/index/",
    icon: "book-open",
    category: "웹사이트"
  },
  {
    title: "자료조사",
    description: "성곡도서관>학술DB<br>DBpia, RISS 등",
    linkLabel: "바로가기",
    linkHref: "https://lib.kookmin.ac.kr/search/database",
    icon: "search",
    category: "웹사이트"
  },
  {
    title: "카피킬러",
    description: "성곡도서관>연구학습지원>표절예방 프로그램",
    linkLabel: "바로가기",
    linkHref: "https://lib.kookmin.ac.kr/research/thesis/plagiarism-prevention",
    icon: "badge-check",
    category: "웹사이트"
  },
  {
    title: "알파프로젝트",
    description: "학교에서 지원금 받으면서 원하는 프로젝트하고 학점 채우기",
    linkLabel: "바로가기",
    linkHref: "https://www.kookmin.ac.kr/user/kmuNews/notice/4/11190/view.do",
    icon: "flask-conical",
    category: "활동"
  },
  {
    title: "교내 일반근로",
    description: "ON국민>공지사항>장학공지<br>최저 시급에 비교적 낮은 노동 강도",
    icon: "briefcase-business",
    category: "활동",
    linkLabel: "바로가기",
    linkHref: "https://kep.kookmin.ac.kr/nx/portal.html?menuId=M102651&locale=",
  },
  {
    title: "국제교류",
    description: "국제교류팀 주관 어학연수, 교환학생 프로그램<br>ON국민>포털>학사서비스>국제교류 수학보고서 조회 가능",
    linkLabel: "바로가기",
    linkHref: "https://kep.kookmin.ac.kr/nx/portal.html?menuId=M104196",
    icon: "plane",
    category: "활동"
  },
  {
    title: "경력개발지원단 사이트",
    description: "각종 인턴, 구직 정보, 기업 탐방 프로그램 등",
    linkLabel: "바로가기",
    linkHref: "https://career.kookmin.ac.kr/",
    icon: "globe",
    category: "웹사이트"
  },
  {
    title: "목요특강",
    description: "목요일마다 진행되는 다양한 분야의 전문가 강연<br>수강신청해서 1학점 채우기 가능",
    linkLabel: "바로가기",
    linkHref: "https://www.kookmin.ac.kr/user/kmuNews/specBbs/thursdayLecture/index.do",
    icon: "mic",
    category: "활동"
  },
  {
    title: "원격 출석 체크",
    description: "직접 비콘 앞에 가서 찍지 않아도 수업 시작 10분 전부터 Kcard 어플 홈화면에 활성화 된 버튼으로 출석 체크 가능",
    linkLabel: "바로가기",
    linkHref: "https://everytime.kr/374641/v/403187698",
    icon: "badge-check",
    category: "기타"
  },
  {
    title: "eCampus 클라우드",
    description: "eCampus 홈페이지>My Page>파일관리<br>클라우드에 문서 업로드 가능. 메일, 카톡 등으로 보내놓지 않아도 발표 자료, 인쇄 자료 등 올려뒀다가 강의실 또는 인쇄실 컴퓨터에서 다운 가능",
    icon: "cloud-upload",
    category: "기타"
  },
];

listItems.sort((a, b) => a.title.localeCompare(b.title, "ko"));

const filterOptions = ["전체", "시설", "웹사이트", "활동", "기타"];

const app = document.createElement("main");
app.className = "page";

app.innerHTML = `
  <section class="wrap">
    <div class="hero-header">
      <img class="hero-mascot" src="/rokgeumi.png" alt="록금이 캐릭터" />
      <div class="hero-copy">
        <div class="hero-title">
          <h1>등록금 본전 찾기</h1>
        </div>
        <p class="intro">등록금 낸만큼 알차게 누리는 학교 생활 꿀팁 모음</p>
      </div>
    </div>
    <div class="filter-bar" aria-label="리스트 정렬 방식 선택">
      ${filterOptions
        .map(
          (option, index) => `
            <button
              class="filter-button${index === 0 ? " is-active" : ""}"
              type="button"
              data-filter="${option}"
            >
              ${option}
            </button>
          `,
        )
        .join("")}
    </div>
    <ul class="simple-list" id="benefit-list">
      ${listItems
        .map(
          (item) => `
            <li data-category="${item.category ?? "기타"}">
              <div class="item-head">
                <div class="item-title">
                  <i data-lucide="${item.icon}" class="item-icon"></i>
                  <strong>${item.title}</strong>
                  ${item.category ? `<span class="item-category">${item.category}</span>` : ""}
                  ${
                    "linkLabel" in item && item.linkHref
                      ? `<a class="item-link" href="${item.linkHref}" target="_blank" rel="noreferrer" aria-label="${item.title} 바로가기">
                          <i data-lucide="arrow-up-right" class="link-icon"></i>
                        </a>`
                      : ""
                  }
                </div>
              </div>
              ${item.description ? `<p>${item.description}</p>` : ""}
            </li>
          `,
        )
        .join("")}
    </ul>
  </section>
  <a
    class="report-button"
    href="https://docs.google.com/forms/d/e/1FAIpQLSeZLWHPvlGv8jZCid1gpNpo2KJwmgQtHqckijeWOVChwQKfAA/viewform?usp=publish-editor"
    target="_blank"
    rel="noreferrer"
  >
    제보하기
  </a>
`;

document.body.append(app);

const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const listElements = Array.from(document.querySelectorAll(".simple-list li"));

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    listElements.forEach((item) => {
      const matches =
        selectedFilter === "전체" || item.dataset.category === selectedFilter;
      item.hidden = !matches;
    });
  });
});

createIcons({
  icons: {
    ArrowUpRight,
    BadgeCheck,
    BookOpen,
    BriefcaseBusiness,
    Camera,
    CloudUpload,
    FlaskConical,
    Globe,
    Hammer,
    Library,
    Mic,
    MonitorPlay,
    Plane,
    Search,
  },
  attrs: {
    width: 18,
    height: 18,
    strokeWidth: 2,
  },
});
