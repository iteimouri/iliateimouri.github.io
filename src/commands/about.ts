import command from '../../config.json' assert {type: 'json'};

const createAbout = () : string[] => {
  const about : string[] = [];

  const SPACE = "&nbsp;";

  const MEDIUM = "Medium";
  const GITHUB = "Github";
  const LINKEDIN = "Linkedin";
  
  const medium = `<i class='fab fa-medium'></i> ${MEDIUM}`;   
  const github = `<i class='fa-brands fa-github'></i> ${GITHUB}`;
  const linkedin = `<i class='fa-brands fa-linkedin'></i> ${LINKEDIN}`;
  let string = "";

  about.push("<br>");
  about.push(command.aboutGreeting);
  about.push("<br>");
  
  string = '';
  string += SPACE.repeat(2);
  string += medium;
  string += SPACE.repeat(17 - MEDIUM.length);
  string += `<a target='_blank' href='https://medium.com/${command.social.medium}'>medium/${command.social.medium}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += github;
  string += SPACE.repeat(17 - GITHUB.length);
  string += `<a target='_blank' href='https://github.com/${command.social.github}'>github/${command.social.github}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += linkedin;
  string += SPACE.repeat(17 - LINKEDIN.length);  
  string += `<a target='_blank' href='https://www.linkedin.com/in/${command.social.linkedin}'>linkedin/${command.social.linkedin}</a>`;
  about.push(string);

  about.push("<br>");
  return about
}

export const ABOUT = createAbout();
