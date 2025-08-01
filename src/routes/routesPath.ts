export const RoutePaths = {
  ROOT: "/",
  ACCOUNT_TYPES: "/account-types",

  VERIFY_EMAIL: "/auth/verify-email",

  // ACCOUNT_CREATION: "/create-account",
  CREATE_ACCOUNT: "/auth/create-account",
  CREATE_BUSINESS_DETAIL: "/auth/onboarding/add-business-details",
  SIGNIN: "/auth/signin",
  RESET_PASSWORD: "/auth/reset-password",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_OTP: "/auth/reset-otp",
  CREATE_PASSWORD: "/auth/create-password",
  SELECT_ACCOUNT_TYPE: "/auth/onboarding/select-account-type",
  GUIDE: "/guide",

  // Dashboard and main navigation routes
  DASHBOARD: "/dashboard",

  // contracts
  CONTRACTS: "/dashboard/team-contracts",
  CONTRACT_DETAIL: "/team-contracts/:contractId",
  CREATE_CONTRACT: "/dashboard/team-contracts/create-contract",

  // "team management"
  TEAM_MANAGEMENT: "/dashboard/team-management",
  TEAM_MANAGEMENT_EMPLOYEE: "/dashboard/team-management/employee",
  TEAM_MANAGEMENT_TIME_TRACKING: "/dashboard/team-management/time-tracking",
  TEAM_MANAGEMENT_MILESTONE: "/dashboard/team-management/milestone",
  TEAM_MANAGEMENT_TIME_OFF: "/dashboard/team-management/time-off",
  TEAM_MANAGEMENT_EXPENSE: "/dashboard/team-management/expense",
  // payroll
  PAYROLL: "/dashboard/payroll",

  // invoices

  PAYROLL_EMPLOYEE_DETAILS: "/dashboard/payroll/employee-details",
  INVOICES: "/dashboard/invoices",
  BUSINESS: "/dashboard/business",
  SETTINGS: "/dashboard/settings",
  COMPANY_INFORMATION_SETTINGS: "/dashboard/settings/company-information",
  BILLING_ADDRESS_SETTINGS: "/dashboard/settings/billing-address",
  REGISTERED_ADDRESS_SETTINGS: "/dashboard/settings/registered-address",
  PERMISSIONS_SETTINGS: "/dashboard/settings/permissions",
  TEMPLATE_SETTINGS: "/dashboard/settings/template",
  EDIT_TEMPLATE_SETTINGS: "/dashboard/settings/template/edit",
  PROFILE_SETTINGS: "/dashboard/profile-settings",
  EDIT_PROFILE_SETTINGS: "/dashboard/profile-settings/edit",
  TWO_FA_SETTINGS: "/dashboard/profile-settings/two-factor-authenticator-setup",
  SCAN_TWO_FA_QR_CODE_SETTINGS:
    "/dashboard/profile-settings/two-factor-authenticator-setup/scan-qr-code",
  VERIFY_TWO_FA_SETTINGS:
    "/dashboard/profile-settings/two-factor-authenticator-setup/verify-otp",
  VERIFY_TWO_FA_EMAIL_SETTINGS:
    "/dashboard/profile-settings/two-factor-authenticator-setup/verify-email",

  NOT_FOUND: "*",
};
