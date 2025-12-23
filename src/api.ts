/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
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
  /** @format uuid */
  departmentId?: string | null;
  /** @format uuid */
  legalEntityId?: string | null;
  /** @format uuid */
  costCenterId?: string | null;
  /** @format uuid */
  businessAreaId?: string | null;
  /** @format uuid */
  locationId?: string | null;
  /** @format uuid */
  reportsToEmployeeId?: string | null;
  teamIds?: string[] | null;
  titleIds?: string[] | null;
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

/** A BusinessArea created by the company. */
export interface BusinessArea {
  /**
   * The unique id of the BusinessArea in Hailey HR.
   * @format uuid
   */
  id?: string;
  /** The name of the BusinessArea. */
  name?: string | null;
  /**
   * EmployeeId of the Head of the BusinessArea if there is one.
   * @format uuid
   */
  headOfBusinessAreaEmployeeId?: string | null;
  /** Departments belonging to this BusinessArea. */
  departmentsInBusinessArea?: DepartmentInBusinessArea[] | null;
}

export interface CasualEmploymentVm {
  /**
   * The unique Id of the Casual Employment in Hailey HR.
   * @format uuid
   */
  employmentId?: string;
  /**
   * The start date of the Casual Employment in YYYY-MM-DD format.
   * @format date
   */
  startDate?: string;
  /**
   * The end date of the Casual Employment in YYYY-MM-DD format.
   * @format date
   */
  endDate?: string | null;
  organizationalInformation?: EmploymentOrganizationalInformation;
  /** Custom fields defined for a Company, with the data set for the Employment. */
  customFieldsData?: Record<string, JToken>;
  /** List of contracted periods within the Casual Employment. A contracted period is a period with contracted commitment of work with specific terms at a period that must be within the casual employment. */
  contractedPeriods?: ContractedPeriodVm[] | null;
  /** The Employment sequence number for the employment, auto generated or manually set. Multiple employments may have the same Employment sequence number. Note that this differs from the Employment number for the Employee. */
  employmentSequenceNumber?: string | null;
  /** The status of the employment. Can be WillStart, Active or Ended. */
  status?: string | null;
}

export interface Certificate {
  /** @format uuid */
  certificationId?: string;
  /** @format uuid */
  certificateId?: string;
  /** @format uuid */
  employeeId?: string;
  issueDate?: string | null;
  expirationDate?: string | null;
  isVerified?: boolean;
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
  /** The Company's Business Areas, if any. */
  businessAreas?: BusinessArea[] | null;
  /** The Company's Cost Centers, if any. */
  costCenters?: CostCenter[] | null;
}

/** A certification created by the company. */
export interface CompanyCertification {
  /**
   * The unique id for the certification in Hailey HR.
   * @format uuid
   */
  id?: string;
  /** The name of the certification. */
  name?: string | null;
  /** The description of the certification. */
  description?: string | null;
  /** List of title ids that the certification is required for. */
  titles?: string[] | null;
  /** List of team ids that the certification is required for. */
  teams?: string[] | null;
}

/** An education created by the company. */
export interface CompanyEducation {
  /**
   * The unique id for the education in Hailey HR.
   * @format uuid
   */
  educationId?: string;
  /** The title of the education. */
  title?: string | null;
  /** The description of the education. */
  description?: string | null;
}

