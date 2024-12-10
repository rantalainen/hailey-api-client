/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AddEmployeeRequestModel {
  /** @minLength 1 */
  firstName: string;
  /** @minLength 1 */
  lastName: string;
  /** @minLength 1 */
  companyEmail: string;
  /** @format date */
  startDate: string;
}

/** Bank details for the Employee. */
export interface BankDetails {
  /** The Employee's bank name. */
  bankName?: string | null;
  /** The Employee's clearing number at the bank. */
  clearingNumber?: string | null;
  /** The Employee's account number at the bank. */
  accountNumber?: string | null;
  /** The Employee's IBAN number at the bank. */
  iban?: string | null;
  /** The Employee's BIC number at the bank. */
  bic?: string | null;
  /** The Employee's SWIFT number at the bank. */
  swift?: string | null;
}

export interface ChangeItem {
  /** @format uuid */
  employeeId?: string;
  changeDate?: string | null;
  /** @format date */
  effectiveDate?: string;
  field?: string | null;
  oldValue?: any;
  newValue?: any;
  isCustomField?: boolean;
  customFieldType?: string | null;
}

export interface ChangeReportItem {
  changes?: ChangeItem[] | null;
}

export interface ClockInRequestModel {
  /** @format uuid */
  employeeId?: string;
}

export interface ClockOutRequestModel {
  /** @format uuid */
  employeeId?: string;
}

/** Base model for the Company. */
export interface Company {
  /** The Company's custom fields for Employees, if any. */
  customFields?: CustomField[] | null;
  /** The Company's custom fields for Employments, if any. */
  customEmploymentFields?: CustomEmploymentField[] | null;
  /** The Company's teams, if any. */
  teams?: CompanyTeam[] | null;
  /** The Company's locations. */
  locations?: Location[] | null;
  /** The Company's titles, if any. */
  titles?: Title[] | null;
  /** The Company's Legal entities, if any. */
  legalEntities?: LegalEntity[] | null;
  /** The Company's departments. */
  departments?: Department[] | null;
}

/** A Team created by the company. */
export interface CompanyTeam {
  /**
   * The unique id for the Team in Hailey HR.
   * @format uuid
   */
  id?: string;
  /** The name of the Team. */
  name?: string | null;
}

/** Information on the Compensation for the Employee, excluding salaries, which are listed under Salaries. */
export interface Compensation {
  /** Bank details for the Employee. */
  bankDetails?: BankDetails;
}

/** Contact information for the Employee. */
export interface ContactInformation {
  /** The Employee's private e-mail address. */
  privateEmail?: string | null;
  /** The Employee's private phone number. */
  privatePhone?: string | null;
  /** The Employee's street address. */
  streetAddress?: string | null;
  /** The Employee's postal code. */
  postalCode?: string | null;
  /** The Employee's city. */
  city?: string | null;
  /** The Employee's country. */
  country?: string | null;
}

export type CurrencyCode = object;

/** A Custom field for an Employment created by the company. */
export interface CustomEmploymentField {
  /**
   * The unique id for the custom field in Hailey HR.
   * @format uuid
   */
  id?: string;
  /** The name of the custom field. */
  name?: string | null;
  /** The type of custom field, can be for example number or text. */
  type?: string | null;
}

/** A Custom field for an Employee created by the company. */
export interface CustomField {
  /**
   * The unique id for the custom field in Hailey HR.
   * @format uuid
   */
  id?: string;
  /** The name of the custom field. */
  name?: string | null;
  /** The type of custom field, can be for example number or text. */
  type?: string | null;
}

/** A custom input field created by the company for the Job ad. */
export interface CustomInputField {
  /** The name of the custom input field. */
  name?: string | null;
  /** The type of the custom input field, for example "Text" or "UploadPDF". */
  type?: string | null;
}

/** A Department created by the company. */
export interface Department {
  /**
   * The unique id of the Department in Hailey HR.
   * @format uuid
   */
  id?: string;
  /** The name of the Department. */
  name?: string | null;
}

/** Base model for a single Employee. */
export interface Employee {
  /**
   * The unique Id for the Employee in Hailey HR.
   * @format uuid
   */
  employeeId?: string;
  /** Indicates if the Employee has an account and can log in to Hailey HR. */
  accountStatus?: string | null;
  /** ReportedTimeDayStatus of the Employee's Employment, e.g. "In service" or "Will join". */
  employmentStatus?: string | null;
  /**
   * Date time of the last change to this object.
   * @format date-time
   */
  lastUpdated?: string;
  /** Job related data for the Employee. */
  jobData?: JobData;
  /** Personal data for the Employee. */
  personal?: Personal;
  /** Information on the Compensation for the Employee, excluding salaries, which are listed under Salaries. */
  compensation?: Compensation;
  /** The Feedback sessions for the Employee, if any. Obsolete, use Feedback instead */
  feedbackSessions?: FeedbackSession[] | null;
  /** The Feedback for the Employee, if any. */
  feedback?: Feedback[] | null;
  /** The Salaries for the Employee, if any. */
  salaries?: Salary[] | null;
  organizationalBelonging?: EmploymentOrganizationalInformation;
  /** Custom fields defined in a Company, with the data set for the Employee. */
  customFieldsData?: Record<string, JToken>;
}

