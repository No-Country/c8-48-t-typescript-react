import React, { createContext, useContext } from 'react';

type SessionContext = {
  children: any;
};

const SessionContext = createContext<SessionContext | null>(null);

const SessionProvider: React.FC<any> = ({ children }) => {
  return <SessionContext.Provider>{children}</SessionContext.Provider>;
};

export { SessionProvider };
