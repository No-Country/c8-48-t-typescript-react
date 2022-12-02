import React, { createContext, ReactElement } from 'react';

type DBUser = {
  email?: string;
  fullName?: string;
};

type SessionContextType = {
  user?: DBUser;
  setUser?: (user: DBUser) => void;
};

const defaultUser = {
  email: '',
  fullName: '',
};

const SessionContext = createContext<SessionContextType | null>(null);

const SessionProvider: React.FC<{ children: ReactElement }> = ({ children }) => {
  const [user, setUser] = React.useState<DBUser | undefined>(defaultUser);

  return <SessionContext.Provider value={{ user, setUser }}>{children}</SessionContext.Provider>;
};

export { SessionProvider };
