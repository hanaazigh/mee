# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetProfile*](#getprofile)
- [**Mutations**](#mutations)
  - [*CreateProfile*](#createprofile)
  - [*AddProject*](#addproject)
  - [*UpdateSkill*](#updateskill)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetProfile
You can execute the `GetProfile` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getProfile(options?: ExecuteQueryOptions): QueryPromise<GetProfileData, undefined>;

interface GetProfileRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetProfileData, undefined>;
}
export const getProfileRef: GetProfileRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getProfile(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetProfileData, undefined>;

interface GetProfileRef {
  ...
  (dc: DataConnect): QueryRef<GetProfileData, undefined>;
}
export const getProfileRef: GetProfileRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getProfileRef:
```typescript
const name = getProfileRef.operationName;
console.log(name);
```

### Variables
The `GetProfile` query has no variables.
### Return Type
Recall that executing the `GetProfile` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetProfileData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetProfileData {
  profile?: {
    displayName: string;
    bio: string;
    email: string;
    projects_on_profile: ({
      title: string;
      description: string;
      projectTags_on_project: ({
        tagName: string;
      })[];
    })[];
  };
}
```
### Using `GetProfile`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getProfile } from '@dataconnect/generated';


// Call the `getProfile()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getProfile();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getProfile(dataConnect);

console.log(data.profile);

// Or, you can use the `Promise` API.
getProfile().then((response) => {
  const data = response.data;
  console.log(data.profile);
});
```

### Using `GetProfile`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getProfileRef } from '@dataconnect/generated';


// Call the `getProfileRef()` function to get a reference to the query.
const ref = getProfileRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getProfileRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.profile);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.profile);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateProfile
You can execute the `CreateProfile` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createProfile(vars: CreateProfileVariables): MutationPromise<CreateProfileData, CreateProfileVariables>;

interface CreateProfileRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProfileVariables): MutationRef<CreateProfileData, CreateProfileVariables>;
}
export const createProfileRef: CreateProfileRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createProfile(dc: DataConnect, vars: CreateProfileVariables): MutationPromise<CreateProfileData, CreateProfileVariables>;

interface CreateProfileRef {
  ...
  (dc: DataConnect, vars: CreateProfileVariables): MutationRef<CreateProfileData, CreateProfileVariables>;
}
export const createProfileRef: CreateProfileRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createProfileRef:
```typescript
const name = createProfileRef.operationName;
console.log(name);
```

### Variables
The `CreateProfile` mutation requires an argument of type `CreateProfileVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateProfileVariables {
  displayName: string;
  bio: string;
  email: string;
}
```
### Return Type
Recall that executing the `CreateProfile` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateProfileData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateProfileData {
  profile_insert: Profile_Key;
}
```
### Using `CreateProfile`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createProfile, CreateProfileVariables } from '@dataconnect/generated';

// The `CreateProfile` mutation requires an argument of type `CreateProfileVariables`:
const createProfileVars: CreateProfileVariables = {
  displayName: ..., 
  bio: ..., 
  email: ..., 
};

// Call the `createProfile()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createProfile(createProfileVars);
// Variables can be defined inline as well.
const { data } = await createProfile({ displayName: ..., bio: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createProfile(dataConnect, createProfileVars);

console.log(data.profile_insert);

// Or, you can use the `Promise` API.
createProfile(createProfileVars).then((response) => {
  const data = response.data;
  console.log(data.profile_insert);
});
```

### Using `CreateProfile`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createProfileRef, CreateProfileVariables } from '@dataconnect/generated';

// The `CreateProfile` mutation requires an argument of type `CreateProfileVariables`:
const createProfileVars: CreateProfileVariables = {
  displayName: ..., 
  bio: ..., 
  email: ..., 
};

// Call the `createProfileRef()` function to get a reference to the mutation.
const ref = createProfileRef(createProfileVars);
// Variables can be defined inline as well.
const ref = createProfileRef({ displayName: ..., bio: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createProfileRef(dataConnect, createProfileVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.profile_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.profile_insert);
});
```

## AddProject
You can execute the `AddProject` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addProject(vars: AddProjectVariables): MutationPromise<AddProjectData, AddProjectVariables>;

interface AddProjectRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddProjectVariables): MutationRef<AddProjectData, AddProjectVariables>;
}
export const addProjectRef: AddProjectRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addProject(dc: DataConnect, vars: AddProjectVariables): MutationPromise<AddProjectData, AddProjectVariables>;

interface AddProjectRef {
  ...
  (dc: DataConnect, vars: AddProjectVariables): MutationRef<AddProjectData, AddProjectVariables>;
}
export const addProjectRef: AddProjectRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addProjectRef:
```typescript
const name = addProjectRef.operationName;
console.log(name);
```

### Variables
The `AddProject` mutation requires an argument of type `AddProjectVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddProjectVariables {
  title: string;
  description: string;
  displayOrder: number;
}
```
### Return Type
Recall that executing the `AddProject` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddProjectData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddProjectData {
  project_insert: Project_Key;
}
```
### Using `AddProject`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addProject, AddProjectVariables } from '@dataconnect/generated';

// The `AddProject` mutation requires an argument of type `AddProjectVariables`:
const addProjectVars: AddProjectVariables = {
  title: ..., 
  description: ..., 
  displayOrder: ..., 
};

// Call the `addProject()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addProject(addProjectVars);
// Variables can be defined inline as well.
const { data } = await addProject({ title: ..., description: ..., displayOrder: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addProject(dataConnect, addProjectVars);

console.log(data.project_insert);

// Or, you can use the `Promise` API.
addProject(addProjectVars).then((response) => {
  const data = response.data;
  console.log(data.project_insert);
});
```

### Using `AddProject`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addProjectRef, AddProjectVariables } from '@dataconnect/generated';

// The `AddProject` mutation requires an argument of type `AddProjectVariables`:
const addProjectVars: AddProjectVariables = {
  title: ..., 
  description: ..., 
  displayOrder: ..., 
};

// Call the `addProjectRef()` function to get a reference to the mutation.
const ref = addProjectRef(addProjectVars);
// Variables can be defined inline as well.
const ref = addProjectRef({ title: ..., description: ..., displayOrder: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addProjectRef(dataConnect, addProjectVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.project_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.project_insert);
});
```

## UpdateSkill
You can execute the `UpdateSkill` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateSkill(vars: UpdateSkillVariables): MutationPromise<UpdateSkillData, UpdateSkillVariables>;

interface UpdateSkillRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateSkillVariables): MutationRef<UpdateSkillData, UpdateSkillVariables>;
}
export const updateSkillRef: UpdateSkillRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateSkill(dc: DataConnect, vars: UpdateSkillVariables): MutationPromise<UpdateSkillData, UpdateSkillVariables>;

interface UpdateSkillRef {
  ...
  (dc: DataConnect, vars: UpdateSkillVariables): MutationRef<UpdateSkillData, UpdateSkillVariables>;
}
export const updateSkillRef: UpdateSkillRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateSkillRef:
```typescript
const name = updateSkillRef.operationName;
console.log(name);
```

### Variables
The `UpdateSkill` mutation requires an argument of type `UpdateSkillVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateSkillVariables {
  id: UUIDString;
  proficiency: number;
}
```
### Return Type
Recall that executing the `UpdateSkill` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateSkillData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateSkillData {
  skill_update?: Skill_Key | null;
}
```
### Using `UpdateSkill`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateSkill, UpdateSkillVariables } from '@dataconnect/generated';

// The `UpdateSkill` mutation requires an argument of type `UpdateSkillVariables`:
const updateSkillVars: UpdateSkillVariables = {
  id: ..., 
  proficiency: ..., 
};

// Call the `updateSkill()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateSkill(updateSkillVars);
// Variables can be defined inline as well.
const { data } = await updateSkill({ id: ..., proficiency: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateSkill(dataConnect, updateSkillVars);

console.log(data.skill_update);

// Or, you can use the `Promise` API.
updateSkill(updateSkillVars).then((response) => {
  const data = response.data;
  console.log(data.skill_update);
});
```

### Using `UpdateSkill`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateSkillRef, UpdateSkillVariables } from '@dataconnect/generated';

// The `UpdateSkill` mutation requires an argument of type `UpdateSkillVariables`:
const updateSkillVars: UpdateSkillVariables = {
  id: ..., 
  proficiency: ..., 
};

// Call the `updateSkillRef()` function to get a reference to the mutation.
const ref = updateSkillRef(updateSkillVars);
// Variables can be defined inline as well.
const ref = updateSkillRef({ id: ..., proficiency: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateSkillRef(dataConnect, updateSkillVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.skill_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.skill_update);
});
```

