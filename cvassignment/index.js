const personalInfoHeader = document.getElementById('personalInfo');
const personalInfoSection = document.getElementById('personalInfoList');
const personalInfoListItems = personalInfoSection.querySelectorAll('li');


personalInfoHeader.addEventListener('click', function() {
  if (personalInfoSection.style.display === 'none') {
    personalInfoSection.style.display = 'block';
    personalInfoListItems.forEach(function(item) {
        item.style.display = 'block';
    });
  } else {
    personalInfoSection.style.display = 'none';
    personalInfoListItems.forEach(function(item) {
        item.style.display = 'none';
      });
  }
});

const qualificationHeader = document.getElementById('qualifications');
const qualificationSection = document.getElementById('qualificationsList');
const qualificationListItems = qualificationSection.querySelectorAll('li');


qualificationHeader.addEventListener('click', function() {
  if (qualificationSection.style.display === 'none') {
    qualificationSection.style.display = 'block';
    qualificationListItems.forEach(function(item) {
        item.style.display = 'block';
    });
  } else {
    qualificationSection.style.display = 'none';
    qualificationListItems.forEach(function(item) {
        item.style.display = 'none';
      });
  }
});

const workHeader = document.getElementById('work');
const workSection = document.getElementById('workList');
const workListItems = workSection.querySelectorAll('li');


workHeader.addEventListener('click', function() {
  if (workSection.style.display === 'none') {
    workSection.style.display = 'block';
    workListItems.forEach(function(item) {
        item.style.display = 'block';
    });
  } else {
    workSection.style.display = 'none';
    workListItems.forEach(function(item) {
        item.style.display = 'none';
      });
  }
});

const skillsHeader = document.getElementById('skills');
const skillsSection = document.getElementById('skillsList');
const skillsListItems = skillsSection.querySelectorAll('li');


skillsHeader.addEventListener('click', function() {
  if (skillsSection.style.display === 'none') {
    skillsSection.style.display = 'block';
    skillsListItems.forEach(function(item) {
        item.style.display = 'block';
    });
  } else {
    skillsSection.style.display = 'none';
    skillsListItems.forEach(function(item) {
        item.style.display = 'none';
      });
  }
});



const questionForm = document.querySelector('#question-form');
const questionInput = document.querySelector('#question-input');

questionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert(`Thank you for your question: ${questionInput.value}`);
  questionInput.value = '';
});