/** A representation of an Employee in the list of Employees. More details on the Employee are included if the Employee is requested by Id. */
export interface EmployeeListItem {
  /**
   * The unique Id for the Employee in Hailey HR.
   * @format uuid
   */
  employeeId?: string;
  /** Indicates if the Employee has an account and can log in to Hailey HR. */
  accountStatus?: string | null;
  /**
   * Date time of the last change to this object.
   * @format date-time
   */
  lastUpdated?: string;
  /** The Employee's phone number at work. */
  workPhone?: string | null;
  /** The Ids of the Titles the Employee has. */
  titleIds?: string[] | null;
  /** The Employee's e-mail address number at work. */
  companyEmail?: string | null;
  /**
   * The unique Id for the Department the Employee is at.
   * @format uuid
   */
  departmentId?: string | null;
  /**
   * The unique Id for the Location the Employee is at.
   * @format uuid
   */
  locationId?: string | null;
  /**
   * The unique Id for the Legal entity the Employee is at.
   * @format uuid
   */
  legalEntityId?: string | null;
  /**
   * Id of the Business Area the Employee belongs to in this Employment.
   * @format uuid
   */
  businessAreaId?: string | null;
  /**
   * Id of the Employee the current Employee reports to, if any.
   * @format uuid
   */
  managerEmployeeId?: string | null;
  /** A list of Ids for teams the Employee is in. */
  teamIds?: string[] | null;
  /**
   * The date the Employee joined the Company, i.e. the start of the first employment.
   * @format date
   */
  dateOfJoining?: string | null;
  /**
   * The date the last employment ends for the Employee, if any.
   * @format date
   */
  lastDayOfEmployment?: string | null;
  /**
   * ReportedTimeDayStatus of the Employee's employment, e.g. "In service" or "Will join". This property is calculated
   * from the start and end dates of the employee's employments, and may thus change when days pass.
   */
  employmentStatus?: string | null;
  /** Type of Employment, e.g. Permanent. Calculated from the employee's effectual employment. */
  employmentType?: string | null;
  /**
   * Notice period for the Employee in months. Calculated from the employee's effectual employment.
   * @deprecated
   * @format int32
   */
  noticePeriodMonths?: number | null;
  /**
   * Notice period for the Employee. Calculated from the employee's effectual employment.
   * @format int32
   */
  noticePeriod?: number | null;
  /** The unit for which the notice period is measured. Valid units are 'Months' and 'Weeks'. */
  noticePeriodUnit?: string | null;
  /**
   * The last day of the Probationary period for the Employee. Calculated from the employee's effectual employment.
   * @format date
   */
  endOfProbationaryPeriod?: string | null;
  /** Type of fixed term employment, if the Employment type is Fixed term. Calculated from the employee's effectual employment. */
  fixedTermType?: string | null;
  /**
   * Date the fixed term employment ends, if the Employment type is Fixed term. Calculated from the employee's effectual employment.
   * @format date
   */
  endOfFixedTerm?: string | null;
  /**
   * The scope of the employment in percent. Calculated from the employee's effectual employment.
   * @format double
   */
  scopePercentage?: number | null;
  /**
   * The scope of the employment in hours. Calculated from the employee's effectual employment.
   * @format double
   */
  scopeHours?: number | null;
  /**
   * Number of vacation days for the Employee. Calculated from the employee's effectual employment.
   * @format int32
   */
  vacationDays?: number | null;
  /**
   * Id of the Employee the current Employee is substituting for, if any. Calculated from the employee's effectual employment.
   * @format uuid
   */
  substitutingForEmployeeId?: string | null;
  /** The employment number for the employee, auto generated or manually set. */
  employmentNumber?: string | null;
  /** The Employee's bank name. */
  bankName?: string | null;
  /** The Employee's clearing number at the bank. */
  clearingNumber?: string | null;
  /** The Employee's account number at the bank. */
  accountNumber?: string | null;
  /** The Employee's IBAN number at the bank. */
  iban?: string | null;
  /** The Employee's BIC number at the bank. */
  bic?: string | null;
  /** The Employee's SWIFT number at the bank. */
  swift?: string | null;
  /** The Employee's first name. */
  firstName?: string | null;
  /** The Employee's last name. */
  lastName?: string | null;
  /** The Employee's gender, e.g. female, male or other. */
  gender?: string | null;
  /** The Employee's date of birth. */
  dateOfBirth?: string | null;
  /** The Employee's personal identity number. */
  personalIdentityNumber?: string | null;
  /** The Employee's private e-mail address. */
  privateEmail?: string | null;
  /** The Employee's private phone number. */
  privatePhone?: string | null;
  /** The Employee's street address. */
  streetAddress?: string | null;
  /** The Employee's postal code. */
  postalCode?: string | null;
  /** The Employee's city. */
  city?: string | null;
  /** The Employee's country. */
  country?: string | null;
  /** Name of the Employee's emergency contact. */
  iceName?: string | null;
  /** Phone number to the Employee's emergency contact. */
  icePhone?: string | null;
  /** The Employee's relation with the emergency contact. */
  iceRelation?: string | null;
  /** Custom fields defined for a Company, with the data set for the Employee. */
  customFieldsData?: Record<string, JToken>;
  /** Numeric id generated in sequence or manually added to employment, used to identify an employment as a shared id between systems. */
  employmentSequenceNumber?: string | null;
}

