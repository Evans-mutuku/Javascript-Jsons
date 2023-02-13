const myObj = {
  name: "Evans",
  age: 30,
  city: "New York",
};

document.getElementById("demo").innerHTML =
  myObj.name + "<br>" + "  City " + myObj.city;

// creating user profile
let user_profile = {
  name: "John Doe",
  occupation: "Web dev, instructor & mentor ",
  description: "I eat, sleep and breathe React",
  image: "profilepic.jpg",
  bio: "Hi there! I am Evans! You might also know me as Javascript Developer. I've been programming for over 4 years now as a Full Stack developer. I've worked both with startups and individuals to help build & scale their businesses. Along the journey I realised my passion existed in helping others excel and pursue their dreams as upcoming developers. Hence mentoring and teaching how to code. ",
  contactmessage: "Get in touch with me and grow your skills and business!",
  email: "evansnyamai98@gmail.com",
  phone: "+254  -791486125",
  address: {
    street: "Kenya",
    city: "Nairobi Kenya",
  },

  social: [
    {
      name: "facebook",
      url: "https://www.facebook.com/evan.mutuku",
      className: "fa fa-facebook",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/evans-mutuku-5407391b9",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "https://github.com/Evans-mutuku/",
      className: "fa fa-github",
    },
  ],

  testimonials: {
    testimonials: [
      {
        text: "Evans is absolutely excellent, his depth of knowledge & his mentorship really meant a lot to me... I would definitely recommend",
        user: "Douglas ",
      },
      {
        text: "Learning with Evans has been AWESOME, he makes learning Javascript so easy and approachable, you'll finally feel like you know what's going on!",
        user: "Emmaculate",
      },
    ],
  },
};
