export interface Context {
  projectName: string;
  projectDomen: string;
  lastCommit: string;
  fromBranch: string;
  initialUserName: string;
  initialName: string;
  initialEmail: string;
  userName: string;
  name: string;
  email: string;

  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setProjectName: React.Dispatch<React.SetStateAction<string>>;
  setProjectDomen: React.Dispatch<React.SetStateAction<string>>;
  setLastCommit: React.Dispatch<React.SetStateAction<string>>;
  setFromBranch: React.Dispatch<React.SetStateAction<string>>;
}

export interface Card {
  projectName: string;
  projectDomen: string;
  lastCommit: string;
  fromBranch: string;
}