/** An Employee with time off. */
export interface EmployeeWithTimeOffs {
  /**
   * The unique id of the Employee in Hailey HR.
   * @format uuid
   */
  employeeId?: string;
  /** A list of time off registered for the Employee. */
  timeOffDates?: TimeOffDate[] | null;
}

/** Information concerning the Employment of the Employee. */
export interface Employment {
  /**
   * The date the Employee joined the Company.
   * @format date
   */
  dateOfJoining?: string | null;
  /**
   * The date the Employment ends for the Employee, if any.
   * @format date
   */
  lastDayOfEmployment?: string | null;
  /** The Employments of the employee. current, future and historical. */
  employments?: EmploymentVm[] | null;
}

export interface EmploymentOrganizationalInformation {
  /** A list of title id's the Employee has in this Employment. */
  titleIds?: string[] | null;
  /** A list of team id's of the teams the Employee belongs to in this Employment. */
  teamIds?: string[] | null;
  /**
   * Id of the Location the Employee belongs to in this Employment.
   * @format uuid
   */
  locationId?: string | null;
  /**
   * EmployeeId of the manager for this Employment, if any.
   * @format uuid
   */
  managerEmployeeId?: string | null;
  /**
   * Id of the Department the Employee belongs to in this Employment.
   * @format uuid
   */
  departmentId?: string | null;
  /**
   * Id of the Legal Entity the Employee belongs to in this Employment.
   * @format uuid
   */
  legalEntityId?: string | null;
  /**
   * Id of the Business Area the Employee belongs to in this Employment.
   * @format uuid
   */
  businessAreaId?: string | null;
}

export interface EmploymentTerms {
  /** Type of Employment, e.g. Permanent. */
  employmentType?: string | null;
  /**
   * Notice period for the Employee in months.
   * @deprecated
   * @format int32
   */
  noticePeriodMonths?: number | null;
  /**
   * Notice period for the Employee.
   * @format int32
   */
  noticePeriod?: number | null;
  /** The unit for which the notice period is measured. Available units are 'Months' and 'Weeks'. */
  noticePeriodUnit?: string | null;
  /**
   * The last day of the Probationary period for the Employee.
   * @format date
   */
  endOfProbationaryPeriod?: string | null;
  /** Type of fixed term Employment, if the Employment type is Fixed term. */
  fixedTermType?: string | null;
  /**
   * Date the fixed term Employment ends, if the Employment type is Fixed term.
   * @format date
   */
  endOfFixedTerm?: string | null;
  /**
   * The scope of the Employment in percent.
   * @format double
   */
  scopePercentage?: number | null;
  /**
   * The scope of the Employment in hours.
   * @format double
   */
  scopeHours?: number | null;
  /**
   * Number of vacation days for the Employee.
   * @format int32
   */
  vacationDays?: number | null;
  /**
   * Id of the Employee the current Employee is substituting for, if any.
   * @format uuid
   */
  substitutingForEmployeeId?: string | null;
}

export interface EmploymentVm {
  /**
   * The unique Id of the Employment in Hailey HR.
   * @format uuid
   */
  employmentId?: string;
  /**
   * The start date of the Employment in YYYY-MM-DD format
   * @format date
   */
  startDate?: string;
  /**
   * The end date of the Employment in YYYY-MM-DD format
   * @format date
   */
  endDate?: string | null;
  organizationalInformation?: EmploymentOrganizationalInformation;
  terms?: EmploymentTerms;
  /** Custom fields defined for a Company, with the data set for the Employment. */
  customFieldsData?: Record<string, JToken>;
}

