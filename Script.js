
console.log.bind(console);
let intervalId;
intervalId = setInterval(() => {
  try {
    document.querySelectorAll('[role="banner"]').forEach(function (elem) {elem.style.backgroundColor = '#171b22'; elem.style.color = '#0b4e50'});
    document.getElementById("GInterface.Instances[2]_defaut_").style.backgroundColor = '#0e1117';
    document.querySelectorAll('.flex-contain ').forEach(function (elem) {elem.style.color = '#e7edf3';});
    document.querySelectorAll('.filtre-conteneur').forEach(function (elem) {elem.style.color = '#e7edf3'; elem.style.backgroundColor = "#171b22"});
    document.querySelectorAll('.wrap conteneur-item').forEach(function (elem) {elem.style.color = '#e7edf3'; elem.style.backgroundColor = "#171b22";});
    document.querySelectorAll('#id_86 h4').forEach(function (elem) {elem.style.backgroundColor = "#151c2f"; elem.style.border = "2px solid #2b467f"; elem.style.color = "#fff";});
    document.querySelectorAll('.with-color').forEach(function (elem) {elem.style.color = '#e7edf3'});
    document.querySelectorAll('.m-left').forEach(function (elem) {elem.style.color = 'rgb(125,125,125)'});
    document.querySelectorAll('label').forEach(function (elem) {elem.className = null; elem.style.color = "#0b4e50"});
    document.getElementById("id_83").style.color = "#e7edf3";
    document.querySelectorAll('header').forEach(function (elem) {elem.style.backgroundColor = '#171b22'; elem.style.border = "2px solid rgb(49, 54, 61)"; elem.style.borderTopLeftRadius = "8px"; elem.style.borderTopRightRadius = "8px"});
    document.querySelectorAll('#id_73, #id_88, #id_70, #id_49, #id_48, #id_61, #id_72, #id_64, #id_86, #id_83').forEach(function (elem) {elem.style.backgroundColor = '#0e1117'});
    document.querySelectorAll('#id_83 h4').forEach(function (elem) {elem.style.color = "#e7edf3";});
    clearInterval(intervalId)
  } catch (error) {
    
  }
}, 10);