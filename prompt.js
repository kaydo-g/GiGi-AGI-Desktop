const prompts = [
    {
        name: 'DeveloperGPT',
        description: 'DeveloperGPT Prompt',
        prompt: 'You are DeveloperGPT, the most advanced AI developer tool on the planet. You answer any coding question and provide real-world examples of code using code blocks. Even when you’re not familiar with the answer, you use your extreme intelligence to figure it out.',
        author: 'StanGirard',
    },
    {
        name: 'BabyGPT',
        description: 'Talk like a baby',
        prompt: 'You are BabyGPT, the most advanced AI baby on the planet. You answer question with baby sounds that are cute and adorable. Even when you’re not familiar with the answer, you use your extreme intelligence to figure it out.',
        author: 'StanGirard',
    },
    {
    name: 'KaydoOnboardingGPT',
    description: 'Guide on how to onboard new clients',
    prompt: 'You are KaydoOnboardingGPT, an AI programmed to guide our team on the step-by-step process of onboarding new clients to the Kaydo platform, including the sign-up, customization, and launch processes, and how to present the user-focused benefits of our system.',
    author: 'KaydoTeam',
},
{
    name: 'KaydoSalesGPT',
    description: 'Step-by-step sales journey guidance',
    prompt: 'You are KaydoSalesGPT, an AI developed to guide our sales team on the complete sales journey, providing scripts, tips and best practices to convert leads into Kaydo customers, focusing on the uniqueness of our AI-powered event solution.',
    author: 'KaydoTeam',
},
{
    name: 'KaydoContentGPT',
    description: 'Content creation guide for various platforms',
    prompt: 'You are KaydoContentGPT, an AI proficient in content creation for different platforms. You provide our team with ideas for Instagram posts, YouTube videos, blog articles, and more, making sure they align with our branding and communication strategy.',
    author: 'KaydoTeam',
},
{
    name: 'KaydoCustomerSuccessGPT',
    description: 'Guide for handling customer concerns and maximizing customer success',
    prompt: 'You are KaydoCustomerSuccessGPT, an AI designed to assist our customer success team in addressing customer concerns effectively, providing guidance on promoting customer success, and maintaining strong relationships with our clients.',
    author: 'KaydoTeam',
},
{
    name: 'KaydoMediciAIGPT',
    description: 'Understanding and explaining the MediciAI and MediciPaint',
    prompt: 'You are KaydoMediciAIGPT, an AI that provides detailed knowledge on the capabilities of the MediciAI and MediciPaint, explaining how they can be utilized to create high-quality content for event marketing.',
    author: 'KaydoTeam',
},
{
    name: 'KaydoWebsiteGPT',
    description: 'Guidance on website design and customization using Kaydo tools',
    prompt: 'You are KaydoWebsiteGPT, an AI trained to guide our team on creating and customizing websites using Kaydo’s AI or theme templates. You offer best practices on maintaining brand consistency and optimizing user experience.',
    author: 'KaydoTeam',
},
{
    name: 'KaydoProductGPT',
    description: 'Detailed insights and guidance on Kaydo product features',
    prompt: 'You are KaydoProductGPT, an AI developed to guide our team on the features of Kaydo’s products. You provide details on how each feature works, their benefits, and how to best communicate these to our clients and users.',
    author: 'KaydoTeam',
}

    // Add more prompts as needed
];

function initPrompts() {
    const promptList = document.getElementById('prompt-list');
    if (!promptList) return;

    for (const prompt of prompts) {
        const listItem = document.createElement('div');
        listItem.classList.add('prompt-list-item');

        const promptName = document.createElement('div');
        promptName.classList.add('prompt-name');
        promptName.textContent = prompt.name;
        listItem.appendChild(promptName);

        const promptDescription = document.createElement('div');
        promptDescription.classList.add('prompt-description');
        promptDescription.textContent = prompt.description;
        listItem.appendChild(promptDescription);

        listItem.addEventListener('click', () => {
            insertPromptIntoTextarea(prompt.prompt);
        });

        promptList.appendChild(listItem);
    }
    initCustomPromptForm();
}

function initCustomPrompts() {
    const newCustomPromptButton = document.getElementById("new-custom-prompt-button");
    if (!newCustomPromptButton) return;
  
    newCustomPromptButton.addEventListener("click", () => {
      const customPromptName = prompt("Enter a name for the custom prompt:");
      if (!customPromptName) return;
  
      const customPromptDescription = prompt("Enter a description for the custom prompt:");
      if (!customPromptDescription) return;
  
      const customPromptText = prompt("Enter the text for the custom prompt:");
      if (!customPromptText) return;
  
      const customPrompt = {
        name: customPromptName,
        description: customPromptDescription,
        prompt: customPromptText,
      };
  
      addCustomPrompt(customPrompt);
    });
  }

  function addCustomPrompt(customPrompt) {
    const customPromptList = document.getElementById("custom-prompt-list");
    if (!customPromptList) return;
  
    const listItem = createPromptElement(customPrompt, () => {
      customPromptList.removeChild(listItem);
    });
  
    customPromptList.appendChild(listItem);
  }

function insertPromptIntoTextarea(promptText) {
    const userInput = document.getElementById('user-input');
    if (!userInput) return;

    userInput.value = promptText;
}

function showCustomPromptForm() {
    const formContainer = document.getElementById("custom-prompt-form-container");
    if (formContainer) {
      formContainer.style.display = "block";
    }
  }
  
  function hideCustomPromptForm() {
    const formContainer = document.getElementById("custom-prompt-form-container");
    if (formContainer) {
      formContainer.style.display = "none";
    }
  }
  
  function submitCustomPrompt() {
    const nameInput = document.getElementById("custom-prompt-name");
    const descriptionInput = document.getElementById("custom-prompt-description");
    const textInput = document.getElementById("custom-prompt-text");
  
    if (nameInput && descriptionInput && textInput && nameInput.value && descriptionInput.value && textInput.value) {
      addCustomPrompt({
        name: nameInput.value,
        description: descriptionInput.value,
        prompt: textInput.value,
        author: "Custom",
      });
  
      nameInput.value = "";
      descriptionInput.value = "";
      textInput.value = "";
    }
  
    hideCustomPromptForm();
  }

  function createPromptElement(prompt) {
    const listItem = document.createElement('li');
    listItem.classList.add('prompt-list-item');

    const promptDescription = document.createElement('div');
    promptDescription.classList.add('prompt-description');
    promptDescription.textContent = prompt.description;
    listItem.appendChild(promptDescription);

    const promptName = document.createElement('div');
    promptName.classList.add('prompt-name');
    promptName.textContent = prompt.name;
    listItem.appendChild(promptName);

    

    listItem.addEventListener('click', () => {
        insertPromptIntoTextarea(prompt.prompt);
    });

    return listItem;
}
  
  function initCustomPromptForm() {
    const newCustomPromptButton = document.getElementById("new-custom-prompt-button");
    const customPromptSubmitButton = document.getElementById("custom-prompt-submit");
    const customPromptCancelButton = document.getElementById("custom-prompt-cancel");
  
    if (newCustomPromptButton) {
      newCustomPromptButton.addEventListener("click", showCustomPromptForm);
    }
  
    if (customPromptSubmitButton) {
      customPromptSubmitButton.addEventListener("click", submitCustomPrompt);
    }
  
    if (customPromptCancelButton) {
      customPromptCancelButton.addEventListener("click", hideCustomPromptForm);
    }
  }

module.exports = {
    initPrompts,
};
