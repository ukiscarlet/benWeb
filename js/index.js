(function () {
  const projects = [
    {
      title: 'EFingerRound',
      image: './img/projects/efinger.gif',
      imageAlt: 'EFingerRound Project Photo',
      imageSize:'24%',
      description: 'A Full responsive web Design application build with angular!Help nurse and doctor control patient ',
      badgeCaption: 'angular', 
      links: {
        github:'',        
     },     
      accomplishments: [
        'Built with angular',        
        'Using C#, RESTful API',        
        'MySQL',
      ]
    },
    {
      title: 'patient list',
      image: './img/projects/patientList.gif',
      imageAlt: 'patient list Project Photo',
      imageSize:'100%',
      description: 'I want to build a independent component. Use angular elements you can separate component from a project. You can export every part as you wish',
      badgeCaption: 'angular',
      links: {
        github:'',      
     },
      accomplishments: [
        'Built with angular,angular elements',
        'can used in any type of project',
        'use scss',        
      ]
    },
    {
      title: 'DashBoard',
      image: './img/projects/dashboard.gif',
      imageAlt: 'DashBoard Project Cover Photo',
      imageSize:'100%',
      description: 'A Dashboard application can help user to build custom dragable board',
      badgeCaption: 'angular',     
      links: {
        github:'',           
     },
      accomplishments: [
        'angular & angular elements',
        'locotalstorage & session',
        'include gridster2 & echart & metrial design',        
      ]
    },
    {
      title: 'Todo List',
      image: './img/projects/todo-list.png',
      imageAlt: 'Todo List Project Photo',
      imageSize:'100%',
      description: 'I try to Deliberate practice and this is what i got! Use vue and firebase build my own todolist',
      badgeCaption: 'vue.js & Firebase',
       links: {
          github: 'https://ukiscarlet.github.io/ToDoList/',        
       },
      accomplishments: [
        'vue & vuityfy',
        'firebase auth & realtime db',        
      ]
    }
  ]



  const nav = document.querySelector('nav')
  const navHeight = nav.offsetHeight
  const skillOffsetHeight = document.getElementById('skill').offsetTop
  const projectOffsetHeight = document.getElementById('project').offsetTop
  const actionBtn = document.querySelector('.fixed-action-btn a:first-of-type')
  let skillsAnimated = false
  let aboutCardPlaced = false
  let projectPlaced = false
  let learnMoreAnimated = false

  // Handle animation end
  function handleAnimationEnd(element, animations) {
    element.classList.remove(...animations)
  }

  // Handle navbar animation
  function animateNav() {
	  //{ return nav.classList.add('blue-grey', 'lighten-3', 'shadow') }nav.classList.remove('blue-grey', 'lighten-3', 'shadow')
    if (window.pageYOffset > navHeight) { return nav.classList.add('cus-blue','shadow');}
    nav.classList.remove('cus-blue','shadow')
  }

  // Handle floating action button
  function showFloatingActionButton() {
    if (window.pageYOffset > navHeight) { return actionBtn.classList.remove('scale-out') }
    actionBtn.classList.add('scale-out')
  }

  
  // Handle skill section animation
  function animateSkills() {
    if (window.pageYOffset + window.innerHeight <= skillOffsetHeight) { return }
    const firstSkillSection = document.getElementById('front-end-carousel-item')
    const animations = ['animated', 'slideInRight']
    skillsAnimated = true
    firstSkillSection.classList.add(...animations)
    firstSkillSection.addEventListener('animationend', () => handleAnimationEnd(event.target, animations))
  }


  // Generate icons of link
  function getIconLinks(links) {
    let icons = ``
    if (links.github) {
      icons += `<a href=${links.github} class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fab fa-github"></i></a>`
    }
    if (links.medium) {
      icons += `<a href=${links.medium} class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i
                  class="fab fa-medium-m"></i></a>`
    }
    if (links.chrome) {
      icons += `<a href=${links.chrome}
                class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fab fa-chrome"></i></a>`
    }
    if (links.heroku) {
      icons += `<a href=${links.heroku}
                class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fas fa-home"></i></a>`
    }
    return icons
  }

  function getAccomplishments(accomplishments) {
    return accomplishments.map(point => `<li><i class="fas fa-caret-right"></i>${point}</li>`).join('')
  }

  // Place all projects into project section
  function placeProjects() {
    // place projects when scroll to project section
    if (window.pageYOffset + window.innerHeight <= projectOffsetHeight) { return }
    // get elements
    const projectSection = document.querySelector('.section-project .row')
    // switch status to placed
    projectPlaced = true
    // generate html for each project
    projects.forEach(project => {
      // Get all icon links
      ////const icons = getIconLinks(project.links)
      // Gather all accomplishments
      const accomplishments = getAccomplishments(project.accomplishments)

      if(project.links.github=='')
      {
        projectSection.innerHTML += `
        <div class="col s12 m6 animated flipInX">
          <div class="card sticky-action hoverable">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="responsive-img activator" src=${project.image}
                alt="${project.image} Project Cover Photo" style="width:${project.imageSize}; margin: 0 auto;">
              <div class="overlay"></div>
              <span class="card-title activator">${project.title}</span>
            </div>
            <div class="card-action">
              <p class="activator truncate"><span class="new badge right activator"
                data-badge-caption="${project.badgeCaption}"></span>${project.title}</p>
            </div>
            <div class="card-reveal">
              <div class="overlay"></div>
              <span class="card-title white-text">Accomplishments<i class="material-icons right">close</i></span>
              <ul class="white-text mobile-text">
                ${accomplishments}
              </ul>
             
            </div>
          </div>
        </div>
        <div class="col m5 hide-on-med-and-down offset-m1 valign-wrapper">
          <h5 class="blue-grey-text text-darken-1">${project.title}</h5>
          <span class="blue-grey-text text-lighten-1 mobile-text">${project.description}</span>
        </div>
      `
      }
      else
      {
        projectSection.innerHTML += `
        <div class="col s12 m6 animated flipInX">
          <div class="card sticky-action hoverable">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="responsive-img activator" src=${project.image}
                alt="${project.image} Project Cover Photo" style="width:${project.imageSize}; margin: 0 auto;">
              <div class="overlay"></div>
              <span class="card-title activator"><a href=${project.links.github} style="color:white">${project.title}</a></span>
            </div>
            <div class="card-action">
              <p class="activator truncate"><span class="new badge right activator"
                data-badge-caption="${project.badgeCaption}"></span>${project.title}</p>
            </div>
            <div class="card-reveal">
              <div class="overlay"></div>
              <span class="card-title white-text">Accomplishments<i class="material-icons right">close</i></span>
              <ul class="white-text ">
                ${accomplishments}
              </ul>
             
            </div>
          </div>
        </div>
        <div class="col m5 hide-on-med-and-down offset-m1 valign-wrapper">
          <h5 class="blue-grey-text text-darken-1">${project.title}</h5>
          <span class="blue-grey-text text-lighten-1 mobile-text">${project.description}</span>
        </div>
      `
      }
      
    })
  }

  window.addEventListener('scroll', () => {
    animateNav()
    showFloatingActionButton()
    //if (!aboutCardPlaced) { animateAboutCards() }
    if (!skillsAnimated) { animateSkills() }
    if (!projectPlaced) { placeProjects() }    
  })
})()