/** A feedback for the Employee. */
export interface Feedback {
  /**
   * The unique Id for the feedback.
   * @format uuid
   */
  feedbackId?: string;
  /**
   * Id of the Employee that held the one-to-one.
   * @format uuid
   */
  hostEmployeeId?: string;
  /** Title set for the feedback. */
  title?: string | null;
  /** Date of the one-to-one. */
  date?: string | null;
  /** General notes for the one-to-one. */
  notes?: string | null;
  /** The sections of the feedback template used for the feedback. */
  sections?: FeedbackSection[] | null;
}

/** A question and an answer for a feedback. */
export interface FeedbackQuestion {
  /** A question asked during the feedback. */
  question?: string | null;
  /** Type of answer, e.g. free text. */
  typeOfAnswer?: string | null;
  /** The answer to the question submitted by the employee before the one-to-one. */
  answerBeforeByEmployee?: string | null;
  /** The answer to the question submitted by the host before the one-to-one. */
  answerBeforeByHost?: string | null;
  /** The answer to the question given during the one-to-one. */
  answerDuringOneToOne?: string | null;
}

/** A group of questions with a title. */
export interface FeedbackSection {
  /** Title of the section of questions and answers. */
  sectionTitle?: string | null;
  /** List of questions and answers in the section. */
  questions?: FeedbackQuestion[] | null;
}

/** A feedback session for the Employee. */
export interface FeedbackSession {
  /**
   * The unique Id for the feedback session.
   * @format uuid
   */
  feedbackSessionId?: string;
  /**
   * Id of the Employee that held the feedback session, Obsolete, use SessionHolderEmployeeId.
   * @format uuid
   */
  sessionHolderEmployeeId?: string;
  /** Title set for the feedback session. */
  title?: string | null;
  /** Date of the feedback session. */
  meetingDate?: string | null;
  /** General notes for the feedback session. */
  meetingNotes?: string | null;
  /** The sections of the feedback template used for the feedback session. */
  sections?: FeedbackSessionSection[] | null;
}

/** A question and an answer for a feedback session. */
export interface FeedbackSessionQuestion {
  /** A question asked during the feedback session. */
  question?: string | null;
  /** Type of answer, e.g. free text. */
  typeOfAnswer?: string | null;
  /** The answer to the question submitted by the employee before te session. */
  answerByEmployee?: string | null;
  /** The answer to the question submitted by the session holder before te session. */
  answerBySessionHolder?: string | null;
  /** The answer to the question given during the feedback session. */
  answerDuringFeedbackSession?: string | null;
}

/** A group of questions with a title. */
export interface FeedbackSessionSection {
  /** Title of the section of questions and answers. */
  sectionTitle?: string | null;
  /** List of questions and answers in the section. */
  questions?: FeedbackSessionQuestion[] | null;
}

/** The Employee's emergency contact. */
export interface Ice {
  /** Name of the Employee's emergency contact. */
  name?: string | null;
  /** Phone number to the Employee's emergency contact. */
  phone?: string | null;
  /** The Employee's relation with the emergency contact. */
  relation?: string | null;
}

export interface ImportEmploymentTimeOffs {
  /** @format uuid */
  employeeId?: string;
  /** @format uuid */
  employmentId?: string;
  timeOffs?: ImportTimeOffDate[] | null;
}

export interface ImportTimeOffDate {
  /** @format date */
  date?: string;
  /** @format uuid */
  timeOffReasonId?: string;
  /** @format double */
  scope?: number | null;
  /** @format int32 */
  minutes?: number | null;
}

export interface ImportTimeOffRequestModel {
  employmentTimeOffs?: ImportEmploymentTimeOffs[] | null;
}

export type JToken = JToken[];

/** Base model for the Job ad. */
export interface JobAd {
  /**
   * The unique Id for the Job ad in Hailey HR.
   * @format uuid
   */
  jobAdId?: string;
  /**
   * The date the Job ad got published to a Career Page.
   * @format date-time
   */
  publishedDateTime?: string | null;
  /** The title given to the Job ad. */
  title?: string | null;
  /** The subtitle given to the Job ad. */
  subtitle?: string | null;
  /** The description of the job that the Job ad is for. */
  jobDescription?: string | null;
  /**
   * The unique Id in Hailey HR for the logotype used in the Job ad, if any.
   * @format uuid
   */
  logotypeFileId?: string | null;
  /**
   * The unique Id in Hailey HR for the cover image used in the Job ad, if any.
   * @format uuid
   */
  coverImageFileId?: string | null;
  /**
   * The unique Id in Hailey HR for the contact person in the Job ad, if any.
   * @format uuid
   */
  contactPersonEmployeeId?: string | null;
  /**
   * The unique Id in Hailey HR for the career page that the Job ad is connected to, if any.
   * @format uuid
   */
  careerPageId?: string | null;
  /** Value that explain if the location of the job should be shown in the Job ad. */
  showLocation?: boolean;
  /** Value that explain if the department of the job should be shown in the Job ad. */
  showDepartment?: boolean;
  /** The Job ad's custom input fields, if any. */
  customInputFields?: CustomInputField[] | null;
}

