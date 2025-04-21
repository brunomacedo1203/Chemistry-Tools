import Header from "@/components/Header";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import SideArea from "./SideArea";
import React from "react";

interface PageProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function Page(props: PageProps) {
  const year = new Date().getFullYear();
  return (
    <div className=" flex h-screen bg-zinc-100">
      <SideArea title="Menu" color="#f3f4f6" children={null} />
      <div className=" flex flex-col flex-1">
        <Header
          title={props.title}
          subtitle={props.subtitle}
          className="h-16 bg-zinc-100"
        />
        <Content title={props.title}>{props.children}</Content>
        <Footer
          leftText="Email Contact"
          rightText={`Developed in ${year}`}
        />
      </div>
    </div>
  );
}
