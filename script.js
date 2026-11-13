
const chapters = {
  11: [
    "The Living World",
    "Biological Classification",
    "Plant Kingdom",
    "Animal Kingdom",
    "Morphology of Flowering Plants",
    "Anatomy of Flowering Plants",
    "Structural Organisation in Animals",
    "Cell: The Unit of Life",
    "Biomolecules",
    "Cell Cycle and Cell Division",
    "Photosynthesis in Higher Plants",
    "Respiration in Plants",
    "Plant Growth and Development",
    "Breathing and Exchange of Gases",
    "Body Fluids and Circulation",
    "Excretory Products and their Elimination",
    "Locomotion and Movement",
    "Neural Control and Coordination",
    "Chemical Coordination and Integration"
  ],

  12: [
    "Sexual Reproduction in Flowering Plants",
    "Human Reproduction",
    "Reproductive Health",
    "Principles of Inheritance and Variation",
    "Molecular Basis of Inheritance",
    "Evolution",
    "Human Health and Disease",
    "Microbes in Human Welfare",
    "Biotechnology: Principles and Processes",
    "Biotechnology and its Applications",
    "Organisms and Populations",
    "Ecosystem",
    "Biodiversity and Conservation"
  ]
};

function showClass(classNumber) {
  const list = document.getElementById("chapterList");

  list.innerHTML = `
    <h3>Class ${classNumber} Biology</h3>
    <br>
  `;

  chapters[classNumber].forEach((chapter, index) => {
    const button = document.createElement("button");

    button.textContent = `${index + 1}. ${chapter}`;
    button.style.display = "block";
    button.style.width = "100%";
    button.style.margin = "10px 0";

    button.onclick = function() {
  openChapterNotes(chapter);
};

    list.appendChild(button);
  });
}

// NEET SCRIPT - Chapter Notes Feature
function openChapterNotes(chapterName) {
  const chapterArea = document.getElementById("chapterList");

  chapterArea.innerHTML = `
    <h2>${chapterName}</h2>
    <p>Welcome to NEET SCRIPT Notes.</p>
    <p>NCERT-based notes will be available here.</p>
  `;
}
// NEET SCRIPT - Biology Notes Database

const biologyNotes = {
  "The Living World": `
    <h3>1. What is Living?</h3>
    <p>Living organisms show growth, reproduction and metabolism.</p>

    <h3>2. Growth</h3>
    <p>Growth is an increase in mass and number of cells.</p>

    <h3>3. Reproduction</h3>
    <p>Reproduction is the biological process of producing offspring.</p>

    <h3>4. Metabolism</h3>
    <p>All chemical reactions occurring in the body are called metabolism.</p>
  `,

  "Biological Classification": `
    <h3>Five Kingdom Classification</h3>
    <p>R.H. Whittaker proposed the five kingdom classification in 1969.</p>

    <h3>Five Kingdoms</h3>
    <ul>
      <li>Monera</li>
      <li>Protista</li>
      <li>Fungi</li>
      <li>Plantae</li>
      <li>Animalia</li>
    </ul>
  `
};

const originalOpenChapterNotes = openChapterNotes;

openChapterNotes = function(chapterName) {
  const area = document.getElementById("chapterList");

  area.innerHTML = `
    <h2>${chapterName}</h2>
    ${biologyNotes[chapterName] || "<p>Notes coming soon!</p>"}
    <br>
    <button onclick="showClass(11)">Back to Class 11</button>
    <button onclick="showClass(12)">Back to Class 12</button>
  `;
};
