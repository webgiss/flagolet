import { AFRICA, ASIA, CARIBBEAN, EUROPE, OCEANIA, SOUTH_AMERICA, CENTRAL_AMERICA, NORTH_AMERICA } from "../constants/countryTags";
import { NOT_RECTANGULAR, SUN, MOON, VERTICAL_STRIPES, SERRATED, WRITINGS, SQUARE, CROSS, EMBLEM, HORIZONTAL_STRIPES, CIRCLE, BACKDIAGONAL, BIRD, ANIMAL, STAR, DIAGONAL, NORDIC_CROSS, EAGLE, LOSANGE, TRIANGLE, PANAFRICAN_COLORS, DRAGON, SHIELD, TREE, BOOK, GUN, QUARTERED, DIAMOND, CROWN, UNION_JACK, MAPLE_LEAF, PAN_ARAB_COLORS, LION, DECORATION } from "../constants/flagTags";
import { COUNTRY } from "../constants/flagType";

export const countries = [
    {
        name: {
            en: "Nepal",
            fr: "Népal",
        },
        code: "np",
        flag: {
            file: "Flag_of_Nepal.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Nepal",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Népal",
            },
            ratio: 328 / 400,
            tags: [NOT_RECTANGULAR, SUN, MOON, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Nepal",
            fr: "https://fr.wikipedia.org/wiki/Népal",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "France",
            fr: "France",
        },
        longName: {
            en: "French Republic",
            fr: "République française",
        },
        code: "fr",
        flag: {
            file: "Flag_of_France.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_France",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_France",
            },
            ratio: 1.5,
            tags: [VERTICAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/France",
            fr: "https://fr.wikipedia.org/wiki/France",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Qatar",
            fr: "Qatar",
        },
        longName: {
            en: "State of Qatar",
            fr: "État du Qatar",
        },
        code: "qa",
        flag: {
            file: "Flag_of_Qatar.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Qatar",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Qatar",
            },
            ratio: 28 / 11,
            tags: [VERTICAL_STRIPES, SERRATED],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Qatar",
            fr: "https://fr.wikipedia.org/wiki/Qatar",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Belgium",
            fr: "Belgique",
        },
        longName: {
            en: "Kingdom of Belgium",
            fr: "Royaume de Belgique",
        },
        code: "be",
        flag: {
            file: "Flag_of_Belgium.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Belgium",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Belgique",
            },
            ratio: 15 / 13,
            tags: [VERTICAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Belgium",
            fr: "https://fr.wikipedia.org/wiki/Belgique",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Afghanistan",
            fr: "Afghanistan",
        },
        longName: {
            en: "Islamic Emirate of Afghanistan",
            fr: "Émirat islamique d'Afghanistan",
        },
        code: "af",
        flag: {
            file: "Flag_of_the_Taliban.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Afghanistan",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l'Afghanistan",
            },
            ratio: 2,
            tags: [WRITINGS, DECORATION]
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Afghanistan",
            fr: "https://fr.wikipedia.org/wiki/Afghanistan",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Switzerland",
            fr: "Suisse",
        },
        longName: {
            en: "Swiss Confederation",
            fr: "Confédération suisse",
        },
        code: "ch",
        flag: {
            file: "Flag_of_Switzerland.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Switzerland",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_et_armoiries_de_la_Suisse",
            },
            ratio: 1,
            tags: [SQUARE, CROSS, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Switzerland",
            fr: "https://fr.wikipedia.org/wiki/Suisse",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Vatican City",
            fr: "Vatican",
        },
        longName: {
            en: "Vatican City State",
            fr: "État de la Cité du Vatican",
        },
        code: "va",
        flag: {
            file: "Flag_of_Vatican_City_(2023%E2%80%93present).svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Vatican_City",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Vatican",
            },
            ratio: 1,
            tags: [SQUARE, EMBLEM, VERTICAL_STRIPES, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Vatican_City",
            fr: "https://fr.wikipedia.org/wiki/Vatican",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Niger",
            fr: "Niger",
        },
        longName: {
            en: "Republic of the Niger",
            fr: "République du Niger",
        },
        code: "ne",
        flag: {
            file: "Flag_of_Niger.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Niger",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Niger",
            },
            ratio: 7 / 6,
            tags: [HORIZONTAL_STRIPES, CIRCLE, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Niger",
            fr: "https://fr.wikipedia.org/wiki/Niger",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Monaco",
            fr: "Monaco",
        },
        longName: {
            en: "Principality of Monaco",
            fr: "Principauté de Monaco",
        },
        code: "mc",
        flag: {
            file: "Flag_of_Monaco.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Monaco",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_Monaco",
            },
            ratio: 5 / 4,
            tags: [HORIZONTAL_STRIPES],
            chadEffect: ["ro"]
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Monaco",
            fr: "https://fr.wikipedia.org/wiki/Monaco",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Denmark",
            fr: "Danemark",
        },
        longName: {
            en: "Kingdom of Denmark",
            fr: "Royaume de Danemark",
        },
        code: "dk",
        flag: {
            file: "Flag_of_Denmark.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Denmark",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Danemark",
            },
            ratio: 37 / 28,
            tags: [NORDIC_CROSS, CROSS],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Denmark",
            fr: "https://fr.wikipedia.org/wiki/Danemark",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Gabon",
            fr: "Gabon",
        },
        longName: {
            en: "Gabonese Republic",
            fr: "République gabonaise",
        },
        code: "ga",
        flag: {
            file: "Flag_of_Gabon.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Gabon",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Gabon",
            },
            ratio: 4 / 3,
            tags: [HORIZONTAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Gabon",
            fr: "https://fr.wikipedia.org/wiki/Gabon",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Papua New Guinea",
            fr: "Papouasie-Nouvelle-Guinée",
        },
        longName: {
            en: "Independent State of Papua New Guinea",
            fr: "État indépendant de Papouasie-Nouvelle-Guinée",
        },
        code: "pg",
        flag: {
            file: "Flag_of_Papua_New_Guinea.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Papua_New_Guinea",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Papouasie-Nouvelle-Guinée",
            },
            ratio: 4 / 3,
            tags: [BACKDIAGONAL, STAR, BIRD, ANIMAL, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Papua_New_Guinea",
            fr: "https://fr.wikipedia.org/wiki/Papouasie-Nouvelle-Guinée",
        },
        tags: [OCEANIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Democratic Republic of the Congo",
            fr: "République démocratique du Congo",
        },
        code: "cd",
        flag: {
            file: "Flag_of_the_Democratic_Republic_of_the_Congo.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_the_Democratic_Republic_of_the_Congo",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_république_démocratique_du_Congo",
            },
            ratio: 4 / 3,
            tags: [DIAGONAL, STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo",
            fr: "https://fr.wikipedia.org/wiki/République_démocratique_du_Congo",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "San Marino",
            fr: "Saint-Marin",
        },
        longName: {
            en: "Republic of San Marino",
            fr: "République de Saint-Marin",
        },
        code: "sm",
        flag: {
            file: "Flag_of_San_Marino.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_San_Marino",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_Saint-Marin",
            },
            ratio: 4 / 3,
            tags: [HORIZONTAL_STRIPES, EMBLEM, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/San_Marino",
            fr: "https://fr.wikipedia.org/wiki/Saint-Marin",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Israel",
            fr: "Israël",
        },
        longName: {
            en: "State of Israel",
            fr: "État d'Israël",
        },
        code: "il",
        flag: {
            file: "Flag_of_Israel.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Israel",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_d'Israël",
            },
            ratio: 11 / 8,
            tags: [HORIZONTAL_STRIPES, STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Israel",
            fr: "https://fr.wikipedia.org/wiki/Israël",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Norway",
            fr: "Norvège",
        },
        longName: {
            en: "Kingdom of Norway",
            fr: "Royaume de Norvège",
        },
        code: "no",
        flag: {
            file: "Flag_of_Norway.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Norway",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Norvège",
            },
            ratio: 11 / 8,
            tags: [NORDIC_CROSS, CROSS],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Norway",
            fr: "https://fr.wikipedia.org/wiki/Norvège",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Iceland",
            fr: "Islande",
        },
        longName: {
            en: "Republic of Iceland",
            fr: "République d'Islande",
        },
        code: "is",
        flag: {
            file: "Flag_of_Iceland.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Iceland",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l'Islande",
            },
            ratio: 25 / 18,
            tags: [NORDIC_CROSS, CROSS],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Iceland",
            fr: "https://fr.wikipedia.org/wiki/Islande",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Albania",
            fr: "Albanie",
        },
        longName: {
            en: "Republic of Albania",
            fr: "République d'Albanie",
        },
        code: "al",
        flag: {
            file: "Flag_of_Albania.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Albania",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l'Albanie",
            },
            ratio: 7 / 5,
            tags: [EMBLEM, EAGLE, ANIMAL, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Albania",
            fr: "https://fr.wikipedia.org/wiki/Albanie",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Andorra",
            fr: "Andorre",
        },
        longName: {
            en: "Principality of Andorra",
            fr: "Principauté d'Andorre",
        },
        code: "ad",
        flag: {
            file: "Flag_of_Andorra.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Andorra",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_d'Andorre",
            },
            ratio: 10 / 7,
            tags: [VERTICAL_STRIPES, EMBLEM, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Andorra",
            fr: "https://fr.wikipedia.org/wiki/Andorre",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Brazil",
            fr: "Brésil",
        },
        longName: {
            en: "Federative Republic of Brazil",
            fr: "République fédérative du Brésil",
        },
        code: "br",
        flag: {
            file: "Flag_of_Brazil.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Brazil",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Brésil",
            },
            ratio: 10 / 7,
            tags: [LOSANGE, EMBLEM, STAR, WRITINGS, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Brazil",
            fr: "https://fr.wikipedia.org/wiki/Brésil",
        },
        tags: [SOUTH_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Bolivia",
            fr: "Bolivie",
        },
        longName: {
            en: "Plurinational State of Bolivia",
            fr: "État plurinational de Bolivie",
        },
        code: "bo",
        flag: {
            file: "Flag_of_Bolivia.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Bolivia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Bolivie",
            },
            ratio: 22 / 15,
            tags: [HORIZONTAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Bolivia",
            fr: "https://fr.wikipedia.org/wiki/Bolivie",
        },
        tags: [SOUTH_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "South Africa",
            fr: "Afrique du Sud",
        },
        longName: {
            en: "Republic of South Africa",
            fr: "République d'Afrique du Sud",
        },
        code: "za",
        flag: {
            file: "Flag_of_South_Africa.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_South_Africa",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l'Afrique_du_Sud",
            },
            ratio: 3 / 2,
            tags: [TRIANGLE],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/South_Africa",
            fr: "https://fr.wikipedia.org/wiki/Afrique_du_Sud",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Algeria",
            fr: "Algérie",
        },
        longName: {
            en: "People's Democratic Republic of Algeria",
            fr: "République démocratique et populaire d'Algérie",
        },
        code: "dz",
        flag: {
            file: "Flag_of_Algeria.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Algeria",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l'Algérie",
            },
            ratio: 3 / 2,
            tags: [VERTICAL_STRIPES, CIRCLE, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Algeria",
            fr: "https://fr.wikipedia.org/wiki/Algérie",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Angola",
            fr: "Angola",
        },
        longName: {
            en: "Republic of Angola",
            fr: "République d'Angola",
        },
        code: "ao",
        flag: {
            file: "Flag_of_Angola.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Angola",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l'Angola",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, EMBLEM, STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Angola",
            fr: "https://fr.wikipedia.org/wiki/Angola",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Antigua and Barbuda",
            fr: "Antigua-et-Barbuda",
        },
        code: "ag",
        flag: {
            file: "Flag_of_Antigua_and_Barbuda.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Antigua_and_Barbuda",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_d'Antigua-et-Barbuda",
            },
            ratio: 3 / 2,
            tags: [SUN, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Antigua_and_Barbuda",
            fr: "https://fr.wikipedia.org/wiki/Antigua-et-Barbuda",
        },
        tags: [CARIBBEAN],
        type: COUNTRY,
    },
    {
        name: {
            en: "Arabia Saudi",
            fr: "Arabie saoudite",
        },
        longName: {
            en: "Kingdom of Saudi Arabia",
            fr: "Royaume d'Arabie saoudite",
        },
        code: "sa",
        flag: {
            file: "Flag_of_Saudi_Arabia.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Saudi_Arabia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l'Arabie_saoudite",
            },
            ratio: 3 / 2,
            tags: [WRITINGS, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Saudi_Arabia",
            fr: "https://fr.wikipedia.org/wiki/Arabie_saoudite",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Austria",
            fr: "Autriche",
        },
        longName: {
            en: "Republic of Austria",
            fr: "République d'Autriche",
        },
        code: "at",
        flag: {
            file: "Flag_of_Austria.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Austria",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l'Autriche",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Austria",
            fr: "https://fr.wikipedia.org/wiki/Autriche",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Barbados",
            fr: "Barbade",
        },
        code: "bb",
        flag: {
            file: "Flag_of_Barbados.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Barbados",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Barbade",
            },
            ratio: 3 / 2,
            tags: [VERTICAL_STRIPES, EMBLEM, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Barbados",
            fr: "https://fr.wikipedia.org/wiki/Barbade",
        },
        tags: [CARIBBEAN],
        type: COUNTRY,
    },
    {
        name: {
            en: "Belize",
            fr: "Belize",
        },
        code: "bz",
        flag: {
            file: "Flag_of_Belize.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Belize",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Belize",
            },
            ratio: 5 / 3,
            tags: [HORIZONTAL_STRIPES, EMBLEM, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Belize",
            fr: "https://fr.wikipedia.org/wiki/Belize",
        },
        tags: [CENTRAL_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Benin",
            fr: "Bénin",
        },
        longName: {
            en: "Republic of Benin",
            fr: "République du Bénin",
        },
        code: "bj",
        flag: {
            file: "Flag_of_Benin.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Benin",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Bénin",
            },
            ratio: 3 / 2,
            tags: [PANAFRICAN_COLORS],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Benin",
            fr: "https://fr.wikipedia.org/wiki/Bénin",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Bhutan",
            fr: "Bhoutan",
        },
        longName: {
            en: "Kingdom of Bhutan",
            fr: "Royaume du Bhoutan",
        },
        code: "bt",
        flag: {
            file: "Flag_of_Bhutan.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Bhutan",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Bhoutan",
            },
            ratio: 3 / 2,
            tags: [DIAGONAL, DRAGON, ANIMAL, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Bhutan",
            fr: "https://fr.wikipedia.org/wiki/Bhoutan",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Myanmar",
            fr: "Myanmar",
        },
        longName: {
            en: "Republic of the Union of Myanmar",
            fr: "République de l'union du Myanmar",
        },
        code: "mm",
        flag: {
            file: "Flag_of_Myanmar.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Myanmar",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Myanmar",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Myanmar",
            fr: "https://fr.wikipedia.org/wiki/Myanmar",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Botswana",
            fr: "Botswana",
        },
        longName: {
            en: "Republic of Botswana",
            fr: "République du Botswana",
        },
        code: "bw",
        flag: {
            file: "Flag_of_Botswana.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Botswana",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Botswana",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Botswana",
            fr: "https://fr.wikipedia.org/wiki/Botswana",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Burkina Faso",
            fr: "Burkina Faso",
        },
        code: "bf",
        flag: {
            file: "Flag_of_Burkina_Faso.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Burkina_Faso",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Burkina_Faso",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, STAR, PANAFRICAN_COLORS, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Burkina_Faso",
            fr: "https://fr.wikipedia.org/wiki/Burkina_Faso",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Cameroon",
            fr: "Cameroun",
        },
        longName: {
            en: "Republic of Cameroon",
            fr: "République du Cameroun",
        },
        code: "cm",
        flag: {
            file: "Flag_of_Cameroon.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Cameroon",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Cameroun",
            },
            ratio: 3 / 2,
            tags: [VERTICAL_STRIPES, STAR, PANAFRICAN_COLORS, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Cameroon",
            fr: "https://fr.wikipedia.org/wiki/Cameroun",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Cape Verde",
            fr: "Cap-Vert",
        },
        longName: {
            en: "Republic of Cabo Verde",
            fr: "République du Cap-Vert",
        },
        code: "cv",
        flag: {
            file: "Flag_of_Cape_Verde.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Cape_Verde",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Cap-Vert",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Cape_Verde",
            fr: "https://fr.wikipedia.org/wiki/Cape_Verde",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Chile",
            fr: "Chili",
        },
        longName: {
            en: "Republic of Chile",
            fr: "République du Chili",
        },
        code: "cl",
        flag: {
            file: "Flag_of_Chile.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Chile",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Chili",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Chile",
            fr: "https://fr.wikipedia.org/wiki/Chili",
        },
        tags: [SOUTH_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "China",
            fr: "Chine",
        },
        longName: {
            en: "People's Republic of China",
            fr: "République populaire de Chine",
        },
        code: "cn",
        flag: {
            file: "Flag_of_the_People's_Republic_of_China.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_the_People's_Republic_of_China",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_République_populaire_de_Chine",
            },
            ratio: 3 / 2,
            tags: [STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/China",
            fr: "https://fr.wikipedia.org/wiki/Chine",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Chyprus",
            fr: "Chypre",
        },
        longName: {
            en: "Republic of Cyprus",
            fr: "République de Chypre",
        },
        code: "cy",
        flag: {
            file: "Flag_of_Cyprus.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Cyprus",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_Chypre",
            },
            ratio: 3 / 2,
            tags: [EMBLEM, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Cyprus",
            fr: "https://fr.wikipedia.org/wiki/Chypre",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Colombia",
            fr: "Colombie",
        },
        longName: {
            en: "Republic of Colombia",
            fr: "République de Colombie",
        },
        code: "co",
        flag: {
            file: "Flag_of_Colombia.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Colombia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Colombie",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Colombia",
            fr: "https://fr.wikipedia.org/wiki/Colombie",
        },
        tags: [SOUTH_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "South Korea",
            fr: "Corée du Sud",
        },
        longName: {
            en: "Republic of Korea",
            fr: "République de Corée",
        },
        code: "kr",
        flag: {
            file: "Flag_of_South_Korea.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_South_Korea",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Corée_du_Sud",
            },
            ratio: 3 / 2,
            tags: [EMBLEM, CIRCLE, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/South_Korea",
            fr: "https://fr.wikipedia.org/wiki/Corée_du_Sud",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Ivory Coast",
            fr: "Côte d'Ivoire",
        },
        longName: {
            en: "Republic of Côte d'Ivoire",
            fr: "République de Côte d'Ivoire",
        },
        code: "ci",
        flag: {
            file: "Flag_of_Côte_d'Ivoire.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Côte_d'Ivoire",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Côte_d'Ivoire",
            },
            ratio: 3 / 2,
            tags: [VERTICAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Ivory_Coast",
            fr: "https://fr.wikipedia.org/wiki/Côte_d'Ivoire",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Djibouti",
            fr: "Djibouti",
        },
        longName: {
            en: "Republic of Djibouti",
            fr: "République de Djibouti",
        },
        code: "dj",
        flag: {
            file: "Flag_of_Djibouti.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Djibouti",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_Djibouti",
            },
            ratio: 3 / 2,
            tags: [TRIANGLE, STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Djibouti",
            fr: "https://fr.wikipedia.org/wiki/Djibouti",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Egypt",
            fr: "Égypte",
        },
        longName: {
            en: "Arab Republic of Egypt",
            fr: "République arabe d'Égypte",
        },
        code: "eg",
        flag: {
            file: "Flag_of_Egypt.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Egypt",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l'Égypte",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, EMBLEM, EAGLE, ANIMAL, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Egypt",
            fr: "https://fr.wikipedia.org/wiki/Égypte",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Ecuador",
            fr: "Équateur",
        },
        longName: {
            en: "Republic of Ecuador",
            fr: "République de l'Équateur",
        },
        code: "ec",
        flag: {
            file: "Flag_of_Ecuador.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Ecuador",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l'Équateur",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, EMBLEM, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Ecuador",
            fr: "https://fr.wikipedia.org/wiki/Équateur_(pays)",
        },
        tags: [SOUTH_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Spain",
            fr: "Espagne",
        },
        longName: {
            en: "Kingdom of Spain",
            fr: "Royaume d'Espagne",
        },
        code: "es",
        flag: {
            file: "Flag_of_Spain.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Spain",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l'Espagne",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, EMBLEM, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Spain",
            fr: "https://fr.wikipedia.org/wiki/Espagne",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Gambia",
            fr: "Gambie",
        },
        longName: {
            en: "Republic of The Gambia",
            fr: "République de Gambie",
        },
        code: "gm",
        flag: {
            file: "Flag_of_the_Gambia.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_the_Gambia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Gambie",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/The_Gambia",
            fr: "https://fr.wikipedia.org/wiki/Gambie",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Georgia",
            fr: "Géorgie",
        },
        code: "ge",
        flag: {
            file: "Flag_of_Georgia.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Georgia_(country)",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Géorgie",
            },
            ratio: 3 / 2,
            tags: [CROSS, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Georgia_(country)",
            fr: "https://fr.wikipedia.org/wiki/Géorgie_(pays)",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Ghana",
            fr: "Ghana",
        },
        longName: {
            en: "Republic of Ghana",
            fr: "République du Ghana",
        },
        code: "gh",
        flag: {
            file: "Flag_of_Ghana.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Ghana",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Ghana",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, STAR, PANAFRICAN_COLORS, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Ghana",
            fr: "https://fr.wikipedia.org/wiki/Ghana",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Greece",
            fr: "Grèce",
        },
        longName: {
            en: "Hellenic Republic",
            fr: "République hellénique",
        },
        code: "gr",
        flag: {
            file: "Flag_of_Greece.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Greece",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Grèce",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, CROSS, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Greece",
            fr: "https://fr.wikipedia.org/wiki/Grèce",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Guinea",
            fr: "Guinée",
        },
        longName: {
            en: "Republic of Guinea",
            fr: "République de Guinée",
        },
        code: "gn",
        flag: {
            file: "Flag_of_Guinea.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Guinea",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Guinée",
            },
            ratio: 3 / 2,
            tags: [VERTICAL_STRIPES, PANAFRICAN_COLORS],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Guinea",
            fr: "https://fr.wikipedia.org/wiki/Guinée",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Equatorial Guinea",
            fr: "Guinée équatoriale",
        },
        longName: {
            en: "Republic of Equatorial Guinea",
            fr: "République de Guinée équatoriale",
        },
        code: "gq",
        flag: {
            file: "Flag_of_Equatorial_Guinea.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Equatorial_Guinea",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Guinée_équatoriale",
            },
            ratio: 3 / 2,
            tags: [TRIANGLE, EMBLEM, HORIZONTAL_STRIPES, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Equatorial_Guinea",
            fr: "https://fr.wikipedia.org/wiki/Guinée_équatoriale",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "India",
            fr: "Inde",
        },
        longName: {
            en: "Republic of India",
            fr: "République de l'Inde",
        },
        code: "in",
        flag: {
            file: "Flag_of_India.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_India",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l'Inde",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, EMBLEM, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/India",
            fr: "https://fr.wikipedia.org/wiki/Inde",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Indonesia",
            fr: "Indonésie",
        },
        longName: {
            en: "Republic of Indonesia",
            fr: "République d'Indonésie",
        },
        code: "id",
        flag: {
            file: "Flag_of_Indonesia.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Indonesia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l'Indonésie",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Indonesia",
            fr: "https://fr.wikipedia.org/wiki/Indonésie",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Iraq",
            fr: "Irak",

        },
        longName: {
            en: "Republic of Iraq",
            fr: "République d'Irak",
        },
        code: "iq",
        flag: {
            file: "Flag_of_Iraq.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Iraq",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l'Irak",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, WRITINGS, PAN_ARAB_COLORS, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Iraq",
            fr: "https://fr.wikipedia.org/wiki/Irak",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Italy",
            fr: "Italie",
        },
        longName: {
            en: "Italian Republic",
            fr: "République italienne",
        },
        code: "it",
        flag: {
            file: "Flag_of_Italy.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Italy",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l'Italie",
            },
            ratio: 3 / 2,
            tags: [VERTICAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Italy",
            fr: "https://fr.wikipedia.org/wiki/Italie",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Japan",
            fr: "Japon",
        },
        code: "jp",
        flag: {
            file: "Flag_of_Japan.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Japan",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Japon",
            },
            ratio: 3 / 2,
            tags: [CIRCLE, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Japan",
            fr: "https://fr.wikipedia.org/wiki/Japon",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Kenya",
            fr: "Kenya",
        },
        longName: {
            en: "Republic of Kenya",
            fr: "République du Kenya",
        },
        code: "ke",
        flag: {
            file: "Flag_of_Kenya.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Kenya",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Kenya",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, EMBLEM, SHIELD, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Kenya",
            fr: "https://fr.wikipedia.org/wiki/Kenya",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Laos",
            fr: "Laos",
        },
        longName: {
            en: "Lao People's Democratic Republic",
            fr: "République démocratique populaire lao",
        },
        code: "la",
        flag: {
            file: "Flag_of_Laos.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Laos",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Laos",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, CIRCLE, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Laos",
            fr: "https://fr.wikipedia.org/wiki/Laos",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Lesotho",
            fr: "Lesotho",
        },
        longName: {
            en: "Kingdom of Lesotho",
            fr: "Royaume du Lesotho",
        },
        code: "ls",
        flag: {
            file: "Flag_of_Lesotho.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Lesotho",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Lesotho",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, EMBLEM, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Lesotho",
            fr: "https://fr.wikipedia.org/wiki/Lesotho",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Lebanon",
            fr: "Liban",

        },
        longName: {
            en: "Republic of Lebanon",
            fr: "République libanaise",
        },
        code: "lb",
        flag: {
            file: "Flag_of_Lebanon.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Lebanon",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Liban",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, EMBLEM, TREE, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Lebanon",
            fr: "https://fr.wikipedia.org/wiki/Liban",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Madagascar",
            fr: "Madagascar",
        },
        longName: {
            en: "Republic of Madagascar",
            fr: "République de Madagascar",
        },
        code: "mg",
        flag: {
            file: "Flag_of_Madagascar.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Madagascar",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_Madagascar",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Madagascar",
            fr: "https://fr.wikipedia.org/wiki/Madagascar",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Malawi",
            fr: "Malawi",
        },
        longName: {
            en: "Republic of Malawi",
            fr: "République du Malawi",
        },
        code: "mw",
        flag: {
            file: "Flag_of_Malawi.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Malawi",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Malawi",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, SUN, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Malawi",
            fr: "https://fr.wikipedia.org/wiki/Malawi",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Maldives",
            fr: "Maldives",
        },
        longName: {
            en: "Republic of Maldives",
            fr: "République des Maldives",
        },
        code: "mv",
        flag: {
            file: "Flag_of_Maldives.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Maldives",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_des_Maldives",
            },
            ratio: 3 / 2,
            tags: [MOON, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Maldives",
            fr: "https://fr.wikipedia.org/wiki/Maldives",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Mali",
            fr: "Mali",
        },
        longName: {
            en: "Republic of Mali",
            fr: "République du Mali",
        },
        code: "ml",
        flag: {
            file: "Flag_of_Mali.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Mali",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Mali",
            },
            ratio: 3 / 2,
            tags: [VERTICAL_STRIPES, PANAFRICAN_COLORS],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Mali",
            fr: "https://fr.wikipedia.org/wiki/Mali",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Malta",
            fr: "Malte",
        },
        longName: {
            en: "Republic of Malta",
            fr: "République de Malte",
        },
        code: "mt",
        flag: {
            file: "Flag_of_Malta.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Malta",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_Malte",
            },
            ratio: 3 / 2,
            tags: [VERTICAL_STRIPES, EMBLEM, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Malta",
            fr: "https://fr.wikipedia.org/wiki/Malte",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Morocco",
            fr: "Maroc",
        },
        longName: {
            en: "Kingdom of Morocco",
            fr: "Royaume du Maroc",
        },
        code: "ma",
        flag: {
            file: "Flag_of_Morocco.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Morocco",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Maroc",
            },
            ratio: 3 / 2,
            tags: [STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Morocco",
            fr: "https://fr.wikipedia.org/wiki/Maroc",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Mauritius",
            fr: "Maurice",
        },
        longName: {
            en: "Republic of Mauritius",
            fr: "République de Maurice",
        },
        code: "mu",

        flag: {
            file: "Flag_of_Mauritius.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Mauritius",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_Maurice",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Mauritius",
            fr: "https://fr.wikipedia.org/wiki/Maurice_(pays)",
        },
        tags: [AFRICA],
        type: COUNTRY,

    },
    {
        name: {
            en: "Mauritania",
            fr: "Mauritanie",
        },
        longName: {
            en: "Islamic Republic of Mauritania",
            fr: "République islamique de Mauritanie",
        },
        code: "mr",
        flag: {
            file: "Flag_of_Mauritania.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Mauritania",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Mauritanie",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, STAR, MOON, PANAFRICAN_COLORS, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Mauritania",
            fr: "https://fr.wikipedia.org/wiki/Mauritanie",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Mozambique",
            fr: "Mozambique",
        },
        longName: {
            en: "Republic of Mozambique",
            fr: "République du Mozambique",
        },
        code: "mz",
        flag: {
            file: "Flag_of_Mozambique.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Mozambique",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Mozambique",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, EMBLEM, BOOK, GUN, STAR, TRIANGLE, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Mozambique",
            fr: "https://fr.wikipedia.org/wiki/Mozambique",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Namibia",
            fr: "Namibie",
        },
        longName: {
            en: "Republic of Namibia",
            fr: "République de Namibie",
        },
        code: "na",
        flag: {
            file: "Flag_of_Namibia.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Namibia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Namibie"
            },
            ratio: 3 / 2,
            tags: [DIAGONAL, SUN, DECORATION]
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Namibia",
            fr: "https://fr.wikipedia.org/wiki/Namibie",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Uganda",
            fr: "Ouganda",
        },
        longName: {
            en: "Republic of Uganda",
            fr: "République d'Ouganda",
        },
        code: "ug",
        flag: {
            file: "Flag_of_Uganda.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Uganda",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l'Ouganda",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, EMBLEM, CIRCLE, BIRD, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Uganda",
            fr: "https://fr.wikipedia.org/wiki/Ouganda",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Pakistan",
            fr: "Pakistan",
        },
        longName: {
            en: "Islamic Republic of Pakistan",
            fr: "République islamique du Pakistan",
        },
        code: "pk",
        flag: {
            file: "Flag_of_Pakistan.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Pakistan",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Pakistan",
            },
            ratio: 3 / 2,
            tags: [VERTICAL_STRIPES, STAR, MOON, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Pakistan",
            fr: "https://fr.wikipedia.org/wiki/Pakistan",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Panama",
            fr: "Panama",
        },
        longName: {
            en: "Republic of Panama",
            fr: "République du Panama",
        },
        code: "pa",
        flag: {
            file: "Flag_of_Panama.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Panama",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Panama",
            },
            ratio: 3 / 2,
            tags: [QUARTERED, STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Panama",
            fr: "https://fr.wikipedia.org/wiki/Panama_(pays)",
        },
        tags: [CENTRAL_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Netherlands",
            fr: "Pays-Bas",
        },
        longName: {
            en: "Kingdom of the Netherlands",
            fr: "Royaume des Pays-Bas",
        },
        code: "nl",
        flag: {
            file: "Flag_of_the_Netherlands.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_the_Netherlands",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_des_Pays-Bas",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES]
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Netherlands",
            fr: "https://fr.wikipedia.org/wiki/Pays-Bas"
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Peru",
            fr: "Pérou",
        },
        longName: {
            en: "Republic of Peru",
            fr: "République du Pérou",
        },
        code: "pe",
        flag: {
            file: "Flag_of_Peru.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Peru",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Pérou",
            },
            ratio: 3 / 2,
            tags: [VERTICAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Peru",
            fr: "https://fr.wikipedia.org/wiki/Pérou",
        },
        tags: [SOUTH_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Portugal",
            fr: "Portugal",
        },
        longName: {
            en: "Portuguese Republic",
            fr: "République portugaise",
        },
        code: "pt",
        flag: {
            file: "Flag_of_Portugal.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Portugal",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Portugal",
            },
            ratio: 3 / 2,
            tags: [VERTICAL_STRIPES, EMBLEM, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Portugal",
            fr: "https://fr.wikipedia.org/wiki/Portugal",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Central African Republic",
            fr: "République centrafricaine",
        },
        code: "cf",
        flag: {
            file: "Flag_of_the_Central_African_Republic.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_the_Central_African_Republic",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_R%C3%A9publique_centrafricaine"
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, STAR, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Central_African_Republic",
            fr: "https://fr.wikipedia.org/wiki/R%C3%A9publique_centrafricaine"
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Dominican Republic",
            fr: "République dominicaine",
        },
        code: "do",
        flag: {
            file: "Flag_of_the_Dominican_Republic.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_the_Dominican_Republic",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_R%C3%A9publique_dominicaine",
            },
            ratio: 3 / 2,
            tags: [CROSS, EMBLEM, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Dominican_Republic",
            fr: "https://fr.wikipedia.org/wiki/R%C3%A9publique_dominicaine",
        },
        tags: [CARIBBEAN],
        type: COUNTRY,
    },
    {
        name: {
            en: "Republic of the Congo",
            fr: "République du Congo",
        },
        code: "cg",
        flag: {
            file: "Flag_of_the_Republic_of_the_Congo.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_the_Congo",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_r%C3%A9publique_du_Congo"
            },
            ratio: 3 / 2,
            tags: [DIAGONAL, PANAFRICAN_COLORS]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Republic_of_the_Congo",
            fr: "https://fr.wikipedia.org/wiki/R%C3%A9publique_du_Congo"
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Czechia",
            fr: "Tchéquie",
        },
        longName: {
            en: "Czech Republic",
            fr: "République tchèque",
        },
        code: "cz",
        flag: {
            file: "Flag_of_the_Czech_Republic.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_the_Czech_Republic",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_R%C3%A9publique_tch%C3%A8que"
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, TRIANGLE]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Czech_Republic",
            fr: "https://fr.wikipedia.org/wiki/R%C3%A9publique_tch%C3%A8que"
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Romania",
            fr: "Roumanie",
        },
        code: "ro",
        flag: {
            file: "Flag_of_Romania.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Romania",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Roumanie",
            },
            ratio: 3 / 2,
            tags: [VERTICAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Romania",
            fr: "https://fr.wikipedia.org/wiki/Roumanie",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Russia",
            fr: "Russie",
        },
        longName: {
            en: "Russian Federation",
            fr: "Fédération de Russie",
        },
        code: "ru",
        flag: {
            file: "Flag_of_Russia.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Russia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Russie",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Russia",
            fr: "https://fr.wikipedia.org/wiki/Russie",
        },
        tags: [EUROPE, ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Rwanda",
            fr: "Rwanda",
        },
        longName: {
            en: "Republic of Rwanda",
            fr: "République du Rwanda",
        },
        code: "rw",
        flag: {
            file: "Flag_of_Rwanda.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Rwanda",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Rwanda",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, SUN, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Rwanda",
            fr: "https://fr.wikipedia.org/wiki/Rwanda",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Saint Kitts and Nevis",
            fr: "Saint-Christophe-et-Niévès",
        },
        longName: {
            en: "Federation of Saint Kitts and Nevis",
            fr: "Fédération de Saint-Christophe-et-Niévès",
        },
        code: "kn",
        flag: {
            file: "Flag_of_Saint_Kitts_and_Nevis.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Saint_Kitts_and_Nevis",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_Saint-Christophe-et-Niévès",
            },
            ratio: 3 / 2,
            tags: [DIAGONAL, STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Saint_Kitts_and_Nevis",
            fr: "https://fr.wikipedia.org/wiki/Saint-Christophe-et-Niévès",
        },
        tags: [CARIBBEAN],
        type: COUNTRY,
    },
    {
        name: {
            en: "Saint Vincent and the Grenadines",
            fr: "Saint-Vincent-et-les-Grenadines",
        },
        code: "vc",
        flag: {
            file: "Flag_of_Saint_Vincent_and_the_Grenadines.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Saint_Vincent_and_the_Grenadines",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_Saint-Vincent-et-les-Grenadines",
            },
            ratio: 3 / 2,
            tags: [VERTICAL_STRIPES, DIAMOND, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines",
            fr: "https://fr.wikipedia.org/wiki/Saint-Vincent-et-les-Grenadines",
        },
        tags: [CARIBBEAN],
        type: COUNTRY,
    },
    {
        name: {
            en: "Senegal",
            fr: "Sénégal",
        },
        longName: {
            en: "Republic of Senegal",
            fr: "République du Sénégal",
        },
        code: "sn",
        flag: {
            file: "Flag_of_Senegal.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Senegal",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Sénégal",
            },
            ratio: 3 / 2,
            tags: [VERTICAL_STRIPES, STAR, PANAFRICAN_COLORS, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Senegal",
            fr: "https://fr.wikipedia.org/wiki/Sénégal",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Serbia",
            fr: "Serbie",
        },
        longName: {
            en: "Republic of Serbia",
            fr: "République de Serbie",
        },
        code: "rs",
        flag: {
            file: "Flag_of_Serbia.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Serbia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Serbie",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, EMBLEM, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Serbia",
            fr: "https://fr.wikipedia.org/wiki/Serbie",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Sierra Leone",
            fr: "Sierra Leone",
        },
        longName: {
            en: "Republic of Sierra Leone",
            fr: "République de Sierra Leone",
        },
        code: "sl",
        flag: {
            file: "Flag_of_Sierra_Leone.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Sierra_Leone",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Sierra_Leone"
            },
            ratio:
                3 / 2,
            tags:
                [HORIZONTAL_STRIPES]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Sierra_Leone",
            fr: "https://fr.wikipedia.org/wiki/Sierra_Leone",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Singapore",
            fr: "Singapour",
        },
        longName: {
            en: "Republic of Singapore",
            fr: "République de Singapour",
        },
        code: "sg",
        flag: {
            file: "Flag_of_Singapore.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Singapore",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_Singapour",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, MOON, STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Singapore",
            fr: "https://fr.wikipedia.org/wiki/Singapour",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Slovakia",
            fr: "Slovaquie",
        },
        longName: {
            en: "Slovak Republic",
            fr: "République slovaque",
        },
        code: "sk",
        flag: {
            file: "Flag_of_Slovakia.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Slovakia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Slovaquie"
            },
            ratio:
                3 / 2,
            tags:
                [HORIZONTAL_STRIPES, EMBLEM, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Slovakia",
            fr: "https://fr.wikipedia.org/wiki/Slovaquie"
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Somalia",
            fr: "Somalie",
        },
        longName: {
            en: "Federal Republic of Somalia",
            fr: "République fédérale de Somalie",
        },
        code: "so",
        flag: {
            file: "Flag_of_Somalia.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Somalia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Somalie"
            },
            ratio: 3 / 2,
            tags: [STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Somalia",
            fr: "https://fr.wikipedia.org/wiki/Somalie",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Suriname",
            fr: "Suriname",
        },
        longName: {
            en: "Republic of Suriname",
            fr: "République du Suriname",
        },
        code: "sr",
        flag: {
            file: "Flag_of_Suriname.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Suriname",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Suriname",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Suriname",
            fr: "https://fr.wikipedia.org/wiki/Suriname",
        },
        tags: [SOUTH_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Eswatini",
            fr: "Eswatini",
        },
        longName: {
            en: "Kingdom of Eswatini",
            fr: "Royaume d'Eswatini",
        },
        code: "sz",
        flag: {
            file: "Flag_of_Eswatini.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Eswatini",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l%27Eswatini"
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, EMBLEM, SHIELD, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Eswatini",
            fr: "https://fr.wikipedia.org/wiki/Eswatini"
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Syria",
            fr: "Syrie",
        },
        longName: {
            en: "Syrian Arab Republic",
            fr: "République arabe syrienne",
        },
        code: "sy",
        flag: {
            file: "Flag_of_Syria_(2025-).svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Syria",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Syrie",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, STAR, PAN_ARAB_COLORS, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Syria",
            fr: "https://fr.wikipedia.org/wiki/Syrie",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Tanzania",
            fr: "Tanzanie",
        },
        longName: {
            en: "United Republic of Tanzania",
            fr: "République unie de Tanzanie",
        },
        code: "tz",
        flag: {
            file: "Flag_of_Tanzania.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Tanzania",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Tanzanie",
            },
            ratio: 3 / 2,
            tags: [DIAGONAL],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Tanzania",
            fr: "https://fr.wikipedia.org/wiki/Tanzanie",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Chad",
            fr: "Tchad",
        },
        longName: {
            en: "Republic of Chad",
            fr: "République du Tchad",
        },
        code: "td",
        flag: {
            file: "Flag_of_Chad.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Chad",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Tchad",
            },
            ratio: 3 / 2,
            tags: [VERTICAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Chad",
            fr: "https://fr.wikipedia.org/wiki/Tchad",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Thailand",
            fr: "Thaïlande",
        },
        longName: {
            en: "Kingdom of Thailand",
            fr: "Royaume de Thaïlande",
        },
        code: "th",
        flag: {
            file: "Flag_of_Thailand.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Thailand",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Thaïlande",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Thailand",
            fr: "https://fr.wikipedia.org/wiki/Thaïlande",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Tunisia",
            fr: "Tunisie",
        },
        longName: {
            en: "Republic of Tunisia",
            fr: "République tunisienne",
        },
        code: "tn",
        flag: {
            file: "Flag_of_Tunisia.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Tunisia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Tunisie",
            },
            ratio: 3 / 2,
            tags: [CIRCLE, STAR, MOON, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Tunisia",
            fr: "https://fr.wikipedia.org/wiki/Tunisie",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Turkmenistan",
            fr: "Turkménistan",
        },
        code: "tm",
        flag: {
            file: "Flag_of_Turkmenistan.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Turkmenistan",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Turkm%C3%A9nistan",
            },
            ratio: 3 / 2,
            tags: [VERTICAL_STRIPES, EMBLEM, MOON, STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Turkmenistan",
            fr: "https://fr.wikipedia.org/wiki/Turkménistan",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Turkey",
            fr: "Turquie",
        },
        longName: {
            en: "Republic of Türkiye",
            fr: "République de Turquie",
        },
        code: "tr",
        flag: {
            file: "Flag_of_Turkey.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Turkey",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Turquie",
            },
            ratio: 3 / 2,
            tags: [MOON, STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Turkey",
            fr: "https://fr.wikipedia.org/wiki/Turquie",
        },
        tags: [EUROPE, ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Ukraine",
            fr: "Ukraine",
        },
        code: "ua",
        flag: {
            file: "Flag_of_Ukraine.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Ukraine",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l%27Ukraine",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Ukraine",
            fr: "https://fr.wikipedia.org/wiki/Ukraine",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Uruguay",
            fr: "Uruguay",
        },
        longName: {
            en: "Oriental Republic of Uruguay",
            fr: "République orientale de l'Uruguay",
        },
        code: "uy",
        flag: {
            file: "Flag_of_Uruguay.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Uruguay",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l%27Uruguay",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, SUN, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Uruguay",
            fr: "https://fr.wikipedia.org/wiki/Uruguay",
        },
        tags: [SOUTH_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Venezuela",
            fr: "Venezuela",
        },
        longName: {
            en: "Bolivarian Republic of Venezuela",
            fr: "République bolivarienne du Venezuela",
        },
        code: "ve",
        flag: {
            file: "Flag_of_Venezuela.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Venezuela",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Venezuela",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES, STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Venezuela",
            fr: "https://fr.wikipedia.org/wiki/Venezuela",
        },
        tags: [SOUTH_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Vietnam",
            fr: "Viêt Nam",
        },
        longName: {
            en: "Socialist Republic of Vietnam",
            fr: "République socialiste du Viêt Nam",
        },
        code: "vn",
        flag: {
            file: "Flag_of_Vietnam.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Vietnam",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Vi%C3%AAt_Nam",
            },
            ratio: 3 / 2,
            tags: [STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Vietnam",
            fr: "https://fr.wikipedia.org/wiki/Vi%C3%AAt_Nam",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Yemen",
            fr: "Yémen",
        },
        longName: {
            en: "Republic of Yemen",
            fr: "République du Yémen",
        },
        code: "ye",
        flag: {
            file: "Flag_of_Yemen.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Yemen",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Y%C3%A9men",
            },
            ratio: 3 / 2,
            tags: [HORIZONTAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Yemen",
            fr: "https://fr.wikipedia.org/wiki/Y%C3%A9men",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Zambia",
            fr: "Zambie",
        },
        longName: {
            en: "Republic of Zambia",
            fr: "République de Zambie",
        },
        code: "zm",
        flag: {
            file: "Flag_of_Zambia.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Zambia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Zambie",
            },
            ratio: 3 / 2,
            tags: [VERTICAL_STRIPES, EMBLEM, EAGLE, ANIMAL, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Zambia",
            fr: "https://fr.wikipedia.org/wiki/Zambie",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Estonia",
            fr: "Estonie",
        },
        longName: {
            en: "Republic of Estonia",
            fr: "République d'Estonie",
        },
        code: "ee",
        flag: {
            file: "Flag_of_Estonia.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Estonia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l%27Estonie",
            },
            ratio: 11 / 7,
            tags: [HORIZONTAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Estonia",
            fr: "https://fr.wikipedia.org/wiki/Estonie",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Cambodia",
            fr: "Cambodge",
        },
        longName: {
            en: "Kingdom of Cambodia",
            fr: "Royaume du Cambodge",
        },
        code: "kh",
        flag: {
            file: "Flag_of_Cambodia.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Cambodia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Cambodge"
            },
            ratio: 25 / 16,
            tags: [HORIZONTAL_STRIPES, EMBLEM, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Cambodia",
            fr: "https://fr.wikipedia.org/wiki/Cambodge"
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Argentina",
            fr: "Argentine",
        },
        longName: {
            en: "Argentine Republic",
            fr: "République argentine",
        },
        code: "ar",
        flag: {
            file: "Flag_of_Argentina.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Argentina",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l%27Argentine"
            },
            ratio: 8 / 5,
            tags: [HORIZONTAL_STRIPES, SUN, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Argentina",
            fr: "https://fr.wikipedia.org/wiki/Argentine",
        },
        tags: [SOUTH_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Guatemala",
            fr: "Guatemala",
        },
        longName: {
            en: "Republic of Guatemala",
            fr: "République du Guatemala",
        },
        code: "gt",
        flag: {
            file: "Flag_of_Guatemala.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Guatemala",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Guatemala"
            },
            ratio: 8 / 5,
            tags: [VERTICAL_STRIPES, EMBLEM, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Guatemala",
            fr: "https://fr.wikipedia.org/wiki/Guatemala"
        },
        tags: [CENTRAL_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Palau",
            fr: "Palaos",
        },
        longName: {
            en: "Republic of Palau",
            fr: "République des Palaos",
        },
        code: "pw",
        flag: {
            file: "Flag_of_Palau.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Palau",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_des_Palaos",
            },
            ratio: 8 / 5,
            tags: [CIRCLE, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Palau",
            fr: "https://fr.wikipedia.org/wiki/Palaos",
        },
        tags: [OCEANIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Poland",
            fr: "Pologne",
        },
        longName: {
            en: "Republic of Poland",
            fr: "République de Pologne",
        },
        code: "pl",
        flag: {
            file: "Flag_of_Poland.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Poland",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Pologne",
            },
            ratio: 8 / 5,
            tags: [HORIZONTAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Poland",
            fr: "https://fr.wikipedia.org/wiki/Pologne",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Sweden",
            fr: "Suède",
        },
        longName: {
            en: "Kingdom of Sweden",
            fr: "Royaume de Suède",
        },
        code: "se",
        flag: {
            file: "Flag_of_Sweden.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Sweden",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Su%C3%A8de",
            },
            ratio: 8 / 5,
            tags: [NORDIC_CROSS, CROSS],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Sweden",
            fr: "https://fr.wikipedia.org/wiki/Su%C3%A8de",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Togo",
            fr: "Togo",
        },
        longName: {
            en: "Togolese Republic",
            fr: "République togolaise",
        },
        code: "tg",
        flag: {
            file: "Flag_of_Togo.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Togo",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Togo",
            },
            ratio: 1.618033988749895, // Golden ratio
            tags: [HORIZONTAL_STRIPES, STAR, PANAFRICAN_COLORS, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Togo",
            fr: "https://fr.wikipedia.org/wiki/Togo",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Finland",
            fr: "Finlande",
        },
        longName: {
            en: "Republic of Finland",
            fr: "République de Finlande",
        },
        code: "fi",
        flag: {
            file: "Flag_of_Finland.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Finland",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Finlande",
            },
            ratio: 18 / 11,
            tags: [NORDIC_CROSS, CROSS],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Finland",
            fr: "https://fr.wikipedia.org/wiki/Finlande",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Germany",
            fr: "Allemagne",
        },
        longName: {
            en: "Federal Republic of Germany",
            fr: "République fédérale d'Allemagne",
        },
        code: "de",
        flag: {
            file: "Flag_of_Germany.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Germany",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l%27Allemagne",
            },
            ratio: 5 / 3,
            tags: [HORIZONTAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Germany",
            fr: "https://fr.wikipedia.org/wiki/Allemagne",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Bahrain",
            fr: "Bahreïn",
        },
        longName: {
            en: "Kingdom of Bahrain",
            fr: "Royaume de Bahreïn",
        },
        code: "bh",
        flag: {
            file: "Flag_of_Bahrain.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Bahrain",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_Bahre%C3%AFn"
            },
            ratio: 5 / 3,
            tags: [VERTICAL_STRIPES, SERRATED]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Bahrain",
            fr: "https://fr.wikipedia.org/wiki/Bahre%C3%AFn"
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Bangladesh",
            fr: "Bangladesh",
        },
        longName: {
            en: "People's Republic of Bangladesh",
            fr: "République populaire du Bangladesh",
        },
        code: "bd",
        flag: {
            file:
                "Flag_of_Bangladesh.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Bangladesh",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Bangladesh"
            },
            ratio: 5 / 3,
            tags: [CIRCLE, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Bangladesh",
            fr: "https://fr.wikipedia.org/wiki/Bangladesh"
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Bulgaria",
            fr: "Bulgarie",
        },
        longName: {
            en: "Republic of Bulgaria",
            fr: "République de Bulgarie",
        },
        code: "bg",
        flag: {
            file: "Flag_of_Bulgaria.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Bulgaria",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Bulgarie",
            },
            ratio: 5 / 3,
            tags: [HORIZONTAL_STRIPES],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Bulgaria",
            fr: "https://fr.wikipedia.org/wiki/Bulgarie",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Burundi",
            fr: "Burundi",
        },
        longName: {
            en: "Republic of Burundi",
            fr: "République du Burundi",
        },
        code: "bi",
        flag: {
            file: "Flag_of_Burundi.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Burundi",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Burundi"
            },
            ratio: 5 / 3,
            tags: [DIAGONAL, BACKDIAGONAL, STAR, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Burundi",
            fr: "https://fr.wikipedia.org/wiki/Burundi"
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Comoros",
            fr: "Comores",
        },
        longName: {
            en: "Union of the Comoros",
            fr: "Union des Comores",
        },
        code: "km",
        flag: {
            file: "Flag_of_the_Comoros.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_the_Comoros",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_des_Comores"
            },
            ratio: 5 / 3,
            tags: [HORIZONTAL_STRIPES, EMBLEM, TRIANGLE, STAR, MOON, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Comoros",
            fr: "https://fr.wikipedia.org/wiki/Comores_(pays)",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Costa Rica",
            fr: "Costa Rica",
        },
        longName: {
            en: "Republic of Costa Rica",
            fr: "République du Costa Rica",
        },
        code: "cr",
        flag: {
            file: "Flag_of_Costa_Rica.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Costa_Rica",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Costa_Rica"
            },
            ratio: 5 / 3,
            tags: [HORIZONTAL_STRIPES]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Costa_Rica",
            fr: "https://fr.wikipedia.org/wiki/Costa_Rica"
        },
        tags: [CENTRAL_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Grenada",
            fr: "Grenade",
        },
        code: "gd",
        flag: {
            file: "Flag_of_Grenada.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Grenada",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Grenade",
            },
            ratio: 5 / 3,
            tags: [DIAGONAL, BACKDIAGONAL, STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Grenada",
            fr: "https://fr.wikipedia.org/wiki/Grenade_(pays)",
        },
        tags: [CARIBBEAN],
        type: COUNTRY,
    },
    {
        name: {
            en: "Guyana",
            fr: "Guyana",
        },
        longName: {
            en: "Co-operative Republic of Guyana",
            fr: "République coopérative du Guyana",
        },
        code: "gy",
        flag: {
            file: "Flag_of_Guyana.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Guyana",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Guyana"
            },
            ratio: 5 / 3,
            tags: [TRIANGLE, PANAFRICAN_COLORS]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Guyana",
            fr: "https://fr.wikipedia.org/wiki/Guyana"
        },
        tags: [SOUTH_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Haiti",
            fr: "Haïti",
        },
        longName: {
            en: "Republic of Haiti",
            fr: "République d'Haïti",
        },
        code: "ht",
        flag: {
            file: "Flag_of_Haiti.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Haiti",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_d%27Ha%C3%AFti"
            },
            ratio: 5 / 3,
            tags: [HORIZONTAL_STRIPES, EMBLEM, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Haiti",
            fr: "https://fr.wikipedia.org/wiki/Ha%C3%AFti"
        },
        tags: [CARIBBEAN],
        type: COUNTRY,
    },
    {
        name: {
            en: "Kyrgyzstan",
            fr: "Kirghizistan",
        },
        longName: {
            en: "Kyrgyz Republic",
            fr: "République kirghize",
        },
        code: "kg",
        flag: {
            file: "Flag_of_Kyrgyzstan.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Kyrgyzstan",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Kirghizistan"
            },
            ratio: 5 / 3,
            tags: [EMBLEM, SUN, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Kyrgyzstan",
            fr: "https://fr.wikipedia.org/wiki/Kirghizistan"
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Liechtenstein",
            fr: "Liechtenstein",
        },
        longName: {
            en: "Principality of Liechtenstein",
            fr: "Principauté du Liechtenstein",
        },
        code: "li",
        flag: {
            file: "Flag_of_Liechtenstein.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Liechtenstein",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Liechtenstein"
            },
            ratio: 5 / 3,
            tags: [HORIZONTAL_STRIPES, EMBLEM, CROWN, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Liechtenstein",
            fr: "https://fr.wikipedia.org/wiki/Liechtenstein"
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Lithuania",
            fr: "Lituanie",
        },
        longName: {
            en: "Republic of Lithuania",
            fr: "République de Lituanie",
        },
        code: "lt",
        flag: {
            file: "Flag_of_Lithuania.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Lithuania",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Lituanie"
            },
            ratio: 5 / 3,
            tags: [HORIZONTAL_STRIPES]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Lithuania",
            fr: "https://fr.wikipedia.org/wiki/Lituanie"
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Luxembourg",
            fr: "Luxembourg",
        },
        longName: {
            en: "Grand Duchy of Luxembourg",
            fr: "Grand-Duché de Luxembourg",
        },
        code: "lu",
        flag: {
            file: "Flag_of_Luxembourg.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Luxembourg",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Luxembourg"
            },
            ratio: 5 / 3,
            tags: [HORIZONTAL_STRIPES]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Luxembourg",
            fr: "https://fr.wikipedia.org/wiki/Luxembourg"
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Nicaragua",
            fr: "Nicaragua",
        },
        longName: {
            en: "Republic of Nicaragua",
            fr: "République du Nicaragua",
        },
        code: "ni",
        flag: {
            file: "Flag_of_Nicaragua.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Nicaragua",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Nicaragua"
            },
            ratio: 5 / 3,
            tags: [HORIZONTAL_STRIPES, EMBLEM, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Nicaragua",
            fr: "https://fr.wikipedia.org/wiki/Nicaragua"
        },
        tags: [CENTRAL_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "United Kingdom",
            fr: "Royaume-Uni",
        },
        longName: {
            en: "United Kingdom of Great Britain and Northern Ireland",
            fr: "Royaume-Uni de Grande-Bretagne et d'Irlande du Nord",
        },
        code: "gb",
        flag: {
            file: "Flag_of_the_United_Kingdom_(3-5).svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_the_United_Kingdom",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Royaume-Uni",
            },
            ratio: 5 / 3,
            tags: [UNION_JACK],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/United_Kingdom",
            fr: "https://fr.wikipedia.org/wiki/Royaume-Uni",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Trinidad and Tobago",
            fr: "Trinité-et-Tobago",
        },
        longName: {
            en: "Republic of Trinidad and Tobago",
            fr: "République de Trinité-et-Tobago",
        },
        code: "tt",
        flag: {
            file: "Flag_of_Trinidad_and_Tobago.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Trinidad_and_Tobago",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_Trinit%C3%A9-et-Tobago"
            },
            ratio: 5 / 3,
            tags: [BACKDIAGONAL]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Trinidad_and_Tobago",
            fr: "https://fr.wikipedia.org/wiki/Trinit%C3%A9-et-Tobago"
        },
        tags: [CARIBBEAN],
        type: COUNTRY,
    },
    {
        name: {
            en: "Iran",
            fr: "Iran",
        },
        longName: {
            en: "Islamic Republic of Iran",
            fr: "République islamique d'Iran",
        },
        code: "ir",
        flag: {
            file: "Flag_of_Iran_(official).svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Iran",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l%27Iran",
            },
            ratio: 7 / 4,
            tags: [HORIZONTAL_STRIPES, EMBLEM, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Iran",
            fr: "https://fr.wikipedia.org/wiki/Iran",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Mexico",
            fr: "Mexique",
        },
        longName: {
            en: "United Mexican States",
            fr: "États-Unis mexicains",
        },
        code: "mx",
        flag: {
            file: "Flag_of_Mexico.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Mexico",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Mexique",
            },
            ratio: 7 / 4,
            tags: [VERTICAL_STRIPES, EMBLEM, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Mexico",
            fr: "https://fr.wikipedia.org/wiki/Mexique",
        },
        tags: [NORTH_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "El Salvador",
            fr: "Salvador",
        },
        longName: {
            en: "Republic of El Salvador",
            fr: "République du Salvador",
        },
        code: "sv",
        flag: {
            file: "Flag_of_El_Salvador.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_El_Salvador",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Salvador",
            },
            ratio: 335 / 189,
            tags: [HORIZONTAL_STRIPES, EMBLEM, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/El_Salvador",
            fr: "https://fr.wikipedia.org/wiki/Salvador",
        },
        tags: [CENTRAL_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Paraguay",
            fr: "Paraguay",
        },
        longName: {
            en: "Republic of Paraguay",
            fr: "République du Paraguay",
        },
        code: "py",
        flag: {
            file: "Flag_of_Paraguay.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Paraguay",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Paraguay",
            },
            ratio: 20 / 11,
            tags: [HORIZONTAL_STRIPES, EMBLEM, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Paraguay",
            fr: "https://fr.wikipedia.org/wiki/Paraguay",
        },
        tags: [SOUTH_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Vanuatu",
            fr: "Vanuatu",
        },
        longName: {
            en: "Republic of Vanuatu",
            fr: "République de Vanuatu",
        },
        code: "vu",
        flag: {
            file: "Flag_of_Vanuatu_(official).svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Vanuatu",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Vanuatu",
            },
            ratio: 36 / 19,
            tags: [TRIANGLE, EMBLEM, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Vanuatu",
            fr: "https://fr.wikipedia.org/wiki/Vanuatu",
        },
        tags: [OCEANIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "United States",
            fr: "États-Unis",
        },
        longName: {
            en: "United States of America",
            fr: "États-Unis d'Amérique",
        },
        code: "us",
        flag: {
            file: "Flag_of_the_United_States.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_the_United_States",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_des_%C3%89tats-Unis",
            },
            ratio: 19 / 10,
            tags: [HORIZONTAL_STRIPES, STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/United_States",
            fr: "https://fr.wikipedia.org/wiki/États-Unis",
        },
        tags: [NORTH_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Liberia",
            fr: "Liberia",
        },
        longName: {
            en: "Republic of Liberia",
            fr: "République du Libéria",
        },
        code: "lr",
        flag: {
            file: "Flag_of_Liberia.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Liberia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Liberia",
            },
            ratio: 19 / 10,
            tags: [HORIZONTAL_STRIPES, STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Liberia",
            fr: "https://fr.wikipedia.org/wiki/Liberia",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Marshall Islands",
            fr: "Îles Marshall",
        },
        longName: {
            en: "Republic of the Marshall Islands",
            fr: "République des Îles Marshall",
        },
        code: "mh",
        flag: {
            file: "Flag_of_the_Marshall_Islands.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_the_Marshall_Islands",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_des_%C3%8Eles_Marshall"
            },
            ratio: 19 / 10,
            tags: [DIAGONAL, STAR, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Marshall_Islands",
            fr: "https://fr.wikipedia.org/wiki/%C3%8Eles_Marshall"
        },
        tags: [OCEANIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Micronesia",
            fr: "Micronésie",
        },
        longName: {
            en: "Federated States of Micronesia",
            fr: "États fédérés de Micronésie"
        },
        code: "fm",
        flag:
        {
            file: "Flag_of_the_Federated_States_of_Micronesia.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_the_Federated_States_of_Micronesia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_des_%C3%89tats_f%C3%A9d%C3%A9r%C3%A9s_de_Micron%C3%A9sie"
            },
            ratio: 19 / 10,
            tags: [STAR, DECORATION]
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Federated_States_of_Micronesia",
            fr: "https://fr.wikipedia.org/wiki/États_fédérés_de_Micronésie",
        },
        tags: [OCEANIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Armenia",
            fr: "Arménie",
        },
        longName: {
            en: "Republic of Armenia",
            fr: "République d'Arménie",
        },
        code: "am",
        flag: {
            file: "Flag_of_Armenia.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Armenia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l%27Arm%C3%A9nie"
            },
            ratio: 2 / 1,
            tags: [HORIZONTAL_STRIPES]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Armenia",
            fr: "https://fr.wikipedia.org/wiki/Arm%C3%A9nie"
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Australia",
            fr: "Australie",
        },
        longName: {
            en: "Commonwealth of Australia",
            fr: "Commonwealth d'Australie",
        },
        code: "au",
        flag: {
            file: "Flag_of_Australia.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Australia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l%27Australie"
            },
            ratio: 2 / 1,
            tags: [UNION_JACK, STAR, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Australia",
            fr: "https://fr.wikipedia.org/wiki/Australie"
        },
        tags: [OCEANIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Azerbaijan",
            fr: "Azerbaïdjan",
        },
        longName: {
            en: "Republic of Azerbaijan",
            fr: "République d'Azerbaïdjan",
        },
        code: "az",
        flag: {
            file: "Flag_of_Azerbaijan.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Azerbaijan",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l%27Azerba%C3%AFdjan"
            },
            ratio: 2 / 1,
            tags: [HORIZONTAL_STRIPES, MOON, STAR, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Azerbaijan",
            fr: "https://fr.wikipedia.org/wiki/Azerba%C3%AFdjan"
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Bahamas",
            fr: "Bahamas",
        },
        longName: {
            en: "Commonwealth of the Bahamas",
            fr: "Commonwealth des Bahamas",
        },
        code: "bs",
        flag: {
            file: "Flag_of_the_Bahamas.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_the_Bahamas",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_des_Bahamas"
            },
            ratio: 2 / 1,
            tags: [TRIANGLE, HORIZONTAL_STRIPES]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Bahamas",
            fr: "https://fr.wikipedia.org/wiki/Bahamas"
        },
        tags: [CARIBBEAN],
        type: COUNTRY,
    },
    {
        name: {
            en: "Belarus",
            fr: "Biélorussie",
        },
        longName: {
            en: "Republic of Belarus",
            fr: "République de Biélorussie",
        },
        code: "by",
        flag: {
            file: "Flag_of_Belarus.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Belarus",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Bi%C3%A9lorussie",
            },
            ratio: 2 / 1,
            tags: [HORIZONTAL_STRIPES, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Belarus",
            fr: "https://fr.wikipedia.org/wiki/Biélorussie",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Bosnia-Herzegovina",
            fr: "Bosnie-Herzégovine",
        },
        longName: {
            en: "Bosnia and Herzegovina",
            fr: "Bosnie-et-Herzégovine",
        },
        code: "ba",
        flag: {
            file: "Flag_of_Bosnia_and_Herzegovina.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Bosnia_and_Herzegovina",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Bosnie-Herz%C3%A9govine",
            },
            ratio: 2 / 1,
            tags: [STAR, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina",
            fr: "https://fr.wikipedia.org/wiki/Bosnie-Herzégovine",
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Brunei",
            fr: "Brunei",
        },
        longName: {
            en: "Brunei Darussalam",
            fr: "Brunei Darussalam",
        },
        code: "bn",
        flag: {
            file: "Flag_of_Brunei.svg",
            wikipedia: {
                en: "https://en.wikipedia.org/wiki/Flag_of_Brunei",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Brunei",
            },
            ratio: 2 / 1,
            tags: [BACKDIAGONAL, EMBLEM, DECORATION],
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/Brunei",
            fr: "https://fr.wikipedia.org/wiki/Brunei",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Canada",
            fr: "Canada",
        },
        code: "ca",
        flag: {
            file: "Flag_of_Canada.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Canada",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Canada"
            },
            ratio: 2 / 1,
            tags: [VERTICAL_STRIPES, EMBLEM, MAPLE_LEAF, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Canada",
            fr: "https://fr.wikipedia.org/wiki/Canada"
        },
        tags: [NORTH_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "North Korea",
            fr: "Corée du Nord",
        },
        longName: {
            en: "Democratic People's Republic of Korea",
            fr: "République populaire démocratique de Corée",
        },
        code: "kp",
        flag: {
            file: "Flag_of_North_Korea.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_North_Korea",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Cor%C3%A9e_du_Nord"
            },
            ratio: 2 / 1,
            tags: [HORIZONTAL_STRIPES, EMBLEM, CIRCLE, STAR, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/North_Korea",
            fr: "https://fr.wikipedia.org/wiki/Cor%C3%A9e_du_Nord"
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Croatia",
            fr: "Croatie",
        },
        longName: {
            en: "Republic of Croatia",
            fr: "République de Croatie",
        },
        code: "hr",
        flag: {
            file: "Flag_of_Croatia.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Croatia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Croatie"
            },
            ratio: 2,
            tags: [HORIZONTAL_STRIPES, EMBLEM, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Croatia",
            fr: "https://fr.wikipedia.org/wiki/Croatie"
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Cuba",
            fr: "Cuba",
        },
        longName: {
            en: "Republic of Cuba",
            fr: "République de Cuba",
        },
        code: "cu",
        flag: {
            file: "Flag_of_Cuba.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Cuba",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_Cuba"
            },
            ratio: 2 / 1,
            tags: [HORIZONTAL_STRIPES, TRIANGLE, STAR, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Cuba",
            fr: "https://fr.wikipedia.org/wiki/Cuba"
        },
        tags: [CARIBBEAN],
        type: COUNTRY,
    },
    {
        name: {
            en: "Dominica",
            fr: "Dominique",
        },
        longName: {
            en: "Commonwealth of Dominica",
            fr: "Commonwealth de la Dominique",
        },
        code: "dm",
        flag: {
            file: "Flag_of_Dominica.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Dominica",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Dominique"
            },
            ratio: 2 / 1,
            tags: [CROSS, EMBLEM, STAR, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Dominica",
            fr: "https://fr.wikipedia.org/wiki/Dominique_(pays)"
        },
        tags: [CARIBBEAN],
        type: COUNTRY,
    },
    {
        name: {
            en: "United Arab Emirates",
            fr: "Émirats arabes unis",
        },
        code: "ae",
        flag: {
            file: "Flag_of_the_United_Arab_Emirates.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_the_United_Arab_Emirates",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_des_%C3%89mirats_arabes_unis"
            },
            ratio: 2 / 1,
            tags: [HORIZONTAL_STRIPES, PAN_ARAB_COLORS]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/United_Arab_Emirates",
            fr: "https://fr.wikipedia.org/wiki/%C3%89mirats_arabes_unis"
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Eritrea",
            fr: "Érythrée",
        },
        longName: {
            en: "State of Eritrea",
            fr: "État d'Érythrée",
        },
        code: "er",
        flag: {
            file: "Flag_of_Eritrea.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Eritrea",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l%27%C3%89rythr%C3%A9e"
            },
            ratio: 2 / 1,
            tags: [TRIANGLE, EMBLEM, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Eritrea",
            fr: "https://fr.wikipedia.org/wiki/%C3%89rythr%C3%A9e"
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Ethiopia",
            fr: "Éthiopie",
        },
        longName: {
            en: "Federal Democratic Republic of Ethiopia",
            fr: "République démocratique fédérale d'Éthiopie",
        },
        code: "et",
        flag: {
            file: "Flag_of_Ethiopia.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Ethiopia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l%27%C3%89thiopie"
            },
            ratio: 2 / 1,
            tags: [HORIZONTAL_STRIPES, EMBLEM, STAR, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Ethiopia",
            fr: "https://fr.wikipedia.org/wiki/%C3%89thiopie"
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Fiji",
            fr: "Fidji",
        },
        longName: {
            en: "Republic of Fiji",
            fr: "République des Fidji",
        },
        code: "fj",
        flag: {
            file: "Flag_of_Fiji.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Fiji",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_des_Fidji"
            },
            ratio: 2 / 1,
            tags: [UNION_JACK, EMBLEM, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Fiji",
            fr: "https://fr.wikipedia.org/wiki/Fidji"
        },
        tags: [OCEANIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Guinea-Bissau",
            fr: "Guinée-Bissau",
        },
        longName: {
            en: "Republic of Guinea-Bissau",
            fr: "République de Guinée-Bissau",
        },
        code: "gw",
        flag: {
            file: "Flag_of_Guinea-Bissau.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Guinea-Bissau",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Guin%C3%A9e-Bissau"
            },
            ratio: 2 / 1,
            tags: [HORIZONTAL_STRIPES, STAR, DECORATION, PANAFRICAN_COLORS]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Guinea-Bissau",
            fr: "https://fr.wikipedia.org/wiki/Guin%C3%A9e-Bissau"
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Honduras",
            fr: "Honduras",
        },
        longName: {
            en: "Republic of Honduras",
            fr: "République du Honduras",
        },
        code: "hn",
        flag: {
            file: "Flag_of_Honduras_(2022-).svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Honduras",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Honduras"
            },
            ratio: 2 / 1,
            tags: [HORIZONTAL_STRIPES, STAR, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Honduras",
            fr: "https://fr.wikipedia.org/wiki/Honduras"
        },
        tags: [CENTRAL_AMERICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Hungary",
            fr: "Hongrie",
        },
        code: "hu",
        flag: {
            file: "Flag_of_Hungary.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Hungary",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Hongrie"
            },
            ratio: 2 / 1,
            tags: [HORIZONTAL_STRIPES]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Hungary",
            fr: "https://fr.wikipedia.org/wiki/Hongrie"
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Ireland",
            fr: "Irlande",
        },
        longName: {
            en: "Republic of Ireland",
            fr: "République d'Irlande",
        },
        code: "ie",
        flag: {
            file: "Flag_of_Ireland.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Ireland",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l%27Irlande"
            },
            ratio: 2,
            tags: [VERTICAL_STRIPES]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Republic_of_Ireland",
            fr: "https://fr.wikipedia.org/wiki/Irlande_(pays)"
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Cook Islands",
            fr: "Îles Cook",
        },
        code: "ck",
        flag: {
            file: "Flag_of_the_Cook_Islands.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_the_Cook_Islands",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_des_%C3%8Eles_Cook"
            },
            ratio: 2,
            tags: [UNION_JACK, STAR, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Cook_Islands",
            fr: "https://fr.wikipedia.org/wiki/%C3%8Eles_Cook"
        },
        tags: [OCEANIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Jamaica",
            fr: "Jamaïque",
        },
        code: "jm",
        flag: {
            file: "Flag_of_Jamaica.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Jamaica",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Jama%C3%AFque"
            },
            ratio: 2,
            tags: [DIAGONAL, BACKDIAGONAL]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Jamaica",
            fr: "https://fr.wikipedia.org/wiki/Jamaïque"
        },
        tags: [CARIBBEAN],
        type: COUNTRY,
    },
    {
        name: {
            en: "Jordan",
            fr: "Jordanie",
        },
        longName: {
            en: "Hashemite Kingdom of Jordan",
            fr: "Royaume hachémite de Jordanie",
        },
        code: "jo",
        flag: {
            file: "Flag_of_Jordan.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Jordan",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Jordanie"
            },
            ratio: 2,
            tags: [TRIANGLE, HORIZONTAL_STRIPES, PAN_ARAB_COLORS, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Jordan",
            fr: "https://fr.wikipedia.org/wiki/Jordanie"
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Kazakhstan",
            fr: "Kazakhstan",
        },
        longName: {
            en: "Republic of Kazakhstan",
            fr: "République du Kazakhstan",
        },
        code: "kz",
        flag: {
            file: "Flag_of_Kazakhstan.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Kazakhstan",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Kazakhstan"
            },
            ratio: 2,
            tags: [EMBLEM, SUN, EAGLE, ANIMAL, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Kazakhstan",
            fr: "https://fr.wikipedia.org/wiki/Kazakhstan"
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Kiribati",
            fr: "Kiribati",
        },
        longName: {
            en: "Republic of Kiribati",
            fr: "République de Kiribati",
        },
        code: "ki",
        flag: {
            file: "Flag_of_Kiribati.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Kiribati",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_des_Kiribati"
            },
            ratio: 2,
            tags: [SUN, BIRD, ANIMAL, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Kiribati",
            fr: "https://fr.wikipedia.org/wiki/Kiribati"
        },
        tags: [OCEANIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Kuwait",
            fr: "Koweït",
        },
        longName: {
            en: "State of Kuwait",
            fr: "État du Koweït",
        },
        code: "kw",
        flag: {
            file: "Flag_of_Kuwait.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Kuwait",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Kowe%C3%AFt"
            },
            ratio: 2,
            tags: [HORIZONTAL_STRIPES, TRIANGLE, PAN_ARAB_COLORS]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Kuwait",
            fr: "https://fr.wikipedia.org/wiki/Koweït"
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Latvia",
            fr: "Lettonie",
        },
        longName: {
            en: "Republic of Latvia",
            fr: "République de Lettonie",
        },
        code: "lv",
        flag: {
            file: "Flag_of_Latvia.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Latvia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Lettonie"
            },
            ratio: 2,
            tags: [HORIZONTAL_STRIPES]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Latvia",
            fr: "https://fr.wikipedia.org/wiki/Lettonie"
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Libya",
            fr: "Libye",
        },
        longName: {
            en: "State of Libya",
            fr: "État de Libye",
        },
        code: "ly",
        flag: {
            file: "Flag_of_Libya.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Libya",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Libye"
            },
            ratio: 2,
            tags: [HORIZONTAL_STRIPES, EMBLEM, MOON, STAR, PAN_ARAB_COLORS, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Libya",
            fr: "https://fr.wikipedia.org/wiki/Libye"
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "North Macedonia",
            fr: "Macédoine du Nord",
        },
        longName: {
            en: "Republic of North Macedonia",
            fr: "République de Macédoine du Nord",
        },
        code: "mk",
        flag: {
            file: "Flag_of_North_Macedonia.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_North_Macedonia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Mac%C3%A9doine_du_Nord"
            },
            ratio: 2,
            tags: [SUN, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/North_Macedonia",
            fr: "https://fr.wikipedia.org/wiki/Mac%C3%A9doine_du_Nord"
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Malaysia",
            fr: "Malaisie",
        },
        longName: {
            en: "Federation of Malaysia",
            fr: "Fédération de Malaisie",
        },
        code: "my",
        flag: {
            file: "Flag_of_Malaysia.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Malaysia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Malaisie"
            },
            ratio: 2,
            tags: [HORIZONTAL_STRIPES, STAR, MOON, EMBLEM, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Malaysia",
            fr: "https://fr.wikipedia.org/wiki/Malaisie"
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Moldova",
            fr: "Moldavie",
        },
        longName: {
            en: "Republic of Moldova",
            fr: "République de Moldavie",
        },
        code: "md",
        flag: {
            file: "Flag_of_Moldova.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Moldova",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Moldavie"
            },
            ratio: 2,
            tags: [VERTICAL_STRIPES, EMBLEM, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Moldova",
            fr: "https://fr.wikipedia.org/wiki/Moldavie"
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Mongolia",
            fr: "Mongolie",
        },
        code: "mn",
        flag: {
            file: "Flag_of_Mongolia.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Mongolia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Mongolie"
            },
            ratio: 2,
            tags: [VERTICAL_STRIPES, EMBLEM, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Mongolia",
            fr: "https://fr.wikipedia.org/wiki/Mongolie"
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Montenegro",
            fr: "Monténégro",
        },
        code: "me",
        flag: {
            file: "Flag_of_Montenegro.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Montenegro",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Mont%C3%A9n%C3%A9gro"
            },
            ratio: 2,
            tags: [EAGLE, ANIMAL, EMBLEM, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Montenegro",
            fr: "https://fr.wikipedia.org/wiki/Mont%C3%A9n%C3%A9gro"
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Nauru",
            fr: "Nauru",
        },
        longName: {
            en: "Republic of Nauru",
            fr: "République de Nauru",
        },
        code: "nr",
        flag: {
            file: "Flag_of_Nauru.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Nauru",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_Nauru"
            },
            ratio: 2,
            tags: [HORIZONTAL_STRIPES, STAR, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Nauru",
            fr: "https://fr.wikipedia.org/wiki/Nauru"
        },
        tags: [OCEANIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Nigeria",
            fr: "Nigeria",
        },
        longName: {
            en: "Federal Republic of Nigeria",
            fr: "République fédérale du Nigeria",
        },
        code: "ng",
        flag: {
            file: "Flag_of_Nigeria.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Nigeria",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Nigeria"
            },
            ratio: 2,
            tags: [VERTICAL_STRIPES]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Nigeria",
            fr: "https://fr.wikipedia.org/wiki/Nigeria"
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Niue",
            fr: "Niue",
        },
        code: "nu",
        flag:
        {
            file: "Flag_of_Niue.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Niue",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_Niue"
            },
            ratio: 2,
            tags: [UNION_JACK, STAR, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Niue",
            fr: "https://fr.wikipedia.org/wiki/Niue"
        },
        tags: [OCEANIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "New Zealand",
            fr: "Nouvelle-Zélande",
        },
        code: "nz",
        flag: {
            file: "Flag_of_New_Zealand.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_New_Zealand",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Nouvelle-Z%C3%A9lande"
            },
            ratio: 2,
            tags: [UNION_JACK, STAR, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/New_Zealand",
            fr: "https://fr.wikipedia.org/wiki/Nouvelle-Z%C3%A9lande"
        },
        tags: [OCEANIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Oman",
            fr: "Oman",
        },
        longName: {
            en: "Sultanate of Oman",
            fr: "Sultanat d'Oman",
        },
        code: "om",
        flag: {
            file: "Flag_of_Oman.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Oman",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_d%27Oman"
            },
            ratio: 2,
            tags: [HORIZONTAL_STRIPES, EMBLEM, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Oman",
            fr: "https://fr.wikipedia.org/wiki/Oman"
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Uzbekistan",
            fr: "Ouzbékistan",
        },
        longName: {
            en: "Republic of Uzbekistan",
            fr: "République d'Ouzbékistan",
        },
        code: "uz",
        flag: {
            file: "Flag_of_Uzbekistan.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Uzbekistan",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_l%27Ouzb%C3%A9kistan"
            },
            ratio: 2,
            tags: [HORIZONTAL_STRIPES, MOON, STAR, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Uzbekistan",
            fr: "https://fr.wikipedia.org/wiki/Ouzbékistan"
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Palestine",
            fr: "Palestine",
        },
        longName: {
            en: "State of Palestine",
            fr: "État de Palestine",
        },
        code: "ps",
        flag: {
            file: "Flag_of_Palestine.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Palestine",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Palestine",
            },
            ratio: 2,
            tags: [HORIZONTAL_STRIPES, TRIANGLE, PAN_ARAB_COLORS]
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/State_of_Palestine",
            fr: "https://fr.wikipedia.org/wiki/État_de_Palestine",
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Philippines",
            fr: "Philippines",
        },
        longName: {
            en: "Republic of the Philippines",
            fr: "République des Philippines",
        },
        code: "ph",
        flag: {
            file: "Flag_of_the_Philippines.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_the_Philippines",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_des_Philippines"
            },
            ratio: 2,
            tags: [HORIZONTAL_STRIPES, TRIANGLE, STAR, SUN, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Philippines",
            fr: "https://fr.wikipedia.org/wiki/Philippines"
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Saint Lucia",
            fr: "Sainte-Lucie",
        },
        code: "lc",
        flag: {
            file: "Flag_of_Saint_Lucia.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Saint_Lucia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_Sainte-Lucie"
            },
            ratio: 2,
            tags: [EMBLEM, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Saint_Lucia",
            fr: "https://fr.wikipedia.org/wiki/Sainte-Lucie"
        },
        tags: [CARIBBEAN],
        type: COUNTRY,
    },
    {
        name: {
            en: "The Solomons",
            fr: "Salomon",
        },
        longName: {
            en: "Solomon Islands",
            fr: "Îles Salomon",
        },
        code: "sb",
        flag: {
            file: "Flag_of_the_Solomon_Islands.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_the_Solomon_Islands",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_des_Salomon"
            },
            ratio: 2,
            tags: [DIAGONAL, STAR, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Solomon_Islands",
            fr: "https://fr.wikipedia.org/wiki/%C3%8Eles_Salomon"
        },
        tags: [OCEANIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Samoa",
            fr: "Samoa",
        },
        longName: {
            en: "Independent State of Samoa",
            fr: "État indépendant de Samoa",
        },
        code: "ws",
        flag: {
            file: "Flag_of_Samoa.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Samoa",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_des_Samoa"
            },
            ratio: 2,
            tags: [STAR, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Samoa",
            fr: "https://fr.wikipedia.org/wiki/Samoa"
        },
        tags: [OCEANIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "São Tomé and Príncipe",
            fr: "Sao Tomé-et-Principe",
        },
        longName: {
            en: "Democratic Republic of São Tomé and Príncipe",
            fr: "République démocratique de Sao Tomé-et-Principe",
        },
        code: "st",
        flag: {
            file: "Flag_of_São_Tomé_and_Príncipe.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_São_Tomé_and_Príncipe",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_Sao_Tom%C3%A9-et-Principe",
            },
            ratio: 2,
            tags: [HORIZONTAL_STRIPES, TRIANGLE, STAR, PANAFRICAN_COLORS, DECORATION]
        },
        wikipedia: {
            en: "https://en.wikipedia.org/wiki/São_Tomé_and_Príncipe",
            fr: "https://fr.wikipedia.org/wiki/Sao_Tomé-et-Principe",
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Seychelles",
            fr: "Seychelles",
        },
        longName: {
            en: "Republic of Seychelles",
            fr: "République des Seychelles",
        },
        code: "sc",
        flag: {
            file: "Flag_of_Seychelles.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Seychelles",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_des_Seychelles"
            },
            ratio: 2,
            tags: [DIAGONAL]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Seychelles",
            fr: "https://fr.wikipedia.org/wiki/Seychelles"
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Slovenia",
            fr: "Slovénie",
        },
        longName: {
            en: "Republic of Slovenia",
            fr: "République de Slovénie",
        },
        code: "si",
        flag: {
            file: "Flag_of_Slovenia.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Slovenia",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_de_la_Slov%C3%A9nie"
            },
            ratio: 2,
            tags: [HORIZONTAL_STRIPES, EMBLEM, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Slovenia",
            fr: "https://fr.wikipedia.org/wiki/Slovénie"
        },
        tags: [EUROPE],
        type: COUNTRY,
    },
    {
        name: {
            en: "Sudan",
            fr: "Soudan",
        },
        longName: {
            en: "Republic of the Sudan",
            fr: "République du Soudan",
        },
        code: "sd",
        flag: {
            file: "Flag_of_Sudan.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Sudan",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Soudan"
            },
            ratio: 2,
            tags: [HORIZONTAL_STRIPES, TRIANGLE, PAN_ARAB_COLORS]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Sudan",
            fr: "https://fr.wikipedia.org/wiki/Soudan"
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "South Sudan",
            fr: "Soudan du Sud",
        },
        longName: {
            en: "Republic of South Sudan",
            fr: "République du Soudan du Sud",
        },
        code: "ss",
        flag: {
            file: "Flag_of_South_Sudan.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_South_Sudan",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Soudan_du_Sud"
            },
            ratio: 2,
            tags: [HORIZONTAL_STRIPES, TRIANGLE, STAR, PAN_ARAB_COLORS, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/South_Sudan",
            fr: "https://fr.wikipedia.org/wiki/Soudan_du_Sud"
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Sri Lanka",
            fr: "Sri Lanka",
        },
        longName: {
            en: "Democratic Socialist Republic of Sri Lanka",
            fr: "République socialiste démocratique de Sri Lanka",
        },
        code: "lk",
        flag: {
            file: "Flag_of_Sri_Lanka.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Sri_Lanka",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Sri_Lanka"
            },
            ratio: 2,
            tags: [VERTICAL_STRIPES, EMBLEM, LION, ANIMAL, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Sri_Lanka",
            fr: "https://fr.wikipedia.org/wiki/Sri_Lanka"
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Tajikistan",
            fr: "Tadjikistan",
        },
        longName: {
            en: "Republic of Tajikistan",
            fr: "République du Tadjikistan",
        },
        code: "tj",
        flag: {
            file: "Flag_of_Tajikistan.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Tajikistan",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Tadjikistan"
            },
            ratio: 2,
            tags: [HORIZONTAL_STRIPES, EMBLEM, CROWN, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Tajikistan",
            fr: "https://fr.wikipedia.org/wiki/Tadjikistan"
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Timor-Leste",
            fr: "Timor oriental",
        },
        longName: {
            en: "Democratic Republic of Timor-Leste",
            fr: "République démocratique du Timor oriental",
        },
        code: "tl",
        flag: {
            file: "Flag_of_East_Timor.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_East_Timor",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Timor_oriental"
            },
            ratio: 2,
            tags: [TRIANGLE, STAR, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/East_Timor",
            fr: "https://fr.wikipedia.org/wiki/Timor_oriental"
        },
        tags: [ASIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Tonga",
            fr: "Tonga",
        },
        longName: {
            en: "Kingdom of Tonga",
            fr: "Royaume des Tonga",
        },
        code: "to",
        flag: {
            file: "Flag_of_Tonga.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Tonga",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_des_Tonga"
            },
            ratio: 2,
            tags: [CROSS, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Tonga",
            fr: "https://fr.wikipedia.org/wiki/Tonga"
        },
        tags: [OCEANIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Tuvalu",
            fr: "Tuvalu",
        },
        code: "tv",
        flag: {
            file: "Flag_of_Tuvalu.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Tuvalu",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_des_Tuvalu"
            },
            ratio: 2,
            tags: [UNION_JACK, STAR, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Tuvalu",
            fr: "https://fr.wikipedia.org/wiki/Tuvalu"
        },
        tags: [OCEANIA],
        type: COUNTRY,
    },
    {
        name: {
            en: "Zimbabwe",
            fr: "Zimbabwe",
        },
        longName: {
            en: "Republic of Zimbabwe",
            fr: "République du Zimbabwe",
        },
        code: "zw",
        flag: {
            file: "Flag_of_Zimbabwe.svg",
            wikipedia:
            {
                en: "https://en.wikipedia.org/wiki/Flag_of_Zimbabwe",
                fr: "https://fr.wikipedia.org/wiki/Drapeau_du_Zimbabwe"
            },
            ratio: 2,
            tags: [HORIZONTAL_STRIPES, TRIANGLE, STAR, BIRD, ANIMAL, DECORATION]
        },
        wikipedia:
        {
            en: "https://en.wikipedia.org/wiki/Zimbabwe",
            fr: "https://fr.wikipedia.org/wiki/Zimbabwe"
        },
        tags: [AFRICA],
        type: COUNTRY,
    },
]

window.countries = countries;
