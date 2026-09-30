import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-content">
        <Header />

        <main className="page">
          {children}
        </main>
      </div>
    </div>
  );
}
