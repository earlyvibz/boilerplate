import Header from '@/components/header/header'

export default function Landing() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold">Landing Page</h1>
        <p className="text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </main>
    </div>
  )
}
