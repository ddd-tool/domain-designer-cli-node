# Design Philosophy

Domain design through TypeScript code, aiming to be a DDD modeling productivity tool.

Following these principles:

- Keep code and views with similar expressiveness

- Use TypeScript code checking to ensure completeness

- Explore how to express more `WHY` during design, rather than just `HOW` like traditional diagrams (workflows + user stories)

## Low Learning Cost

- Complexity must be encapsulated within the library, keeping usage difficulty at JavaScript level (no need to consider types)

- Progressive programming - some APIs may seem "unnecessary" (like "strongly-typed requirements"), but that's because current requirements are simple. Don't learn them until needed, but as requirements grow, you'll naturally use them. This process is progressive.

## Unidirectional Workflow

- For feature additions, follow the "unidirectional workflow" principle: design first → then implementation → ...
  Reject "implementation affecting design"

  - If a feature can save 10 minutes for each project's implementation, consider doing it

  - If a feature invades the next step's responsibilities, don't do it

  - Example: Code generation can be done, and it should start and end with reducing burden: the goal is to write less boilerplate code during initial implementation. If the boilerplate isn't quite right, we can manually adjust it first, then gradually optimize the feature without increasing domain modeling burden.
    This code generation feature will never be "low-code", because that would require domain design complexity and completeness to match the target programming language. The biggest problem is: when implementation code needs adjustments (not domain design issues), we'd have to worry about changing the design - essentially rework. The time wasted would far exceed the time saved on boilerplate. A good tool should help users smoothly proceed through their proper workflow, not create obstacles.
