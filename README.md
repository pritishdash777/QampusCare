# QampusCare

QampusCare is a frontend\-first Faculty Lifecycle Management System designed to help universities manage faculty recruitment, multilingual onboarding, advisor workload balancing, scheduling approvals, performance feedback, and administrative accountability\.

The project addresses a common challenge in universities serving large student populations: newly recruited faculty may be onboarded inconsistently, while student advisors may receive unequal workloads\. These conditions can result in delayed and inconsistent academic support\.

> **Current status:** QampusCare is an interactive frontend prototype powered by synthetic demonstration data. A complete production backend, database, authentication system, and live institutional integrations have not yet been implemented.

## Problem Statement

Universities expanding digital\-first learning, particularly in Tier 2 and Tier 3 cities, need a better way to:

- Recruit and track adjunct faculty\.
- Standardise faculty onboarding\.
- Deliver onboarding in multiple languages\.
- Monitor advisor capacity and utilisation\.
- Balance student\-advisor workloads\.
- Review and approve proposed scheduling changes\.
- Connect faculty performance with student outcomes\.
- Maintain transparent administrative audit records\.

## Proposed Solution

QampusCare combines the complete faculty\-management journey into one interface:

**Recruit → Onboard → Verify Readiness → Assign Workload → Approve → Evaluate → Improve**

The application contains dedicated interfaces for university administrators, department heads, faculty members, and student advisors\.

## Features

### Executive Dashboard

- Active faculty, advisor, and student statistics
- Advisor\-to\-student ratio
- Onboarding completion and faculty\-retention indicators
- Department workload distribution
- Risk and attention indicators
- Recent activity feed

### Faculty Recruitment

- Candidate pipeline with Applied, Screening, Interview, Documents, and Offered stages
- Candidate\-role match indicators
- Add synthetic candidates through a form
- Advance candidates between stages
- Search and department\-level visibility

The displayed match percentages are synthetic\. In a production system, they would be calculated from configurable university criteria such as qualifications, teaching experience, subject expertise, required skills, and document readiness\.

### Multilingual Faculty Onboarding

- English, Hindi, and Odia language options
- Profile and document verification
- University\-policy modules
- Academic\-integrity training
- Learning\-platform orientation
- Department orientation
- Assessment and teaching\-readiness review
- Approve, request\-changes, and reminder actions

### Advisor Workload Management

- Current student count and recommended capacity
- Advisor utilisation percentage
- Response\-time and at\-risk\-student indicators
- Available, Balanced, Near Capacity, and Overloaded statuses
- Department workload visualisation

### Smart Scheduling

- Department and academic\-term selection
- Maximum advisor\-to\-student ratio
- Protected student\-advisor relationships
- Expertise\-based assignment preference
- Simulated proposal\-generation progress
- Before\-and\-after workload comparison
- Human\-readable reassignment explanations
- Approval and application workflow

The current scheduling results are deterministic synthetic outputs used to demonstrate the intended workflow\. They are not produced by a live optimisation engine\.

### Performance and Feedback

- Student\-satisfaction indicators
- Advisor response\-time trends
- Student engagement
- Course completion
- Faculty retention
- Workload\-adjusted performance insights
- Constructive improvement recommendations

### Activity and Audit Logs

- Timestamped actions
- Responsible actor
- Affected record
- Department
- Severity and status
- Automatically generated demonstration events

### Persistent Judge Demo

- Important changes are stored in browser `localStorage`\.
- Recruitment, onboarding, scheduling, and logs survive a browser refresh\.
- Settings includes a **Reset Judge Demo** action\.

## Technology Stack

- React
- TypeScript
- Vinext/Vite
- Tailwind CSS
- Shadcn UI components
- Recharts
- Lucide icons
- Browser `localStorage` for demonstration persistence

## Current Architecture

```text
React + TypeScript frontend
            ↓
Local state and demonstration services
            ↓
Synthetic data + browser localStorage
```

## Planned Production Architecture

```text
React frontend
       ↓
FastAPI REST API
       ↓
Scheduling and workflow services
       ↓
PostgreSQL database
```

The planned backend would provide:

