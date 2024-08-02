# SessionMang_React
How to Auto logout with react session management !!

<h2>1. Create a folder </h2>
<p>Create a folder and open it vs code ( Right click -> select open with vs code) </p>
<h2>2. Create a vite project </h2>
<p>Open terminal or ctrl+shift+` and write <p>
<img src = 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*tNxXy1qepYLZiCl-IWrSCA@2x.jpeg' width="400" />
<p>For example i want my project name as random then i will type npm create vite@latest random random is my project name and it will create and run the script</p>
<h4> It will display "select framework"</h4>
<img src = 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*Pin-bV1osKdyadznpNkSiQ@2x.jpeg' width="400" />
<p> After selecting the framework, vite prompt you to choose the language you want to work with on project</p>
<img src = 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*3jsd4tsxuAEueMq7tz9yeg@2x.jpeg' width="400" />
<h4> It display output like this on your terminal, check your folder and see if the packages are installed</h4>
<img src = 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*fcPxtwKX4KEepytXXC98Pw@2x.jpeg' width="400" />
<h2> 3. Install Npm</h2>
<h4>Follow this command :</h4>
<p>npm i or npm install</p>
<img src = 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*tyFXgPZpGyUJoKssEd4XNg@2x.jpeg' width="400" />
<h4>Once the click on the server it display output on browser</h4>
<img src = 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*k7ZqYa4Q-f5u8zVcLuZSMg@2x.jpeg' width="400" />
<h2> 4. create structure </h2>
<p> For that, right click on the src folder and create pages folder </p>
<p>After creating pages folder again right click and create a page as Login.jsx</p>
<p>Create a componet as folder and in that folder create a SessionProvider.jsx as file </p>
<h4>You can view my Session Managenment code in SessionProviderjsx and Login.jsx</h4>
<h2>Note -</h2>
<p>For applying auto logout function on each page, then you have to define the SessionProvider  function i.e <SessionProvider></SessionProvider> in app.jxs</p>

