# Testing POC Results & Assessment

## Background

- **Testing PoC started in December** due to initial COE test methods, tools, process and costs
    - Historical manual approach
    - Siloed process and testers, incompatible with Aurora integrated, agile pods
    - High tool and resource costs
- **PoC was incomplete** due to environments not being ready and continuous deployment not in place
    - We were able to exercise an improved process, and partially exercise the target toolset
- **Both teams realized using AI in steps would yield better than automation**
- **Concurrently, Integrated Development Environments** (e.g., Cursor, Windsurf) have made enormous strides just since December
- **Aurora has employed Cursor since February** and is implementing this into the target Aurora development environment

## Aurora Development Process and Steps

1. **Market, Industry and Product research**

    - Define product and user journey objectives

2. **Start with a high level user journey, do user journey requirements**

    - Key tasks the user wants to accomplish
    - User journey process diagram (high level), user experience document

3. **Establish technical architecture and approach**

    - Document in systems diagrams and tech stack

4. **Construct the tasks that further defines the journey including designing the screens**

    - Deliverables would be Jira epics and tasks

5. **Design and specify the screens and their data elements**

    - Deliverables would be wire frames, high level requirements, process diagram, data elements/dependencies

6. **Define final screens design and process flow**

    - Figma diagram
    - Detailed user journey process flows, user stories, requirements

7. **Compile the user stories and acceptance criteria**

    - Create Jira stories/tasks and add further documentation in Confluence
    - Detailed and final user stories plus acceptance criteria

8. **Define the test scripts using the process flows and test cases**

    - Smoke tests and integration tests

9. **Construct the code and define/write the test cases**

    - Code is written within our tech stack in our integrated dev environment (stored in the mono repo)
    - Test cases for the screen components are written in Storybook
    - Test cases for front end integration and end-to-end testing are written in Playwright
    - Back-end test cases are written in Vitest

10. **Code is peer reviewed using PR checklist**

    - Initial automated review (Cursor)
    - Senior engineer review

11. **Code is processed through the automated pipeline checks and deployed to Test**

    - Checks include unit tests, static security tests, dependency resolution
    - Execute negative and edge case tests
    - Execute the smoke tests and integration tests
    - Execute device, load, and performance tests if needed

12. **Execute UAT testing**

13. **Ensure production ready with PR checklist**

    - Release notes, operational documentation and training
    - Instrumentation, health dashboard, agent health checks in place

14. **Prepare and deploy release**
    - To cloud environment
    - To app stores
    - Validation
    - Hypercare

## Aurora Development Process (Visual Overview)

### Aurora Development Process I

1. **Product Research**

    - _Inputs:_ Business Objectives, Competitive Analysis, Customer Needs
    - _Outputs:_ Product Definition, Objectives, User Journey Objectives

2. **User Journey Definition**

    - _Inputs:_ Current & Target State Analysis, Customer Needs
    - _Outputs:_ User Journey Requirements, Outcomes, High level user journeys, High level process diagram

3. **Establish technical architecture**

    - _Inputs:_ Current & Target Architectures, System Needs
    - _Outputs:_ High level Systems design, Systems diagram, Tech stack definition

4. **Define project workstreams and tasks**

    - _Inputs:_ Aurora Methodology, Project Objectives, User Journeys
    - _Outputs:_ Jira epics and stories/tasks

5. **Specify screens & data elements**

    - _Inputs:_ Design System, User Journeys
    - _Outputs:_ Wireframe screen designs, Data Elements, Detailed process diagram, User Stories

6. **Define final screen designs and flow**

    - _Inputs:_ Wireframes & Initial process diagram/req.
    - _Outputs:_ Figma screen designs, Detailed user stories, APIs, data elements, Detailed process diagram, Acceptance criteria

7. **Define test cases and test scripts**
    - _Inputs:_ User stories, process flow, acceptance criteria
    - _Outputs:_ Defined Test cases and scripts

### Aurora Development Process II

8. **Write code and the test cases**

    - _Inputs:_ Figma designs, User stories, detailed process flows, defined test cases & scripts
    - _Outputs:_ Unit code, Unit Test cases (Storybook), End-End Test cases (Playwright), Backend test cases (Vitest)

9. **Peer Review**

    - _Inputs:_ Code & Test cases
    - _Outputs:_ Static security test, AI review (Cursor), Senior engineer review

10. **Pipeline checks and Automated deployment to Test**

    - _Inputs:_ Peer reviewed code
    - _Outputs:_ Unit, static security, dependency resolution

11. **Execute Integration tests**

    - _Inputs:_ Test Deployed code
    - _Outputs:_ Negative & edge cases test, Smoke and Integration tests, Load and performance tests

12. **UAT**

    - _Inputs:_ Tested & Integrated Code
    - _Outputs:_ UAT

13. **Production Ready**

    - _Inputs:_ User Accepted Release
    - _Outputs:_ Release notes, Instrumentation & dashboards, Operational documentation & Training, Approved release/changes

14. **Deploy Release**
    - _Inputs:_ Production Ready Release
    - _Outputs:_ Validation, Hypercare, CPI

## Executive Summary

