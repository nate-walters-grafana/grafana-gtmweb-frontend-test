import Image from "next/image";
import Link from 'next/link'

export default function Test() {
  return (
    <div className="text-slate-900 w-full max-w-7xl mx-auto p-6">
      <div>
        <h1 className="text-4xl">Test instructions</h1>
        <p className="mb-6">Recreate the following design and add it below the image. The necessary data should be retrieved from the <span className="font-bold">`http://localhost:3000/api/bands`</span> endpoint.</p>
        <Image src="/blog-post-list.png" alt="Grafana Logo" width="2588" height="1466" />
      </div>
      <div className="pt-6 border-t-2 mt-6">
        <h2 className="text-2xl">References and documentation</h2>
        <p>No. We don't expect you to know everything. Here are some references that might help you:</p>
        <ol className="mt-4">
          <li><a className="text-blue-600" href="https://nextjs.org/docs">Next.js</a> - learn about Next.js features and API.</li>
          <li><a className="text-blue-600" href="https://react.dev/reference/react">React</a> - React reference documentation.</li>
          <li><a className="text-blue-600" href="https://tailwindcss.com/docs">Tailwind CSS</a> - learn about Tailwind CSS features and API.</li>
        </ol>
      </div>
    </div>
  )
}