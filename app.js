const sections=document.querySelectorAll('.section');
const sectBtns=document.querySelectorAll('.controls');
const sectBtn=document.querySelectorAll('.control');
const allSections=document.querySelector('.main-content');
document.addEventListener('DOMContentLoaded', function () {
    var textElement = document.getElementById('changingText');
    var texts = ['Full Stack developer🚀','AI & ML Learner🚀','Cloud Enthusiast🚀','DSA Practitioner🚀','Open Source Contributor🚀'];
    var currentIndex = 0;

    function changeText() {
        textElement.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }

    setInterval(changeText, 1000); // Change text every 3 seconds
});

function pagetransitions()
{
    //button click active class
    for(let i=0;i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click',function()
        {
            let currBtn=document.querySelectorAll('.active-btn');
            currBtn[0].className=currBtn[0].className.replace('active-btn','');
            this.className +=' active-btn';
        })
    }
    //sections active class
    allSections.addEventListener('click',(e)=>{
        const id=e.target.dataset.id;
        if(id){
            //remove selected from tje other btns
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            
            //hide other sections

            sections.forEach((section)=>{

                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
    //toggle theme

    const themeBtn=document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',()=>{
        let element=document.body;
        element.classList.toggle('light-mode');
    })
}
pagetransitions();

// Get a reference to the form element
const form = document.getElementById('myForm');

// Listen for the "keydown" event on the form
form.addEventListener('keydown', function(event) {
  // Check if the pressed key is the "Enter" key (key code 13)
  if (event.keyCode === 13) {
    // Prevent the default behavior (e.g., page refresh)
    event.preventDefault();
    
    // Trigger the form submission
    form.submit();
  }
});

