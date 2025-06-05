Digital Engineering at First Horizon

Welcome to the Digital Engineering department—our new, fast-moving group dedicated to building modern, cloud-native solutions within First Horizon. This guide outlines our engineering principles, team structures, processes, and best practices to ensure we deliver high-quality software efficiently and sustainably.

Table of Contents:
1. Introduction & Guiding Principles
2. Team Organization & Roles
3. Software Development Lifecycle (SDLC) Overview
4. User Story Best Practices
5. Quality & Testing (Placeholder)
6. DevOps, CI/CD, & Cloud-Native Practices (Placeholder)
7. Security & Compliance (Fintech Focus)
8. Documentation & Knowledge Sharing

1. Introduction & Guiding Principles

Who We Are:
- We are the Digital Engineering department, created to accelerate First Horizon’s journey into modern software development and digital transformation.
- We aim to deliver value quickly by focusing on agility, engineering excellence, and close collaboration with business and product stakeholders.

Our Culture & Mindset:
- Product-Centric: We build solutions that solve real customer needs rather than just shipping code or features.
- Cross-Functional Collaboration: We break silos by ensuring that each team (pod) has the necessary skill sets—engineering, product, UX, data, and QA—to deliver end-to-end.
- Agile & Lean: We value iterative delivery, continuous feedback loops, and incremental improvements.
- Cloud-First (Agnostic): While we embrace cloud-native technologies, we remain cloud-agnostic at this stage to keep our deployment options open.
- DevOps & Automation: We automate everything from testing to deployment pipelines, enabling frequent and reliable releases.
- Security & Compliance: As a FinTech solution provider, we integrate security and regulatory compliance from day one in every step.

Our Approach to AI:
- We are highly aware of the rapid developments in AI and see it as a fundamental part of our business value creation.
- From day one, we strive to leverage AI for testing automation, predictive analytics, and beyond to enhance efficiency and deliver innovative solutions.
- We understand that some may feel uncertain about AI, but we prioritize responsible AI practices, viewing AI as a collaborative tool that augments rather than replaces human expertise.

2. Team Organization & Roles

2.1 Pod-Based Structure:
- We organize our development groups into pods—small teams of 3 to 5 members, each including at least one lead engineer.
- Each pod is cross-functional and typically includes:
  - Lead Engineer (or Tech Lead): Oversees technical strategy, mentors engineers, and ensures architectural alignment.
  - Software Engineers: Responsible for writing and reviewing code, implementing features, and ensuring maintainability.
  - QA/Tester (TBC): Ensures quality through testing, automation, and feedback loops (final approach still under discussion).
  - Product Manager/Owner: Prioritizes the backlog, clarifies requirements, and aligns the team with business goals.
  - Design/UX (Optional): Crafts user interfaces and ensures customer-centric design.

Why Pods?
- Pods enable fast, autonomous decision-making.
- They give each team end-to-end ownership of a product or domain slice.
- They promote a “T-shaped” skillset approach (broad knowledge with deep specialization).

2.2 Cross-Functional Responsibilities:
- Architecture & Vision: Each pod collaborates with architecture and leadership to align on a consistent enterprise strategy.
- Shared Understanding: Team members maintain a baseline awareness of product vision, architecture, and compliance needs.

2.3 Collaboration & Communication:
- Daily Stand-Ups: Quick synchronization on ongoing tasks, blockers, and next steps.
- Refinement & Planning: Pods refine user stories together to ensure shared ownership of quality and deliverables.
- Retrospectives: Continuous improvement of processes and collaboration.
- Engineering All-Hands (Monthly): A joint meeting for all engineers to stay aligned, share updates, and foster a fun, collaborative culture.

3. Software Development Lifecycle (SDLC) Overview

Our SDLC is agile in nature, emphasizing short feedback loops and iterative delivery. A typical sprint or iteration includes:

1. Backlog & Requirements:
   - The Product Manager/Owner refines the backlog and prioritizes user stories.
   - The team clarifies acceptance criteria, technical approaches, and dependencies.
