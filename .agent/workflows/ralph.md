---
description: An autonomous iterative development loop named Ralph for tackling complex coding tasks
---

1. [Task Analysis] Read the user's `<task>` and break it down into a step-by-step implementation plan.
2. [Execution] For each step in the plan:
    a. Implement the necessary code changes.
    b. Verify the changes (e.g., run related tests or build the project).
    c. If verification fails, analyze the error and fix it. Retry up to 3 times before asking for user guidance.
3. [Final Verification] Run a full project build or test suite to ensure no regressions.
4. [Completion] Report the final status to the user.
