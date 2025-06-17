import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">About Me</h1>
      <div className="text-center mt-16 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold">Education:</h2>
          <p>
            I am a 24 years old developer/software engineer currently living in
            Rwanda Studying computer science - software engineering major
          </p>
          <p>
            Started year 1 in - June,2023 Expected to graduate - December, 2027
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Other hobbies:</h3>
          <p>
            Making music - since i am a music producer And thus am also building
            a beat selling platform called “Dirty Bucket”
          </p>
        </div>
      </div>
    </div>
  );
}
