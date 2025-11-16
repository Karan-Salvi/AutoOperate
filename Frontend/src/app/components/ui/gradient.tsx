import React from "react";

const Grad = ({ children, id }: { children: React.ReactNode; id?: string }) => {
  return (
    <div>
      <div className=" w-full relative bg-white dark:bg-neutral-900" id={id}>
        {/* X Organizations Black Background with Top Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #ffffff",
          }}
        />
        {children}
        {/* Your Content/Components */}
      </div>
    </div>
  );
};

export default Grad;
