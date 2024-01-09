/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("\r\n\r\n\r\ndocument.getElementById('coinToss').addEventListener('click', Münzwurf);\r\n\r\n\r\nfunction Münzwurf() {\r\n    let x = \"Kopf\";\r\n    let y = \"Zahl\";\r\n    document.getElementById('preTeamTable', 'team1Container', 'team2Container').innerHTML = \"\";\r\n\r\n\r\n    setTimeout(() => {\r\n        document.getElementById('parentContainer').innerHTML = \".\";\r\n    }, 200)\r\n    setTimeout(() => {\r\n        document.getElementById('parentContainer').innerHTML = \"..\";\r\n    }, 500)\r\n    setTimeout(() => {\r\n        document.getElementById('parentContainer').innerHTML = \"...\";\r\n    }, 800)\r\n\r\n\r\n    setTimeout(() => {\r\n        const münzwurf = Math.random() <= 0.5 ? x : y;\r\n\r\n        if (münzwurf == x) {\r\n            document.getElementById('parentContainer').innerHTML = \"Kopf\";\r\n            console.log(\"kopf1\");\r\n\r\n        } else {\r\n            document.getElementById('parentContainer').innerHTML = \"Zahl\";\r\n            console.log(\"zahl1\");\r\n        }\r\n    }\r\n        , 1500);\r\n};\r\n\r\n\r\nlet spielerListe = [];\r\n\r\ndocument.getElementById('spielerHinzufuegen').addEventListener('click', spielerHinzufuegen);\r\ndocument.getElementById('teamErstellen').addEventListener('click', erstelleTeams);\r\n\r\nfunction spielerHinzufuegen() {\r\n    const eingabe = document.getElementById('spielerEingabe');\r\n    const spielerName = eingabe.value;\r\n    if (spielerName) {\r\n        spielerListe.push(spielerName);\r\n        eingabe.value = '';\r\n        document.getElementById('parentContainer').innerHTML = \"\";\r\n        document.getElementById('preTeamTable').innerHTML = spielerListe;\r\n        console.log(spielerListe);\r\n    }\r\n}\r\n\r\nfunction mischeArray(array) {\r\n    for (let i = array.length - 1; i > 0; i--) {\r\n        const j = Math.floor(Math.random() * (i + 1));\r\n        [array[i], array[j]] = [array[j], array[i]];\r\n    }\r\n    return array;\r\n}\r\n\r\nfunction erstelleTeams() {\r\n\r\n    const gemischteSpieler = mischeArray([...spielerListe]);\r\n\r\n    const team1 = gemischteSpieler.slice(0, gemischteSpieler.length / 2);\r\n    const team2 = gemischteSpieler.slice(gemischteSpieler.length / 2);\r\n\r\n    document.getElementById('team1Container').innerHTML = \"Team 1: \" + team1.join(', ');\r\n    document.getElementById('team2Container').innerHTML = \"Team 2: \" + team2.join(', ');\r\n\r\n\r\n\r\n    console.log(team1, team2);\r\n}\r\n\r\ndocument.getElementById('listeLeeren').addEventListener('click', listeLeeren);\r\n\r\nfunction listeLeeren() {\r\n    spielerListe = [];\r\n    document.getElementById('preTeamTable', 'parentContainer', 'team1Container', 'team2Container').innerHTML = \"\";\r\n    console.log('Spielerliste geleert:', spielerListe);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://coincrew/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;