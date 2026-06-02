# Easy Life Lab 홈페이지

Easy Life Lab의 공식 홈페이지 저장소입니다. GitHub Pages를 통해 호스팅됩니다.

## 소개

Easy Life Lab은 사용자의 일상을 더 편리하게 만드는 모바일 앱을 개발하는 팀입니다.

- 홈페이지: https://easylifelab.site
- 문의: easylifelab.developer@gmail.com

## 앱 목록

### 투자/주식

| 앱 | 플랫폼 |
|---|---|
| 주식·코인 무릎/어깨 알리미 | Android, iOS |
| 거래량 폭발 주식 | Android, iOS |
| 뜨는 섹터 주식 | Android, iOS |
| 공매도 레이더 | Android, iOS |
| 주식 추세 시그널 | Android, iOS |
| 주식 투자 흐름 | Android, iOS |
| 조용한 상승 주식 | Android, iOS |
| 주식 상승레이더 | Android, iOS |
| ETF 편입알리미 | Android, iOS |
| 다가오는 배당락 | Android, iOS |

### 생활

| 앱 | 플랫폼 |
|---|---|
| 종점 출발 버스 | Android, iOS |
| 카드 뭐 내지? | Android |
| 복용일지 | Android, iOS |

### 지도

| 앱 | 플랫폼 |
|---|---|
| 콜키지 맵 | Android, iOS |
| 맛도리 지도 | Android, iOS |
| Toilet Password | Android, iOS |

## 웹사이트 구조

```
├── index.html          # 메인 홈페이지 (모바일 우선)
├── css/style.css       # 메인 스타일시트
├── js/main.js          # 카테고리 필터, 바텀 네비게이션 등
├── apps/               # 카테고리별 OG 미리보기 랜딩 페이지
├── download/           # 앱 다운로드 페이지 (iOS/Android 자동 리디렉션)
├── privacy/            # 각 앱의 개인정보처리방침 페이지
├── support/            # 고객 지원 페이지
├── images/optimized/   # 최적화된 앱 아이콘 (160px)
├── sitemap.xml         # SEO 사이트맵
└── ads.txt             # AdMob 광고
```

## 개발 및 배포

- 정적 웹사이트 (HTML, CSS, JavaScript) — 빌드 과정 없음
- GitHub Pages를 통해 자동 배포 (master 브랜치)
- 로컬 테스트: `python3 -m http.server 8000`

## 라이센스

© 2024 Easy Life Lab. All rights reserved.