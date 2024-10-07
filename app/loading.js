import Spinner from "./_components/Spinner"
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="w-full h-[500px]  flex justify-center items-center " > 
          <Spinner  />
        </div>
    )
}