2. Sprint Planning:
   - The pod commits to a set of stories.
   - Tasks are estimated (in story points or hours) and assigned collaboratively.
3. Development & Implementation:
   - Engineers implement user stories with a focus on clean code, best practices, and test coverage.
   - Frequent code reviews promote quality and knowledge sharing.
4. Testing & Quality Control:
   - Automated tests run continuously in the pipeline (unit, integration, and/or end-to-end).
   - QA (where applicable) focuses on exploratory testing, regression checks, and acceptance tests.
5. Deployment & Release:
   - Code is merged only after passing automated checks and reviews.
   - Automated pipelines deploy the code to staging and, upon approval, to production.
6. Monitoring & Feedback:
   - Post-deployment monitoring (logs, metrics, and user feedback) is conducted.
   - Retrospectives feed insights back into the backlog for continuous improvement.

4. User Story Best Practices

4.1 Why User Stories?
- User stories help capture requirements from the user’s perspective, ensuring we focus on delivering real value.

4.2 User Story Format:
- "As a [type of user], I want [action] so that [benefit]."
- Keep stories short, clear, and focused on user outcomes.

4.3 Acceptance Criteria (AC):
- Define clear conditions that must be met for a story to be considered complete.
- Example criteria:
  1. "User is prompted to…"
  2. "Input validations handle…"
  3. "On successful submission, system…"

4.4 INVEST Principles:
- Independent, Negotiable, Valuable, Estimable, Small, and Testable.
- Aim for stories that are small, valuable, and testable within a single sprint.

4.5 Best Practices:
- If a story is too big or complex, split it into smaller stories.
- Collaborate on defining acceptance criteria—engineers, QA, product, and design should work together.
- Keep purely technical tasks (e.g., "Implement data storage configuration") separate from user-facing stories, but link them in the sprint backlog for transparency.

5. Quality & Testing (Placeholder)

We plan to detail our Quality & Testing strategy in a dedicated document. Key topics to be covered include:
- Test Automation & Coverage Standards
- Manual vs. Automated Testing Approaches
- Security & Performance Testing
- Compliance Testing & Regulatory Checks

(PLACEHOLDER FOR DOCUMENT)

6. DevOps, CI/CD, & Cloud-Native Practices (Placeholder)

We are committed to DevOps principles, enabling continuous integration and delivery with a cloud-first mindset. A comprehensive overview will be provided later, covering:
- Branching & Pull Request Practices
- Automated Pipelines & Deployment
- Infrastructure as Code (agnostic to specific cloud providers)
- Observability, Monitoring, & Alerting

(PLACEHOLDER FOR DOCUMENT)

7. Security & Compliance (Fintech Focus)

7.1 Secure by Design:
- Begin with threat modeling for each product or feature.
- Follow secure coding practices, including input validation and encryption.

7.2 Regulatory Compliance:
- As a financial institution, compliance with banking regulations, KYC/AML, and data privacy is paramount.
- Integrate compliance checks into every stage of development.

7.3 Access Controls & Data Protection:
- Utilize Role-Based Access Control (RBAC).
- Store secrets in a secure vault or encrypted storage.
- Conduct periodic risk assessments and penetration tests.

8. Documentation & Knowledge Sharing

8.1 Central Reference (Confluence/SharePoint):
- This "Digital Engineering Approach" site serves as our single source of truth for processes and guidelines.
- Each pod can maintain its own area for domain-specific documents, diagrams, etc.

8.2 Technical Documentation:
- Code-Level: Each repository should include a thorough README and inline documentation as needed.
- Architecture Decision Records (ADRs): Capture major decisions, trade-offs, and rationale.

8.3 Onboarding & Continuous Learning:
- Provide onboarding guides for new hires covering tools, environments, development setup, and domain knowledge.
- Host Engineering All-Hands (Monthly) to share updates, best practices, and new technology insights, ensuring everyone stays informed and engaged.