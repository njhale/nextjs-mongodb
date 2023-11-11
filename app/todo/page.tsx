import TodoList from '@/app/ui/todo/todo-list';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { TodoListSkeleton } from '@/app/ui/skeletons';
import { listTodos } from '@/app/lib/data';

export default async function Page() {
    const todos = await listTodos()
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<TodoListSkeleton />}>
                    <TodoList />
                </Suspense>
            </div>
        </main>
    );
}
