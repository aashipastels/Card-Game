document.querySelector(".dealer").addEventListener("click", function () {
  let selectedRandomNumberArray = [];
  let selectedRandomImageArray = [];
  

  for (var n = 1; n < 5; n++) {
    let image_array = [
      "image/club.png",
      "image/diamond.png",
      "image/club.png",
      "image/diamond.png",
      "image/heart.png",
      "image/spade.png",
      "image/heart.png",
      "image/spade.png",
      "image/acl.png",
      "image/club.png",
      "image/diamond.png",
      "image/heart.png",
      "image/spade.png",
      "image/adi.png",
      "image/ahe.png",
      "image/club.png",
      "image/diamond.png",
      "image/heart.png",
      "image/spade.png",
      "image/asp.png",
      "image/jackcl.png",
      "image/jackdi.jfif",
      "image/jackhe.jfif",
      "image/jacksp.jfif",
      "image/club.png",
      "image/diamond.png",
      "image/heart.png",
      "image/spade.png",
      "image/kingcl.jfif",
      "image/kingdi.png",
      "image/kinghe.jfif",
      "image/kingsp.jfif",
      "image/queencl.jfif",
      "image/queendi.jfif",
      "image/queenhe.jfif",
      "image/queensp.jfif",
      "image/club.png",
      "image/diamond.png",
      "image/heart.png",
      "image/spade.png",
      "image/club.png",
      "image/diamond.png",
      "image/heart.png",
      "image/spade.png",
      "image/club.png",
      "image/diamond.png",
      "image/heart.png",
      "image/spade.png",
    ];

    let random_number = Math.floor(Math.random() * 9) + 2;
    let random_image = Math.floor(Math.random() * image_array.length);

    let randomised_image = image_array[random_image];

    if (
      randomised_image === "image/club.png" ||
      randomised_image === "image/diamond.png" ||
      randomised_image === "image/heart.png" ||
      randomised_image === "image/spade.png"
    ) {
      if (
        n === 1 ||
        (n > 1 &&
          (!selectedRandomNumberArray.includes(random_number) ||
            !selectedRandomImageArray.includes(randomised_image)))
      ) {
        console.log("hi");
        selectedRandomNumberArray.push(random_number);

        selectedRandomImageArray.push(randomised_image);

        document.querySelector(".card" + n).innerHTML =
          selectedRandomNumberArray[n - 1];

        document
          .querySelector(".cardimg" + n)
          .setAttribute("src", selectedRandomImageArray[n - 1]);
      } else {
        n = n - 1;
      }
    } else {
      if (
        n === 1 ||
        (n > 1 && !selectedRandomImageArray.includes(randomised_image))
      ) {
        selectedRandomImageArray.push(randomised_image);

        switch (randomised_image) {
          case "image/acl.png":
          case "image/adi.png":
          case "image/ahe.png":
          case "image/asp.png": {
            selectedRandomNumberArray.push(14);
            break;
          }
          case "image/kingcl.jfif":
          case "image/kingdi.png":
          case "image/kinghe.jfif":
          case "image/kingsp.jfif": {
            selectedRandomNumberArray.push(13);
            break;
          }
          case "image/queencl.jfif":
          case "image/queendi.jfif":
          case "image/queenhe.jfif":
          case "image/queensp.jfif": {
            selectedRandomNumberArray.push(12);
            break;
          }
          default:
            selectedRandomNumberArray.push(11);
            break;
        }
        //selectedRandomNumberArray.push(random_number);
        document.querySelector(".card" + n).innerHTML = "";
        document
          .querySelector(".cardimg" + n)
          .setAttribute("src", selectedRandomImageArray[n - 1]);
      } else {
        n = n - 1;
      }
    }
    console.log(selectedRandomNumberArray);
    console.log(selectedRandomImageArray);
  }

  let num1 = selectedRandomNumberArray[0];
  let num2 = selectedRandomNumberArray[1];
  let num3 = selectedRandomNumberArray[2];
  let num4 = selectedRandomNumberArray[3];

  let winner = whowillwin(num1, num2, num3, num4);
  document.querySelector(".dealer").innerHTML =
    "Player " + winner + " is the winner. Click here to start a new game.";
});

function whowillwin(num1, num2, num3, num4) {
  if (num1 === num2 && num3 === num4) {
    if (num1 > num3) {
      return 1;
    } else if (num1 < num3) {
      return 2;
    } else {
      document.querySelector(".dealer").innerHTML =
        "Tie. Click here to start a new game.";
    }
  } else if (num1 === num2) {
    return 1;
  } else if (num3 === num4) {
    return 2;
  } else if (num1 === num3 || num2 === num4) {
    if (num2 > num4 || num1 > num3) {
      return 1;
    } else if (num2 < num4 || num1 < num3) {
      return 2;
    } else {
      document.querySelector(".dealer").innerHTML = "Tie";
    }
  } else if (num1 === num4 || num2 === num3) {
    if (num2 > num3 || num1 > num4) {
      return 1;
    } else if (num2 < num3 || num1 < num4) {
      return 2;
    } else {
      document.querySelector(".dealer").innerHTML = "Tie";
    }
  } else {
    if ((num1 > num3 && num1 > num4) || (num2 > num3 && num2 > num4)) {
      return 1;
    } else if ((num3 > num1 && num3 > num2) || (num4 > num1 && num4 > num2)) {
      return 2;
    }
  }
}
