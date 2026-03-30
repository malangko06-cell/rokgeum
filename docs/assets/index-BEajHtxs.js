(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=([e,t,o])=>{const a=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(r=>{a.setAttribute(r,String(t[r]))}),o!=null&&o.length&&o.forEach(r=>{const i=g(r);a.appendChild(i)}),a},A=(e,t={})=>{const a={...f,...t};return g(["svg",a,e])};/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=(...e)=>e.filter((t,o,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===o).join(" ").trim();/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,a)=>a?a.toUpperCase():o.toLowerCase());/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=e=>{const t=H(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=e=>Array.from(e.attributes).reduce((t,o)=>(t[o.name]=o.value,t),{}),h=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",u=(e,{nameAttr:t,icons:o,attrs:a})=>{var p;const r=e.getAttribute(t);if(r==null)return;const i=E(r),c=o[i];if(!c)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const n=$(e),b=L(n)?{}:{"aria-hidden":"true"},l={...f,"data-lucide":r,...b,...a,...n},v=h(n),w=h(a),d=C("lucide",`lucide-${r}`,...v,...w);d&&Object.assign(l,{class:d});const M=A(c,l);return(p=e.parentNode)==null?void 0:p.replaceChild(M,e)};/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M12 12h.01"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M12 13v8"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m8 17 4-4 4 4"}]];/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"}],["path",{d:"M6.453 15h11.094"}],["path",{d:"M8.5 2h7"}]];/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}],["path",{d:"m18 15 4-4"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"}]];/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"m16 6 4 14"}],["path",{d:"M12 6v14"}],["path",{d:"M8 8v12"}],["path",{d:"M4 4v16"}]];/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}]];/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]];/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];/**
 * @license lucide v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=({icons:e={},nameAttr:t="data-lucide",attrs:o={},root:a=document,inTemplates:r}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof a>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(a.querySelectorAll(`[${t}]`)).forEach(c=>u(c,{nameAttr:t,icons:e,attrs:o})),r&&Array.from(a.querySelectorAll("template")).forEach(n=>k({icons:e,nameAttr:t,attrs:o,root:n.content,inTemplates:r})),t==="data-lucide"){const c=a.querySelectorAll("[icon-name]");c.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(c).forEach(n=>u(n,{nameAttr:"icon-name",icons:e,attrs:o})))}},y=[{title:"사진 스튜디오",description:"조형관 1층 화방 옆<br>자세한 정보는 스튜디오 문 앞 안내문 참고",icon:"camera",category:"시설"},{title:"상상공방",description:"조형관 지하 2층<br>레이저커팅실, CNC실, 목공 공간 등 다양한 전문 장비 구비",icon:"hammer",category:"시설"},{title:"디자인도서관",description:"성곡도서관 4층<br>소파, 빈백 휴식공간",icon:"library",category:"시설"},{title:"무료 인터넷 강의",description:"성곡도서관>자료이용>동영상 강좌<br>정보처리기사, 컴활1급, MS 오피스, 프리미어, 애프터이펙트, 오토캐드, 파이썬, 토익 등 각종 자격증, IT, 어학 강좌",linkLabel:"바로가기",linkHref:"https://lib.kookmin.ac.kr/search/movie",icon:"monitor-play",category:"웹사이트"},{title:"전자책 도서관",description:"성곡도서관>자료이용>전자책/오디오북",linkLabel:"바로가기",linkHref:"https://ebook.kookmin.ac.kr/FxLibrary/index/",icon:"book-open",category:"웹사이트"},{title:"자료조사",description:"성곡도서관>학술DB<br>DBpia, RISS 등",linkLabel:"바로가기",linkHref:"https://lib.kookmin.ac.kr/search/database",icon:"search",category:"웹사이트"},{title:"카피킬러",description:"성곡도서관>연구학습지원>표절예방 프로그램",linkLabel:"바로가기",linkHref:"https://lib.kookmin.ac.kr/research/thesis/plagiarism-prevention",icon:"badge-check",category:"웹사이트"},{title:"알파프로젝트",description:"학교에서 지원금 받으면서 원하는 프로젝트하고 학점 채우기",linkLabel:"바로가기",linkHref:"https://www.kookmin.ac.kr/user/kmuNews/notice/4/11190/view.do",icon:"flask-conical",category:"활동"},{title:"교내 일반근로",description:"ON국민>공지사항>장학공지<br>최저 시급에 비교적 낮은 노동 강도",icon:"briefcase-business",category:"활동",linkLabel:"바로가기",linkHref:"https://kep.kookmin.ac.kr/nx/portal.html?menuId=M102651&locale="},{title:"국제교류",description:"국제교류팀 주관 어학연수, 교환학생 프로그램<br>ON국민>포털>학사서비스>국제교류 수학보고서 조회 가능",linkLabel:"바로가기",linkHref:"https://kep.kookmin.ac.kr/nx/portal.html?menuId=M104196",icon:"plane",category:"활동"},{title:"경력개발지원단 사이트",description:"각종 인턴, 구직 정보, 기업 탐방 프로그램 등",linkLabel:"바로가기",linkHref:"https://career.kookmin.ac.kr/",icon:"globe",category:"웹사이트"},{title:"목요특강",description:"목요일마다 진행되는 다양한 분야의 전문가 강연<br>수강신청해서 1학점 채우기 가능",linkLabel:"바로가기",linkHref:"https://www.kookmin.ac.kr/user/kmuNews/specBbs/thursdayLecture/index.do",icon:"mic",category:"활동"},{title:"원격 출석 체크",description:"직접 비콘 앞에 가서 찍지 않아도 수업 시작 10분 전부터 Kcard 어플 홈화면에 활성화 된 버튼으로 출석 체크 가능",linkLabel:"바로가기",linkHref:"https://everytime.kr/374641/v/403187698",icon:"badge-check",category:"기타"},{title:"eCampus 클라우드",description:"eCampus 홈페이지>My Page>파일관리<br>클라우드에 문서 업로드 가능. 메일, 카톡 등으로 보내놓지 않아도 발표 자료, 인쇄 자료 등 올려뒀다가 강의실 또는 인쇄실 컴퓨터에서 다운 가능",icon:"cloud-upload",category:"기타"}];y.sort((e,t)=>e.title.localeCompare(t.title,"ko"));const R=["전체","시설","웹사이트","활동","기타"],U="/rokgeum/rokgeumi.png",s=document.createElement("main");s.className="page";s.innerHTML=`
  <section class="wrap">
    <div class="hero-header">
      <img class="hero-mascot" src="${U}" alt="록금이 캐릭터" />
      <div class="hero-copy">
        <div class="hero-title">
          <h1>등록금 본전 찾기</h1>
        </div>
        <p class="intro">등록금 낸만큼 알차게 누리는 학교 생활 꿀팁 모음</p>
      </div>
    </div>
    <div class="filter-bar" aria-label="리스트 정렬 방식 선택">
      ${R.map((e,t)=>`
            <button
              class="filter-button${t===0?" is-active":""}"
              type="button"
              data-filter="${e}"
            >
              ${e}
            </button>
          `).join("")}
    </div>
    <ul class="simple-list" id="benefit-list">
      ${y.map(e=>`
            <li data-category="${e.category??"기타"}">
              <div class="item-head">
                <div class="item-title">
                  <i data-lucide="${e.icon}" class="item-icon"></i>
                  <strong>${e.title}</strong>
                  ${e.category?`<span class="item-category">${e.category}</span>`:""}
                  ${"linkLabel"in e&&e.linkHref?`<a class="item-link" href="${e.linkHref}" target="_blank" rel="noreferrer" aria-label="${e.title} 바로가기">
                          <i data-lucide="arrow-up-right" class="link-icon"></i>
                        </a>`:""}
                </div>
              </div>
              ${e.description?`<p>${e.description}</p>`:""}
            </li>
          `).join("")}
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
`;document.body.append(s);const m=Array.from(document.querySelectorAll(".filter-button")),W=Array.from(document.querySelectorAll(".simple-list li"));m.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.filter;m.forEach(o=>{o.classList.toggle("is-active",o===e)}),W.forEach(o=>{const a=t==="전체"||o.dataset.category===t;o.hidden=!a})})});k({icons:{ArrowUpRight:x,BadgeCheck:N,BookOpen:S,BriefcaseBusiness:O,Camera:I,CloudUpload:P,FlaskConical:j,Globe:B,Hammer:V,Library:q,Mic:F,MonitorPlay:T,Plane:z,Search:K},attrs:{width:18,height:18,strokeWidth:2}});
