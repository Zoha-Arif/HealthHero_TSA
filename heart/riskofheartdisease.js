function gender() {
  // male
  if (document.getElementById("a1").checked) {
    document.getElementById("age1").innerHTML = "26 - 44 years";
    document.getElementById("age2").innerHTML = "45 - 65 years";
  }
  // female
  else if (document.getElementById("b1").checked) {
    document.getElementById("age1").innerHTML = "26 - 54 years";
    document.getElementById("age2").innerHTML = "55 - 65 years";
  }
}

function age() {
  // 3-5
  if (document.getElementById("a2").checked) {
    document.getElementById("sleep1").innerHTML = "under 10 hours";
    document.getElementById("sleep2").innerHTML = "10 - 13 hours";
    document.getElementById("sleep3").innerHTML = "over 13 hours";
  }
  // 6-13
  else if (document.getElementById("b2").checked) {
    document.getElementById("sleep1").innerHTML = "under 9 hours";
    document.getElementById("sleep2").innerHTML = "9 - 11 hours";
    document.getElementById("sleep3").innerHTML = "over 11 hours";
  }
  // 14-17
  else if (document.getElementById("c2").checked) {
    document.getElementById("sleep1").innerHTML = "under 8 hours";
    document.getElementById("sleep2").innerHTML = "8 - 10 hours";
    document.getElementById("sleep3").innerHTML = "over 10 hours";
  }
  // 18-25 + 26-44 + 45-65
  else if (document.getElementById("d2").checked || document.getElementById("e2").checked || document.getElementById("f2").checked) {
    document.getElementById("sleep1").innerHTML = "under 7 hours";
    document.getElementById("sleep2").innerHTML = "7 - 9 hours";
    document.getElementById("sleep3").innerHTML = "over 9 hours";
  }
  // 65+
  else if (document.getElementById("g2").checked) {
    document.getElementById("sleep1").innerHTML = "under 7 hours";
    document.getElementById("sleep2").innerHTML = "7 - 8 hours";
    document.getElementById("sleep3").innerHTML = "over 8 hours";
  }
}

function system() {
  // customary
  if (document.getElementById("a3").checked) {
    document.getElementById("ftorm").innerHTML = "ft";
    document.getElementById("inorcm").innerHTML = "in";
    document.getElementById("lbsorkg").innerHTML = "lbs";
  }
  // metric
  else if (document.getElementById("b3").checked) {
    document.getElementById("ftorm").innerHTML = "m";
    document.getElementById("inorcm").innerHTML = "cm";
    document.getElementById("lbsorkg").innerHTML = "kg";
  }
}

let points = 0;

function bmi() {
  let height;
  if (document.getElementById("a3").checked) {
    height = Number(document.getElementById("ftorm").value) * 12 + Number(document.getElementById("inorcm").value);
  }
  else if (document.getElementById("b3").checked) {
    height = Number(document.getElementById("ftorm").value) * 100 + Number(document.getElementById("inorcm").value);
  }

  let weight = document.getElementById("lbsorkg").value;

  let bmi;
  if (document.getElementById("a3").checked) {
    bmi = ((703 * weight) / (Math.pow(height, 2))).toFixed(1);
  }
  else if (document.getElementById("b3").checked) {
    bmi = ((weight / (Math.pow(height, 2))) * 10000).toFixed(1);
  }

  if (bmi < 18.5) {
    points += 2.5;
  }
  else if (bmi >= 18.5 && bmi <= 24.9) {
    points += 0;
  }
  else if (bmi >= 25 && bmi <= 29.9) {
    points += 2.5;
  }
  else if (bmi >= 30) {
    points += 5;
  }
}

function results() {
  if (document.getElementById('a1').checked) {
    points++;
  }

  if (document.getElementById('f2').checked || document.getElementById('g2').checked) {
    points += 3;
  }

  if (document.getElementById("a6").checked) {
    points += 3;
  }

  if (document.getElementById("a7").checked) {
    points += 5;
  }

  if (document.getElementById("b1").checked && document.getElementById("b8").checked) {
    points += 2.5;
  }
  else if (document.getElementById("c8").checked) {
    points += 5;
  }

  if (document.getElementById("a9").checked) {
    points += 5;
  }
  else if (document.getElementById("b9").checked) {
    points += 5;
  }
  else if (document.getElementById("c9").checked) {
    points += 5;
  }
  else if (document.getElementById("d9").checked) {
    points += 5;
  }

  if (document.getElementById("a10").checked) {
    points += 3;
  }
  else if (document.getElementById("c10").checked) {
    points += 1.5;
  }

  if (document.getElementById("a11").checked) {
    points += 2;
  }
  else if (document.getElementById("b11").checked) {
    points += 1;
  }

  if (document.getElementById("b12").checked) {
    points += 1;
  }
  else if (document.getElementById("c12").checked) {
    points += 2;
  }
  else if (document.getElementById("d12").checked) {
    points += 3;
  }
  else if (document.getElementById("e12").checked) {
    points += 4;
  }

  if (document.getElementById("b13").checked) {
    points += 1;
  }
  else if (document.getElementById("c13").checked) {
    points += 2;
  }
  else if (document.getElementById("d13").checked) {
    points += 3;
  }
  else if (document.getElementById("e13").checked) {
    points += 4;
  }

  if (document.getElementById("a14").checked) {
    points += 4;
  }
  else if (document.getElementById("b14").checked) {
    points += 3;
  }
  else if (document.getElementById("c14").checked) {
    points += 2;
  }
  else if (document.getElementById("d14").checked) {
    points += 1;
  }

  if (points >= 0 && points <= 14) {
    document.getElementById("page").innerHTML = "<h3>Low Risk</h3>Based on your age, BMI, lifestyle, etc. you are at a low risk of heart disease. Although you are at low risk, you should still monitor your diet, fitness, and sleep to improve your cardiac health. This is not a professional diagnosis.";
  }
  else if (points >= 15 && points <= 29) {
    document.getElementById("page").innerHTML = "<h3>At Risk</h3>You are considered healthy compared to the population, and you are not likely to have poor cardiac health, but you are still at an average risk. Although you are not at high risk, you should monitor your diet, fitness, and sleep to improve your cardiac health. This is not a professional diagnosis.";
  }
  else if (points >= 30 && points <= 44) {
    document.getElementById("page").innerHTML = "<h3>Moderate Risk</h3>Based on your age, BMI, lifestyle, etc. you are at a moderate risk of heart disease. You may want to monitor your diet, fitness, and sleep to improve your cardiac health. This is not a professional diagnosis.";
  }
  else if (points >= 45 && points <= 59) {
    document.getElementById("page").innerHTML = "<h3>High Risk</h3>Based on your age, BMI, lifestyle, etc. you are at high risk of heart disease. You may want to monitor your diet, fitness, and sleep to improve your cardiac health. This is not a professional diagnosis.";
  }

  points = 0;
}
