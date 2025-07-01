export default function Page() {
  return (
    <div className="bg-black">
      <div className="max-w-3xl mx-auto p-8 text-white text-gray-900 rounded-lg shadow ">
        <h1 className="text-3xl font-bold mb-4">Project Overview</h1>
        <p className="mb-2">
          This project was created as part of a 100-day code challenge.
        </p>
        <p className="mb-6">
          <strong>Project ID:</strong> 3
          <br />
          <strong>Completion Date:</strong> 5/30/2025
          <br />
          <strong>Days Remaining</strong> 39
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Learning Areas</h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Testing endpoints with Postman</li>
          <li>HTTP GET Method</li>
          <li>React&apos;s Rendering lifecycle</li>
          <li>App router in Next.js </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Stack</h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>React</li>
          <li>Next.js</li>
          <li>Vercel</li>
          <li>Tailwind CSS</li>
          <li>ShadCN</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Personal Statement</h2>
        <p className="mb-6">
          After spending weeks entangled in a large-scale API chaining project,
          I decided to take a step back and refocus on core HTTP
          methods—specifically GET and POST. This project serves as a reset
          point to solidify backend fundamentals before returning to the more
          complex build.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Challenges Faced</h2>
        <p className="mb-4">
          This was my first experience parsing JSON responses. By dissecting a
          few API calls in Postman, I learned how to accurately extract the data
          I needed. Understanding{" "}
          <code className="bg-gray-100 px-1 rounded text-black">
            which objects
          </code>{" "}
          to access and how to navigate the structure was initially confusing.
        </p>
        <p>
          Additionally, this project forced me to trace each phase of the React
          rendering lifecycle. It revealed how crucial timing is when working
          with asynchronous data and UI rendering.
        </p>
      </div>
    </div>
  );
}
