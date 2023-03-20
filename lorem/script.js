let para = [
  "Atoms of radioactive elements can split. According to Albert Einstein, mass and energy are interchangeable under certain circumstances. When atoms split, the process is called nuclear fission. In this case, a small amount of mass is converted into energy. Thus the energy released cannot do much damage. However, several subatomic particles called neutrons are also emitted during this process. Each neutron will hit a radioactive element releasing more neutrons in the process. This causes a chain reaction and creates a large amount of energy. This energy is converted into heat which expands uncontrollably causing an explosion. Hence, atoms do not literally explode. They generate energy that can cause explosions.",
  "Yesterday I saw a film titled Macbeth. Its story elements are interesting. The film’s hero, Macbeth, assassinates Duncan and ascends to the throne of Scotland. But he is dissatisfied. He finds himself in a dangerous situation. He executes those he suspects of plotting against him. Eventually, some of the lords revolted and dethroned him and killed him. The message it conveys is that excessive ambition destroys a man. The actor and actress who played Macbeth and Lady Macbeth had exceptional performances, which significantly increased the film’s impact.",
  "Since March 8, 1990, Women’s Day has been observed by SAARC (South Asian Association for Regional Cooperation) comprising seven countries namely India, Pakistan, Nepal, Bhutan, Bangladesh, Sri Lanka and Maldives. The day is celebrated to highlight the problems of the girl child in these countries. It is very sad that girl children are subjected to extreme neglect and disrespect, especially in underdeveloped countries. The birth of a girl child is seen by parents as a cause of pity. They are deprived of proper nutrition, education, economic opportunities and social status or respect. We must eliminate these prejudices and provide a bright future for girls by educating them.",
  "Everyone knows that paper is made from trees. But when one looks at trees, one cannot imagine that something so soft and fragile as the paper is made is so hard and strong. Plant materials such as wood are made of fibres known as cellulose. It is the primary ingredient in paper making. Raw wood is first converted into pulp consisting of a mixture of Cellulose, lignin, water and some chemicals. The pulp can be made mechanically through grinders or through chemical processes. Short fibres are produced by mechanical grinding. The paper produced in this way is weak and is used to make newspapers, magazines and phonebooks.",
  "Gardening is my favourite hobby. I own a small plot of land next to our house. I cultivate gardening there. Every day, I spend half an hour gardening. After returning from my morning walk, I go to my garden with a spade and a bucket of water. I prepare the soil, prune the plants, and water them. I also use insecticides and fertilisers. My heart leaps with joy when I see the plants swaying in the wind. I feel heavenly pleasure as I watch them grow day by day.",
  "Home is the place where we return to rest after a day’s work, and where parents and children meet together and have a carefree and joyful time. Our family consists of three members—father, mother, and brother. We live in a rural area. It is free from the hustle and bustle of city life. It is especially famous for its scenic beauty. I am the most important member of the family. Everyone trusts my judgement and agrees to follow my suggestions.",
  "The teacher of today is the salt of the earth. He wants to create a man, not just make money. He is a knowledgeable gentleman. He is an expert in the particular subject he teaches. Though a scholar, he teaches the subject in such a way that all students, brilliant or ordinary, can fully understand him. He doesn’t advertise his knowledge. He cares about his students and offers assistance to them both inside and outside of the classroom. He attends his work regularly.",
];

let formText = document.querySelector(".form");
let val = document.querySelector("#number");
let form = document.querySelector(".form-center");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = parseInt(val.value);
  let random = Math.floor(Math.random() * para.length);
  //   console.log(typeof value);
  if (!isNaN(value) || value <= 0 || value > 9)
    formText.innerHTML = `<p class="result">${para[random]}<p>`;
  else {
    let temp = para.slice(0, value);
    // console.log(temp);
    temp = temp
      .map((item) => {
        return `<p class="result">${para[item]}<p>`;
      })
      .join(" ");
    formText.innerHTML = temp;
  }
});
