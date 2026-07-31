"use client";

import { AppShell } from "@/components/AppShell";
import { AlertSummaryCard } from "@/components/AlertSummaryCard";
import { AssistantChat } from "@/components/AssistantChat";
import { DemoFlowNav } from "@/components/DemoFlowNav";
import { DigitalTwinViewer } from "@/components/DigitalTwinViewer";
import { demoAircraft } from "@/data/mock";

export default function AssistantPage() {
  return (
    <AppShell
      title="AI 정비 어시스턴트"
      subtitle={`${demoAircraft.tailNo} · One-Screen`}
    >
      <DemoFlowNav current="assistant" />

      <div className="grid gap-4 xl:grid-cols-12">
        <div className="xl:col-span-3">
          <AssistantChat />
        </div>
        <div className="xl:col-span-5">
          <DigitalTwinViewer />
        </div>
        <div className="xl:col-span-4">
          <AlertSummaryCard />
        </div>
      </div>
    </AppShell>
  );
}
