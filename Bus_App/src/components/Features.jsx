import React from "react";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <div className="features">
      <FeatureCard
        title="Wide Network"
        description="Choose from thousands of buses across multiple routes"
      />

      <FeatureCard
        title="Easy Booking"
        description="Book your tickets in just a few clicks with instant confirmation"
      />

      <FeatureCard
        title="Live Tracking"
        description="Track your bus in real-time and never miss your journey"
      />
    </div>
  );
}

export default Features;