/** Job related data for the Employee. */
export interface JobData {
  /** General information for the Job data for the Employee. */
  general?: JobDataGeneral;
  /** Information concerning the Employment of the Employee. */
  employment?: Employment;
}

/** General information for the Job data for the Employee. */
export interface JobDataGeneral {
  /** The Employee's phone number at work. */
  workPhone?: string | null;
  /** The Employee's e-mail address number at work. */
  companyEmail?: string | null;
  /** The Employment number for the employee, auto generated or manually set. */
  employmentNumber?: string | null;
  /**
   * The Titles of the employee, from the titles found on the effectual employment
   * @deprecated
   */
  titles?: string[] | null;
  /**
   * The Legal Entity the employee belongs to, according to effectual employment
   * @deprecated
   */
  legalEntity?: string | null;
}

/** A Legal entity created by the company. */
export interface LegalEntity {
  /**
   * The unique id for the Legal entity in Hailey HR.
   * @format uuid
   */
  id?: string;
  /** The company registration number for the Legal entity in Hailey HR. */
  companyRegistrationNumber?: string | null;
  /** The name of the Legal entity. */
  name?: string | null;
}

/** A Location created by the company. */
export interface Location {
  /**
   * The unique id for the Location in Hailey HR.
   * @format uuid
   */
  id?: string;
  /** The name of the Location. */
  name?: string | null;
}

/** Personal data for the Employee. */
export interface Personal {
  /** General personal information. */
  general?: PersonalGeneral;
  /** Personal information considered sensitive. */
  sensitive?: Sensitive;
  /** Contact information for the Employee. */
  contactInformation?: ContactInformation;
  /** The Employee's emergency contact. */
  ice?: Ice;
}

/** General personal information. */
export interface PersonalGeneral {
  /** The Employee's first name. */
  firstName?: string | null;
  /** The Employee's last name. */
  lastName?: string | null;
}

export interface ProblemDetails {
  type?: string | null;
  title?: string | null;
  /** @format int32 */
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
  [key: string]: any;
}

/** A representation of an Employee in the list of Employees. More details on the Employee are included if the Employee is requested by Id. */
export interface PublicEmployeeListItem {
  /** The Titles the Employee has at the Company. */
  titles?: string[] | null;
  /** Name of the Department the Employee is at. */
  department?: string | null;
  /** Name of the Location the Employee is at. */
  location?: string | null;
  /** The Employee's first name. */
  firstName?: string | null;
  /** The Employee's last name. */
  lastName?: string | null;
  /** The link to the profile image of the Employee, if any. */
  profileImageUri?: string | null;
  /** The Employee's company email. */
  companyEmail?: string | null;
  /** The Employee's work phone. */
  workPhone?: string | null;
}

/** A Salary for the Employee. */
export interface Salary {
  /**
   * The unique Id for the Salary in Hailey HR.
   * @format uuid
   */
  salaryId?: string;
  /**
   * The id for the employee the salary belongs to.
   * @format uuid
   */
  employeeId?: string;
  /** The title given to the Salary. */
  title?: string | null;
  /**
   * The id of this salary's specific salary type.
   * @format uuid
   */
  salaryTypeId?: string | null;
  /** The name of this salary's specific salary type. */
  salaryTypeName?: string | null;
  /** The pay period of the salary, Yearly, Monthly, Biweekly or Hourly. */
  payPeriod?: string | null;
  /**
   * The type of Salary, Yearly, Monthly, Biweekly or Hourly. Obsolete and replaced by PayPeriod
   * @deprecated
   */
  salaryType?: string | null;
  currencyCode?: CurrencyCode;
  /**
   * The last day the salary is paid for, if the Salary has an end.
   * @format date
   */
  endDate?: string | null;
  /** The history of the Salary, i.e. how the Salary has and will change. */
  history?: SalaryHistoryDataPoint[] | null;
  /** Information about a proposed change in a Salary that has not yet been approved. */
  pendingApproval?: SalaryPendingApproval;
  /** Information about a proposed change in a Salary amount that has not yet been approved. */
  pendingAmountApproval?: SalaryAmountPendingApproval;
  /** Information about a proposed end of salary that has not yet been approved. */
  pendingEndApproval?: SalaryEndPendingApproval;
}

