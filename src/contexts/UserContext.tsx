import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface IUser {
  name: string;
  username: string;
  avatar: string;
  html_url: string;
  followers: number;
  company: string;
}

interface IIssue {
  id: number;
  url: string;
  title: string;
  body: string;
  created_at: string;
}

interface IUserContextType {
  user: IUser;
  issues: IIssue[];
  fetchIssues: (text: string) => Promise<void>;
}

export const UserContext = createContext({} as IUserContextType);

interface IUsersProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: IUsersProviderProps) {
  const [user, setUser] = useState({} as IUser);
  const [issues, setIssues] = useState([]);

  const fetchUser = useCallback(async () => {
    const response = await api.get("users/wendeljuliao");
    const data = await response.data;

    setUser({
      name: data.name,
      username: data.login,
      avatar: data["avatar_url"],
      html_url: data["html_url"],
      followers: data.followers,
      company: data.company,
    });
  }, []);

  const fetchIssues = useCallback(async (text?: string) => {
    const response = await api.get("search/issues", {
      params: {
        q: `${text ?? ""} repo:wendeljuliao/GitHub-Blog`,
      },
    });
    const data = await response.data.items;

    setIssues(data);
  }, []);

  useEffect(() => {
    fetchUser();
    fetchIssues();
  }, [fetchUser, fetchIssues]);

  return (
    <UserContext.Provider value={{ user, issues, fetchIssues }}>
      {children}
    </UserContext.Provider>
  );
}