/** A salary type created by the company. */
export interface CompanySalaryType {
  /**
   * The unique id for the salary type in Hailey HR.
   * @format uuid
   */
  salaryTypeId?: string;
  /** The name of the salary type. */
  name?: string | null;
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

export interface ContractedPeriodVm {
  /**
   * Start date of the contracted period within the casual employment.
   * @format date
   */
  startDate?: string;
  /**
   * End date of the contracted period within the casual employment.
   * @format date
   */
  endDate?: string;
  /** Type of contracted period, e.g. Temporary substitute. */
  contractedPeriodType?: string | null;
  /**
   * EmployeeId of the substituted employee if contracted period type is Temporary substitute.
   * @format uuid
   */
  substitutingForEmployeeId?: string | null;
  /**
   * Unique id of contracted period.
   * @format uuid
   */
  contractedPeriodId?: string;
  /** Bool indicating if the contract for the contracted period is signed by required parties. */
  isSigned?: boolean;
  /**
   * Id of the salary relevant for this contracted period.
   * @format uuid
   */
  salaryId?: string;
  /**
   * Id of the reason for substitution if the contracted period type is Temporary substitute.
   * @format uuid
   */
  substituteReasonId?: string | null;
}

/** A CostCenter created by the company. */
export interface CostCenter {
  /**
   * The unique id of the CostCenter in Hailey HR.
   * @format uuid
   */
  id?: string;
  /** The name of the CostCenter. */
  name?: string | null;
  /** The code of the CostCenter. */
  code?: string | null;
}

export interface CreateEducationRequestModel {
  /** @minLength 1 */
  educationName: string;
  description?: string | null;
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
  /**
   * EmployeeId of the Head of the Department if there is one.
   * @format uuid
   */
  headOfDepartmentEmployeeId?: string | null;
  /**
   * Belonging to department id if there is any, i.e. the department this department belongs to
   * @format uuid
   */
  belongingToDepartmentId?: string | null;
}

/** Department In Business Area */
export interface DepartmentInBusinessArea {
  /**
   * DepartmentId for the Department in the Business Area.
   * @format uuid
   */
  departmentId?: string;
  /**
   * Head of department for the Department in the Business Area.
   * @format uuid
   */
  headOfDepartmentInBusinessArea?: string | null;
}

export interface Education {
  /** @format uuid */
  educationId?: string;
  title?: string | null;
  description?: string | null;
}

/** Represents a request to register an education session in Hailey HR. */
export interface EducationSessionRequestModel {
  /**
   * Required: The unique id for the education in Hailey HR.
   * @format uuid
   */
  educationId?: string;
  /**
   * The date of the education session.
   * @format date
   */
  date?: string;
  /** A list of employeeIds of the participating employees. */
  participants?: string[] | null;
  /**
   * The total length of the education session in minutes.
   * @format int32
   */
  totalDurationInMinutes?: number | null;
}

/** A session of a specific education */
export interface EducationSessionVm {
  /**
   * The id of the specific education defined within the company
   * @format uuid
   */
  educationId?: string;
  /**
   * The id of this specific session
   * @format uuid
   */
  sessionId?: string;
  /**
   * The date of this session
   * @format date
   */
  date?: string;
  /** The employeeIds of the session participants */
  employeeIds?: string[] | null;
  /**
   * the duration of the session in minutes
   * @format int32
   */
  durationInMinutes?: number | null;
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
  /** The employee's Employment Status. Can be "BeingHired", "WillJoin", "InService" "Leaving" or "HasLeft". */
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
  /** The Three sixty reviews for the Employee, if any. */
  threeSixtyReviews?: ThreeSixtyReview[] | null;
  /** The Salaries for the Employee, if any. */
  salaries?: Salary[] | null;
  organizationalBelonging?: EmploymentOrganizationalInformation;
  /** Custom fields defined in a Company, with the data set for the Employee. */
  customFieldsData?: Record<string, JToken>;
}

export interface EmployeeDocumentsFolderVm {
  /** @format uuid */
  folderId?: string;
  name?: string | null;
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
   * Id of the Cost Center the Employee belongs to in this Employment.
   * @format uuid
   */
  costCenterId?: string | null;
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
   * The last day an employee is expected to work but not necessarily the same date as last day of employment.
   * @format date
   */
  lastWorkingDay?: string | null;
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
   * @format double
   */
  vacationDays?: number | null;
  /**
   * ID of the Employee the current Employee is substituting for, if any. Calculated from the employee's effectual employment.
   * @format uuid
   */
  substitutingForEmployeeId?: string | null;
  /**
   * ID of the substitute reason. Can be a reason defined for the company, or null if none was selected.
   * @format uuid
   */
  sustituteReasonId?: string | null;
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
   * The date the Employee joined the Company, calculated from the start date(s) och the employments.
   * @format date
   */
  dateOfJoining?: string | null;
  /**
   * The date the Employment ends for the Employee, if any, calculated from the end date(s) och the employments.
   * @format date
   */
  lastDayOfEmployment?: string | null;
  /** A list of all Employments for the employee. Includes current, past and future Employments. */
  employments?: EmploymentVm[] | null;
  /** A list of all Casual Employments for the employee. Includes current, past and future Casual Employments. Note that Casual employments has a different business logic from Employments, for details see our knowledge base. */
  casualEmployments?: CasualEmploymentVm[] | null;
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
  /**
   * Id of the Cost Center the Employee belongs to in this Employment.
   * @format uuid
   */
  costCenterId?: string | null;
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
   * @format double
   */
  vacationDays?: number | null;
  /**
   * Id of the Employee the current Employee is substituting for, if any.
   * @format uuid
   */
  substitutingForEmployeeId?: string | null;
  /**
   * ID of the substitute reason. Can be a reason defined for the company, or null if none was selected.
   * @format uuid
   */
  substituteReasonId?: string | null;
}

export interface EmploymentVm {
  /**
   * The unique Id of the Employment in Hailey HR.
   * @format uuid
   */
  employmentId?: string;
  /**
   * A number representing the order of priority for this Employment among all Employments. This is e.g. useful for determining which Employment that should take priority when two employments have start and end date intervals that overlap. Highest priority is nr 1.
   * @format int32
   */
  priority?: number;
  /**
   * The start date of the Employment in YYYY-MM-DD format.
   * @format date
   */
  startDate?: string;
  /**
   * The end date of the Employment in YYYY-MM-DD format.
   * @format date
   */
  endDate?: string | null;
  /**
   * The last working day of this employment, not necessarily the same date as last day of employment.
   * @format date
   */
  lastWorkingDay?: string | null;
  organizationalInformation?: EmploymentOrganizationalInformation;
  terms?: EmploymentTerms;
  /** Custom fields defined for a Company, with the data set for the Employment. */
  customFieldsData?: Record<string, JToken>;
  /** The Employment sequence number for the employment, auto generated or manually set. Multiple employments may have the same Employment sequence number. Note that this differs from the Employment number for the Employee. */
  employmentSequenceNumber?: string | null;
  /** The status of the employment. Can be "WillStart", "Active" or "Ended". */
  status?: string | null;
}

export interface EndBreakRequestModel {
  /** @format uuid */
  employeeId?: string;
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
  /**
   * A double ranging from 0 to 1, where 1 represents a scope of 100%
   * @format double
   * @min 0
   * @max 1
   */
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
  /** A link to the published Job ad on the Career Page, if any. */
  linkToJobAdOnCareerPage?: string | null;
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
  /** The address/street of the Location. */
  address?: string | null;
  /** The city of the Location. */
  city?: string | null;
  /** The postal code of the Location. */
  postalCode?: string | null;
  /** The country of the Location. */
  country?: string | null;
  /** The phone number of the Location. */
  phone?: string | null;
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

export interface StartBreakRequestModel {
  /** @format uuid */
  employeeId?: string;
}

/** A question and an answer for a three sixty review. */
export interface ThreeSixtyQuestion {
  answerBySelf?: string | null;
  peerAnswers?: string[] | null;
  answerByManager?: string | null;
  reporteeAnswers?: string[] | null;
  answerWhen?: string[] | null;
  customOptionsForQuestion?: string[] | null;
  typeOfAnswer?: string | null;
  question?: string | null;
  /** @format uuid */
  questionId?: string | null;
}

/** A three sixty review for the Employee. */
export interface ThreeSixtyReview {
  /** @format uuid */
  feedbackId?: string;
  date?: string | null;
  deadline?: string | null;
  /** @format uuid */
  hostEmployeeId?: string | null;
  notes?: string | null;
  sections?: ThreeSixtySection[] | null;
  status?: string | null;
  title?: string | null;
  hasHostSignedOff?: boolean;
  hasEmployeeSignedOff?: boolean;
  hasAnswersFromSelf?: boolean;
  hasAnswersFromPeer?: boolean;
  hasAnswersFromManager?: boolean;
  hasAnswersFromReportee?: boolean;
}

/** A group of questions with a title and an instruction for the host. */
export interface ThreeSixtySection {
  instructionsForHost?: string | null;
  sectionTitle?: string | null;
  questions?: ThreeSixtyQuestion[] | null;
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

export interface UpdateEducationRequestModel {
  educationName?: string | null;
  description?: string | null;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
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

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
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

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
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
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
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

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
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
 * ### Company educations
 * This endpoint retrieves all education records within your company.
 *
 * ### Company certifications
 * This endpoint retrieves all certification records within your company.
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
 * ### Start break
 * Use this endpoint to start break for a certain employee who is clocked in.
 *
 * ### End break
 * Use this endpoint to end break for a certain employee who is clocked in.
 *
 * ### Job ad data
 * Use this endpoint to fetch all job ads for your company. "PublishDateTime" will indicate weather the job ad is published or not. It is required to have the rights to view and/or edit recruitments.
 *
 * ### Educations
 * Handle educations for your company. Use GET to fetch all educations in your company.
 *
 * ### Educations session
 * In this endpoint, you will find all educations sessions held and the employees that participated in each session in addition to when and for how long.
 *
 * ### Certificates
 * In this endpoint, you will find a list of all certificates, including references to the holders, as well as the validity dates and status.
 *
 * ### EmployeeDocuments
 * Handles folders and documents for your company and employees.
 *
 * - **GET** /EmployeeDocuments/Folders
 *   Fetch all folders in the company.
 *   - **Access:** Controlled per folder. User needs **Specific Employee Access**: View, Edit, or Upload to see the folder.
 *
 * - **POST** /EmployeeDocuments/{employeeId}?folderId={folderId}
 *   Upload a document for an employee.
 *   - `folderId` (optional): Specify a folder; omit or null to upload to the root folder.
 *   - **Supported file types:** `.jpg, .jpeg, .png, .pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx`
 *   - **Maximum file size:** 30 MB
 *   - **Access:** Controlled per folder. User needs **Specific Employee Access**: Edit or Upload to upload a document.
 *
 * ## Webhooks
 * Companies have the option to configure webhooks in order to get notifications when data changes. Webhooks are sent when company data is modified or when a single employee is changed. The webhook URI is configured in the integrations section in Hailey.
 *
 * Webhooks are sent using the POST method with a JSON in the body containing either the modified companyId or employeeId.
 *
 * <a href = "https://docs.haileyhr.com/guide-for-api">More info on the API</a>
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  break = {
    /**
     * No description
     *
     * @tags Break
     * @name StartBreakCreate
     * @summary Start break for employee who is clocked in. The time is shown in local time based on the time zone in company settings.
     * @request POST:/Break/StartBreak
     * @secure
     * @response `200` `void` If start break is successful
     * @response `400` `ProblemDetails` If bad request
     * @response `401` `ProblemDetails` If unauthorized
     */
    startBreakCreate: (
      data: StartBreakRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<void, ProblemDetails>({
        path: `/Break/StartBreak`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Break
     * @name EndBreakCreate
     * @summary End break for employee who is clocked in. The time is shown in local time based on the time zone in company settings.
     * @request POST:/Break/EndBreak
     * @secure
     * @response `200` `void` If end break is successful
     * @response `400` `ProblemDetails` If bad request
     * @response `401` `ProblemDetails` If unauthorized
     */
    endBreakCreate: (data: EndBreakRequestModel, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/Break/EndBreak`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  certificates = {
    /**
     * No description
     *
     * @tags Certificates
     * @name CertificatesList
     * @summary Get all certificates.
     * @request GET:/Certificates
     * @secure
     * @response `200` `(Certificate)[]` If call is successfull
     * @response `401` `void` If unauthorized
     */
    certificatesList: (params: RequestParams = {}) =>
      this.request<Certificate[], void>({
        path: `/Certificates`,
        method: "GET",
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

    /**
     * No description
     *
     * @tags Company
     * @name EducationsList
     * @summary This endpoint has been deprecated and will be removed, use /Educations instead.
     * @request GET:/Company/Educations
     * @deprecated
     * @secure
     * @response `200` `(CompanyEducation)[]` If call is successful
     * @response `401` `ProblemDetails` If unauthorized
     * @response `404` `ProblemDetails` If resource is not found
     */
    educationsList: (params: RequestParams = {}) =>
      this.request<CompanyEducation[], ProblemDetails>({
        path: `/Company/Educations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Company
     * @name CertificationsList
     * @summary Get all certifications in your company.
     * @request GET:/Company/Certifications
     * @secure
     * @response `200` `(CompanyCertification)[]` If call is successful
     * @response `401` `ProblemDetails` If unauthorized
     * @response `404` `ProblemDetails` If resource is not found
     */
    certificationsList: (params: RequestParams = {}) =>
      this.request<CompanyCertification[], ProblemDetails>({
        path: `/Company/Certifications`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Company
     * @name SalaryTypesList
     * @summary Get salary types in your company.
     * @request GET:/Company/SalaryTypes
     * @secure
     * @response `200` `(CompanySalaryType)[]` If call is successful
     * @response `401` `ProblemDetails` If unauthorized
     * @response `403` `ProblemDetails` If forbidden
     */
    salaryTypesList: (params: RequestParams = {}) =>
      this.request<CompanySalaryType[], ProblemDetails>({
        path: `/Company/SalaryTypes`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  educations = {
    /**
     * No description
     *
     * @tags Educations
     * @name EducationsList
     * @summary Get educations in your company.
     * @request GET:/Educations
     * @secure
     * @response `200` `(Education)[]` If educations are found
     * @response `401` `ProblemDetails` If unauthorized
     * @response `403` `ProblemDetails` If user is missing required rights
     * @response `404` `ProblemDetails` If no educations were found
     */
    educationsList: (params: RequestParams = {}) =>
      this.request<Education[], ProblemDetails>({
        path: `/Educations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Educations
     * @name EducationsCreate
     * @summary Create an education in your company. Returns the id of the created education.
     * @request POST:/Educations
     * @secure
     * @response `200` `string` If education were added
     * @response `401` `ProblemDetails` If unauthorized
     * @response `403` `ProblemDetails` If user is missing required rights
     */
    educationsCreate: (
      data: CreateEducationRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<string, ProblemDetails>({
        path: `/Educations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Educations
     * @name EducationsUpdate
     * @summary Update an education in your company.
     * @request PUT:/Educations/{educationId}
     * @secure
     * @response `200` `void` If education were updated
     * @response `401` `ProblemDetails` If unauthorized
     * @response `403` `ProblemDetails` If user is missing required rights
     */
    educationsUpdate: (
      educationId: string,
      data: UpdateEducationRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<void, ProblemDetails>({
        path: `/Educations/${educationId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Educations
     * @name EducationsDelete
     * @summary Delete an education in your company.
     * @request DELETE:/Educations/{educationId}
     * @secure
     * @response `200` `void` If education were deleted
     * @response `401` `ProblemDetails` If unauthorized
     * @response `403` `ProblemDetails` If user is missing required rights
     */
    educationsDelete: (educationId: string, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/Educations/${educationId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  educationSessions = {
    /**
     * No description
     *
     * @tags EducationSessions
     * @name EducationSessionsList
     * @summary Get education sessions.
     * @request GET:/EducationSessions
     * @secure
     * @response `200` `(EducationSessionVm)[]` If call is successful
     * @response `401` `ProblemDetails` If unauthorized
     * @response `404` `ProblemDetails` If resource is not found
     */
    educationSessionsList: (params: RequestParams = {}) =>
      this.request<EducationSessionVm[], ProblemDetails>({
        path: `/EducationSessions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EducationSessions
     * @name EducationSessionsCreate
     * @summary Add education session.
     * @request POST:/EducationSessions
     * @secure
     * @response `200` `void` If call is successful
     * @response `401` `ProblemDetails` If unauthorized
     */
    educationSessionsCreate: (
      data: EducationSessionRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<void, ProblemDetails>({
        path: `/EducationSessions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
    employeeCreate: (
      data: AddEmployeeRequestModel,
      params: RequestParams = {},
    ) =>
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
    companyEmailUpdate: (
      employeeId: string,
      data: UpdateCompanyEmailRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<void, ProblemDetails | void>({
        path: `/Employee/${employeeId}/CompanyEmail`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  employeeDocuments = {
    /**
     * No description
     *
     * @tags EmployeeDocuments
     * @name FoldersList
     * @summary Get list of folders in your company based on access.
     * @request GET:/EmployeeDocuments/Folders
     * @secure
     * @response `200` `(EmployeeDocumentsFolderVm)[]` If call is successful
     * @response `401` `ProblemDetails` If unauthorized
     */
    foldersList: (params: RequestParams = {}) =>
      this.request<EmployeeDocumentsFolderVm[], ProblemDetails>({
        path: `/EmployeeDocuments/Folders`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeDocuments
     * @name EmployeeDocumentsCreate
     * @summary Upload a document to an employee's folder.
     * @request POST:/EmployeeDocuments/{employeeId}
     * @secure
     * @response `200` `void` If document uploaded successfully.
     * @response `400` `ProblemDetails` Bad Request
     * @response `401` `ProblemDetails` If unauthorized.
     * @response `403` `ProblemDetails` If User does not have access to the folder.
     * @response `404` `ProblemDetails` If requested folder is not found
     */
    employeeDocumentsCreate: (
      employeeId: string,
      data: {
        /**
         * The file to upload. Allowed types: .jpg, .jpeg, .png, .pdf, .doc, .docx, .xls, .xlsx, .pptx, .ppt.
         * Maximum size: 30 MB.
         * @format binary
         */
        DocumentToUpload: File;
      },
      query?: {
        /**
         * Optional. The ID of the folder to place the document in. If omitted (null), the document will go to the root folder.
         * @format uuid
         */
        folderId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ProblemDetails>({
        path: `/EmployeeDocuments/${employeeId}`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
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
     * @response `401` `ProblemDetails` If unauthorized
     * @response `404` `ProblemDetails` If company or employees are not found
     */
    employeesList: (params: RequestParams = {}) =>
      this.request<EmployeeListItem[], ProblemDetails>({
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
    importTimeOffCreate: (
      data: ImportTimeOffRequestModel,
      params: RequestParams = {},
    ) =>
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
     * @response `404` `ProblemDetails` If salary is not found
     */
    salaryList: (
      query?: {
        /** @format uuid */
        salaryId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Salary, ProblemDetails>({
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
