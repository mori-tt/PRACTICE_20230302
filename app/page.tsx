import { SampleModal } from "@/components/SampleModal/SampleModal";
import { SampleModal2 } from "@/components/SampleModal2/SampleModal2";
import SampleTabs from "@/components/SampleTabs/SampleTabs";
import SampleSidemenu from "@/components/SampleSidemenu/SampleSidemenu";
import SampleTimeline from "@/components/SampleTimeline/SampleTimeline";

export default function Home() {
  return (
    <div>
      <SampleModal />
      <SampleModal2 />
      <SampleTabs />
      <SampleSidemenu />
      <SampleTimeline />
    </div>
  );
}
