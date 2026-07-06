import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddProjectData {
  project_insert: Project_Key;
}

export interface AddProjectVariables {
  title: string;
  description: string;
  displayOrder: number;
}

export interface CreateProfileData {
  profile_insert: Profile_Key;
}

export interface CreateProfileVariables {
  displayName: string;
  bio: string;
  email: string;
}

export interface Experience_Key {
  id: UUIDString;
  __typename?: 'Experience_Key';
}

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

export interface Profile_Key {
  id: UUIDString;
  __typename?: 'Profile_Key';
}

export interface ProjectTag_Key {
  id: UUIDString;
  __typename?: 'ProjectTag_Key';
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface Skill_Key {
  id: UUIDString;
  __typename?: 'Skill_Key';
}

export interface UpdateSkillData {
  skill_update?: Skill_Key | null;
}

export interface UpdateSkillVariables {
  id: UUIDString;
  proficiency: number;
}

interface CreateProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProfileVariables): MutationRef<CreateProfileData, CreateProfileVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateProfileVariables): MutationRef<CreateProfileData, CreateProfileVariables>;
  operationName: string;
}
export const createProfileRef: CreateProfileRef;

export function createProfile(vars: CreateProfileVariables): MutationPromise<CreateProfileData, CreateProfileVariables>;
export function createProfile(dc: DataConnect, vars: CreateProfileVariables): MutationPromise<CreateProfileData, CreateProfileVariables>;

interface GetProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetProfileData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetProfileData, undefined>;
  operationName: string;
}
export const getProfileRef: GetProfileRef;

export function getProfile(options?: ExecuteQueryOptions): QueryPromise<GetProfileData, undefined>;
export function getProfile(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetProfileData, undefined>;

interface AddProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddProjectVariables): MutationRef<AddProjectData, AddProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddProjectVariables): MutationRef<AddProjectData, AddProjectVariables>;
  operationName: string;
}
export const addProjectRef: AddProjectRef;

export function addProject(vars: AddProjectVariables): MutationPromise<AddProjectData, AddProjectVariables>;
export function addProject(dc: DataConnect, vars: AddProjectVariables): MutationPromise<AddProjectData, AddProjectVariables>;

interface UpdateSkillRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateSkillVariables): MutationRef<UpdateSkillData, UpdateSkillVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateSkillVariables): MutationRef<UpdateSkillData, UpdateSkillVariables>;
  operationName: string;
}
export const updateSkillRef: UpdateSkillRef;

export function updateSkill(vars: UpdateSkillVariables): MutationPromise<UpdateSkillData, UpdateSkillVariables>;
export function updateSkill(dc: DataConnect, vars: UpdateSkillVariables): MutationPromise<UpdateSkillData, UpdateSkillVariables>;

