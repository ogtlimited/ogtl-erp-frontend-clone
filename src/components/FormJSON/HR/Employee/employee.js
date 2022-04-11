export const employeeFormJson = {
  title: "Employee Form",
  Fields: [
    {
      name: "first_name",
      type: "text",
      title: "First Name",
      required: {
        value: true,
        message: "First Name is required",
      },
    },
    {
      name: "middle_name",
      type: "text",
      title: "Middle Name",
      required: {
        value: true,
        message: "Middle Name is required",
      },
    },
    {
      name: "last_name",
      type: "text",
      title: "Last Name",
      required: {
        value: true,
        message: "Last Name is required",
      },
    },
    {
      name: "ogid",
      type: "text",
      title: "Employee ID",
      required: {
        value: true,
        message: "Employeed ID is required",
      },
    },
    {
      name: "password",
      type: "text",

      title: "Password",
      required: {
        value: true,
        message: "Password is required",
      },
      validation: function (val) {
        return val.length >= 5 || "Min Length is 5";
      },
    },
    {
      name: "company_email",
      type: "email",
      title: "Email",
      required: {
        value: true,
        message: "Email is required",
      },
      validation: function (val) {
        return val.length >= 5 || "Min Length is 5";
      },
    },
    {
      name: "reports_to",
      type: "select",
      title: "Reports to",
      required: {
        value: true,
        message: "Reports to is required",
      },
      options: [],
    },
    {
      name: "date_of_joining",
      type: "date",
      title: "Date of joining",
      required: {
        value: true,
        message: "Date of joining is required",
      },
    },
    {
      name: "designation",
      type: "select",
      title: "Designation",
      required: {
        value: true,
        message: "designation is required",
      },
      options: [],
    },
    {
      name: "projectId",
      type: "select",
      title: "Campaign",
      required: {
        value: true,
        message: "designation is required",
      },
      options: [],
    },
    {
      name: "department",
      type: "select",
      title: "Department",
      required: {
        value: true,
        message: "department is required",
      },
      options: [],
    },
    {
      name: "default_shift",
      type: "select",
      title: "Shift",
      required: {
        value: true,
        message: "shift is required",
      },
      options: [],
    },
    {
      name: "branch",
      type: "select",
      title: "Branch",
      options: [],
    },

    {
      name: "employeeType",
      type: "select",
      title: "Employment type",
      required: {
        value: false,
      },
      options: [
        {
          label: "Apprentice",
          value: "Apprentice",
        },
        {
          label: "Intern",
          value: "Intern",
        },
        {
          label: "Commission",
          value: "Commission",
        },
        {
          label: "Contract",
          value: "Contract",
        },
        {
          label: "Probation",
          value: "Probation",
        },
        {
          label: "PartTime",
          value: "PartTime",
        },
        {
          label: "FullTime",
          value: "FullTime",
        },
      ],
    },
    {
      name: "gender",
      type: "select",
      title: "Gender",
      options: [
        {
          label: "Female",
          value: "female",
        },
        {
          label: "Male",
          value: "male",
        },
      ],
    },
    {
      name: "status",
      type: "select",
      title: "Status",
      options: [
        {
          label: "Active",
          value: "active",
        },
        {
          label: "Terminated",
          value: "terminated",
        },
        {
          label: "Left",
          value: "left",
        },
        // {
        //   name: "projectId",
        //   type: "select",
        //   title: "Campaign",
        //   required: {
        //     value: true,
        //     message: "Campaign is required",
        //   },
        //   options: [],
        // },
        // {
        //   name: "default_shift",
        //   type: "select",
        //   title: "Shift",
        //   required: {
        //     value: true,
        //     message: "shift is required",
        //   },
        //   options: [],
        // },
      ],
    },
    {
      name: "leaveCount",
      type: "number",
      title: "Leave Count",
      required: {
        value: false,
        message: "Password is required",
      },
      validation: function (val) {
        return val.length >= 5 || "Min Length is 5";
      },
    },
    {
      name: "image",
      type: "file",
      title: "Employee Image",
    },
    {
      name: "isAdmin",
      type: "check",
      title: "Admin User",
      required: {
        value: true,
        message: "Admin User is required",
      },
    },
    {
      name: "isExpatriate",
      type: "check",
      title: "Expatriate",
    },
    {
      name: "isEmployee",
      type: "check",
      title: "Employee",
    },
    // {
    //   name: "role",
    //   type: "role",
    //   title: "Role",
    //   options: [],
    // },
  ],
};
