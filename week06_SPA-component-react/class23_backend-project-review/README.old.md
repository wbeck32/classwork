


# General Feedback on Projects

* Great to see projects where I learn from you!

* Everyone put github url(s) on canvas submission for projects
* Use more destructuring to clean up code
* Avoid models in E2E tests if not part of setup
* User
    * Be careful on `update` returning full model
    * Don't allow update of all props!
* Always use `const`, _unless_ the variable will be update (re-assigned) in which case use `let`
* Did anyone document "how-to" do env vars on Travis?
* Unit tests - no expensive resources, "pure" code
* Avoid unnecessary promise nesting