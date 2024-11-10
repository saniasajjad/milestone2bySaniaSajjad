// TypeScript code for Dynamic Resume Builder

// Select elements from the DOM
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeName = document.getElementById('resume-name') as HTMLHeadingElement;
const resumeRole = document.getElementById('resume-role') as HTMLHeadingElement;
const resumePersonalInfo = document.getElementById('resume-personal-info') as HTMLParagraphElement;
const resumeSkills = document.getElementById('resume-skills') as HTMLUListElement;
const resumeLanguages = document.getElementById('resume-languages') as HTMLUListElement;
const resumeEducation = document.getElementById('resume-education') as HTMLUListElement;
const resumeCertificates = document.getElementById('resume-certificates') as HTMLUListElement;
const resumeProjects = document.getElementById('resume-projects') as HTMLUListElement;

const addSkillButton = document.getElementById('add-skill') as HTMLButtonElement;
const addLanguageButton = document.getElementById('add-language') as HTMLButtonElement;
const addEducationButton = document.getElementById('add-education') as HTMLButtonElement;
const addCertificateButton = document.getElementById('add-certificate') as HTMLButtonElement;
const addProjectButton = document.getElementById('add-project') as HTMLButtonElement;

// Add event listeners for buttons
addSkillButton.addEventListener('click', addSkill);
addLanguageButton.addEventListener('click', addLanguage);
addEducationButton.addEventListener('click', addEducation);
addCertificateButton.addEventListener('click', addCertificate);
addProjectButton.addEventListener('click', addProject);
resumeForm.addEventListener('submit', generateResume);

// Function to add a new skill input field
function addSkill() {
    const skillsList = document.getElementById('skills-list') as HTMLDivElement;
    const newSkillInput = document.createElement('input');
    newSkillInput.type = 'text';
    newSkillInput.className = 'skill';
    newSkillInput.placeholder = 'Skill';
    newSkillInput.required = true;

    skillsList.appendChild(newSkillInput);
}

// Function to add a new language input field
function addLanguage() {
    const languagesList = document.getElementById('languages-list') as HTMLDivElement;
    const newLanguageInput = document.createElement('input');
    newLanguageInput.type = 'text';
    newLanguageInput.className = 'language';
    newLanguageInput.placeholder = 'Language';
    newLanguageInput.required = true;

    languagesList.appendChild(newLanguageInput);
}

// Function to add a new education input field
function addEducation() {
    const educationList = document.getElementById('resume-education') as HTMLUListElement;
    const newEducationItem = document.createElement('li');

    const newEducationInput = document.createElement('input');
    newEducationInput.type = 'text';
    newEducationInput.className = 'education';
    newEducationInput.placeholder = 'Education';
    newEducationInput.required = true;

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'remove-education';
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', () => newEducationItem.remove());

    newEducationItem.appendChild(newEducationInput);
    newEducationItem.appendChild(removeButton);
    educationList.appendChild(newEducationItem);
}

// Function to add a new certificate input field
function addCertificate() {
    const certificateList = document.getElementById('resume-certificates') as HTMLUListElement;
    const newCertificateItem = document.createElement('li');

    const newCertificateInput = document.createElement('input');
    newCertificateInput.type = 'text';
    newCertificateInput.className = 'certificate';
    newCertificateInput.placeholder = 'Certificate';
    newCertificateInput.required = true;

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'remove-certificate';
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', () => newCertificateItem.remove());

    newCertificateItem.appendChild(newCertificateInput);
    newCertificateItem.appendChild(removeButton);
    certificateList.appendChild(newCertificateItem);
}

// Function to add a new project input field
function addProject() {
    const projectList = document.getElementById('resume-projects') as HTMLUListElement;
    const newProjectItem = document.createElement('li');

    const newProjectInput = document.createElement('input');
    newProjectInput.type = 'text';
    newProjectInput.className = 'project';
    newProjectInput.placeholder = 'Project';
    newProjectInput.required = true;

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'remove-project';
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', () => newProjectItem.remove());

    newProjectItem.appendChild(newProjectInput);
    newProjectItem.appendChild(removeButton);
    projectList.appendChild(newProjectItem);
}

// Function to generate the resume
function generateResume(event: Event) {
    event.preventDefault();

    // Get values from form inputs
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const role = (document.getElementById('role') as HTMLInputElement).value;
    const personalInfo = (document.getElementById('personal-info') as HTMLInputElement).value;

    // Set resume content
    resumeName.innerText = name;
    resumeRole.innerText = role;
    resumePersonalInfo.innerText = personalInfo;

    // Clear existing lists
    resumeSkills.innerHTML = '';
    resumeLanguages.innerHTML = '';
    resumeEducation.innerHTML = '';
    resumeCertificates.innerHTML = '';
    resumeProjects.innerHTML = '';

    // Add skills to resume
    const skills = document.querySelectorAll('.skill') as NodeListOf<HTMLInputElement>;
    skills.forEach(skill => {
        if (skill.value) {
            const listItem = document.createElement('li');
            listItem.innerText = skill.value;
            resumeSkills.appendChild(listItem);
        }
    });

    // Add languages to resume
    const languages = document.querySelectorAll('.language') as NodeListOf<HTMLInputElement>;
    languages.forEach(language => {
        if (language.value) {
            const listItem = document.createElement('li');
            listItem.innerText = language.value;
            resumeLanguages.appendChild(listItem);
        }
    });

    // Add education to resume
    const educations = document.querySelectorAll('.education') as NodeListOf<HTMLInputElement>;
    educations.forEach(education => {
        if (education.value) {
            const listItem = document.createElement('li');
            listItem.innerText = education.value;
            resumeEducation.appendChild(listItem);
        }
    });

    // Add certificates to resume
    const certificates = document.querySelectorAll('.certificate') as NodeListOf<HTMLInputElement>;
    certificates.forEach(certificate => {
        if (certificate.value) {
            const listItem = document.createElement('li');
            listItem.innerText = certificate.value;
            resumeCertificates.appendChild(listItem);
        }
    });

    // Add projects to resume
    const projects = document.querySelectorAll('.project') as NodeListOf<HTMLInputElement>;
    projects.forEach(project => {
        if (project.value) {
            const listItem = document.createElement('li');
            listItem.innerText = project.value;
            resumeProjects.appendChild(listItem);
        }
    });

    // Display the resume
    document.getElementById('resume')!.style.display = 'block';
}
