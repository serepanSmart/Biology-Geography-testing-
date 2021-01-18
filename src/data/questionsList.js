const questionsList = [
    {
        type: "TEXT",
        title: "Первая столица Украины",
        answers: 'Харьков',
        points: 1,
        
    },
    {
        type: "TEXT",
        title: "Столица США",
        answers: 'Вашингтон',
        points: 1,
    },
    {
        type: "CHECKBOX",
        title: "Выберите страны в Европе",
        answers: [
            {
                answer: "Франция",
                isTrue: true,
                points: 1,
            },
            {
                answer: "Германия",
                isTrue: true,
                points: 1,
            },
            {
                answer: "Греция",
                isTrue: true,
                points: 1,
            },
            {
                answer: "Замбия",
                isTrue: false,
                points: 0,
            },
            {
                answer: "Занзибар",
                isTrue: false,
                points: 0,
            }
        ]
    },
    {
        type: "RADIO",
        title: "Выберите страны в Азии",
        answers: [
            {
                answer: "Вьетнам",
                isTrue: true,
                points: 1,
            },
            {
                answer: "США",
                isTrue: false,
                points: 0,
            },
            {
                answer: "Украина",
                isTrue: false,
                points: 0,
            },
        ]
    },

    {
        type: "SELECT",
        title: "Солнце - это",
        answers: [
            {
                answer: "Планета",
                isTrue: false,
                points: 0,
            },
            {
                answer: "Звезда",
                isTrue: true,
                points: 1,
            },
            {
                answer: "Комета",
                isTrue: false,
                points: 0,
            },
        ]
    },

    {
        type: "RADIO",
        title: "Гренландия - это...",
        answers: [
            {
                answer: "Остров",
                isTrue: true,
                points: 1,
            },
            {
                answer: "Страна",
                isTrue: false,
                points: 0,
            },
            {
                answer: "Материк",
                isTrue: false,
                points: 0,
            },
        ]
    },
    {
        type: "CHECKBOX",
        title: "Выберите из списка драгоценный металл...",
        answers: [
            {
                answer: "Золото",
                isTrue: true,
                points: 1,
            },
            {
                answer: "Платина",
                isTrue: true,
                points: 1,
            },
            {
                answer: "Железо",
                isTrue: false,
                points: 0,
            },
            {
                answer: "Медь",
                isTrue: false,
                points: 0,
            },
            {
                answer: "Олово",
                isTrue: false,
                points: 0,
            },
        ]
    },
]

const questionsList2 = [
    {
        title: 'Хранителем наследственной информации являются:',
        type: "TEXT",
        answers: [{ title: 'хромосомы', isTrue: true, points: 1 }],
    },

    {
        title: 'Защиту внутреннего содержимого клетки обеспечивает:',
        type: "RADIO",
        answers: [
            { answer: 'рибосома', isTrue: false, points: 0 },
            { answer: 'мембрана', isTrue: true, points: 1 },
            { answer: 'митохондрия', isTrue: false, points: 0 },
            { answer: 'пластида', isTrue: false, points: 0 }
        ],
    },

    {
        title: 'В делении клеток принимают участие:',
        type: "CHECKBOX",
        answers: [{ answer: ' клеточный центр ', isTrue: true, points: 1 },
        { answer: 'рибосома', isTrue: true, points: 1 },
        { answer: 'хлоропласт', isTrue: false, points: 0 },
        { answer: 'вакуоли', isTrue: false, points: 0 }
        ],
    },

    {
        title: 'Самые маленькие косточки тела человека располагаются в:',
        type: "RADIO",
        answers: [{ answer: 'наружном ухе', isTrue: false, points: 0 },
        { answer: 'внутреннем ухе ', isTrue: true, points: 1 },
        { answer: 'среднем ухе', isTrue: false, points: 0 },
        { answer: 'малом ухе', isTrue: false, points: 0 },
        ],
    },

    {
        title: 'Гипофиз выделяет:',
        type: "SELECT",
        answers: [{ answer: 'адреналин', isTrue: false, points: 0 },
        { answer: 'тироксин', isTrue: false, points: 0 },
        { answer: 'гормон роста', isTrue: true, points: 1 },
        { answer: 'инсулин', isTrue: false, points: 0 },
        ],
    },

    {
        title: 'В каком отделе пищеварительного тракта имеются ворсинки?',
        type: "SELECT",
        answers: [{ answer: 'в пищеводе', isTrue: false, points: 0 },
        { answer: 'в толстой кишке', isTrue: false, points: 0 },
        { answer: 'в тонкой кишке', isTrue: true, points: 1 },
        { answer: 'в желудке', isTrue: false, points: 0 },
        ],
    },

    {
        title: 'Что происходит под действием ферментов?',
        type: "CHECKBOX",
        answers: [{ answer: 'разрушение клеток', isTrue: true, points: 1 },
        { answer: 'синтез и распад веществ в клетке', isTrue: true, points: 1 },
        { answer: 'деление клеток', isTrue: false, points: 0 },
        { answer: 'сокращение клеток', isTrue: false, points: 0 }
        ],
    },
];

export { questionsList, questionsList2 };