- Authentication and role\-based access control
- Persistent faculty, candidate, advisor, and student records
- Document storage and verification
- Onboarding progress and assessments
- Scheduling calculations
- Approval transactions
- Performance measurements
- Secure audit events
- Notification services

## Backend Limitation

The repository currently does **not** contain a complete backend implementation\.

Therefore:

- The application does not use real university records\.
- Statistics and people shown in the interface are synthetic\.
- Candidate\-match values are illustrative\.
- Scheduling results are simulated\.
- Data is stored locally in the browser rather than in a central database\.
- Authentication and authorisation are not production\-ready\.
- Actions are not synchronised between different devices or users\.

This limitation is intentional for the present frontend\-first prototype\. The interface establishes the user roles, workflows, states, measurements, and data contracts required for a future backend implementation\.

## Installation

### Prerequisites

- Node\.js 22 or later
- npm
- Git

### Run Locally

```bash
git clone YOUR_REPOSITORY_URL
cd QampusCare-Frontend
npm install
npm run dev
```

Open the local URL displayed in the terminal, normally:

```text
http://localhost:3000
```

or:

```text
http://localhost:5173
```

## Recommended Demonstration

1. Open the Executive Overview and identify workload or onboarding warnings\.
2. Open Recruitment and add or advance a candidate\.
3. Open Onboarding and select **A\. Rao**\.
4. Approve teaching readiness\.
5. Open Advisor Workload and identify overloaded advisors\.
6. Generate a balanced scheduling proposal\.
7. Review the before\-and\-after statistics and explanations\.
8. Approve and apply the proposal\.
9. Open Activity Logs and show the newly created events\.
10. Return to Overview and show the updated metrics\.
11. Use **Settings → Reset Judge Demo** before repeating the presentation\.

## Measurement Framework

QampusCare is designed to measure:

- Advisor\-to\-student ratio
- Faculty\-onboarding completion
- Faculty retention
- Advisor workload balance
- Response time
- Student satisfaction
- Student engagement
- Course completion

All measurements in the current version are synthetic demonstration values\.

## Future Development(To DOs)

- Build a FastAPI backend\.
- Add PostgreSQL persistence\.
- Implement secure authentication and role\-based permissions\.
- Replace simulated scheduling with a classical constraint solver\.
- Add document upload and verification\.
- Add email and notification services\.
- Define validated formulas for candidate matching and performance indicators\.
- Connect authorised university systems\.
- Add automated tests and deployment workflows\.

## Ethical and Privacy Note

QampusCare does not currently contain real faculty or student data\. All names, records, workload values, performance indicators, and activity events are fictional and intended exclusively for demonstration\.

Performance indicators should support mentoring, recognition, training, and workload correction\. They should not be used as unexplained automatic grounds for disciplinary decisions\.

## Project Status

|Component                  |Status|
|---------------------------|------------
|Responsive frontend       |Implemented |

|Recruitment interface     |Implemented |

|Onboarding interface     |Implemented 

|Workload dashboard       |Implemented |

|Scheduling workflow UI     |Implemented |

|Performance dashboard     |Implemented |

|Activity logs             |Implemented  |

|Synthetic demo interactions|Implemented  

|Browser persistence       |Implemented  |

|Production backend      |Not implemented|

|Central database        |Not implemented|

|Real scheduling engine  |Not implemented|

|Production authentication|Notimplemented|

## Conclusion

QampusCare demonstrates how a university can bring recruitment, onboarding, workload management, approvals, performance feedback, and accountability into one connected faculty lifecycle\.

The current version should be evaluated as an interactive high\-fidelity frontend prototype and workflow blueprint, not as a completed production system

## Future Quantum-Computing Scope

In future versions, QampusCare may experimentally explore quantum and quantum-inspired optimization for large-scale advisor allocation and timetable scheduling. Complex university scheduling can involve thousands of possible assignments and constraints, including advisor capacity, expertise, availability, departmental requirements, and protected student relationships. We plan to formulate these challenges as optimization problems and compare approaches such as QUBO and QAOA with established classical constraint solvers. Quantum methods will only be adopted if testing demonstrates a measurable advantage in solution quality, runtime, or scalability. Quantum computing is not implemented in the current prototype.

