
const chapters = {
  11: [
    {
      name: "The Living World",
      notes: "Biology is the scientific study of living organisms. Biodiversity refers to the variety of living organisms."
    },
    {
      name: "Biological Classification",
      notes: "Organisms are classified into groups based on their similarities and differences. R.H. Whittaker proposed the five kingdom classification."
    }
  ],
  12: [
    {
      name: "Sexual Reproduction in Flowering Plants",
      notes: "A flower is the reproductive structure of angiosperms. The male reproductive part is the stamen and the female reproductive part is the pistil."
    },
    {
      name: "Human Reproduction",
      notes: "Human reproduction involves the formation of male and female gametes, fertilisation and development."
    }
  ]
};

function showChapters(classNumber) {
  const list = document.getElementById("chapterList");
  list.innerHTML = "";

  chapters[classNumber].forEach((chapter, index) => {
    const button = document.createElement("button");
    button.className = "chapter";
    button.textContent = chapter.name;

    button.onclick = function () {
      showNotes(classNumber, index);
    };

    list.appendChild(button);
  });

  document.getElementById("notes").innerHTML =
    "<h2>Choose a Chapter</h2><p>Select a chapter to read its notes.</p>";
}

function showNotes(classNumber, index) {
  const chapter = chapters[classNumber][index];

  document.getElementById("notes").innerHTML =
    "<h2>" + chapter.name + "</h2><p>" +
    chapter.notes + "</p>";
}

