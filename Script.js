setTimeout(() => {

  // Modification de theme

  const background = document.getElementById("GInterface.Instances[2]_defaut_");
  background.style.backgroundColor = '#0e1117';

  const flex_contain = document.querySelectorAll('.flex-contain ');
  flex_contain.forEach(function (elem) {elem.style.color = '#e7edf3';});

  const filtre_conteneur = document.querySelectorAll('.filtre-conteneur');
  filtre_conteneur.forEach(function (elem) {elem.style.color = '#e7edf3'; elem.style.backgroundColor = "#171b22"});

  const edt = document.getElementById("id_64");
  edt.style.backgroundColor = '#0e1117';

  const edt_header = document.querySelector('[title="Emploi du temps"]');
  edt_header.style.backgroundColor = '#171b22';

  const edt_border = document.getElementById("GInterface.Instances[2]_colonne_3")
  edt_border.style.border = "2px solid #31363d"

  const Travaux_à_faire_des_7_prochains_jours = document.querySelector('[title="Travaux à faire des 7 prochains jours"]');
  Travaux_à_faire_des_7_prochains_jours.style.backgroundColor = '#171b22';
  
  const homeworks_border = document.getElementById("GInterface.Instances[2]_colonne_2")
  homeworks_border.style.border = "2px solid #31363d"

  const homeworks = document.getElementById("id_86");
  homeworks.style.backgroundColor = '#0e1117';

  const listitem = document.querySelectorAll('.wrap conteneur-item');
  listitem.forEach(function (elem) {elem.style.color = '#e7edf3'; elem.style.backgroundColor = "#171b22"});
  
  const h4 = document.querySelectorAll('h4');
  //h4.forEach(function (elem) {elem.style.backgroundColor = "#171b22"});
}, 10000);


