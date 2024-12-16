// src/utils/constant.js``

export const NEWS_LIST = [
  {
    id: 3,
    title: "New Album Release Announced",
    date: "2024-12-01",
    content:
      "We’re excited to announce the release of our new album, 'Harmony in Motion', on December 15th! Stay tuned for more updates.",
    image: "/images/news_1.jpg",
  },
  {
    id: 2,
    title: "Upcoming Concert in Seoul",
    date: "2024-12-10",
    content:
      "Join us for an unforgettable night at the Seoul Arts Center on January 5th, 2025. Tickets are now available!",
    image: "/images/news_2.jpg",
  },
  {
    id: 1,
    title: "어린이동요 '바다야' 발매",
    date: "2024-08-27",
    content:
      "오래전부터 꼭 내고싶었던 동요 '바다야' 발매소식!\n<a src='https://www.youtube.com/watch?v=rZpQ7zfvMRU'/>",
    image: "/images/바다야.jpg",
  },
];

export const MUSIC_LIST = [
  {
    youtubeUrl:
      "https://music.youtube.com/watch?v=I3iqHfJWpbo&si=790mQaqMfISpLAN-",
    title: "White Christmas",
    artist: "정소안",
    subTitle: "",
    releaseDate: "2023.12",
    description: `사실, 나의 크리스마스를 White Christmas로 만들어주는건 '눈'이 아니라 '너'야`,
  },

  {
    youtubeUrl:
      "https://music.youtube.com/watch?v=nbsAnFCOHsA&si=T2tfdkhVpgMbai76",
    title: "오늘도 미완성",
    artist: "정소안",
    subTitle: "6th Single Album [오늘도 미완성]",
    releaseDate: "2022.02",
    description: `오늘도 미처 할 일을 다 끝내지 못했던 나지만, 별일 없어도 괜찮아. 별거 안 해도 다 좋아.`,
  },

  {
    youtubeUrl:
      "https://music.youtube.com/watch?v=ztFITZTDND4&si=Br0hstFZit0BYfU_",
    title: "궁금해",
    artist: "정소안",
    subTitle: "The Fifth album '궁금해'",
    releaseDate: "2020.01",
    description: `누군가가 궁금하고 자꾸 생각이 난다는 건, 조금 용기내서 다가가고 싶다는 건, 아마도 그 사람이 좋은 거겠지요?`,
  },

  {
    youtubeUrl:
      "https://music.youtube.com/watch?v=JOFKdecij9o&si=c-GTrzjkxLWdzY1g",
    title: "마지막 겨울",
    artist: "정소안",
    subTitle: "4th Single Album '마지막 겨울' (The Last Winter)",
    releaseDate: "2019.03",
    description: `'세차게 부는 겨울은 따가운 바늘 같고, 아무리 찔러도 뾰족한 정답은 없었다' (마지막 겨울 中)`,
  },

  {
    youtubeUrl:
      "https://music.youtube.com/watch?v=FKAEStVq7yw&si=ueD43YqW9hO4rcqE",
    title: "그리고 별",
    artist: "정소안",
    subTitle: "정소안 Third Single ‘그리고 별’",
    releaseDate: "2018.07",
    description: `어두운 밤 하늘에 어둠이 걷히면 다시 사라질 너지만, 매일 밤마다 찾아와주는 네가 반갑고 고마워.
추운 밤 골목길에도, 축 처진 무거운 어깨도 행여나 네가 날 보고 있을까 애써 씩씩하게 지내.
꿋꿋이 빛나는 너에게도 버거운 하루였니?`,
  },

  {
    youtubeUrl:
      "https://music.youtube.com/watch?v=4PM0UtXaFfU&si=ESHlzX3MXHkS-TfT",
    title: "새벽",
    artist: "정소안",
    subTitle: "정소안(笑顔)의 두 번째 솔로 앨범 '새벽'",
    releaseDate: "2018.07",
    description: `이 곡에서 '새벽'은 '내게 가장 힘들었던 시기'를 의미해요.
그렇게 나의 새벽이 다 지나가버린 줄 알았는데, 사실 그게 아니었나 봐.
사회 초년생의 여전히 외롭고 쓸쓸한, 아주 차가운 감정을 노래했어요.`,
  },

  {
    youtubeUrl:
      "https://music.youtube.com/watch?v=-CmcrL9DsUs&si=MAsEC_3iln2o20gH",
    title: "사랑이 필요하니까",
    artist: "정소안",
    subTitle: "정소안(笑顔)의 첫 번째 솔로 앨범 '사랑이 필요하니까'",
    releaseDate: "2018.01",
    description:
      "매일 아쉬운 게 많아지고 기대게 되는 어린 모습이 싫지만, 내 마음이 내 마음 같으면 그건 사랑일까요?",
  },

  {
    youtubeUrl:
      "https://music.youtube.com/watch?v=QQJexiWd0LA&si=jwsXA98HJ4q9ZR-4",
    title: "스르르",
    artist: "피그말리온",
    subTitle: "8th. Digital Single [스르르]",
    releaseDate: "2016.02",
    description: `평범하기만 했던 일상에서 꿈처럼 모든 게 달라진 행복한 여자주인공의 이야기에요. 이야기속 주인공이 되실 준비 되셨나요?`,
  },

  {
    youtubeUrl:
      "https://music.youtube.com/watch?v=uPoNeMmi-oQ&si=-eA3wBZZJJmBKLFq",
    title: "기쁨이 돼줄게",
    artist: "피그말리온",
    subTitle:
      "이 곡을 듣는 모든 너에게 제가 준비한 작은 기쁨의 선물이고 싶어요.",
    releaseDate: "2015.11",
    description: `노래를 듣고 힘을 얻었다는 여러분들에게 항상 감사하고 벅찬 감정이에요. 더 많은 분들에게 힘을 드리고 싶어 이 곡을 쓰게 됐어요. 이 노래를 듣는 모든 너에게 제가 준비한 작은 기쁨의 선물이고 싶어요.`,
  },

  {
    youtubeUrl:
      "https://music.youtube.com/watch?v=-5QBEYrdWCE&si=7NjYtAnKlagWqQFm",
    title: "늦은밤, 우리",
    artist: "피그말리온",
    subTitle: "'피그말리온' 6번째 싱글 [늦은 밤, 우리]",
    releaseDate: "2015.08",
    description: `바람이 불어 조금 쌀쌀해진 저녁엔 담요를 나눠 덮고. 쏟아지는 별들 위로 같은 소원을 말하고. 늦은 밤, 서로 많은 말을 하지 않더라도 가장 행복한 표정으로 같은 밤을 보내는 둘. `,
  },

  {
    youtubeUrl:
      "https://music.youtube.com/watch?v=qM1PouztlQ0&si=BYPvaPgZf8KspAiS",
    title: "그래서 좋아",
    artist: "피그말리온",
    subTitle: "'피그말리온' 다섯 번째 앨범 [그래서 좋아]",
    releaseDate: "2015.05",
    description: "봄이오는 설레임을 노래에 담았어요. 여러분의 봄은 무엇인가요?",
  },

  {
    youtubeUrl:
      "https://music.youtube.com/watch?v=DVxIArI4PS4&si=VTgLJ3Y2wsEaMMWD",
    title: "자장가",
    artist: "피그말리온",
    subTitle: "'피그말리온'의 네 번째 앨범 [자장가]",
    releaseDate: "2015.04",
    description:
      "우리가 칭얼대던 밤과, 누가 깰세라 들릴 듯 말 듯 작게 속삭이던 멜로디, 그리고 노래가 끝난 뒤 몰려오던 기분 좋은 피로감. 많은 연인들이 이 노래를 듣고 편히 잠들었으면 좋겠다는 마음으로 쓴 곡이에요. 여러분의 잠 못 드는 밤에 작은 선물이 되기를 바랍니다. ",
  },

  {
    youtubeUrl:
      "https://music.youtube.com/watch?v=0dAAqcZLRCU&si=EMpf1WtMtDXSOxZp",
    title: "어린 우리",
    artist: "피그말리온",
    subTitle: "피그말리온의 3rd. 어린 우리",
    releaseDate: "2015.01",
    description: `지금 우리는 흘러가는 시간을 멈추지 못한 채 계속 살아가고 있지만 어렸을 적 우리의 모습은 참 귀엽고 순진했을 때가 있었다. 서투르기에 더 순수하고 예뻤던 우리의 소중한 어린 시절을 추억해볼까?
`,
  },

  {
    youtubeUrl:
      "https://music.youtube.com/watch?v=UPFZ10w4_4Q&si=Gh_LOOjuc-hITFlp",
    title: "달에게",
    artist: "피그말리온",
    subTitle: "당신만의 달에게 위로 받기를 소망합니다.",
    releaseDate: "2014.12",
    description: `'아무 일도 없는 그저 그런 하루, 누구에게도 하지 못 했던 많은 말들. 지친 하루의 끝에 늘 그 자리를 지켜 주는 달, 더운 여름의 열기를 식히고 담담하게 함께 하는 너에게 해주고 싶은 많은 얘기가 있어.'`,
  },

  {
    youtubeUrl:
      "https://music.youtube.com/watch?v=GQ0SyNT0c4M&si=iKfN6FZeIOaWvZ1D",
    title: "안녕? 안녕! 안녕..",
    artist: "피그말리온",
    subTitle: "피그말리온의 첫번째 이야기",
    releaseDate: "2017.08",
    description: `'사랑'이라는 단어에 정답이 없듯이 ' 안녕? 안녕! 안녕..'의 이야기는 열린 결말로 끝이 나죠.'`,
  },
];
