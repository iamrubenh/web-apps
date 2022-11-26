let field = prompt('data entry / copywriting / content writing');
let role = prompt('Role Type - Data Entry Expert etc.');
let task = prompt('Future Tense - editing of database..')


var content = `Hi, Good day, My name is Ruben, I am an individual 
experienced in the field of ${field}. 
Though I have just over a year experience, I believe my passion and 
dedication to my craft overshadows that. I saw your job post for a ${role}, with tasks that requires work such as ${task}. 
I believe I can complete your project within your 
required time with great quality as well. Feel free to take a peak at my profile to see my skills indepth. 
I look forward in working with you.` + "<br /><br />" + `Best Regards, ` + "<br />" + `Ruben Hernandez Jr`;

document.getElementById('content').innerHTML = content;