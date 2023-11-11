import { lusitana } from '@/app/ui/fonts';
import { Todo } from '@prisma/client';
import { listTodos } from "@/app/lib/data";
import clsx from "clsx";

export default async function TodoList() {
  const todos = await listTodos()

  if (!todos || todos.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recent Todos
      </h2>
      {/* NOTE: comment in this code when you get to this point in the course */}

      { <div className="bg-white px-6">
          {todos.map((todo, i) => {
            return (
              <div
                key={todo.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {todo.complete}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {todo.name}
                    </p>
                  </div>
                </div>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  {todo.content}
                </p>
              </div>
            );
          })}
        </div> }

    </div>
  );
}
