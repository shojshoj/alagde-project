function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    const topOffset = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: topOffset, behavior: 'smooth' });
  }
}


const introductionBodyOne = "A multimedia arts student based in Manila and I welcome opportunities to collaborate with clients like you."
const introductionBodyTwo = "I actively seek opportunities that will help me grow and bring fresh perspectives to your projects that will leave a lasting impact to your target audience."

document.getElementById("introductionBodyOne").innerHTML = introductionBodyOne
document.getElementById("introductionBodyTwo").innerHTML = introductionBodyTwo

const aboutMeBodyOne = "I am an active communicator and listener. I value your detailed requirements and feedbacks for a seamless collaboration. I am open to adapt and change the project requirements within the established deadlines."
const aboutMeBodyTwo = "I am commited in providing a professional and reliable service to my clients that would make our teamwork smooth and fun."

document.getElementById("aboutMeBodyOne").innerHTML = aboutMeBodyOne
document.getElementById("aboutMeBodyTwo").innerHTML = aboutMeBodyTwo