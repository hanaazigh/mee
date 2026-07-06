# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createProfile, getProfile, addProject, updateSkill } from '@dataconnect/generated';


// Operation CreateProfile:  For variables, look at type CreateProfileVars in ../index.d.ts
const { data } = await CreateProfile(dataConnect, createProfileVars);

// Operation GetProfile: 
const { data } = await GetProfile(dataConnect);

// Operation AddProject:  For variables, look at type AddProjectVars in ../index.d.ts
const { data } = await AddProject(dataConnect, addProjectVars);

// Operation UpdateSkill:  For variables, look at type UpdateSkillVars in ../index.d.ts
const { data } = await UpdateSkill(dataConnect, updateSkillVars);


```