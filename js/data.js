const banner = {
    logoName: 'SILSILVONGVONG',
    bannerImg: 'https://postfiles.pstatic.net/MjAyMzEwMTBfMTc5/MDAxNjk2OTQ5NTYwMTUy.Ov-a-zn0pmvCyc_cDc2cLasw0La64-H6DsfaxL5upEog.6wd24WYxSpfPVPNI6PokUYTaD6a8V26-JL_hO7XXNh4g.PNG.mvuvm/%EC%96%BC%EB%B9%A1%EC%83%B7-%EB%AC%98%EC%82%AC-%EC%96%BC%EA%B5%B4-%EC%88%98%EC%A0%95.png?type=w773',
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
            img: 'https://postfiles.pstatic.net/MjAyMzEwMTBfMTc5/MDAxNjk2OTQ5NTYwMTUy.Ov-a-zn0pmvCyc_cDc2cLasw0La64-H6DsfaxL5upEog.6wd24WYxSpfPVPNI6PokUYTaD6a8V26-JL_hO7XXNh4g.PNG.mvuvm/%EC%96%BC%EB%B9%A1%EC%83%B7-%EB%AC%98%EC%82%AC-%EC%96%BC%EA%B5%B4-%EC%88%98%EC%A0%95.png?type=w773',
            alt: '작업물'
        },
        {
            current:'최신',
            title: '개인의뢰 작업물',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.09.29',
            img: 'https://postfiles.pstatic.net/MjAyMzA5MjlfMjAw/MDAxNjk1OTk0MzY5NzQ3.1KTRib23RqStQ5pzyEyRqDZ5-QxQXHya_cCBwSEVULkg.2UTs7R_7Xe-prhPXHplDMdvTDN9U4pR0jUfveOfh1Gcg.PNG.mvuvm/%EB%9F%BD%ED%94%84%EB%93%80-%EC%9B%A8%EB%94%A9-%EC%BB%A4%EB%AF%B8%EC%85%98-%EC%99%84%EC%84%B12.png?type=w773',
            alt: '작업물'
        },
        {
            current:'최신',
            title: '캐릭터 스탠딩',
            tag: 'stand',
            tagname: '스탠딩',
            date: '23.08.30',
            img: 'https://postfiles.pstatic.net/MjAyMzEwMTJfMjA0/MDAxNjk3MTA1OTM3NDM0.V7iQr0lNOryEncKWZ4drvPFUFIYWFlqLjUQwDdAVtPMg.SmWh29XRpVSQ6tI8mVzSy8L3dbIlIDEY-QHETgwyCtEg.PNG.mvuvm/%EB%8B%AC%EA%B0%9C%EB%8B%98-%EB%B0%80%EB%A0%88-%EB%AC%98%EC%82%AC-%EC%9D%B8%EB%AC%BC.png?type=w773',
            alt: '작업물'
        },
        {
            current:'최신',
            title: '개인의뢰 작업물',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.08.10',
            img: 'https://postfiles.pstatic.net/MjAyMzA4MTBfMjUy/MDAxNjkxNjc5MjU3MzMw.7eNjkTyNzFs_dJv09fjegcWWNEjziDlqQjKu8F1iAeYg.sJyWJCLkHzXYeJWHFCE9v7W_hGfBmxDhi43aLW2-7EAg.PNG.mvuvm/%EB%9F%BD%ED%94%84%EB%93%80-%EB%93%9C%EB%A6%BC-%EC%BB%A4%EB%AF%B8%EC%85%98-%EC%82%AC%EC%9D%B4%EC%A6%88-%EC%A1%B0%EC%A0%952.png?type=w386',
            alt: '작업물'
        },
        {
            title: '개인작',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.07.19',
            img: 'https://postfiles.pstatic.net/MjAyMzA3MjNfMTcg/MDAxNjkwMDQxMDMzMDEw.ay5VVtc3CaEpRqi8tGuTWyNe-fnMc7OLZD3zH08TREwg.vO8jE77zgN-naUpkpGjEJsyN0h7XywoJTl3QmCI-10wg.PNG.mvuvm/%EB%A6%AC%ED%80%98%EC%8A%A4%ED%8A%B8-%EB%A1%9C%ED%8C%90-%EC%97%AC%EC%BA%90.png?type=w773',
            alt: '작업물'
        },
        {
            title: '방송용 일러스트',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.07.16',
            img: 'https://postfiles.pstatic.net/MjAyMzA3MTVfMTQ3/MDAxNjg5NDMzMDEzNTY2.Bm37KbjYpZI847zviKi1eJFNnkq1A9QCY7vYFo61Bvkg.5mAUQXt34mBDDLJ3tZ7YA2jqzKPCR-a5AkRS886yj6Mg.PNG.mvuvm/%EC%B9%B4%EC%97%98%EB%8B%98-%EB%B0%A9%EC%86%A1%EC%9A%A9-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8_%EC%95%BD%EA%B0%84_%EC%BF%A8%ED%86%A4.png?type=w773',
            alt: '작업물'
        },
        {
            title: '플레이브 노아',
            tag: 'fanart',
            tagname: '팬아트',
            date: '23.07.03',
            img: 'https://postfiles.pstatic.net/MjAyMzA3MDNfNTAg/MDAxNjg4Mzg5MDMxMDM4.MhdnndmzauFUsmXHXPQ8MCEeO4SL2Pq5CYk4RAdK240g.wM2MEwrT9L_mL616AZ9JdylW-wkz2OEMHKVpYyFes6cg.PNG.mvuvm/%ED%94%8C%EB%A0%88%EC%9D%B4%EB%B8%8C-%EB%85%B8%EC%95%843-2.png?type=w773',
            alt: '작업물'
        },
        {
            title: '개인작',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.06.18',
            img: 'https://postfiles.pstatic.net/MjAyMzA2MThfMTk5/MDAxNjg3MDcwODgyNjIw.3f7ldpNfW99GKVmlgjhoNtPc9iVkwLLAiltTIvdYF-Qg.r7O8C-zPzKJ4wh3TjBNQb8nD67HmswzgAENP_11femog.PNG.mvuvm/%ED%98%84%EC%9E%90%EC%9D%98-%EA%BD%83-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png?type=w773',
            alt: '작업물'
        },
        {
            title: '개인작',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.05.15',
            img: 'https://postfiles.pstatic.net/MjAyMzA1MTVfODIg/MDAxNjg0MTQ5MjUyMDUz.wVtiocz8ER0N4flM2NXdBhpS13YqpU9oF56DSBTmGTYg.apmhwYQ-47km20ySIcpqxhxdItfO1VaM0SL07j0rPS4g.PNG.mvuvm/%EC%B9%BC%EB%93%A4%EA%B3%A0-%EC%84%9C%EC%9E%88%EB%8A%94-%ED%8F%AC%EB%8B%88%ED%85%8C%EC%9D%BC%EB%82%A8-%EC%97%85%EB%A1%9C%EB%93%9C%EC%9A%A9.png?type=w773',
            alt: '작업물'
        },
        {
            title: '개인작',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.05.08',
            img: 'https://postfiles.pstatic.net/MjAyMzA1MDhfMjA5/MDAxNjgzNTQ5NTk5NTM4.CGDsfg6vKvVp3SdO7KRsriHGeUikBILxgJrPtg8U3iYg.4Cfe5cViCvkfj8zljRpldP45AhNQXUAQbgBn57pUzPgg.PNG.mvuvm/%EC%9E%A5%EB%B0%9C-%EC%B4%89%EC%B4%893.png?type=w773',
            alt: '작업물'
        },
        {
            title: '개인작',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.05.03',
            img: 'https://postfiles.pstatic.net/MjAyMzA1MDNfMjk1/MDAxNjgzMTA4NTg2MjY4.oieIbMXDwvLXzYNSYR-wja57Ol3DMkrf7tgxGAvUmW8g.92FpQva1pKvni8Vcl-HgtUeqcbucrgxw334V5iCzKtcg.PNG.mvuvm/%EC%95%88%EA%B2%BD%EB%82%A8-%EC%95%85%EB%A7%88%EA%B2%BD%EC%B0%B0-%EC%82%AC%EC%9D%B4%EC%A6%88-%EC%A1%B0%EC%A0%95.png?type=w773',
            alt: '작업물'
        },
        {
            title: '개인작',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.04.23',
            img: 'https://postfiles.pstatic.net/MjAyMzA0MjNfMTYw/MDAxNjgyMjYwODgwMDIx.O61aeMxWzYCXdvyG_-50f3IXwPCi-nk7S4tdfuhDBYIg.0Ovv22qS64EGiK1hPDJG9c1F0gIpLLTe1dus6LSkkD4g.PNG.mvuvm/%EA%BC%AC%EC%98%A5-%ED%83%80%EC%9D%B4%ED%8F%AC.png?type=w773',
            alt: '작업물'
        },
        {
            title: '개인의뢰 작업물',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.04.11',
            img: 'https://postfiles.pstatic.net/MjAyMzA0MTFfMjk0/MDAxNjgxMjIwOTEwNDIz.DSQs1Pe6tIe1z_qEx9J9ZtTW_GZbPhBDQLLRMqIHUgog.BM4o7QqqxJ3l97W40TGrHdsdvnmQ6gLlfbXvAXF1dSQg.PNG.mvuvm/%EC%A7%80%EC%98%81%EB%8B%98-%ED%91%9C%EC%A7%80-%EC%BB%A4%EB%AF%B8%EC%85%98-2%EC%9D%B8-%EC%99%84%EC%84%B1%EB%B3%B8123.png?type=w773',
            alt: '작업물'
        },
        {
            title: '개인의뢰 작업물',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.04.01',
            img: 'https://postfiles.pstatic.net/MjAyMzA0MTFfNDQg/MDAxNjgxMjIwOTIxMTQx.zv9aW-UhGJYyjBUzQ8hcTT4eILDpWVSYP74tS_ejuLEg.TRAmIGoQx28BFkRkU_XU6yiN8ZPmwsK9IiqUIDYoBiwg.PNG.mvuvm/%EC%A7%80%EC%98%81%EB%8B%98-%EB%82%A8%EC%BA%901%EC%9D%B8_%ED%91%9C%EC%A7%80_%EC%99%84%EC%84%B1%EB%B3%B8.png?type=w773',
            alt: '작업물'
        },
        {
            title: '패션 일레이',
            tag: 'fanart',
            tagname: '팬아트',
            date: '23.03.14',
            img: 'https://postfiles.pstatic.net/MjAyMzAzMTRfMjMw/MDAxNjc4ODAyMDkwMjA3.0qs53UirJD9sberd8ykxMNmhetHLOzebQXNdYSb-BvIg.pC6GsjdCZtA6ef77gLM2PGRbhb3ky1egfqyxqP2P_Lsg.PNG.mvuvm/%EC%95%8C%ED%8B%B0-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EA%B7%B8%EB%A6%BC2-4.png?type=w773',
            alt: '작업물'
        },
        {
            title: '개인작',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.03.09',
            img: 'https://postfiles.pstatic.net/MjAyMzAzMTZfMjM0/MDAxNjc4OTc4MzI1MDIw.hCPGJJ6wyr96PWdRkwk7CrD_535VLdBtGEIK9wy8e4gg.Zcc_rSGqkcuFQzkg2cyutp5oQQAJyFjPITlKiUlFLXcg.PNG.mvuvm/%EC%95%8C%ED%8B%B0-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EA%B7%B8%EB%A6%BC1-%EB%AC%98%EC%82%AC4.png?type=w773',
            alt: '작업물'
        },
        {
            title: '개인작',
            tag: 'illa',
            tagname: '일러스트',
            date: '23.02.28',
            img: 'https://postfiles.pstatic.net/MjAyMzAzMDlfMTMz/MDAxNjc4MzU5NzU3NDMx.RpHGP7W_Oozw3XCYL56QLTA8PnN6CrGk55IzxozcuM0g.hmaOSOIr81A5epnuIKBLo29UoBsjmgYRBpWxE3s-V48g.PNG.mvuvm/%ED%88%AC%EC%83%B7-%EC%9D%BC%EB%9F%AC-%EB%AC%98%EC%82%AC.png?type=w773',
            alt: '작업물'
        },
        {
            title: '무기미도 Mr.fox',
            tag: 'fanart',
            tagname: '팬아트',
            date: '22.12.30',
            img: 'https://postfiles.pstatic.net/MjAyMjEyMzBfODcg/MDAxNjcyNDA4MDAxMDIy.ks617QFXV-8fDiySkXbG6oKdD1UB2ye9VP9eehJxsHgg.cF1edL3KJuhvhLi17K2X276ghxcRO96xUd31Be4btS0g.PNG.mvuvm/%EB%AF%B8%EC%8A%A4%ED%84%B0-%ED%8F%AD%EC%8A%A4-%ED%81%AC%EB%A1%AD-%EC%9B%90%EB%B3%B8.png?type=w773',
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
    mainImg:'https://mblogthumb-phinf.pstatic.net/MjAyMzA3MTVfMTQ3/MDAxNjg5NDMzMDEzNTY2.Bm37KbjYpZI847zviKi1eJFNnkq1A9QCY7vYFo61Bvkg.5mAUQXt34mBDDLJ3tZ7YA2jqzKPCR-a5AkRS886yj6Mg.PNG.mvuvm/%EC%B9%B4%EC%97%98%EB%8B%98-%EB%B0%A9%EC%86%A1%EC%9A%A9-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8_%EC%95%BD%EA%B0%84_%EC%BF%A8%ED%86%A4.png?type=w800',//메인 이미지
    image: 'https://mblogthumb-phinf.pstatic.net/MjAyMzA4MTRfMjg0/MDAxNjkyMDE4NzE0OTE3.2COVv9gBnB0U767fNmYwsKU_Dt6mgmbbZE-t8qlp5GMg.vFk3tNCxuAVbWh4gDDoQBq_020V_4JpVULBosuVh-Swg.PNG.mvuvm/%EB%85%B9%EC%95%88-%EB%8C%80%EA%B3%B5%EB%8B%983-1.png?type=w800', // 프로필 이미지
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
