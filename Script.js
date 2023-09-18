setTimeout(() => {
  const background = document.getElementById("GInterface.Instances[2]_defaut_");
  const elementsWithClass = document.querySelectorAll('.flex-contain ');
  const edt = document.getElementById("id_64");

  edt.style.backgroundColor = '#333';
  elementsWithClass.forEach(function (elem) {
    elem.style.color = '#c7c7c7';
  });

  background.style.backgroundColor = '#000';
}, 10000);




