import { PATH_DASHBOARD } from "../../routes/paths";

const getIcon = (name) => <i className={"la " + name}></i>;

const ICONS = {
  user: getIcon("la-user"),
  reports: getIcon("la-pie-chart"),
  recruitment: getIcon("la-briefcase"),
  payroll: getIcon("la-money"),
  dashboard: getIcon("la-dashboard"),
  apps: getIcon("la-cube"),
  performance: getIcon("la-graduation-cap"),
  coaching: getIcon("la-ticket"),
  promotion: getIcon("la-bullhorn"),
  resignation: getIcon("la-external-link-square"),
  termination: getIcon("la-times-circle"),
  rolesPermission: getIcon("la-key"),
  assets: getIcon("la-object-ungroup"),
  purchaseOrder: getIcon("la-shopping-cart"),
  productItems: getIcon("la-box"),
  settings: getIcon("la-shopping-cart"),
  rolesAssignment: getIcon("la-lock"),
  shadowing: getIcon("la-users"),
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: "Main",
    canView: "All",
    items: [
      {
        canView: "All",
        title: "Dashboard",
        path: PATH_DASHBOARD.main.root,
        icon: ICONS.dashboard,
        children: [
          { canView: "", title: "Dashboard", path: PATH_DASHBOARD.main.main },
          {
            canView: "HR",
            title: "HR Dashboard",
            path: PATH_DASHBOARD.main.hrDashboard,
          },
          {
            canView: "Accounting",
            title: "Account Dashboard",
            path: PATH_DASHBOARD.main.accountDashboard,
          },
          {
            canView: "HR",
            title: "Job Dashboard",
            path: PATH_DASHBOARD.main.jobDashboard,
          },
          {
            canView: "All",
            title: "Employee Dashboard",
            path: PATH_DASHBOARD.main.employeeDashboard,
          },
        ],
      },
      {
        canView: "All",
        title: "Apps",
        path: PATH_DASHBOARD.apps.root,
        icon: ICONS.apps,
        children: [
          { canView: "All", title: "Email", path: PATH_DASHBOARD.apps.email },
          {
            canView: "All",
            title: "Email Signature",
            path: PATH_DASHBOARD.apps.signature,
          },
          {
            canView: "All",
            title: "File Manager",
            path: PATH_DASHBOARD.apps.fileManager,
          },
          {
            canView: "All",
            title: "Notifications",
            path: PATH_DASHBOARD.apps.notification,
          },
        ],
      },
    ],
  },
  {
    subheader: "HR",
    canView: "All",
    items: [
      {
        canView: "All",
        title: "Employees",
        path: PATH_DASHBOARD.hr.root,
        icon: ICONS.user,
        children: [
          {
            canView: "HR",
            title: "All Employees",
            path: PATH_DASHBOARD.hr.allEmployees,
          },
          {
            canView: "HR",
            title: "Leaves (Admin)",
            path: PATH_DASHBOARD.hr.leavesAdmin,
          },
          {
            canView: "All",
            title: "Leaves (Employee)",
            path: PATH_DASHBOARD.hr.leavesEmployee,
          },
          {
            canView: "HR",
            title: "Attendance (Admin)",
            path: PATH_DASHBOARD.hr.attendanceAdmin,
          },
          {
            canView: "All",
            title: "Attendance (Employee)",
            path: PATH_DASHBOARD.hr.attendanceEmployee,
          },
          {
            canView: "HR",
            title: "Departments",
            path: PATH_DASHBOARD.hr.department,
          },
          {
            canView: "HR",
            title: "Designations",
            path: PATH_DASHBOARD.hr.designations,
          },
          { canView: "HR", title: "Shifts", path: PATH_DASHBOARD.hr.shifts },
          {
            canView: "HR",
            title: "Shift Assignments",
            path: PATH_DASHBOARD.hr.shiftAssignment,
          },
          {
            canView: "All",
            title: "Shift Request",
            path: PATH_DASHBOARD.hr.shiftRequest,
          },
        ],
      },
      {
        canView: "HR",
        title: "Payroll",
        path: PATH_DASHBOARD.payroll.root,
        icon: ICONS.payroll,
        children: [
          {
            canView: "HR",
            title: "Employee Salary",
            path: PATH_DASHBOARD.payroll.salary,
          },
          {
            canView: "HR",
            title: "Payroll Items",
            path: PATH_DASHBOARD.payroll.payrollItem,
          },
        ],
      },
      {
        canView: "HR",
        title: "Reports",
        path: PATH_DASHBOARD.payroll.root,
        icon: ICONS.reports,
        children: [
          {
            canView: "HR",
            title: "Employee Reports",
            path: PATH_DASHBOARD.reports.employeeReport,
          },
          {
            canView: "HR",
            title: "Payslip Reports",
            path: PATH_DASHBOARD.reports.payslipReport,
          },
          {
            canView: "HR",
            title: "Attendance Reports",
            path: PATH_DASHBOARD.reports.attendanceReports,
          },
        ],
      },
      {
        canView: "HR",
        title: "Recruitment",
        path: PATH_DASHBOARD.recruitment.root,
        icon: ICONS.recruitment,
        children: [
          {
            canView: "HR",
            title: "Job Opening",
            path: PATH_DASHBOARD.recruitment.jobOpening,
          },
          {
            canView: "HR",
            title: "Job Applicants",
            path: PATH_DASHBOARD.recruitment.jobApplicants,
          },
          {
            canView: "HR",
            title: "Interview",
            path: PATH_DASHBOARD.recruitment.aptitudeTests,
          },
          {
            canView: "HR",
            title: "Job Offer",
            path: PATH_DASHBOARD.recruitment.jobOffer,
          },
          {
            canView: "Facility",
            title: "Interview Schedule List",
            path: PATH_DASHBOARD.recruitment.interviewees,
          },
          {
            canView: "HR",
            title: "Shadowing",
            path: PATH_DASHBOARD.recruitment.shadowing,
          },
        ],
      },
      {
        canView: "HR",
        title: "Performance",
        path: PATH_DASHBOARD.performance.root,
        icon: ICONS.performance,
        children: [
          {
            canView: "HR",
            title: "Warning Letter",
            path: PATH_DASHBOARD.performance.warningLetter,
          },
          {
            canView: "HR",
            title: "Score Cards",
            path: PATH_DASHBOARD.performance.scoreCards,
          },
        ],
      },
      {
        canView: "",
        title: "Coaching Form List",
        path: PATH_DASHBOARD.coaching,
        icon: ICONS.coaching,
      },
      {
        canView: "All",
        title: "Coaching Form",
        path: PATH_DASHBOARD.employeeCoaching,
        icon: ICONS.coaching,
      },
      {
        canView: "HR",
        title: "Promotion",
        path: PATH_DASHBOARD.promotion,
        icon: ICONS.promotion,
      },
      {
        canView: "HR",
        title: "Resignation",
        path: PATH_DASHBOARD.resignation,
        icon: ICONS.resignation,
      },
      {
        canView: "HR",
        title: "Termination",
        path: PATH_DASHBOARD.termination,
        icon: ICONS.termination,
      },
    ],
  },
  {
    subheader: "Operations",
    canView: "Super",
    items: [
      {
        canView: "Super",
        title: "Campaign",
        path: PATH_DASHBOARD.campaign.root,
        icon: ICONS.user,
        children: [
          {
            canView: "Super",
            title: "All Campaigns",
            path: PATH_DASHBOARD.campaign.allCampaign,
          },
          {
            canView: "Super",
            title: "Leads",
            path: PATH_DASHBOARD.campaign.lead,
          },
          {
            canView: "Super",
            title: "Branch",
            path: PATH_DASHBOARD.campaign.branch,
          },
          {
            canView: "Super",
            title: "Client Leave Approvals",
            path: PATH_DASHBOARD.clients.leaveApprovals,
          },
        ],
      },
      {
        canView: "HR",
        title: "Payroll",
        path: PATH_DASHBOARD.payroll.root,
        icon: ICONS.payroll,
        children: [
          {
            canView: "HR",
            title: "Employee Salary",
            path: PATH_DASHBOARD.payroll.salary,
          },
          {
            canView: "HR",
            title: "Payroll Items",
            path: PATH_DASHBOARD.payroll.payrollItem,
          },
        ],
      },
      {
        canView: "HR",
        title: "Reports",
        path: PATH_DASHBOARD.payroll.root,
        icon: ICONS.reports,
        children: [
          {
            canView: "HR",
            title: "Employee Reports",
            path: PATH_DASHBOARD.reports.employeeReport,
          },
          {
            canView: "HR",
            title: "Payslip Reports",
            path: PATH_DASHBOARD.reports.payslipReport,
          },
          {
            canView: "HR",
            title: "Attendance Reports",
            path: PATH_DASHBOARD.reports.attendanceReports,
          },
        ],
      },
    ],
  },
  {
    subheader: "Accounting",
    canView: "Accounting",
    items: [
      {
        canView: "Accounting",
        title: "Accounting",
        path: PATH_DASHBOARD.accounts.root,
        icon: ICONS.user,
        children: [
          {
            canView: "Accounting",
            title: "Accounts",
            path: PATH_DASHBOARD.accounts.chartOfAccount,
          },
          {
            canView: "Accounting",
            title: "Budget",
            path: PATH_DASHBOARD.accounts.budgets,
          },
          {
            canView: "Accounting",
            title: "Journals",
            path: PATH_DASHBOARD.accounts.journals,
          },
          {
            canView: "Accounting",
            title: "General Ledger",
            path: PATH_DASHBOARD.accounts.ledger,
          },
          {
            canView: "Accounting",
            title: "Expense",
            path: PATH_DASHBOARD.accounts.expenseHeads,
          },
        ],
      },
      {
        canView: "Accounting",
        title: "Accounting Reports",
        path: PATH_DASHBOARD.accountingReports.root,
        icon: ICONS.user,
        children: [
          {
            canView: "Accounting",
            title: "Payroll Reports",
            path: PATH_DASHBOARD.accountingReports.payrollReport,
          },
          {
            canView: "Accounting",
            title: "Balance Sheet",
            path: PATH_DASHBOARD.accountingReports.balanceSheet,
          },
        ],
      },
      {
        canView: "Accounting",
        title: "Clients",
        path: PATH_DASHBOARD.clients.root,
        icon: ICONS.user,
        children: [
          {
            canView: "Accounting",
            title: "Invoices",
            path: PATH_DASHBOARD.clients.invoices,
          },
          {
            canView: "Accounting",
            title: "Payments",
            path: PATH_DASHBOARD.clients.payments,
          },
        ],
      },
      {
        canView: "Accounting",
        title: "Vendors",
        path: PATH_DASHBOARD.vendors.root,
        icon: ICONS.user,
        children: [
          {
            canView: "Accounting",
            title: "Vendors",
            path: PATH_DASHBOARD.vendors.vendors,
          },
          {
            canView: "Accounting",
            title: "Bills",
            path: PATH_DASHBOARD.vendors.bills,
          },
          {
            canView: "Accounting",
            title: "Payments",
            path: PATH_DASHBOARD.vendors.payments,
          },
        ],
      },
      {
        canView: "Accounting",
        title: "Product Items",
        path: PATH_DASHBOARD.productItems,
        icon: ICONS.productItems,
      },
    ],
  },
  {
    subheader: "Procurements",
    canView: "Accounting",
    items: [
      {
        canView: "Accounting",
        title: "Assets",
        path: PATH_DASHBOARD.assets.root,
        icon: ICONS.user,
        children: [
          {
            canView: "Accounting",
            title: "Assets",
            path: PATH_DASHBOARD.assets.all,
          },
          {
            canView: "Accounting",
            title: "Assignment",
            path: PATH_DASHBOARD.assets.assignment,
          },
        ],
      },
      {
        canView: "Accounting",
        title: "Assets Purchase Order",
        path: PATH_DASHBOARD.purchaseOrder,
        icon: ICONS.purchaseOrder,
      },
    ],
  },
  {
    subheader: "Facility",
    canView: "Facility",
    items: [
      {
        canView: "Facility",
        title: "Maintenance",
        path: PATH_DASHBOARD.facility.root,
        icon: ICONS.user,
        children: [
          {
            canView: "Facility",
            title: "Maintenance Report",
            path: PATH_DASHBOARD.facility.all,
          },
          {
            canView: "Facility",
            title: "Maintenance and Repairs",
            path: PATH_DASHBOARD.facility.maintenanceRepair,
          },
        ],
      },
      {
        canView: "Facility",
        title: "Shadowing",
        path: PATH_DASHBOARD.facility.shadowing,
        icon: ICONS.shadowing,
      },
      {
        canView: "Facility",
        title: "Interview Schedule List",
        path: PATH_DASHBOARD.recruitment.interviewees,
        icon: ICONS.shadowing,
      },
    ],
  },
  {
    subheader: "Settings",
    canView: "HR",
    items: [
      {
        canView: "HR",
        title: "Roles & Permission",
        path: PATH_DASHBOARD.settings.rolesPermission,
        icon: ICONS.rolesPermission,
      },
      {
        canView: "HR",
        title: "Roles Assignment",
        path: PATH_DASHBOARD.settings.rolesAssignment,
        icon: ICONS.rolesAssignment,
      },
    ],
  },
];
export default sidebarConfig;
