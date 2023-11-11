// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function TodoListSkeleton() {
    return (
        <div
            className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4 lg:col-span-4`}
        >
            <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
            <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
                <div className="bg-white px-6">
                    <CardSkeleton />
                    <div className="flex items-center pb-2 pt-6">
                        <div className="h-5 w-5 rounded-full bg-gray-200" />
                        <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
                    </div>
                </div>
            </div>
        </div>
    );
}