- Very rough start due to environment limitations and access issues
- Most issues eventually resolved
- Still do not have automated deployment to a test environment (should be in place in a few weeks)
- Integrated test cycle not able to be performed

## Survey Results by Stakeholder Group

### Wipro Testing Team Assessment

**Self-Assessment Ratings: 8-9**

- Felt fully integrated, participative, and knowledgeable
- Claimed 'full understanding' of the process
- Defects raised were meaningful
- Identified issues with dev team

### FH Test Leaders Assessment

**POC Assessment Ratings: 6-9**

- Noted slow beginning but thought everything improved over time
- Felt defects were relevant and valuable
- Identified issues with the dev team
- Minimal communications with pod leads

### Aurora Pod Leads Assessment (Business and Engineering)

**POC Assessment Ratings: 2-5** _(Exception: 9 rating for cards created)_

#### Key Concerns:

- **Integration Issues**: Felt strongly that the test team was NOT integrated nor knowledgeable
- **Productivity Impact**: Made entire team less productive
- **Defect Quality**: Most defects were deemed very minor or invalid (did not match journey)
- **Missed Defects**: Testing notably missed significant defects

## Detailed Analysis

### Pod Perspective: Waterfall Approach in Agile Environment

**Process Issues:**

- The testing process is still siloed and waterfall-like
- Testers work as an independent group doing serial tasks with handoffs to and from the pod
- Expected a waterfall approach rather than agile integration

**Alignment Problems:**

- Testers focus and work on their 'tickets' not on the pod's Jira 'tasks'
- Huge misalignment of 'success' metrics
- Testers found some minor defects (most dev team already aware of)
- Many areas where the dev team had yet to work on were tested prematurely

**Integration Challenges:**

- Testers operated as a separate group, not an integrated part of the team
- Testers do not have the knowledge (or apparent desire) to understand the pod's mission and work
- Results in lots of questions (repeated) or tests that do not make sense
- Test outputs were not shared or discussed in detail - only defect reports sent
- Lots of unproductive dialogue, too much handholding due to lack of understanding

**Knowledge Gaps:**

- Testers not involved and do not try to understand what is happening on the development side
- Constantly ask what is done and available versus participating and tracking
- **Critical Impact**: Multiple significant defects were NOT uncovered by testers due to their lack of understanding

### Tester Perspective: Performative Integration

**Tester Claims:**

- Participated and were 'integrated' in the process
- Achieved necessary knowledge levels
- Felt the dev team was not responsive enough
- The toolset was effective though could not be fully utilized due to environments
- Test reports were useful

## Toolset Analysis

### Current POC Toolset

**Selected for Testers:**

- **Katalon**: Primary testing tool for the testing team

### Target Development Toolset

**Developer-Focused Tools:**

1. **Storybook** (Screen, Unit Testing)

    - Used for rapid, effective unit and interaction testing
    - Tests screen, component, and multi-component code
    - Enables developers to perform testing

2. **Playwright** (Unit, Integration, E2E Testing)

    - Used for single app end-to-end and cross-system testing
    - Enables developers to script or inspect
    - Supports comprehensive testing scenarios

3. **ViTest** (Backend Testing)
    - Used for backend testing
    - Integrates well with development workflow

**Tool Compatibility:**

- All tools work well with the React stack
- Enable developers to do the bulk of scripting (versus testers)
- Better alignment with development processes

## Emerging AI Solutions

### Initial Cursor (AI IDE) Results

**Achievements:**

- High quality, nearly fully AI-generated test scripts and test cases
- Utilizes deep Aurora context including:
    - Figma designs and process diagrams
    - Existing code base
    - Test principles and examples
    - User stories and acceptance criteria
    - Domain-specific knowledge

**Potential Impact:**

- Significant automation of test creation
- Better integration with development workflow
- Contextual understanding of business requirements

## Overall Assessment

### Current POC Limitations

1. **Process Misalignment:**

    - POC process does not adequately support Aurora's full agile, integrated approach
    - Maintains waterfall-like separation between testing and development

2. **Toolset Gaps:**

    - POC toolset does not cover complete testing needs
    - Not easily leveraged by developers
    - Creates silos rather than integration

3. **Integration Failures:**
    - Testing team operates independently rather than as integrated team members
    - Knowledge gaps prevent effective collaboration
    - Communication breakdowns lead to inefficient processes

### Recommendations for Future Approach

1. **Shift to Developer-Led Testing:**

    - Implement Storybook, Playwright, and ViTest as primary tools
    - Enable developers to create and maintain tests
    - Reduce dependency on separate testing teams

2. **AI-Enhanced Testing:**

    - Leverage Cursor AI IDE capabilities for test generation
    - Utilize deep contextual knowledge for better test coverage
    - Automate repetitive testing tasks

3. **True Agile Integration:**
    - Embed testing activities within development sprints
    - Eliminate handoff-based testing processes
    - Focus on collaborative quality assurance

## Conclusion

The current POC approach, while providing some value, fundamentally conflicts with Aurora's agile development methodology. The future lies in AI-enhanced, developer-integrated testing that eliminates silos and improves both efficiency and effectiveness.
