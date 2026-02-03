# Configuring Business Processes

## Workflows

- A workflow can be understood as an arrow starting from one node in a directed graph and walking through the business step by step.

- By writing workflows, business can be expressed more clearly.

- Call `d.startWorkflow('Workflow Name')` to start a new workflow, which also marks the end of the previous workflow (if any).

- Any `node-to-node chained calls` written under a workflow will be sequentially recorded and eventually reflected in the Web animation.

  - Yes, just chain them together. It's disarmingly simple.

- Chained calls can be broken, corresponding to forking in the process, as shown in the example below.

### Workflow Example

```ts
const Administrator = d.actor(/* ... */)
const UserPreCheckService = d.service(/* ... */)
const UserCreated = d.event(/* ... */)
const UserCreationFailed = d.event(/* ... */)
const CreateUserFacadeCmd = d.facadeCmd(/* ... */)
const CreateUserCommand = d.command(/* ... */)
const UserAgg = d.agg(/* ... */)

const CreateUserWorkflow = d.startWorkflow('Create User Workflow')
Administrator
  .facadeCmd(CreateUserFacadeCmd)
  .service(UserPreCheckService)
  .command(CreateUserCommand)
  .agg(UserAgg)
UserAgg.event(UserCreated)
UserAgg.event(UserCreationFailed)
```

::: details ~~You can also declare nodes while chaining~~ (not recommended)

- Has flaws

- Hard to read, hard to manage, easy to write complex parameter blocks

```ts
const CreateUserWorkflow = d.startWorkflow('Create User Workflow')
Administrator
  .command(
    'CreateUserCommand',
    [
      /* ... */
    ],
    'Create user command'
  )
  .agg(
    'UserAgg',
    [
      /* ... */
    ],
    'User aggregate'
  )
  .event(
    'UserCreatedEvent',
    [
      /* ... */
    ],
    'User created'
  )
// Can no longer call `UserAgg.event(UserCreationFailed)` here because `UserAgg` is anonymous
```

:::

## User Stories

::: warning Experimental Feature
I realized workflows don't align well with the user-side "business" perspective.

Designing user stories is an attempt to help technicians align with user thinking. Criticism is welcome.
:::

- A user story consists of several **closely related** or **logically sequential** workflows.

- User stories aren't necessary at the beginning, but if a system evolves to be complex enough, well-maintained user stories can speed up technicians' understanding of the business.

- User story granularity evolves gradually with system complexity.

### User Story Example

```ts
const ShiborBasedPersonalLoanWorkflow =
  d.startWorkflow('Shibor-based personal loan workflow')
// ...
const GeneralPersonalLoanWorkflow = d.startWorkflow('General personal loan workflow')
// ...
const ReverseRepoWorkflow = d.startWorkflow('Reverse repo workflow')
// ...
const BankInterbankLendingWorkflow = d.startWorkflow('Bank interbank lending workflow')
// ...
const PersonalLoanContractRepricingWorkflow = d.startWorkflow('Foreign currency collection and settlement workflow')
// ...

d.defineUserStory('As a noble user, I want to apply for a Shibor-based personal loan', [
  BankInterbankLendingWorkflow,
  PersonalLoanContractRepricingWorkflow,
  ShiborBasedPersonalLoanWorkflow,
])
d.defineUserStory('As a noble user, I want to apply for a general personal loan', [
  PersonalLoanContractRepricingWorkflow,
  GeneralPersonalLoanWorkflow,
])
```

Now we've made up some workflows.

Assume a new maintainer joins with insufficient financial expertise. They can quickly understand "business with cause and effect" by reading user stories. They can also see what makes "Shibor-based personal loans" "different."

If they had to look at various node definitions and policies, the workload would be much greater and harder.
