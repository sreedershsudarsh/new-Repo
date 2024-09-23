import { LoginBox } from "../Login-Box";
import Dashboard from "../Pages/Dashboard";
import { Crewing } from "./Crewing";
import { MasterData } from "./Master data";
import { Pms } from "./Pms";
import { Technical } from "./Technical";

interface RouteType {
  id: number;
  path: string;
  element: JSX.Element;
}
export const routes: RouteType[] = [
  { id: 1, path: "/", element: <LoginBox /> },
  { id: 2, path: "dashboard", element: <Dashboard /> },
  { id: 2, path: "Crewing", element: <Crewing /> },
  { id: 1, path: "MasterData", element: <MasterData /> },
  { id: 2, path: "Technical", element: <Technical /> },
  { id: 2, path: "PMS", element: <Pms /> },
];
