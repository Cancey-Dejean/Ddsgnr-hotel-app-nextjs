"use client";
import PageWrapper from "@/components/PageWrapper";
import Rooms from "@/components/Rooms";
import StartVacation from "@/components/StartVacation";

export default function Home() {
  return (
    <PageWrapper>
      <StartVacation />
      <Rooms />
    </PageWrapper>
  );
}
