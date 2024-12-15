import { useEffect, useState } from "react";

function TimeBox() {
    const [timeBox, setTimeBox] = useState("");

  // effects
  useEffect(() => {
    displayTime();
  }, []);

  const displayTime = (timeZone) => {
    setInterval(() => {
      const now = new Date();
      const localTime = now.toLocaleString("en-US", {
        timeZone,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      setTimeBox(localTime);
    }, 1000);
  };
  return (
    <div className="flex w-full flex-col justify-between">
    <p className="text-left opacity-60">Tehran, Iran</p>
    <div className="text-sm font-semibold">{timeBox}</div>
  </div>
  )
}

export default TimeBox
