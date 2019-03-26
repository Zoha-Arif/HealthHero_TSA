let points = 0;

function results() {
  if (document.getElementById('a1').checked) {
    points++;
  }
  else if (document.getElementById('b1').checked || document.getElementById('c1').checked) {
    points += 0;
  }

  if (document.getElementById('a2').checked) {
    points += 2;
  }
  else if (document.getElementById('b2').checked || document.getElementById('c2').checked) {
    points++;
  }

  // calculate bmi
  let height = 0;
  if (document.getElementById('ft').value > 0) {
    height = Number(document.getElementById('ft').value) * 12;
  }
  if (document.getElementById('in').value > 0) {
    height += Number(document.getElementById('in').value);
  }

  let weight = document.getElementById('lbs').value;

  let bmi = ((703 * weight) / (Math.pow(height, 2))).toFixed(1);

  if (bmi <= 25) {
    points += 0;
  }
  else if (bmi > 25 && bmi <= 30) {
    points += 2;
  }
  else if (bmi > 30 && bmi <= 40) {
    points += 4;
  }
  else if (bmi > 40) {
    points += 6;
  }

  if (document.getElementById('a5').checked) {
    points += 0;
  }
  else if (document.getElementById('b5').checked) {
    points += 2;
  }
  else if (document.getElementById('c5').checked) {
    points += 4;
  }

  if (document.getElementById('a6').checked) {
    points += 0;
  }
  else if (document.getElementById('b6').checked) {
    points += 1;
  }
  else if (document.getElementById('c6').checked) {
    points += 2;
  }

  // display results
  if (points >= 0 && points <= 3) {
    document.getElementById("results").innerHTML = "Low Risk<br>Based on your age, BMI, and lifestyle, you are at a low risk of heart<br>disease. Although you are at low risk, you should still monitor your diet,<br>fitness, and sleep to improve your cardiac health. This is not a<br>professional diagnosis.";
  }
  else if (points >= 4 && points <= 7) {
    document.getElementById("results").innerHTML = "At Risk<br>You are considered healthy compared to the population, and you are not<br>likely to have poor cardiac health, but you are still at an average risk.<br>Although you are not at high risk, you should monitor your diet, fitness,<br> and sleep to improve your cardiac health. This is not a professional<br>diagnosis.";
  }
  else if (points >= 8 && points <= 11) {
    document.getElementById("results").innerHTML = "Moderate Risk<br>Based on your age, BMI, and lifestyle, you are at a moderate risk of heart<br>disease. You may want to monitor your diet, fitness, and sleep to improve<br>your cardiac health. This is not a professional diagnosis.";
  }
  else if (points >= 12 && points <= 15) {
    document.getElementById("results").innerHTML = "High Risk<br>Based on your age, BMI, and lifestyle, you are at high risk of heart<br>disease. You may want to monitor your diet, fitness, and sleep to improve<br>your cardiac health. This is not a professional diagnosis.<br>";
  }

  points = 0;
}

/*
<h4>Low Risk (0-3)</h4>
  <p>
    Based on your age, BMI, and lifestyle, you are at a low risk of heart
    disease. Although you are at low risk, you should still monitor your diet,
    fitness, and sleep to improve your cardiac health. This is not a
    professional diagnosis.
  </p>
<h4>At Risk (4-7)</h4>
  <p>
    You are considered healthy compared to the population, and you are not
    likely to have poor cardiac health, but you are still at an average risk.
    Although you are not at high risk, you should monitor your diet, fitness,
    and sleep to improve your cardiac health. This is not a professional
    diagnosis.
  </p>
<h4>Moderate Risk (8-11)</h4>
  <p>
    Based on your age, BMI, and lifestyle, you are at a moderate risk of heart
    disease. You may want to monitor your diet, fitness, and sleep to improve
    your cardiac health. This is not a professional diagnosis.
  </p>
<h4>High Risk (12-15)</h4>
  <p>
    Based on your age, BMI, and lifestyle, you are at high risk of heart
    disease. You may want to monitor your diet, fitness, and sleep to improve
    your cardiac health. This is not a professional diagnosis.
  </p>

<h5>It is recommended for adults to get at least three hours of physical activity a week and 7-9 hours of sleep a night.</h5>
*/
