import React from "react";

export default function AboutPage() {
  return (
    <div className="my-32 flex items-center justify-center flex-col">
      <h1 className="text-center text-4xl font-bold ">About Me</h1>
      <div className="mt-16 max-w-2xl mx-auto">
        <ol className="relative border-l border-gray-300 space-y-10">
          {/* Education */}
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 top-1.5" />
            <h2 className="text-2xl font-semibold mb-1">Education</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>24 years old developer/software engineer living in Rwanda</li>
              <li>Studying Computer Science - Software Engineering major</li>
              <li>Started Year 1: June 2023</li>
              <li>Expected Graduation: December 2027</li>
            </ul>
          </li>

          {/* Hobbies */}
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-[#FFCBA7] rounded-full -left-1.5 top-1.5" />
            <h3 className="text-xl font-semibold mb-1">Other Hobbies</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Music production - I am a music producer</li>
              <li>
                Building a beat-selling platform called
                <strong> “Dirty Bucket”</strong>
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