/** Information about a proposed change in a Salary amount that has not yet been approved. */
export interface SalaryAmountPendingApproval {
  /**
   * The date when the new salary will take effect.
   * @format date
   */
  effectiveDate?: string;
  /**
   * The amount of the proposed change for the Salary.
   * @format double
   */
  amount?: number;
  /**
   * The id for the employee that the approval was created by
   * @format uuid
   */
  requestedByEmployeeId?: string;
}

/** Information about a proposed end of salary that has not yet been approved. */
export interface SalaryEndPendingApproval {
  /**
   * The date when the new salary will end that has not yet been approved
   * @format date
   */
  endDate?: string | null;
}

/** A start date and an amount for the Salary. */
export interface SalaryHistoryDataPoint {
  /**
   * Start date of an amount that should be paid for a Salary.
   * @format date
   */
  date?: string;
  /**
   * The amount paid for the salary, until the next data point (if any).
   * @format double
   */
  amount?: number;
}

/** Information about a proposed change in a Salary that has not yet been approved. */
export interface SalaryPendingApproval {
  /** The proposed change in title for the Salary. */
  title?: string | null;
  /**
   * The start date of the proposed change for the Salary.
   * @format date
   */
  startDate?: string;
  /**
   * The end date of the proposed change for the Salary, if any.
   * @format date
   */
  endDate?: string | null;
  /**
   * The amount of the proposed change for the Salary.
   * @format double
   */
  amount?: number;
}

/** Personal information considered sensitive. */
export interface Sensitive {
  /** The Employee's gender, e.g. female, male or other. */
  gender?: string | null;
  /** The Employee's date of birth. */
  dateOfBirth?: string | null;
  /** The Employee's personal identity number. */
  personalIdentityNumber?: string | null;
}

/** The Time and Time off settings of the company */
export interface TimeAndTimeOffSettings {
  timeOffReasons?: TimeOffReason[] | null;
}

/** All time off registered for a company. */
export interface TimeOff {
  /** The Time and Time off settings of the company */
  timeAndTimeOffSettings?: TimeAndTimeOffSettings;
  /** A list of the Company's Employees with time off. */
  employees?: EmployeeWithTimeOffs[] | null;
}

/** A time off date with associated data for an Employee. */
export interface TimeOffDate {
  /**
   * The date of the time off.
   * @format date
   */
  date?: string;
  /**
   * The scope of the time off.
   * @format double
   */
  scope?: number | null;
  /**
   * The time off in minutes.
   * @format int32
   */
  minutes?: number | null;
  /** A bool indicating if the time off has been approved by someone according to the approval principles for the company. */
  isApproved?: boolean;
  /**
   * The Id for the Time off reason. More details for the Time off reason can be found in the settings property.
   * @format uuid
   */
  timeOffReasonId?: string | null;
}

/** The reason of the time off */
export interface TimeOffReason {
  /** @format uuid */
  timeOffReasonId?: string;
  reason?: string | null;
  timeOffCategory?: string | null;
}

/** A title created by the company. */
export interface Title {
  /**
   * The unique id for the Title in Hailey HR.
   * @format uuid
   */
  id?: string;
  /** The name of the Title. */
  name?: string | null;
}

export interface UpdateCompanyEmailRequestModel {
  /** @minLength 1 */
  companyEmail: string;
}

