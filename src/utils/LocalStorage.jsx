const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create responsive login UI using React and Tailwind.",
        taskDate: "2026-05-25",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve navbar alignment issue on mobile devices.",
        taskDate: "2026-05-20",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with authentication API.",
        taskDate: "2026-05-27",
        category: "Backend",
      },
    ],
  },

  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Develop admin dashboard layout.",
        taskDate: "2026-05-26",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Testing",
        taskDescription: "Test application for UI bugs.",
        taskDate: "2026-05-18",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Website",
        taskDescription: "Deploy project on Vercel.",
        taskDate: "2026-05-22",
        category: "Deployment",
      },
    ],
  },

  {
    id: 3,
    firstName: "Aditya",
    email: "employee3@gmail.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Configure MongoDB database.",
        taskDate: "2026-05-29",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Refactoring",
        taskDescription: "Optimize React components.",
        taskDate: "2026-05-17",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Forms",
        taskDescription: "Build reusable form components.",
        taskDate: "2026-05-30",
        category: "Frontend",
      },
    ],
  },

  {
    id: 4,
    firstName: "Swati",
    email: "employee4@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Authentication System",
        taskDescription: "Implement JWT authentication.",
        taskDate: "2026-05-28",
        category: "Security",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Landing Page",
        taskDescription: "Create landing page hero section.",
        taskDate: "2026-05-15",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Gateway",
        taskDescription: "Integrate Stripe payment gateway.",
        taskDate: "2026-05-19",
        category: "Payment",
      },
    ],
  },

  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@gmail.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Profile Page",
        taskDescription: "Develop user profile section.",
        taskDate: "2026-05-31",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Improve website SEO performance.",
        taskDate: "2026-05-14",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Dark Mode",
        taskDescription: "Add dark/light theme toggle.",
        taskDate: "2026-06-01",
        category: "UI/UX",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "admin@gmail.com",
    password: "123",
  },
];

export const setLocalStorage=()=>{
  localStorage.setItem('employees',JSON.stringify(employees)) 
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>{
  const employees =JSON.parse(localStorage.getItem('employees'))
   const admin =JSON.parse(localStorage.getItem('admin'))

  return{employees,admin}
  
}
