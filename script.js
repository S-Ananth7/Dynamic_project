const projects = [
    { title: "Task 1", url: "works/task1/index.html" },
    { title: "Task 2", url: "works/task2/index.html" },
    { title: "Task 3", url: "works/task3/index.html" },
    { title: "Task 4", url: "works/task4/index.html" },
    { title: "Task 5", url: "works/task5/index.html" },
    { title: "Task 6", url: "works/task6/index2.html" },
    { title: "Task 7", url: "works/task7/index.html" },
    { title: "Task 8", url: "works/task8/index.html" },
    { title: "Task 9", url: "works/task9/index.html" },
    { title: "Task 10", url: "works/task10/index.html" },
    { title: "Task 11", url: "works/task11/index.html" },
    { title: "Task 12a", url: "works/task12/index.html" },
    { title: "Task 12b", url: "works/task12/index2.html"},
    { title: "Task 13a", url: "works/task13/index.html" },
    { title: "Task 13b", url: "works/task13/index2.html" },
    { title: "Task 14a", url: "works/task14/index1.html" },
    { title: "Task 14a", url: "works/task14/index2.html" },
    { title: "Task 14b", url: "works/task14/index1.html" },
    { title: "Task 14b", url: "works/task14/index2.html" },
    { title: "Task 15", url: "works/task15/index.html" },
    { title: "Task 15b", url: "works/task15/index2.html" },
    { title: "Task 16", url: "works/task16/index.html" }
];

const projectListUl = document.getElementById('projectList');
const workFrame = document.getElementById('workFrame');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('#btn');

projects.forEach((project, index) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = "#";
    link.innerHTML = `<i class="fa-solid fa-folder-tree"></i><span class="links_name">${project.title}</span>`; // Changed symbol here
    link.addEventListener('click', (e) => {
        e.preventDefault();
        workFrame.src = project.url;
        workFrame.title = project.title;
        workFrame.style.opacity = '0';
        setTimeout(() => workFrame.style.opacity = '1', 100);
    });
    listItem.appendChild(link);
    projectListUl.appendChild(listItem);
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

if (projects.length > 0) {
    workFrame.src = projects[0].url;
    workFrame.title = projects[0].title;
}

document.getElementById('log_out').addEventListener('click', () => {
    alert('Logout functionality can be added here!');
});