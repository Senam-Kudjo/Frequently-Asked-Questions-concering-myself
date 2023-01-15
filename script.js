let faqContainer = document.getElementsByClassName("qnaContainer");

for (i = 0; i < faqContainer.length; i++) {
  faqContainer[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