export interface UpdateCustomEmployeeFieldsRequestModel {
  customFieldsData?: Record<string, JToken>;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Hailey HR Api
 * @version v1
 * @termsOfService https://haileyhr.com/terms-of-use/
 * @contact Hailey HR (http://haileyhr.com/)
 *
 * ## Overview of the API
 * The Hailey HR API provides programmatic access to master data, allowing developers to build custom features in order to e.g. integrate with their databases and third-party applications, and more.
 *
 * To use Hailey's API, you need a Hailey account and permissions to create personal access tokens. What you can do with the API depends on what level of access your user has to the master data.
 *
 * ### Company data
 * Here you can fetch basic information regarding your company, including name of e.g. departments, teams and custom fields.
 *
 * ### Quick add Employee
 * Use this endpoint to add a new employee with some basic employee information.
 *
 * ### Update Custom Employee Field
 * Use this endpoint to update one employee's custom field/s with data that matches the custom field/s type. For field type Yes/No use true/false. For field type Multi Select wrap the desired value/s in ["Brackets"].
 *
 * ### Employee data
 * Employee data is provided in two endpoints, one to fetch a list of all employees with basic info, and one to fetch detailed info for a single employee.
 *
 * ### Import Time off
 * Importing time off data is imported to the Hailey calendar. Note that all imported dates are assumed to be approved.  The Endpoint should take multiple employees with multiple time off dates.
 *
 * ### Public employee list
 * This endpoint can be enabled in the settings section in Hailey and allows unauthorized calls to get a list of all in service employees, with basic info and profile image URI. This is useful if you would like to have an always updated list of employees on your company home page.
 *
 * ### Salaries data
 * Use this endpoint to fetch all salaries in your company which you have the right to see.
 *
 * ### Time off
 * Use this endpoint to fetch time off for all employees in your company. Add from/to query parameters to filter by date. Both requested and approved time off is included.
 *
 * ### Clock In
 * Use this endpoint to clock in a certain employee to starting recording worked time.
 *
 * ### Clock Out
 * Use this endpoint to clock out a certain employee to end recording of worked time.
 *
 * ### Job ad data
 * Use this endpoint to fetch all job ads for your company. "PublishDateTime" will indicate weather the job ad is published or not. It is required to have the rights to view and/or edit recruitments.
 *
 * ## Webhooks
 * Companies have the option to configure webhooks in order to get notifications when data changes. Webhooks are sent when company data is modified or when a single employee is changed. The webhook URI is configured in the integrations section in Hailey.
 *
 * Webhooks are sent using the POST method with a JSON in the body containing either the modified companyId or employeeId.
 *
 * <a href = "https://docs.haileyhr.com/guide-for-api">More info on the API</a>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  changeReport = {
    /**
     * No description
     *
     * @tags ChangeReport
     * @name ChangeReportList
     * @summary Get a list of all changes in the company
     * @request GET:/ChangeReport
     * @secure
     * @response `200` `(ChangeReportItem)[]` OK
     * @response `201` `void` If changes are found
     * @response `400` `void` If invalid period
     * @response `401` `void` If unauthorized
     */
    changeReportList: (
      query?: {
        changeDateOrEffectiveDate?: string;
        fromDate?: string;
        toDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ChangeReportItem[], void>({
        path: `/ChangeReport`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  clockIn = {
    /**
     * No description
     *
     * @tags ClockIn
     * @name ClockInCreate
     * @summary Clocks in an employee, recording the employees start time. The time is shown in local time based on the time zone in company settings.
     * @request POST:/ClockIn
     * @secure
     * @response `200` `void` If the time off is found
     * @response `400` `ProblemDetails` Bad Request
     * @response `401` `ProblemDetails` If unauthorized
     * @response `404` `ProblemDetails` If time off is not found
     */
    clockInCreate: (data: ClockInRequestModel, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/ClockIn`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  clockOut = {
    /**
     * No description
     *
     * @tags ClockOut
     * @name ClockOutCreate
     * @summary Clocks out an employee, recording the employees end time.
     * @request POST:/ClockOut
     * @secure
     * @response `200` `void` If the time off is found
     * @response `401` `ProblemDetails` If unauthorized
     * @response `404` `ProblemDetails` If time off is not found
     */
    clockOutCreate: (data: ClockOutRequestModel, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/ClockOut`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  company = {
    /**
     * No description
     *
     * @tags Company
     * @name CompanyList
     * @summary Get your company data.
     * @request GET:/Company
     * @secure
     * @response `200` `Company` If the company is found
     * @response `401` `void` If unauthorized
     * @response `404` `ProblemDetails` If company is not found
     */
    companyList: (params: RequestParams = {}) =>
      this.request<Company, void | ProblemDetails>({
        path: `/Company`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  employee = {
    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeCreate
     * @summary Quick add Employee
     * @request POST:/Employee
     * @secure
     * @response `201` `void` If employee is added
     * @response `400` `ProblemDetails` If invalid email
     * @response `401` `void` If unauthorized
     * @response `403` `void` If access denied
     * @response `default` `ProblemDetails` Error
     */
    employeeCreate: (data: AddEmployeeRequestModel, params: RequestParams = {}) =>
      this.request<void, ProblemDetails | void>({
        path: `/Employee`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name CustomEmployeeFieldUpdate
     * @summary Update data for custom employee field
     * @request PUT:/Employee/{employeeId}/CustomEmployeeField
     * @secure
     * @response `200` `void` If data is updated for custom employee field
     * @response `204` `void` No Content
     * @response `400` `ProblemDetails` If the custom employee field or the data is invalid
     * @response `401` `void` If unauthorized
     * @response `403` `void` If access denied
     * @response `404` `ProblemDetails` Not Found
     * @response `default` `ProblemDetails` Error
     */
    customEmployeeFieldUpdate: (
      employeeId: string,
      data: UpdateCustomEmployeeFieldsRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<void, ProblemDetails | void>({
        path: `/Employee/${employeeId}/CustomEmployeeField`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name CompanyEmailUpdate
     * @summary Update company email
     * @request PUT:/Employee/{employeeId}/CompanyEmail
     * @secure
     * @response `200` `void` If email is updated
     * @response `204` `void` No Content
     * @response `400` `ProblemDetails` If invalid email
     * @response `401` `void` If unauthorized
     * @response `403` `void` If access denied
     * @response `404` `ProblemDetails` Not Found
     * @response `default` `ProblemDetails` Error
     */
    companyEmailUpdate: (employeeId: string, data: UpdateCompanyEmailRequestModel, params: RequestParams = {}) =>
      this.request<void, ProblemDetails | void>({
        path: `/Employee/${employeeId}/CompanyEmail`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  employees = {
    /**
     * No description
     *
     * @tags Employees
     * @name EmployeesList
     * @summary Get a list of all Employees in your Company. The data included will depend on the rights you have in Hailey.
     * @request GET:/Employees
     * @secure
     * @response `200` `(EmployeeListItem)[]` If employees are found
     * @response `401` `void` If unauthorized
     * @response `404` `ProblemDetails` If company or employees are not found
     */
    employeesList: (params: RequestParams = {}) =>
      this.request<EmployeeListItem[], void | ProblemDetails>({
        path: `/Employees`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employees
     * @name EmployeesDetail
     * @summary Fetch a single Employee in your company by the Id of the Employee.
     * @request GET:/Employees/{employeeId}
     * @secure
     * @response `200` `Employee` If employee is found
     * @response `401` `void` If unauthorized
     * @response `404` `ProblemDetails` If company or employee is not found
     */
    employeesDetail: (employeeId: string, params: RequestParams = {}) =>
      this.request<Employee, void | ProblemDetails>({
        path: `/Employees/${employeeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  importTimeOff = {
    /**
     * No description
     *
     * @tags ImportTimeOff
     * @name ImportTimeOffCreate
     * @summary Import time off from third party program to Hailey.
     * @request POST:/ImportTimeOff
     * @secure
     * @response `201` `void` Created
     * @response `400` `ProblemDetails` Bad Request
     * @response `default` `ProblemDetails` Error
     */
    importTimeOffCreate: (data: ImportTimeOffRequestModel, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/ImportTimeOff`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  jobAd = {
    /**
     * No description
     *
     * @tags JobAd
     * @name JobAdList
     * @summary Get all job ads for your company.
     * @request GET:/JobAd
     * @secure
     * @response `200` `(JobAd)[]` If job ads are found
     * @response `400` `ProblemDetails` Bad Request
     * @response `401` `ProblemDetails` If unauthorized
     * @response `404` `ProblemDetails` If job ads are not found
     */
    jobAdList: (params: RequestParams = {}) =>
      this.request<JobAd[], ProblemDetails>({
        path: `/JobAd`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  publicEmployeeList = {
    /**
     * No description
     *
     * @tags PublicEmployeeList
     * @name PublicEmployeeListDetail
     * @summary Get a publicly available list of Employees in your Company for use in third party applications, e.g. your web site. The data included is basic and a setting on your Company has to be enabled for the list to be available.
     * @request GET:/PublicEmployeeList/{companyId}
     * @secure
     * @response `200` `(PublicEmployeeListItem)[]` If employees are found
     * @response `403` `ProblemDetails` If the company has not activated the public employee list
     */
    publicEmployeeListDetail: (companyId: string, params: RequestParams = {}) =>
      this.request<PublicEmployeeListItem[], ProblemDetails>({
        path: `/PublicEmployeeList/${companyId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  salaries = {
    /**
     * No description
     *
     * @tags Salaries
     * @name SalariesList
     * @summary Get all salaries on your employees.
     * @request GET:/Salaries
     * @secure
     * @response `200` `(Salary)[]` If salaries are found
     * @response `401` `ProblemDetails` If unauthorized
     * @response `404` `void` If salaries are not found
     */
    salariesList: (params: RequestParams = {}) =>
      this.request<Salary[], ProblemDetails | void>({
        path: `/Salaries`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  salary = {
    /**
     * No description
     *
     * @tags Salary
     * @name SalaryList
     * @summary Get salary data for specific SalaryId
     * @request GET:/Salary
     * @secure
     * @response `200` `Salary` If Salary is found
     * @response `401` `ProblemDetails` If unauthorized
     * @response `404` `void` If salary is not found
     */
    salaryList: (
      query?: {
        /** @format uuid */
        salaryId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Salary, ProblemDetails | void>({
        path: `/Salary`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  timeOff = {
    /**
     * No description
     *
     * @tags TimeOff
     * @name TimeOffList
     * @summary Get time off for your company. Will filter by from and/or to date if added in the query parameters.
     * @request GET:/TimeOff
     * @secure
     * @response `200` `TimeOff` If the time off is found
     * @response `401` `void` If unauthorized
     * @response `404` `ProblemDetails` If time off is not found
     */
    timeOffList: (
      query?: {
        /** @format date */
        from?: string;
        /** @format date */
        to?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TimeOff, void | ProblemDetails>({
        path: `/TimeOff`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
