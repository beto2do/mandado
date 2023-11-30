import Link from 'next/link'

export default function Home() {

  return (
    <main className="flex justify-between">
      <ul className="p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6">
        <li className="group cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md dark:bg-slate-700 dark:ring-0 dark:highlight-white/10 dark:hover:bg-blue-500">
          <Link href="/shop">
            <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
            <div>
              <dt className="sr-only">Title</dt>
              <dd className="group-hover:text-white font-semibold text-slate-900">
                Shop Grocery
              </dd>
            </div>
            </dl>
          </Link>
        </li>
      </ul>
    </main>
  )
}
