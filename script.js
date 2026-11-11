

const chapters = {
  11: [
    {
      name: "The Living World (सजीव जगत)",
      notes: `
        <h3>English Notes</h3>
        <p>Biology is the scientific study of living organisms.</p>
        <p>Living organisms show growth, reproduction and metabolism.</p>
        <p>Biodiversity refers to the variety of living organisms.</p>

        <h3>हिंदी नोट्स</h3>
        <p>जीव विज्ञान सजीव जीवों का वैज्ञानिक अध्ययन है।</p>
        <p>सजीवों में वृद्धि, प्रजनन और उपापचय जैसे लक्षण पाए जाते हैं।</p>
        <p>जैव विविधता का अर्थ जीवों की विभिन्नता है।</p>
      `
    },
    {
      name: "Biological Classification (जैव वर्गीकरण)",
      notes: `
        <h3>English Notes</h3>
        <p>Classification is the systematic grouping of organisms.</p>
        <p>R.H. Whittaker proposed the five kingdom classification in 1969.</p>

        <h3>हिंदी नोट्स</h3>
        <p>जीवों को व्यवस्थित समूहों में बाँटने की प्रक्रिया वर्गीकरण कहलाती है।</p>
        <p>आर.एच. व्हिटेकर ने 1969 में पाँच जगत वर्गीकरण प्रस्तुत किया था।</p>
      `
    }
  ],

  12: [
    {
      name: "Sexual Reproduction in Flowering Plants (पुष्पी पौधों में लैंगिक प्रजनन)",
      notes: `
        <h3>English Notes</h3>
        <p>Flower is the reproductive structure of angiosperms.</p>
        <p>Stamen is the male reproductive part.</p>
        <p>Pistil is the female reproductive part.</p>

        <h3>हिंदी नोट्स</h3>
        <p>फूल आवृतबीजी पौधों की प्रजनन संरचना है।</p>
        <p>पुंकेसर नर प्रजनन भाग है।</p>
        <p>स्त्रीकेसर मादा प्रजनन भाग है।</p>
      `
    },
    {
      name: "Human Reproduction (मानव प्रजनन)",
      notes: `
        <h3>English Notes</h3>
        <p>Human reproduction involves the formation of male and female gametes.</p>
        <p>Fertilisation leads to the formation of a zygote.</p>

        <h3>हिंदी नोट्स</h3>
        <p>मानव प्रजनन में नर और मादा युग्मकों का निर्माण होता है।</p>
        <p>निषेचन के फलस्वरूप युग्मनज बनता है।</p>
      `
    }
  ]
};

    
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

