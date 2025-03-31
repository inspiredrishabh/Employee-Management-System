const employees = [
  {
    id: 1,
    firstName: "Venkatesh",
    email: "e@a.com",
    password: "123",
    tasks: [
      {
        title: "Finish quarterly report",
        description: "Complete the quarterly financial report.",
        date: "2025-03-01",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update website content",
        description:
          "Refresh the homepage content with the latest company news.",
        date: "2025-02-28",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Prepare presentation",
        description: "Create a presentation for the upcoming client meeting.",
        date: "2025-03-02",
        category: "Client Relations",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      // add more tasks here...
    ],
    taskNumbers: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Pratyush",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Test new software update",
        description: "Run tests on the latest software update.",
        date: "2025-03-01",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Organize team meeting",
        description: "Schedule and organize the monthly team meeting.",
        date: "2025-02-28",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Resolve support tickets",
        description: "Address and resolve outstanding support tickets.",
        date: "2025-03-02",
        category: "Support",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      // add more tasks here...
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstName: "Oscar",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Develop new feature",
        description: "Develop a new feature for the company's main product.",
        date: "2025-03-03",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Write documentation",
        description: "Write technical documentation for the new feature.",
        date: "2025-03-04",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Review code",
        description: "Review code submitted by team members.",
        date: "2025-03-05",
        category: "Code Review",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      // add more tasks here...
    ],
    taskNumbers: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstName: "Priyanshu",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Conduct market research",
        description: "Conduct market research for the upcoming product launch.",
        date: "2025-03-06",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Create social media posts",
        description: "Create and schedule social media posts for the week.",
        date: "2025-03-07",
        category: "Social Media",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Analyze marketing data",
        description: "Analyze data from the recent marketing campaign.",
        date: "2025-03-08",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      // add more tasks here...
    ],
    taskNumbers: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Shikhar",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Plan event",
        description: "Plan the upcoming company event.",
        date: "2025-03-09",
        category: "Events",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Coordinate with vendors",
        description: "Coordinate with vendors for the event.",
        date: "2025-03-10",
        category: "Events",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Send invitations",
        description: "Send event invitations to all attendees.",
        date: "2025-03-11",
        category: "Events",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      // add more tasks here...
    ],
    taskNumbers: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    firstName: "Rishabh",
    email: "admin@example.com",
    password: "123",
  },
];

// Seeds local storage with the default employees and admin data.
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

// Retrieves local storage data.
// If either "employees" or "admin" is not found, it seeds local storage first.
export const getLocalStorage = () => {
  let employeesData = localStorage.getItem("employees");
  let adminData = localStorage.getItem("admin");

  if (!employeesData || !adminData) {
    setLocalStorage();
    employeesData = localStorage.getItem("employees");
    adminData = localStorage.getItem("admin");
  }

  return {
    employees: JSON.parse(employeesData),
    admin: JSON.parse(adminData),
  };
};

/**
 * Dynamically adds a new task for an employee.
 *
 * @param {number} employeeId - The ID of the employee to update.
 * @param {object} newTask - The task object to add.
 * @returns {boolean} - Returns true if the task was added successfully.
 */
export const addTaskToEmployee = (employeeId, newTask) => {
  const { employees } = getLocalStorage();
  const index = employees.findIndex((emp) => emp.id === employeeId);

  if (index === -1) {
    console.error(`Employee with ID ${employeeId} not found.`);
    return false;
  }

  // Add the new task to the tasks array.
  employees[index].tasks.push(newTask);

  // Update taskNumbers for the employee.
  if (employees[index].taskNumbers) {
    employees[index].taskNumbers.active =
      (employees[index].taskNumbers.active || 0) + 1;
    employees[index].taskNumbers.newTask =
      (employees[index].taskNumbers.newTask || 0) + 1;
  } else {
    employees[index].taskNumbers = {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0,
    };
  }

  // Save the updated employees array back to local storage.
  localStorage.setItem("employees", JSON.stringify(employees));
  return true;
};

/**
 * Optionally, you can add more update functions here.
 * For example, functions to update a specific task, delete a task,
 * or update the entire employees object dynamically.
 */
