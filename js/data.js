const banner = {
    logoName: 'SILSILVONGVONG',
    bannerImg: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtDGxA%2FbtsyeqkVa1m%2F6iipkB06oJTfwV5aErn250%2Fimg.png',
    bannerTitle: 'SILSILVONGVONG',
    bannerDesc: '안녕하세요 일러스트를 그리고 있는 실실벙글입니다. <br/> 모든 비지니스 문의는 메일 또는 사이트 하단의 접수폼을 이용해주세요! ',
    bannerLinkTxt: '2023일정보기',
    bannerLink: '#schedule' //페이지 내의 링크: #gallery, #schedule, #contact
}

const category = [
    {
        type: 'illa',
        name: '일러스트'
    },
    {
        type: 'stand',
        name: '스탠딩'
    },
    {
        type: 'fanart',
        name: '팬아트'
    }
]
const portfolio = [
        {
            current:'최신',
            title: '개인작',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.10.10',
            img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtDGxA%2FbtsyeqkVa1m%2F6iipkB06oJTfwV5aErn250%2Fimg.png',
            alt: '작업물'
        },
        {
            current:'최신',
            title: '개인의뢰 작업물',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.09.29',
            img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnVA3G%2FbtsypwRHARG%2FkSoK3fLFu4MN4mbPKZCWQ1%2Fimg.png',
            alt: '작업물'
        },
        {
            current:'최신',
            title: '캐릭터 스탠딩',
            tag: 'stand',
            tagname: '스탠딩',
            date: '23.08.30',
            img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbByHS7%2Fbtsyl4aBOO9%2FlQl0gvJBDnjGKAsy28J5tK%2Fimg.png',
            alt: '작업물'
        },
        {
            current:'최신',
            title: '개인의뢰 작업물',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.08.10',
            img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2LZU2%2FbtsymL2T5ko%2FYTdlIEtGITAARX7dylkR2K%2Fimg.png',
            alt: '작업물'
        },
        {
            title: '개인작',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.07.19',
            img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdeYipG%2FbtsydkecBWU%2FwpqMJtocNECsywn01o8icK%2Fimg.png',
            alt: '작업물'
        },
        {
            title: '방송용 일러스트',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.07.16',
            img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FP7B7h%2FbtsycuVDxXN%2FKma6ED2kYxOotYVUslzPl0%2Fimg.png',
            alt: '작업물'
        },
        {
            title: '플레이브 노아',
            tag: 'fanart',
            tagname: '팬아트',
            date: '23.07.03',
            img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdBVLUt%2FbtsylZmJUrF%2FStofbtbGExgrianer2kJH0%2Fimg.png',
            alt: '작업물'
        },
        {
            title: '개인작',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.06.18',
            img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FyqDPE%2FbtsydrdjJHg%2FKzuNSW7Kr6SGuVGTwBbqU0%2Fimg.png',
            alt: '작업물'
        },
        {
            title: '개인작',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.05.15',
            img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWksU2%2FbtsycWY1qjg%2FqPEMCpi9oGsi2ijcM5H4wk%2Fimg.png',
            alt: '작업물'
        },
        {
            title: '개인작',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.05.08',
            img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmwpZK%2Fbtsybu20U6p%2FIAhth7vF9ezDSLm4bZakj1%2Fimg.png',
            alt: '작업물'
        },
        {
            title: '개인작',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.05.03',
            img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdsKt6f%2FbtsykrX7MIu%2FIWBiee6plN82Qd2HbTBE70%2Fimg.png',
            alt: '작업물'
        },
        {
            title: '개인작',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.04.23',
            img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkCJnm%2FbtsydkrG6I6%2F3N2NPbH2ROKuNdgcFNvgo1%2Fimg.png',
            alt: '작업물'
        },
        {
            title: '개인의뢰 작업물',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.04.11',
            img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FoI9gN%2FbtsylZG2Ah1%2FqEFnmbQVyYyBwTDziQnYe1%2Fimg.png',
            alt: '작업물'
        },
        {
            title: '개인의뢰 작업물',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.04.01',
            img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbuffah%2Fbtsybx6w2Jv%2F8kdCQzrxDhf1YQ2WL2GTRk%2Fimg.png',
            alt: '작업물'
        },
        {
            title: '패션 일레이',
            tag: 'fanart',
            tagname: '팬아트',
            date: '23.03.14',
            img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcMd1J9%2FbtsycuIeOeH%2FmYIk83DRKNPauQwdlkKRek%2Fimg.png',
            alt: '작업물'
        },
        {
            title: '개인작',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.03.09',
            img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0Y4oh%2FbtsycWLtGdZ%2F7MO6Fz1Ws0LHYJkOJBK970%2Fimg.png',
            alt: '작업물'
        },
        {
            title: '개인작',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.02.28',
            img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FerZPt5%2FbtsydT8PXTI%2FiIUbr69pNimOk5czvqIcdk%2Fimg.png',
            alt: '작업물'
        },
        {
            title: '무기미도 Mr.fox',
            tag: 'fanart',
            tagname: '팬아트',
            date: '22.12.30',
            img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc4PTY9%2FbtsykrjvN5f%2FcgjG2k3JXkTr2hy8OZTGS0%2Fimg.png',
            alt: '작업물'
        },
    ];

const schedule = {
    year: 2023,
    firstHalf : [
                    '마감', //1월
                    '마감', //2월
                    '마감', //3월
                    '마감', //4월
                    '마감', //5월
                    '마감' //6월
                ],
    secondHalf : [
                    '마감', //7월
                    '모집중', //8월
                    '모집중', //9월
                    '모집중', //10월
                    '모집중', //11월
                    '모집중' //12월
                ],
    desc: '2024년도 예약문의는 받지 않습니다.<br>특수 슬롯(긴급건 등) 문의는 따로 부탁드립니다.<br>비상업용 개인 의뢰는 커미션으로 진행하고 있습니다. 커미션 오픈 여부는 커미션 페이지에서 확인하실 수 있습니다.'
}

const profile = {
    name: '실실벙글', //작가명
    hompageTit: 'portfolio homepage',
    subdesc: '프리랜서 일러스트레이터', //상태 텍스트
    info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    mainImg:'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtDGxA%2FbtsyeqkVa1m%2F6iipkB06oJTfwV5aErn250%2Fimg.png',//메인 이미지
    image: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtDGxA%2FbtsyeqkVa1m%2F6iipkB06oJTfwV5aErn250%2Fimg.png', // 프로필 이미지
    email: 'silsilvongvong@naver.com',
    emaildesc: '장르, 희망 단가, 마감일을 포함하여 문의 주세요.<br>사이트의 폼을 이용하실 경우 답장 받으실 이메일을 필수로 남겨주셔야 답변이 가능합니다.',
    carrer: [
        {
            title: '경력사항1',
            date: '22.01.01',
        },
        {
            title: '경력사항2',
            date: '23.01.01',
        },
        {
            title: '경력사항3',
            date: '23.05.05',
        }
    ],
    link: [
        {
            title:'트위터',
            url:'https://twitter.com/silsilvongvong',
        },
    ]
}
