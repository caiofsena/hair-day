import { Outlet } from "react-router";
import MainContent from "../core/main-content";

export default function LayoutMain() {
  return (
    <MainContent>
      <Outlet />
    </MainContent>
  )
}