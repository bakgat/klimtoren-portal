/**
 * notosportal.info
 * FACTORY: EntryDate
 */

(function () {
    'use strict';

    angular
        .module('notosportal.info')
        .factory('EntryDate', EntryDate);

    /* @ngInject */
    function EntryDate(moment) {
        var service = {
                calculate: calculate
            },
            labels = {
                "BirthdayIs": "De geboortedatum van je kind is ",
                "WillAttend": "Je kind zal gaan naar ",
                "Regular": "een gewone kleuterschool",
                "RegularTitle": "Gewone kleuterschool:<br>",
                "Exceptional": "een buitengewone kleuterschool",
                "ExceptionalTitle": "Buitengewone kleuterschool:<br>",
                "BirthdayRepeat": "Je kind dat geboren is op ",
                "CanCommence": " mag starten in een kleuterklas op ",
                "CanCommenceEarliest": " mag starten in de kleuterklas op ",//" mag ten vroegste starten in een kleuterklas op ",
                "CanCommenceEarliestLaterDate": ". Wil je op een latere datum starten? Dat mag ook. Verwittig de school op welke dag je kind precies wil starten.",
                "Reminder": "Niet vergeten! Schrijf je kind op voorhand in. Wacht daar niet te lang mee. Ga best al een eerste keer informatie vragen op school als je kind nog maar 1 jaar oud is. Meer info: <a href='http://www.onderwijs.vlaanderen.be/inschrijven-in-een-school/' target='_blank'>Inschrijven in een school</a>",
                "ReminderFormer": "Opgelet! Wacht zeker niet tot ",
                "ReminderLatter": " om je kind in te schrijven in een school. <b>Schrijf op voorhand in.</b> Vraag al een eerste keer informatie aan de school als je kind negen of tien maanden oud is. Meer info: <a href='http://www.onderwijs.vlaanderen.be/inschrijven-in-een-school/' target='_blank'>Inschrijven in een school</a>",
                //LaterDate is here twice because we need two different IDs linked to the <a> tag, otherwise the second <a> tag never triggers the execution of the NextDate function
                "LaterDate": "Je wilt je kind laten starten op een latere datum? Klik <a id='triggerNext' href='javascript:void(0)' onclick='parent.triggerHidden()'>hier</a> voor de volgende instapdatum.",
                "LaterDate2": "Je wilt je kind laten starten op een latere datum? Klik <a id='triggerNext2' href='javascript:void(0)' onclick='parent.triggerHidden()'>hier</a> voor de volgende instapdatum.",
                "NextDateIs": "De eerstvolgende datum waarop je kind mag starten is ",
                "AnyDate": " mag op elke schooldag starten in een kleuterklas. <b>Je mag de datum zelf kiezen</b>. Verwittig de school op welke dag je kind precies zal starten. <br>Is je kind al bijna 6? Je kind is leerplichtig vanaf 1 september van het kalenderjaar waarin het 6 jaar geworden is of wordt.<br>Niet vergeten! Schrijf je kind op voorhand in. Wacht daar niet te lang mee. Vraag na op school hoe je kan inschrijven. Meer info: <a href='http://www.onderwijs.vlaanderen.be/inschrijven-in-een-school/' target='_blank'>Inschrijven in een school</a>",
                "AnyDate3former": " mag op elke schooldag starten in een kleuterklas. <b>Je mag de datum zelf kiezen, te beginnen vanaf ",
                "AnyDate3latter": "</b>. Verwittig de school op welke dag je kind precies zal starten.",// <br>Niet vergeten! Schrijf je kind op voorhand in. Wacht daar niet te lang mee. Vraag na op school hoe je kan inschrijven. Meer info: <a href='http://www.onderwijs.vlaanderen.be/inschrijven-in-een-school/' target='_blank'>Inschrijven in een school</a>",
                "ErrorCheckDate": "Foutmelding. <br><ul><li>Check of de geboortedatum juist is.</li><li>Of is je kind ouder dan zes? Deze tool berekent de instapdatum enkel voor kinderen jonger dan zes jaar.</li></ul>",
                //"ExceptionalResult" : " mag op elke schooldag starten in een kleuterklas. <b>Je mag de datum zelf kiezen</b>. Verwittig de school op welke dag je kind precies zal starten. <br> Niet vergeten! Schrijf je kind op voorhand in. Wacht daarmee niet te lang. Vraag na op school hoe je kan inschrijven. (Meer info: <a href='http://www.inschrijvingsrecht.be' target='_blank'>www.inschrijvingsrecht.be</a>)",
                "ExceptionalResult": " mag op elke schooldag starten in een kleuterklas. <b>Je mag de datum zelf kiezen</b>. Verwittig de school op welke dag je kind precies zal starten. <br> Niet vergeten! Schrijf je kind op voorhand in. Wacht daar niet te lang mee. Vraag na op school hoe je kan inschrijven. Meer info: <a href='http://www.onderwijs.vlaanderen.be/inschrijven-in-een-school/' target='_blank'>Inschrijven in een school</a>",
                "Calculate": "Bereken instapdatum",
                //"DateFormat" : "(dag/maand/jaar)",
                "Day": "dag",
                "Month": "maand",
                "Year": "jaar",
                "januari": "januari",
                "februari": "februari",
                "march": "maart",
                "april": "april",
                "may": "mei",
                "june": "juni",
                "july": "juli",
                "august": "augustus",
                "september": "september",
                "october": "oktober",
                "november": "november",
                "december": "december"
            },
            thisYear = moment().date('y'),
            idx = null,
            dates = null,
            holidays = null,
            holidaysMax = null;

        activate();

        return service;
        /////////////////


        function activate() {
            setHolidays();
        }


        function setHolidays() {
            // holidays are either b, e or s
            // b indicates a Beginning of a longer holiday eg. the easter holiday
            // e indicates the last day (or End) of a longer holiday
            // to avoid checking twice, weekends and easter monday (eg) are included in the longer holidays
            // s indicates a holiday of a Single day such as the first of may
            // keep in mind that the dojo library uses a zero based system for months, ie. januari is month 0, december is 11
            holidays = new Array();
            var i = 0;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2014, months: 2, days: 3});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2014, months: 2, days: 9});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2014, months: 3, days: 7});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2014, months: 3, days: 1});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2014, months: 4, days: 1});
            holidays[i][1] = "s";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2014, months: 4, days: 9});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2014, months: 5, days: 1});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2014, months: 6, days: 1});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2014, months: 7, days: 1});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2014, months: 9, days: 7});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2014, months: 0, days: 2});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2014, months: 0, days: 1});
            holidays[i][1] = "s";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2014, months: 1, days: 2});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2015, months: 0, days: 4});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2015, months: 1, days: 6});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2015, months: 1, days: 2});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2015, months: 3, days: 6});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2015, months: 3, days: 9});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2015, months: 4, days: 1});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2015, months: 4, days: 3});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2015, months: 4, days: 4});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2015, months: 4, days: 7});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2015, months: 6, days: 1});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2015, months: 7, days: 1});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2015, months: 0, days: 2});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2015, months: 0, days: 8});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2015, months: 0, days: 1});
            holidays[i][1] = "s";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2015, months: 1, days: 1});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2016, months: 0, days: 3});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2016, months: 1, days: 8});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2016, months: 1, days: 4});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2016, months: 2, days: 8});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2016, months: 3, days: 10});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2016, months: 4, days: 5});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2016, months: 4, days: 8});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2016, months: 6, days: 1});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2016, months: 7, days: 1});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2016, months: 9, days: 1});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2016, months: 0, days: 6});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2016, months: 0, days: 1});
            holidays[i][1] = "s";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2016, months: 0, days: 1});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2016, months: 0, days: 3});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2016, months: 1, days: 6});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2017, months: 0, days: 8});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2017, months: 1, days: 7});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2017, months: 2, days: 5});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2017, months: 3, days: 3});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2017, months: 3, days: 7});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2017, months: 3, days: 9});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2017, months: 4, days: 1});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2017, months: 4, days: 5});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2017, months: 4, days: 8});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2017, months: 6, days: 1});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2017, months: 7, days: 1});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2017, months: 9, days: 30});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2017, months: 0, days: 5});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2017, months: 1, days: 5});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2018, months: 0, days: 7});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2018, months: 1, days: 2});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2018, months: 1, days: 8});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2018, months: 3, days: 2});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2018, months: 3, days: 5});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2018, months: 4, days: 1});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2018, months: 4, days: 10});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2018, months: 4, days: 3});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2018, months: 5, days: 30});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2018, months: 8, days: 2});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2018, months: 9, days: 9});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2018, months: 0, days: 4});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2018, months: 1, days: 4});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2019, months: 0, days: 6});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2019, months: 2, days: 4});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2019, months: 2, days: 10});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2019, months: 3, days: 8});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2019, months: 3, days: 2});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2019, months: 4, days: 1});
            holidays[i][1] = "s";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2019, months: 4, days: 30});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2019, months: 5, days: 2});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2019, months: 5, days: 9});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2019, months: 8, days: 1});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2019, months: 9, days: 8});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2019, months: 0, days: 3});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2019, months: 0, days: 9});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2019, months: 0, days: 1});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2019, months: 1, days: 3});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2020, months: 0, days: 5});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2020, months: 1, days: 4});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2020, months: 2, days: 1});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2020, months: 3, days: 6});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2020, months: 3, days: 9});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2020, months: 4, days: 1});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2020, months: 4, days: 3});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2020, months: 4, days: 1});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2020, months: 4, days: 4});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2020, months: 6, days: 1});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2020, months: 7, days: 1});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2020, months: 0, days: 2});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2020, months: 0, days: 8});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2020, months: 0, days: 1});
            holidays[i][1] = "s";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2020, months: 1, days: 1});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2021, months: 0, days: 3});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2021, months: 1, days: 5});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2021, months: 1, days: 1});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2021, months: 3, days: 5});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2021, months: 3, days: 8});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2021, months: 4, days: 3});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2021, months: 4, days: 6});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2021, months: 6, days: 1});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2021, months: 7, days: 1});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2021, months: 9, days: 30});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2021, months: 0, days: 7});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2021, months: 0, days: 1});
            holidays[i][1] = "s";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2021, months: 1, days: 7});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2022, months: 0, days: 9});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2022, months: 1, days: 8});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2022, months: 2, days: 6});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2022, months: 3, days: 4});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2022, months: 3, days: 8});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2022, months: 4, days: 6});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2022, months: 4, days: 9});
            holidays[i][1] = "e";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2022, months: 6, days: 1});
            holidays[i][1] = "b";
            i++;
            holidays[i] = new Array();
            holidays[i][0] = moment({year: 2022, months: 7, days: 1});
            holidays[i][1] = "e";
            holidaysMax = i;
        }

        function schooldateCheck(inDate) {
            for (var i = 0; i < holidaysMax; i++) {

                if (holidays[i][1] == "s" && moment(inDate).isSame(holidays[i][0], 'day')) {// if inDate is a 'single' holiday, move the date one further
                    inDate = moment(inDate).add(1, 'd');
                }
                else if (holidays[i][1] == "b" && moment(inDate).isBetween(holidays[i][0], holidays[i + 1][0], 'day')) {// if inDate falls inside a longer holiday, move the date to the last day of the holiday, plus one
                    inDate = moment(holidays[i + 1][0]).add(1, 'd');
                }
            }
            var weekday = moment(inDate).day();
            if (weekday == 7) {// it's a saturday ... move to next sunday
                inDate = inDate.add(2, 'd');
            }
            else if (weekday == 1) {// it's a sunday ... move to next monday
                inDate = inDate.add(1, 'd');
            }
            return inDate;
        };

        function setupDates() {
            //array of known enrolement dates
            var dates = new Array(70);
            dates[0] = new Date(2013, 8, 2);
            dates[1] = new Date(2013, 10, 4);
            dates[2] = new Date(2014, 0, 6);
            dates[3] = new Date(2014, 1, 3);
            dates[4] = new Date(2014, 2, 10);
            dates[5] = new Date(2014, 3, 22);
            dates[6] = new Date(2014, 5, 2);

            dates[7] = new Date(2014, 8, 1);
            dates[8] = new Date(2014, 10, 3);
            dates[9] = new Date(2015, 0, 5);
            dates[10] = new Date(2015, 1, 2);
            dates[11] = new Date(2015, 1, 23), dates[12] = new Date(2015, 3, 20);
            dates[13] = new Date(2015, 4, 18);

            dates[14] = new Date(2015, 8, 1);
            dates[15] = new Date(2015, 10, 9);
            dates[16] = new Date(2016, 0, 4);
            dates[17] = new Date(2016, 1, 1);
            dates[18] = new Date(2016, 1, 15);
            dates[19] = new Date(2016, 3, 11);
            dates[20] = new Date(2016, 4, 9);

            dates[21] = new Date(2016, 8, 1);
            dates[22] = new Date(2016, 10, 7);
            dates[23] = new Date(2017, 0, 9);
            dates[24] = new Date(2017, 1, 1);
            dates[25] = new Date(2017, 2, 6);
            dates[26] = new Date(2017, 3, 18);
            dates[27] = new Date(2017, 4, 29);

            dates[28] = new Date(2017, 8, 1);
            dates[29] = new Date(2017, 10, 6);
            dates[30] = new Date(2018, 0, 8);
            dates[31] = new Date(2018, 1, 1);
            dates[32] = new Date(2018, 1, 19);
            dates[33] = new Date(2018, 3, 16);
            dates[34] = new Date(2018, 4, 14);

            dates[35] = new Date(2018, 8, 3);
            dates[36] = new Date(2018, 10, 5);
            dates[37] = new Date(2019, 0, 7);
            dates[38] = new Date(2019, 1, 1);
            dates[39] = new Date(2019, 2, 11);
            dates[40] = new Date(2019, 3, 23);
            dates[41] = new Date(2019, 5, 3);

            dates[42] = new Date(2019, 8, 2);
            dates[43] = new Date(2019, 10, 4);
            dates[44] = new Date(2020, 0, 6);
            dates[45] = new Date(2020, 1, 3);
            dates[47] = new Date(2020, 2, 2);
            dates[47] = new Date(2020, 3, 20);
            dates[48] = new Date(2020, 4, 25);

            dates[49] = new Date(2020, 8, 1);
            dates[50] = new Date(2020, 10, 9);
            dates[51] = new Date(2021, 0, 4);
            dates[52] = new Date(2021, 1, 1);
            dates[53] = new Date(2021, 1, 22);
            dates[54] = new Date(2021, 3, 19);
            dates[55] = new Date(2021, 4, 17);

            dates[56] = new Date(2021, 8, 1);
            dates[57] = new Date(2021, 10, 8);
            dates[58] = new Date(2022, 0, 3);
            dates[59] = new Date(2022, 1, 1);
            dates[60] = new Date(2022, 2, 7);
            dates[61] = new Date(2022, 3, 19);
            dates[62] = new Date(2022, 4, 30);

            dates[63] = new Date(2022, 8, 1);
            dates[64] = new Date(2022, 10, 7);
            dates[65] = new Date(2023, 0, 9);
            dates[66] = new Date(2023, 1, 1);
            dates[67] = new Date(2023, 1, 27);
            dates[68] = new Date(2023, 3, 17);
            dates[69] = new Date(2023, 4, 22);

            return dates;
        };

        function calculate(birthdate) {

            birthdate = moment(birthdate);

            dates = setupDates();

            if(birthdate.isAfter(holidays[holidays.length-1][0])) {
                return null;
            }

            var today = moment();
            var date2 = birthdate.clone();
            var date3 = birthdate.clone();

            date2.add(2, 'y').add(6, 'M');
            date3.add(3, 'y');

            var lessThan3 = today.isBefore(date3, 'd');


            if (lessThan3) {
                idx = -1;
                var found = false,
                    i = 0;
                while (!found) {
                    var tempDate = dates[i++],
                        c = date2.isBefore(tempDate, 'd') || date2.isSame(tempDate, 'd'),
                        ctoday = today.isBefore(tempDate, 'd') || today.isSame(tempDate, 'd');

                    if (c && ctoday) {
                        found = true;
                        idx = i - 1;
                    }
                }
                var schoolDate = dates[idx];


                if (date3.isBefore(schoolDate, 'd')) {
                    date3 = schooldateCheck(date3);
                    return null;
                } else {
                    return schoolDate;
                }
            }
        }
    }
})();
